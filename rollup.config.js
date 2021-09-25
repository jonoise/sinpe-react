import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

const distBundle = 'dist/bundle'

export default {
  input: 'src/index.jsx',
  output: [
    {
      file: `${distBundle}.cjs.js`,
      format: 'cjs',
      exports: 'default'
    },
    {
      file: `${distBundle}.esm.js`,
      format: 'esm'
    }
  ],
  plugins: [
    babel({ babelHelpers: 'bundled', exclude: 'node_modules' }),
    nodeResolve({ moduleDirectories: ['src'] }),
    terser()
  ],
  external: ['react', 'styled-jsx/style']
}
