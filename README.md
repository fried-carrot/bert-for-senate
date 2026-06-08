# Bert Mizusawa for U.S. Senate

Campaign website for Maj. Gen. Bert Mizusawa (Ret.), candidate for the U.S. Senate from Virginia. A full ground-up redesign of bertforsenate.com.

## Stack

- [Astro](https://astro.build) — static site, zero JavaScript shipped except a tiny scroll-reveal observer and the mobile nav toggle.
- No framework runtime, no build dependencies beyond Astro. Deploys as plain static files.

## Design direction

Vintage Americana broadside. Enlistment-poster meets 1860s campaign broadside: aged cream paper, oxblood red, ink navy, gold ochre. Heavy fat-slab wood type (Ultra) for mastheads, tall condensed display (Big Shoulders Display) for headlines, a newspaper serif (Newsreader) for body. Atmosphere is built from a fixed paper-grain overlay, halftone shading, a printed page frame, ornamental star + double rules, and a two-color screenprint (duotone) treatment of the photography via SVG filters. The full token system lives in `src/styles/global.css`; the duotone filters live in `src/layouts/Base.astro`.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to dist/
npm run preview
```

## Structure

```
src/
  layouts/Base.astro      page shell, fonts, scroll-reveal script
  pages/index.astro       composes the one-page site
  components/             Nav, Hero, About, Issues, Vision, Action, Footer
  styles/global.css       design tokens + primitives
public/img/               candidate + ceremony photography
```

## Content status

Copy and photography are placeholders carried over and cleaned up from the existing live site. Swap in the real bio, detailed policy positions, high-resolution photography, and the live WinRed donation URL (`https://secure.winred.com/` placeholders in the components) before launch.

## Deploy

Static output. Point Netlify, Vercel, or GitHub Pages at the repo with build command `npm run build` and publish directory `dist`.
