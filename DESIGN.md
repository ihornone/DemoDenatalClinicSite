# SmileDesign — Style Reference
> Premium dental, white canvas

**Theme:** light

SmileDesign operates in a minimalist Apple-like aesthetic: a pristine white canvas (#ffffff) creates a clean, clinical yet warm atmosphere where content breathes with generous whitespace. The interface is bright and airy — dark charcoal text on white, with a single vivid teal (#00b4d8) acting as the primary chromatic accent, used for CTAs and interactive highlights. Typography uses Inter at regular and semi-bold weights, keeping things clean and legible. Components are soft and rounded with large border-radius, no harsh shadows, relying on spacing and subtle elevation to define structure. The large photographic hero — a welcoming dental office — establishes trust before the product UI takes over, and every subsequent surface maintains that clean, premium brightness.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| White Canvas | `#ffffff` | `--color-white-canvas` | Dominant page background, hero, section canvases |
| Ice Surface | `#f8f9fc` | `--color-ice-surface` | Elevated card and section surfaces — one step from white for quiet separation |
| Fog Surface | `#f0f2f5` | `--color-fog-surface` | Secondary elevated surfaces, input backgrounds, subtle containers |
| Slate Border | `#e2e5ea` | `--color-slate-border` | Light dividers and structural borders |
| Mist Border | `#cdd2d9` | `--color-mist-border` | Medium-weight borders, active input edges |
| Muted Text | `#6b7280` | `--color-muted-text` | Muted body copy, helper text, secondary labels |
| Primary Text | `#1a1a2e` | `--color-primary-text` | Primary text, icons, nav items — the dominant foreground color |
| Teal | `#00b4d8` | `--color-teal` | Primary action color for filled buttons, links, selected states |
| Teal Dark | `#0096b7` | `--color-teal-dark` | Hover state for teal elements |
| Pure White | `#ffffff` | `--color-pure-white` | Text and icon fills on teal primary buttons |

## Tokens — Typography

### Inter — Body and UI typeface — handles navigation, body copy, buttons, inputs, labels, and supporting text at weight 400 for body and 600 for emphasis · `--font-inter`
- **Weights:** 400, 500, 600
- **Sizes:** 14px, 16px, 18px, 20px, 24px, 32px, 40px, 48px
- **Line height:** 1.2–1.6

### Inter Display — Headline typeface — used at weight 600 for all heading sizes from 28px through 56px, with tight line-heights and generous letter-spacing for an architectural quality · `--font-inter`
- **Weights:** 500, 600, 700
- **Sizes:** 28px, 32px, 40px, 48px, 56px
- **Line height:** 1.15–1.25
- **Letter spacing:** -0.02em to 0

### Type Scale

| Role | Size | Line Height | Token |
|------|------|-------------|-------|
| caption | 12px | 1.5 | `--text-caption` |
| body-sm | 14px | 1.5 | `--text-body-sm` |
| body | 16px | 1.6 | `--text-body` |
| body-lg | 18px | 1.5 | `--text-body-lg` |
| subheading | 20px | 1.4 | `--text-subheading` |
| heading-sm | 24px | 1.3 | `--text-heading-sm` |
| heading | 32px | 1.25 | `--text-heading` |
| heading-lg | 40px | 1.2 | `--text-heading-lg` |
| display | 48px | 1.15 | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 4px
**Density:** spacious

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 56 | 56px | `--spacing-56` |
| 72 | 72px | `--spacing-72` |
| 96 | 96px | `--spacing-96` |
| 128 | 128px | `--spacing-128` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 24px |
| buttons | 100px (pill) |
| inputs | 16px |
| tags | 100px (pill) |
| images | 20px |
| default | 8px |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 96px
- **Card padding:** 40px
- **Element gap:** 16px

## Components

### Primary CTA Button (Teal)
**Role:** The sole chromatic action — reserved for conversion

Filled with #00b4d8 Teal, white text at 16px Inter weight 600, 100px border-radius (pill), 16px vertical / 32px horizontal padding. No border, subtle hover to #0096b7. Rounded and friendly.

### Ghost Outline Button
**Role:** Secondary or tertiary action on light backgrounds

Transparent background, 1.5px solid #1a1a2e Primary border, Primary text at 16px Inter weight 500, 100px border-radius (pill), 14px vertical / 28px horizontal padding.

### Navigation Link
**Role:** Top-bar navigation items

Transparent background, no border, Primary text at 16px Inter weight 500, hover to Teal color. Clean and minimal.

### Ice Card
**Role:** Content grouping surface

Background #f8f9fc, 24px border-radius, 40px padding on all sides, no shadow, no border. One step from the white canvas creates separation through subtle value contrast.

### Section Container
**Role:** Horizontal content wrapper

Full-width white canvas (#ffffff) with inner content constrained to 1200px max-width, 96px vertical padding. Contains 2- or 3-column grids of cards or text+image splits.

### Image Card
**Role:** Doctor photo or service illustration

Full-width image with 20px border-radius, optional overlay text at bottom.

## Do's and Don'ts

### Do
- Use Teal #00b4d8 exclusively for primary actions — never as decorative accent
- Set all cards to #f8f9fc with 24px radius and 40px padding — rely on spacing for separation
- Apply Inter weight 600 for all headings
- Use 100px pill radius for all buttons and inputs
- Set body text at 16px Inter weight 400 with 1.6 line-height
- Maintain 96px vertical rhythm between major sections — spacious density is part of the premium feel
- Use large, high-quality photographs prominently

### Don't
- Do not use multiple accent colors — Teal is the only chromatic note
- Do not add drop shadows — separation comes from value contrast and spacing
- Do not use fonts heavier than 700
- Do not use sharp corners on buttons or inputs
- Do not clutter the layout — whitespace is a design element
- Do not use dark backgrounds — every surface is white or near-white

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | White Canvas | `#ffffff` | Base page background |
| 1 | Ice Surface | `#f8f9fc` | Elevated content surface — cards, containers |
| 2 | Fog Surface | `#f0f2f5` | Interactive surface — input backgrounds, secondary containers |

## Imagery

Large, high-quality dental photography dominates — welcoming offices, smiling patients, professional doctors in white coats. Photography is bright, warm-toned, with natural lighting. Below the hero, imagery includes doctor portraits, before/after cases, and office spaces. No illustrations, no icons-as-art — visuals are photographic or purely functional.

## Layout

Full-width white canvas throughout. Hero is full-bleed photographic with centered headline + subtext + CTA button stack (max-width ~640px). Below hero, content flows in 1200px max-width sections with 96px vertical padding, alternating between text-left/image-right 2-column splits and 3-column card grids. Navigation is a clean white top bar with subtle border-bottom. Generous whitespace everywhere. No sidebar navigation.

## Quick Start — CSS Custom Properties

```css
:root {
  --color-white-canvas: #ffffff;
  --color-ice-surface: #f8f9fc;
  --color-fog-surface: #f0f2f5;
  --color-slate-border: #e2e5ea;
  --color-mist-border: #cdd2d9;
  --color-muted-text: #6b7280;
  --color-primary-text: #1a1a2e;
  --color-teal: #00b4d8;
  --color-teal-dark: #0096b7;
  --color-pure-white: #ffffff;

  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif;
  --radius-cards: 24px;
  --radius-buttons: 100px;
  --radius-inputs: 16px;
  --radius-images: 20px;
  --page-max-width: 1200px;
  --section-gap: 96px;
  --card-padding: 40px;
}
```

## Agent Prompt Guide

1. Create a product feature card: background #f8f9fc, 24px border-radius, 40px padding, no shadow. Heading at 24px Inter weight 600, color #1a1a2e. Body at 16px Inter weight 400, line-height 1.6, color #6b7280.

2. Create a primary CTA button: background #00b4d8, white text at 16px Inter weight 600, 100px border-radius (pill), no border, 16px vertical / 32px horizontal padding.

3. Create a ghost/outline button: transparent background, 1.5px solid #1a1a2e border, #1a1a2e text at 16px Inter weight 500, 100px border-radius, 14px vertical / 28px horizontal padding.
