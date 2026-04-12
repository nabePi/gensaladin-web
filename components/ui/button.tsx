import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#7a1f1f] text-white hover:bg-[#5d1414]",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-[#7a1f1f]/30 bg-transparent hover:bg-[#7a1f1f]/5 text-[#7a1f1f]",
        secondary: "bg-[#b07b3a] text-white hover:bg-[#9a6a30]",
        ghost: "hover:bg-[#7a1f1f]/5 text-[#7a1f1f]",
        link: "text-[#7a1f1f] underline-offset-4 hover:underline",
        brandMaroon: "bg-gradient-to-r from-[#7a1f1f] to-[#9a2a2a] text-white border border-[#7a1f1f]/20 shadow-lg hover:from-[#651818] hover:to-[#7a1f1f] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300",
        brandGold: "bg-gradient-to-r from-[#b07b3a] to-[#d5a25a] text-white shadow-[0_0_20px_rgba(176,123,58,0.4)] hover:from-[#95652e] hover:to-[#b07b3a] hover:shadow-[0_0_30px_rgba(176,123,58,0.6)] hover:-translate-y-0.5 transition-all duration-300",
        glassLight: "border-2 border-white/50 text-white bg-white/5 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 backdrop-blur-md transition-all duration-300 shadow-sm",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
        pill: "h-12 rounded-full px-7 text-base font-bold",
        pillLg: "h-14 rounded-full px-8 text-lg font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
