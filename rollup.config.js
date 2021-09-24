import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

const distBundle = 'dist/bundle'

export default {
  input: 'src/index.jsx',
  output: [
    {
      file: `${distBundle}.cjs.js`,
      format: 'cjs'
    },
    {
      file: `${distBundle}.esm.js`,
      format: 'esm'
    }
  ],
  plugins: [
    terser(),
    resolve(),
    babel({ babelHelpers: 'bundled', exclude: 'node_modules' })
  ],
  external: ['react']
}
