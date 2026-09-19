# slidev-theme-lapis

A clean, blue-toned theme for [Slidev](https://github.com/slidevjs/slidev), ported from
[typora-theme-lapis](https://github.com/xrgzs/typora-theme-lapis).

一款以蓝色为主色调的 Slidev 主题，视觉与排版移植自 Typora 同名主题 Lapis。

- Serif (思源宋体 / Noto Serif SC) headings, Inter body text, JetBrains Mono code
- The signature `h2` "pill" heading, tinted list markers and a blue left rule for quotes
- Light & dark variants of every single token, plus custom Shiki themes for code
- Extra layouts (`cover`, `intro`, `section`, `quote`, `fact`, `statement`, `end`) and two components

## Install

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.

<pre><code>---
theme: <b>lapis</b>
---</code></pre>

```bash
pnpm add slidev-theme-lapis
# or
npm i slidev-theme-lapis
```

Learn more about [how to use a theme](https://sli.dev/guide/theme-addon#use-theme).

> Using this repository locally? Point the frontmatter to the folder instead: `theme: ./slidev-theme-lapis`.

## Layouts

All Slidev built-in layouts are supported and repainted by the theme. The layouts below are provided (or overridden) by this theme:

| Layout | Description |
| --- | --- |
| `cover` | Opening slide: centered title with a rule underneath, subtitle and an optional `::info::` footer |
| `intro` | Left-aligned variant of `cover`, usually the second slide |
| `section` | Chapter divider — `h1` for the part name, `h2` for the topic |
| `quote` | Large serif quote with a decorative opening quote mark and a right-aligned attribution |
| `fact` | Big primary-colored number plus a label |
| `statement` | Centered statement |
| `end` | Closing slide |

`cover`, `intro`, `section`, `quote`, `fact`, `statement` and `end` all support the `background` (color or image URL) and `backgroundSize` frontmatter options.

Example:

```md
---
layout: cover
background: https://cover.sli.dev
---

# My deck

A subtitle

::info::

Author · 2026
```

## Components

### `<LapisCard>`

A bordered panel for grouping content, with the same tones as the markdown alerts.

```md
<LapisCard title="Title" tone="tip" icon="i-carbon-lightbulb">
Content, markdown supported.
</LapisCard>
```

| Prop | Default | Description |
| --- | --- | --- |
| `title` | `''` | Optional title, rendered in the serif title font |
| `tone` | `primary` | `primary`, `plain`, `note`, `tip`, `important`, `warning`, `caution` |
| `icon` | `''` | Optional UnoCSS icon class, e.g. `i-carbon-lightbulb` |

### `<LapisPill>`

An inline badge that reuses the `h2` pill style.

```md
<LapisPill>New</LapisPill> <LapisPill tone="warning">warning</LapisPill>
```

`tone` accepts `primary`, `plain`, `note`, `tip`, `important`, `warning` and `caution`.

## Markdown styles

| Element | Style |
| --- | --- |
| `h1` | Centered, serif, primary color |
| `h2` | Filled pill (`--lapis-pill-bg` / `--lapis-pill-fg`) |
| `h3`–`h6` | Serif, primary color |
| `strong` | Primary color |
| `a` | Primary color, underlined with a 4px offset |
| `blockquote` | 3px primary left rule, soft background |
| `> [!NOTE]` … | GitHub alerts re-tinted with the Lapis palette |
| `ul` / `ol` | `disc` / `decimal`, `::marker` tinted with `--lapis-marker` |
| `table` | Bordered cells, serif centered headers, hover highlight |
| `code` | Inline code and code blocks use the Lapis code palette |

## Customization

The theme is driven by CSS variables. Override them in a `style.css` file next to your `slides.md`
— Slidev loads it automatically:

```css
/* style.css */
:root {
  --slidev-theme-primary: #4870ac;
  --lapis-pill-bg: #4870ac;
  --lapis-pill-fg: #ffffff;
}

html.dark {
  --slidev-theme-primary: #8393ad;
}
```

The most useful tokens:

| Token | Light | Dark |
| --- | --- | --- |
| `--slidev-theme-primary` | `#4870ac` | `#8393ad` |
| `--lapis-text` | `#40464f` | `#e4e4e4` |
| `--lapis-bg` | `#ffffff` | `#1e222a` |
| `--lapis-bg-block` | `#f6f8fa` | `#2a2f3b` |
| `--lapis-code-bg` | `#f6f8fa` | `#080e1d` |
| `--lapis-marker` | `#a2b6d4` | `#7d8a9f` |
| `--lapis-border` | `#d9dfe4` | `#47556d` |

To change a single font, pass `fonts` in the headmatter:

```yaml
fonts:
  sans: Inter
  serif: Noto Serif SC
  mono: JetBrains Mono
```

## Code highlighting

`setup/shiki.ts` registers two custom Shiki themes, `lapis-light` and `lapis-dark`
(see `setup/themes/`), so code blocks match the surrounding palette in both color modes.
They are generated from the code palette of the Typora theme, which is inspired by the
VSCode theme "Winter is Coming".

## Contributing

- `pnpm install`
- `pnpm dev` — start the preview of `example.md` (or `slides.md`, which imports it)
- Edit `example.md` and the styles to see the changes
- `pnpm export` — generate the preview PDF
- `pnpm screenshot` — generate the preview PNG

The repository layout follows the official
[theme guide](https://sli.dev/guide/write-theme.html):

```
slidev-theme-lapis/
├── layouts/      # cover, intro, section, quote, fact, statement, end
├── components/   # LapisCard, LapisPill
├── styles/       # lapis.css (tokens & typography), layouts.css, code.css
├── setup/        # shiki.ts + custom Shiki themes
├── layoutHelper.ts
├── example.md    # theme reference & preview
└── slides.md     # dev entry (`theme: ./`)
```

## Credits

- Original design: [typora-theme-lapis](https://github.com/xrgzs/typora-theme-lapis) by
  [MadDogOwner](https://github.com/xrgzs), based on [typora-theme-orange-heart](https://github.com/evgo2017/typora-theme-orange-heart)
- Code palette inspired by the VSCode theme [Winter is Coming](https://vscodethemes.com/e/johnpapa.winteriscoming/winter-is-coming-light-no-italics)

## License

MIT
