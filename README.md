# Bert Mizusawa for U.S. Senate

Campaign website for Maj. Gen. Bert Mizusawa (Ret.), candidate for the U.S. Senate from Virginia. A full ground-up redesign of bertforsenate.com.

## Stack

- [Astro](https://astro.build) — static site, zero JavaScript shipped except a tiny scroll-reveal observer and the mobile nav toggle.
- No framework runtime, no build dependencies beyond Astro. Deploys as plain static files.

## Design direction

Bold patriotic, executed with restraint. Dominant deep navy and warm paper, one disciplined campaign red, a thin gold medal accent. Monumental carved display type (Archivo), readable civic body type (Public Sans, the U.S. design-system font), serif accent for the vision quote (Fraunces). The full token system lives in `src/styles/global.css`.

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
