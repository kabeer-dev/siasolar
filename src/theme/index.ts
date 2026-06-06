/**
 * SITE THEME — single source of truth for all colors.
 *
 * These values mirror the CSS custom properties in globals.css.
 * Change a value here AND in globals.css to retheme the entire site.
 *
 * Use the Tailwind utility classes (e.g. bg-brand, text-brand-light) wherever
 * possible. Use these JS constants only for inline styles, charts, or any
 * context where Tailwind classes cannot be applied.
 */

export const colors = {
  // ── Brand (primary green) ─────────────────────────────────────────────────
  // Tailwind utilities: bg-brand  text-brand  border-brand
  brand: '#16a34a',       // green-600  — primary buttons, links, icons

  // Tailwind: bg-brand-dark  text-brand-dark
  brandDark: '#15803d',   // green-700  — hover state for brand elements

  // Tailwind: bg-brand-mid  text-brand-mid
  brandMid: '#22c55e',    // green-500  — icons, decorative glows

  // Tailwind: bg-brand-light  text-brand-light
  brandLight: '#4ade80',  // green-400  — accents on dark backgrounds

  // Tailwind: bg-brand-subtle  text-brand-subtle
  brandSubtle: '#dcfce7', // green-100  — light icon backgrounds, badges

  // Tailwind: bg-brand-faint  text-brand-faint
  brandFaint: '#f0fdf4',  // green-50   — very light card backgrounds

  // Tailwind: bg-brand-pale  text-brand-pale
  brandPale: '#bbf7d0',   // green-200  — text on saturated brand backgrounds

  // ── Neutrals ──────────────────────────────────────────────────────────────
  white: '#ffffff',
  black: '#000000',

  // Dark section backgrounds
  darkBg: '#111827',      // gray-900
  darkCard: '#1f2937',    // gray-800

  // Page / section backgrounds
  pageBg: '#ffffff',
  subtleBg: '#f9fafb',    // gray-50
  mutedBg: '#f3f4f6',     // gray-100

  // Text
  textPrimary: '#111827',   // gray-900
  textSecondary: '#4b5563', // gray-600
  textMuted: '#6b7280',     // gray-500
  textFaint: '#9ca3af',     // gray-400
  textOnDark: '#d1d5db',    // gray-300

  // Borders
  borderSubtle: '#f3f4f6',  // gray-100
  borderDefault: '#e5e7eb', // gray-200

  // ── Accent (non-brand service colors) ────────────────────────────────────
  // Used for Commercial / Industrial service cards — not part of the brand palette
  accentBlue: '#2563eb',        // blue-600
  accentBlueBg: '#eff6ff',      // blue-50
  accentOrange: '#ea580c',      // orange-600
  accentOrangeBg: '#fff7ed',    // orange-50

  // ── Stars / ratings ──────────────────────────────────────────────────────
  star: '#facc15',    // yellow-400
  starDark: '#fde047', // yellow-300 (on dark backgrounds)
} as const;

export type ColorToken = keyof typeof colors;
