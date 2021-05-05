import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import copy from 'rollup-plugin-copy'
import nodePolyfills from 'rollup-plugin-polyfill-node'

export default {
  input: 'src/index.mjs',
  output: {
    exports: 'named',
    format: 'es',
    file: 'dist/index.mjs',
    sourcemap: true,
  },

  // slug.txt will be uploaded as a text module, not as part of the rollup bundle.
  // so we must declare it as an external dependency (to be resolved at runtime).
  external: ['./slug.txt'],
  plugins: [
    commonjs(),
    nodePolyfills(),
    nodeResolve({ browser: true, preferBuiltins: false }),
    terser(),
    copy({
      targets: [{ src: './src/slug.txt', dest: './dist/' }],
    }),
  ],
}
