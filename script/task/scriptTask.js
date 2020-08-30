const { src, series, parallel, dest } = require("gulp");
const gulpBabel = require("gulp-babel");
const less = require("gulp-less");
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const through2 = require("through2");
const { paths } = require("./config");

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
    .pipe(dest(destDir));
}

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
module.exports = {
  compileESM,
  compileCJS,
  copyCjsLess,
  copyEsmLess,
  esmLess2css,
  cjsLess2css,
};
