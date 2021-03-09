# 👷 Modules Wrangler template

## NOTE: You must be using the Custom Builds RC to use this template. Check the [wrangler releases page](https://github.com/cloudflare/wrangler/releases) for more information

A template for kick starting a Cloudflare Workers project using:

- Modules (ES Modules to be specific)
- Rollup
- Wrangler

Worker code is in `src/index.mjs`.

Rollup is configured to output a bundled ES Module to `dist/index.mjs`.

- This bundle is also configured to be the main module, using the `module` key in `package.json`.
