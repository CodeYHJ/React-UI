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

const envConfig = {
  esm: [compileESM, copyEsmLess, esmLess2css],
  cjs: [compileCJS, copyCjsLess, cjsLess2css],
  all: [
    // esm
    compileESM,
    copyEsmLess,
    esmLess2css,
    // cjs
    compileCJS,
    copyCjsLess,
    cjsLess2css,
    // icon
    handleSvgInfoFile,
    handleSvgTsFile,
    handleSvgIcon,
    handleSvgIndex,
    copy2Lib,
  ],
  icon: [
    handleSvgInfoFile,
    handleSvgTsFile,
    handleSvgIcon,
    handleSvgIndex,
    copy2Lib,
  ],
};
const clean = (dirs, options = {}) => {
  return () => del(dirs, options);
};

const buildScripts = series(...envConfig[process.env.GULP_ENV]);
// 并行任务 后续加入样式处理 可以并行处理
const build = parallel(
  clean(["../dist", "../esm", "../lib", "svg"], { force: true }),
  buildScripts
);

exports.build = build;

exports.default = build;
