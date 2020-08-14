const path = require("path");
const miniCssExtract = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

// WEBPACK_ENV = development --> define on script line in package.json file.
const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_FILE = path.resolve(__dirname, "static");

// mode:process.env.NODE_ENV 는 package.json에서 모드를 어떻게 정의하냐에 따라 자동으로 모드를 설정해줌.
const config = {
  entry: ["@babel/polyfill", ENTRY_FILE],
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        // rule for js file
        test: /\.(js)$/,
        loader: "babel-loader",
      },
      {
        // rule for scss file
        test: /\.(scss)$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  output: {
    path: OUTPUT_FILE,
    filename: "[name].js",
  },
};

module.exports = config;

// 옛날 썻던것!
// const config = {
//   entry: ["@babel/polyfill", ENTRY_FILE],
//   mode: MODE,
//   module: {
//     rules: [
//       {
//         // rule for js to conventional js format
//         test: /\.(js)$/,
//         use: [
//           {
//             loader: "babel-loader",
//           },
//         ],
//       },
//       {
//         //   rule for scss to css format
//         test: /\.(scss)$/,
//         use: [
//           {
//             loader: miniCssExtract.loader,
//             options: {
//               plugins() {
//                 return [autoprefixer({ browserslist: "cover 99.5%" })];
//               },
//             },
//           },
//           "css-loader",
//           "postcss-loader",
//           "sass-loader",
//         ],
//       },
//     ],
//   },
//   output: {
//     path: OUTPUT_FILE,
//     filename: "[name].js",
//   },
//   plugins: [new miniCssExtract("styles.css")],
// };
