const path = require("path");
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackPlugin
} = require("customize-cra");
const AntDesignThemePlugin = require("antd-theme-webpack-plugin");
const { addReactRefresh } = require("customize-cra-react-refresh");
const options = {
  stylesDir: path.join(__dirname, "./src/assets/styles/themes"),
  antDir: path.join(__dirname, "./node_modules/antd"),
  varFile: path.join(__dirname, "./src/assets/styles/themes/vars.less"),
  themeVariables: [
      "@primary-color",
      "@body-background",
      '@text-color',
      '@component-background',
      '@container-background',
      '@disabled-color',
      '@disabled-bg',
      '@second-container-background',
      '@border-color-base',
      '@border-color-split',
      '@disabled-color',
      '@nav-box-shadow'
  ],
  indexFileName: "index.html"
};

module.exports = override(
    fixBabelImports("antd", {
      libraryName: "antd",
      libraryDirectory: "es",
      style: true
    }),
    addWebpackPlugin(new AntDesignThemePlugin(options)),
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true
      }
    })
);
