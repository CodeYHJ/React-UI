const { src, series, parallel, dest } = require("gulp");
const gulpBabel = require("gulp-babel");
const less = require("gulp-less");
const svgmin = require("gulp-svgmin");
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const through2 = require("through2");
const path = require("path");
const fs = require("fs");
const del = require("delete");
const { transform } = require("./util/transformXmlAst.js");

const paths = {
  dest: {
    lib: "../lib",
    esm: "../esm",
    svgInfo: "./svg/iconInfo",
  },
  styles: "../lib/**/*.less",
  scripts: [
    "../components/**/*.{ts,tsx}",
    "!../components/**/__test__/*.{ts,tsx}",
  ],
  svg: "../components/Icon/svg/*.svg",
  ts: "./svg/SvgInfo.ts",
  svgConfig: {
    plugins: [
      { removeStyleElement: true },
      { cleanupAttrs: true },
      { removeDoctype: true },
      { removeXMLProcInst: true },
      { removeXMLNS: true },
      { removeComments: true },
      { removeMetadata: true },
      { removeTitle: true },
      { removeDesc: true },
      { removeUselessDefs: true },
      { removeEditorsNSData: true },
      { removeEmptyAttrs: true },
      { removeHiddenElems: true },
      { removeEmptyText: true },
      { removeEmptyContainers: true },
      { removeViewBox: false },
      { cleanupEnableBackground: true },
      { convertStyleToAttrs: true },
      { convertColors: true },
      { convertPathData: true },
      { convertTransform: true },
      { removeUnknownsAndDefaults: true },
      { removeNonInheritableGroupAttrs: true },
      { removeUselessStrokeAndFill: true },
      { removeUnusedNS: true },
      { cleanupIDs: true },
      { cleanupNumericValues: true },
      { moveElemsAttrsToGroup: true },
      { moveGroupAttrsToElems: true },
      { collapseGroups: true },
      { removeRasterImages: false },
      { mergePaths: true },
      { convertShapeToPath: true },
      { sortAttrs: true },
      { removeDimensions: true },
    ],
  },
};
function compileScripts(babelEnv, destDir) {
  const { scripts } = paths;
  process.env.BABEL_ENV = babelEnv;
  return src(scripts)
    .pipe(
      gulpBabel({
        presets: ["@babel/env", "@babel/typescript", "@babel/react"],
        plugins: ["@babel/plugin-transform-runtime"],
        env: {
          esm: {
            presets: [
              [
                "@babel/env",
                {
                  modules: false,
                },
              ],
            ],
            plugins: [
              [
                "@babel/plugin-transform-runtime",
                {
                  useESModules: true,
                },
              ],
            ],
          },
          lib: {
            presets: ["@babel/env", "@babel/typescript", "@babel/react"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      })
    ) // 使用gulp-babel处理
    .pipe(
      through2.obj(function z(file, encoding, next) {
        this.push(file.clone());
        // 找到目标
        if (file.path.match(/(\/|\\)style(\/|\\)index\.js/)) {
          const content = file.contents.toString(encoding);
          file.contents = Buffer.from(cssInjection(content)); // 文件内容处理
          file.path = file.path.replace(/index\.js/, "css.js"); // 文件重命名
          this.push(file); // 新增该文件
          next();
        } else {
          next();
        }
      })
    )
    .pipe(gulp.dest(destDir));
}
const handleSVgFile = () => {
  return src(paths.svg)
    .pipe(svgmin(paths.svgConfig))
    .pipe(transform())
    .pipe(dest(paths.dest.svgInfo));
};
const clean = (dirs, options = {}) => {
  return () => del(dirs, options);
};
const handleSvgTsFile = () => {
  return src("./util/SvgInfo.ts").pipe(dest(paths.ts));
};
const compileESM = () => {
  const { dest } = paths;
  return compileScripts("esm", dest.esm);
};
const compileCJS = () => {
  const { dest } = paths;
  return compileScripts("cjs", dest.lib);
};
const copyCjsLess = () => {
  return src(paths.styles).pipe(dest(paths.dest.lib));
};
const copyEsmLess = () => {
  return src(paths.styles).pipe(dest(paths.dest.esm));
};
const esmLess2css = () => {
  return src(paths.styles)
    .pipe(less()) // 处理less文件
    .pipe(autoprefixer()) // 根据browserslistrc增加前缀
    .pipe(cssnano({ zindex: false, reduceIdents: false })) // 压缩
    .pipe(dest(paths.dest.esm));
};
const cjsLess2css = () => {
  return src(paths.styles)
    .pipe(less()) // 处理less文件
    .pipe(autoprefixer()) // 根据browserslistrc增加前缀
    .pipe(cssnano({ zindex: false, reduceIdents: false })) // 压缩
    .pipe(dest(paths.dest.lib));
};

function cssInjection(content) {
  return content
    .replace(/\/style\/?'/g, "/style/css'")
    .replace(/\/style\/?"/g, '/style/css"')
    .replace(/\.less/g, ".css");
}
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
    handleSVgFile,
    handleSvgTsFile,
  ],
  icon: [handleSVgFile, handleSvgTsFile],
};

buildScripts = series(...envConfig[process.env.GULP_ENV]);
// 并行任务 后续加入样式处理 可以并行处理
const build = parallel(
  clean(["../dist", "../esm", "../lib", "svg"], { force: true }),
  buildScripts
);

exports.build = build;

exports.default = build;
