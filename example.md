---
theme: ./
title: Slidev Theme · Lapis
info: |
  ## Slidev Theme · Lapis

  A clean, blue-toned theme ported from [typora-theme-lapis](https://github.com/xrgzs/typora-theme-lapis).
class: text-center
transition: fade
lineNumbers: true
---

# Slidev Theme · Lapis

一款以蓝色为主色调的 Slidev 主题 · A clean, blue-toned theme for developers

::info::

Repo · [github.com/xrgzs/typora-theme-lapis](https://github.com/xrgzs/typora-theme-lapis)

---
layout: intro
---

# This file is the theme reference

Every layout, style and component the **Lapis** theme ships with is demonstrated here.

Keep it around while you write your own deck — or delete it.

---

# Typography

## `h2` becomes the signature pill

`h1` is centered in the serif title font, `h3`–`h6` stay serif, and body text is set in **Inter** with a comfortable line height.

### Level 3 heading

**Bold** text is tinted with the theme color, [links](https://sli.dev) are underlined with a soft offset, and `inline code` gets the Lapis treatment.

You can also <mark>highlight a phrase</mark>, press <kbd>Space</kbd>, write ~~strikethrough~~ or use <u>underlines</u>.

---

# Lists & Quotes

## Lists

- Markers are tinted with the theme palette
- Nested items switch to a square marker
  - like this one
  - and this one
- Ordered lists keep the same rhythm

1. Write your slides in Markdown
2. Add code, math or diagrams
3. Present it — or export it to PDF

## Quotes

> A blockquote gets a blue left rule and a soft background, just like in the Typora theme.

---

# Alerts

GitHub style alerts are re-tinted with the Lapis palette — plain blockquote syntax.

> [!NOTE]
> Useful information that users should know, even when skimming.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!WARNING]
> Urgent info that needs immediate attention.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

---

# Tables

| Layout | Purpose | Added by this theme |
| --- | --- | --- |
| `default` | Your everyday slide | Repainted |
| `cover` | Opening slide | Repainted |
| `section` | Chapter divider | Repainted |
| `two-cols` | Two columns | Vertical divider |
| `quote` / `fact` / `statement` | Emphasis slides | Repainted |

Header cells are centered, use the serif title font and the primary color.

---

# Code

```ts {1|3-5|all}
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: {
      light: 'lapis-light',
      dark: 'lapis-dark',
    },
  }
})
```

`lapis-light` and `lapis-dark` are custom Shiki themes shipped with this theme, so code follows the surrounding palette in both color modes.

---

# Math

Inline math like $E = mc^2$ is rendered by KaTeX.

$$
\int_{-\infty}^{\infty} e^{-x^{2}}\,dx = \sqrt{\pi}
$$

Display blocks inherit the theme fonts and the primary color.

---

# Components

<LapisCard title="LapisCard" tone="primary">
A bordered panel for grouping content. `tone` accepts `primary`, `plain`, `note`, `tip`, `important`, `warning` and `caution`.
</LapisCard>

<LapisCard title="Consistent tones" tone="tip">
Cards share the tones of the markdown alerts, so panels and callouts stay visually consistent.
</LapisCard>

Pills are inline: <LapisPill>New</LapisPill> <LapisPill tone="plain">plain</LapisPill> <LapisPill tone="tip">tip</LapisPill> <LapisPill tone="warning">warning</LapisPill>

---
layout: two-cols
---

# Two columns

Everything before `::right::` shows up in the left column.

- A subtle divider separates both columns
- Both keep the full theme styling

```ts
const columns = ['left', 'right']
```

::right::

# …and here

The right column is defined with the `::right::` slot, plain Slidev syntax.

> Remember to leave a blank line around the slot markers.

---
layout: two-cols-header
---

# Two columns with a header

This part spans both columns.

::left::

### Left

- Uses the same typography
- And the same list markers

::right::

### Right

- Ideal for comparisons
- Or for code and its explanation

---

# Layouts

## `cover`

The opening slide. `h1`, subtitle and an optional `::info::` footer.

## `intro`

Left aligned version of the cover, usually the second slide.

## `section`

Chapter divider — `h1` for the part, `h2` for the topic.

---
layout: section
---

# Part 2

## Emphasis layouts

---
layout: quote
---

# Simplicity is the ultimate sophistication.

Leonardo da Vinci

---
layout: fact
---

# 2

color modes: `light` and `dark`

---
layout: statement
---

# One theme, every slide.

---
layout: center
class: text-center
---

# Thanks for reading

Check the [README](./README.md) for the full list of layouts, components and design tokens.

<!--
This is a presenter note — it is styled with the Lapis palette as well.
Use `p` to open the presenter view, `o` for the overview and `d` to toggle dark mode.
-->

---
layout: end
---

# Thank you
