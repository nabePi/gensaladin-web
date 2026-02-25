import midtransClient from 'midtrans-client'

// Initialize Midtrans Snap
const snap = new midtransClient.Snap({
  isProduction: process.env.NODE_ENV === 'production',
  serverKey: process.env.MIDTRANS_SERVER_KEY || '',
  clientKey: process.env.MIDTRANS_CLIENT_KEY || '',
})

// Initialize Core API for status checking
const core = new midtransClient.CoreApi({
  isProduction: process.env.NODE_ENV === 'production',
  serverKey: process.env.MIDTRANS_SERVER_KEY || '',
  clientKey: process.env.MIDTRANS_CLIENT_KEY || '',
})

export interface CreateTransactionParams {
  orderId: string
  amount: number
  itemName: string
  customerName: string
  customerEmail: string
  customerPhone?: string
}

export async function createTransaction({
  orderId,
  amount,
  itemName,
  customerName,
  customerEmail,
  customerPhone,
}: CreateTransactionParams) {
  if (!process.env.MIDTRANS_SERVER_KEY) {
    console.warn('MIDTRANS_SERVER_KEY not set')
    return {
      success: false,
      error: 'Payment gateway not configured',
    }
  }

  const parameter = {
    transaction_details: {
      order_id: orderId,
      gross_amount: amount,
    },
    item_details: [
      {
        id: 'donation',
        price: amount,
        quantity: 1,
        name: itemName.slice(0, 50), // Midtrans max 50 chars
      },
    ],
    customer_details: {
      first_name: customerName.slice(0, 50),
      email: customerEmail,
      phone: customerPhone || '',
    },
    callbacks: {
      finish: `${process.env.NEXT_PUBLIC_APP_URL}/donasi/sukses?order_id=${orderId}`,
      error: `${process.env.NEXT_PUBLIC_APP_URL}/donasi/gagal`,
      pending: `${process.env.NEXT_PUBLIC_APP_URL}/donasi/pending?order_id=${orderId}`,
    },
  }

  try {
    const transaction = await snap.createTransaction(parameter)
    return {
      success: true,
      token: transaction.token,
      redirectUrl: transaction.redirect_url,
    }
  } catch (error) {
    console.error('Midtrans error:', error)
    return {
      success: false,
      error: 'Failed to create transaction',
    }
  }
}

export async function getTransactionStatus(orderId: string) {
  if (!process.env.MIDTRANS_SERVER_KEY) {
    return {
      success: false,
      error: 'Payment gateway not configured',
    }
  }

  try {
    const status = await core.transaction.status(orderId)
    return {
      success: true,
      status: status.transaction_status,
      fraudStatus: status.fraud_status,
      grossAmount: status.gross_amount,
      paymentType: status.payment_type,
      transactionTime: status.transaction_time,
    }
  } catch (error) {
    console.error('Midtrans status error:', error)
    return {
      success: false,
      error: 'Failed to get transaction status',
    }
  }
}

// Map Midtrans status to our payment_status
export function mapMidtransStatus(midtransStatus: string): 'pending' | 'completed' | 'failed' | 'refunded' {
  const completedStatuses = ['capture', 'settlement']
  const pendingStatuses = ['pending', 'authorize']
  const failedStatuses = ['deny', 'expire', 'cancel']
  const refundStatuses = ['refund', 'partial_refund']

  if (completedStatuses.includes(midtransStatus)) return 'completed'
  if (pendingStatuses.includes(midtransStatus)) return 'pending'
  if (failedStatuses.includes(midtransStatus)) return 'failed'
  if (refundStatuses.includes(midtransStatus)) return 'refunded'

  return 'pending'
}

// Generate unique order ID
export function generateOrderId(): string {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 8).toUpperCase()
  return `DON-${timestamp}-${random}`
}
