const path = require("path");
const miniCssExtract = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

// WEBPACK_ENV = development --> define on script line in package.json file.
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
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        // rule for scss file
        test: /\.(scss)$/,
        use: [
          // miniCssExtract.loader is needed just right here!!
          // It Extract Css code from bundled main.js file.
          miniCssExtract.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [autoprefixer({ overrideBrowserslist: "cover 99.5%" })],
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  output: {
    path: OUTPUT_FILE,
    filename: "[name].js",
  },
  plugins: [
    new miniCssExtract({
      path: OUTPUT_FILE,
      filename: "styles.css",
    }),
  ],
};

module.exports = config;
