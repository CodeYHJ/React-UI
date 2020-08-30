const { series, parallel } = require("gulp");
const {
  compileESM,
  copyEsmLess,
  esmLess2css,
  compileCJS,
  copyCjsLess,
  cjsLess2css,
} = require("./task/scriptTask");
const {
  handleSvgInfoFile,
  handleSvgTsFile,
  handleSvgIcon,
  handleSvgIndex,
} = require("./task/svgTask");
const { copy2Lib } = require("./task/copy2Lib");

const del = require("delete");

const clean = (dirs, options = { force: true }) => {
  return () => del(dirs, options);
};

const envConfig = {
  icon: [
    clean([
      "dist",
      "../components/Icon/iconInfo",
      "../components/Icon/svgIcon",
      "../test-results",
      "../coverage",
    ]),
    handleSvgInfoFile,
    handleSvgTsFile,
    handleSvgIcon,
    handleSvgIndex,
    copy2Lib,
  ],
  esm: () => [
    clean(["../esm"]),
    ...envConfig.icon,
    compileESM,
    copyEsmLess,
    esmLess2css,
  ],
  cjs: () => [
    clean(["../lib"]),
    ...envConfig.icon,
    compileCJS,
    copyCjsLess,
    cjsLess2css,
  ],
  all: () => [...envConfig.esm(), ...envConfig.cjs()],
};

const buildScripts = series(...envConfig[process.env.GULP_ENV]());

// 并行任务 后续加入样式处理 可以并行处理
const build = parallel(buildScripts);

exports.build = build;

exports.default = build;
