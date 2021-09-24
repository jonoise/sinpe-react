const distBundle = 'dist/bundle'

export default {
  input: 'src/index.js',
  output: [
    {
      file: `${distBundle}.cjs.js`,
      format: 'cjs'
    },
    {
      file: `${distBundle}.esm.js`,
      format: 'esm'
    }
  ]
}
