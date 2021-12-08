import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';

import pkg from './package.json';

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
	  exports: "named",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "esm",
	  exports: "named",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
		extensions: [".js"],
	}),
	replace({
		'process.env.NODE_ENV': JSON.stringify( 'production' )
	}),
	babel({
		presets: ["@babel/preset-react"]
	}),
    commonjs(),
    postcss(),
	terser()
  ]
};