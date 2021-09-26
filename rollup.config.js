import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript'
const distBundle = 'dist/bundle'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: `${distBundle}.cjs.js`,
      format: 'cjs',
      exports: 'default',
      sourcemap: true
    },
    {
      file: `${distBundle}.esm.js`,
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    babel({ babelHelpers: 'bundled', exclude: 'node_modules' }),
    typescript({
      tsconfig: 'tsconfig.json',
      sourceMap: true
    }),
    nodeResolve({ moduleDirectories: ['src'] }),
    terser({
      output: { comments: false }
    })
  ],
  external: ['react']
}
