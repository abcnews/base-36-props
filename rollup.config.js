import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

import serve from 'rollup-plugin-serve';

export default {
  input: 'example/main.js',
  output: {
    file: 'example/public/bundle.js',
    format: 'iife',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs(),
    resolve({ preferBuiltins: false }),
    serve({ contentBase: 'example/public', open: true }),
  ],
};
