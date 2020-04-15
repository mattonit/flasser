import postcss from 'rollup-plugin-postcss';

export default {
  input: 'scss/flasser.scss',
  plugins: [
    postcss({
      extract: true,
      plugins: [
        require('autoprefixer'),
      ]
    })
  ],
  output: [
    {
      file: 'dist/flasser.css',
      format: 'es',
    },
  ],
}
