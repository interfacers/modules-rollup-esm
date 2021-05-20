import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars'
import copyAssets from 'rollup-plugin-copy-imported-assets'
import nodePolyfills from 'rollup-plugin-node-polyfills'
import nodeGlobals from 'rollup-plugin-node-globals'

// https://rollupjs.org/guide/en/#configuration-files
export default {
  input: 'src/index.mjs',

  output: {
    exports: 'named',
    format: 'es',
    preserveModulesRoot: 'src',
    preserveModules: false,
    sourcemap: false,
    dir: 'dist',
    entryFileNames: '[name].mjs',
    assetFileNames: 'assets/[name][extname]',
  },

  // See https://github.com/rollup/awesome for more plugins.
  plugins: [
    // Converts CommonJS modules to ES6.
    commonjs({
      transformMixedEsModules: true,
    }),

    // Resolves JSON files as objects.
    json(),

    // Resolves non-JavaScript files, like images or text.
    copyAssets({
      include: /\./,
      exclude: /\.(c|m)(j|t)sx?$/,
    }),

    // Resolves NPM packages from node_modules/.
    nodeResolve({
      browser: true,
    }),

    // Polyfills NodeJS APIs, when possible.
    // NOTE: Can be removed, especially if you're running into
    // weird complication errors from some of your dependencies.
    nodePolyfills({
      crypto: true,
    }),

    // Polyfills NodeJS global variables (e.g. process).
    // NOTE: Can be removed, especially if you're running into
    // weird complication errors from some of your dependencies.
    nodeGlobals(),

    // Resolves non-toplevel imports using static analysis.
    dynamicImportVars({
      warnOnError: true,
    }),
  ],
}
