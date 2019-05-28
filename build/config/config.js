import resolve from 'rollup-plugin-node-resolve';

const output = [{
        name: "css",
        file: "./build/css.js",
        format: "iife",
        exports:"default"
    },{
        name: "css_cjs",
        file: "./build/css.node.js",
        format: "cjs",
        exports:"default"
    }];

export default {
    input: "./source/css_parser.mjs",
    treeshake: false,
    output,
    plugins: [resolve({jail:"",modulesOnly: true})]
};
