# Gensaladin Web Design System

This document outlines the core design components, color palette, typography, and interactive behaviors established on the homepage and footer. Use this as a reference guide to ensure visual consistency when creating or redesigning new pages (such as `/about`, `/programs`, and `/events`).

## 1. Color Palette

The project utilizes a premium, high-contrast aesthetic characterized by deep reds (maroon) and striking golds.

| Role | Color/Class | Description |
|---|---|---|
| **Primary Base** | `bg-[#5d1414]` | Deep maroon, the main background tone for header, footer, and call-to-actions. |
| **Primary Accent** | `bg-[#7a1f1f]` | Lighter maroon used in gradients and hover states to give depth. |
| **Gold Primary** | `text-[#b07b3a]` | The primary gold color used for solid icons and premium text highlights. |
| **Gold Bright** | `text-[#f4d092]` | A brighter gold used for text gradients and hover text highlights. |
| **Neutral bg** | `bg-[#fbf7f0]` | Soft off-white, used as background for content cards (e.g., in Tiga Pilar). |
| **Text Primary** | `text-[#14110f]` | Near-black used for primary text on light backgrounds. |
| **Text Inverted**| `text-white` | Pure white text used on maroon/dark backgrounds. Often stepped down to `text-white/80` or `text-white/60` for secondary text. |

## 2. Typography

*   **Headings**: Use `font-serif` coupled with `font-bold`.
    *   *Example (Hero Title)*: `font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.2] drop-shadow-2xl`
    *   *Example (Section Title)*: `font-serif text-3xl md:text-5xl font-bold`
*   **Body Copy**: Use default sans font, typically styled with `text-lg` or `text-base` and `leading-relaxed`.
*   **Highlighted Text**: To make a word pop (like "Peradaban Berilmu" or "Learn History"), use a gold text gradient:
    ```tailwindcss
    text-transparent bg-clip-text bg-gradient-to-r from-[#b07b3a] to-[#f4d092] drop-shadow-lg
    ```

## 3. UI Patterns & Elements

### Gradients and Depth
*   **Overlays**: Layer backgrounds for depth:
    ```tailwindcss
    bg-gradient-to-b from-[#7a1f1f]/80 via-[#5d1414]/70 to-[#5d1414]/90
    ```
*   **Glow Effects**: Use blurred colored geometric shapes to create a premium glow behind elements.
    ```tailwindcss
    w-72 h-72 bg-[#b07b3a]/20 rounded-full blur-3xl
    ```

### Buttons
All main Interactive buttons follow a pill (rounded-full) design.

*   **Primary CTA Button (Gold)**:
    ```tailwindcss
    bg-gradient-to-r from-[#b07b3a] to-[#d5a25a] hover:from-[#95652e] hover:to-[#b07b3a] text-white px-8 py-4 text-lg font-bold rounded-full shadow-[0_0_20px_rgba(176,123,58,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(176,123,58,0.6)] hover:-translate-y-1
    ```
*   **Secondary/Outline Button (Glass)**:
    ```tailwindcss
    border-2 border-white/40 text-white bg-white/5 hover:bg-white/10 px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 hover:border-white hover:shadow-lg backdrop-blur-md hover:-translate-y-1
    ```

### Card Patterns
When placing content on a white/light card:
```tailwindcss
bg-[#fbf7f0] p-8 md:p-10 rounded-2xl border border-[#14110f]/5
```

## 4. Iconography Standards

*   **Style**: Icons **must be solid/filled**. Do not use thin, transparent outline icons unless they are purely decorative or part of a small internal UI control. By aligning all icons to be inherently "solid", this ensures the visual weight is balanced and premium.
*   **Color**: Use `text-[#b07b3a]` (Gold) for standard icon coloring.
*   **Standard Implementation**: Use SVG definitions derived directly from FontAwesome 6 Solid paths. Add `fill="currentColor"` so tailwind `text-*` classes properly color the icon.
*   **Hover Behaviors**: Standardize the hover interaction for icons across navigation and footers by applying specific CSS translation using group classes:
    ```tailwindcss
    group-hover:-translate-y-0.5 group-hover:scale-110 transition-transform
    ```

## 5. Animation & Interactions

Smooth interaction is essential to the Gensaladin website feel.
*   **Hover Groups**: Leverage Tailwind's `group` and `group-hover` classes heavily. Always pair hover states with `transition-all duration-300` (or `500`).
*   **Hover Scale & Slide**: Interactive links and buttons should lift slightly when hovered:
    *   Whole elements: `hover:-translate-y-1`
    *   Action indicators (like arrows): `group-hover:translate-x-1`
*   **Framer Motion**: For entrance animations (on load, or on scroll), use simple `fadeInUp` variants (`y: 30`, `opacity: 0` -> `y: 0`, `opacity: 1`).
