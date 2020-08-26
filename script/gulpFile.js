const gulp = require("gulp");
const gulpBabel = require("gulp-babel");
const less = require("gulp-less");
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const through2 = require("through2");
const path = require("path");
const fs = require("fs");

const formatterLess = () => {
  const targetObj = {};
  const lessVar = fs.readFileSync("../lib/var.less").toString();
  const filterRandN = lessVar.replace(/(\r|\n)*/g, "");

  const targetLessStrList = filterRandN.split(";");

  const filterEmtyStr = targetLessStrList.filter((less) => less !== "");

  filterEmtyStr.forEach((less) => {
    const [key, Value] = less.split(":");
    targetObj[key] = Value;
  });
  return targetObj;
};
const paths = {
  dest: {
    lib: "../lib",
    esm: "../esm",
    dist: "../dist",
  },
  styles: "../lib/**/*.less",
  scripts: ["../lib/**/*.{ts,tsx}", "!../lib/**/__tests__/*.{ts,tsx}"],
};
function compileScripts(babelEnv, destDir) {
  const { scripts } = paths;
  process.env.BABEL_ENV = babelEnv;
  return gulp
    .src(scripts)
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
const compileCJS = () => {
  const { dest } = paths;
  return compileScripts("cjs", dest.lib);
};
const compileESM = () => {
  const { dest } = paths;
  return compileScripts("esm", dest.esm);
};
const copyLess = () => {
  return gulp
    .src(paths.styles)
    .pipe(gulp.dest(paths.dest.lib))
    .pipe(gulp.dest(paths.dest.esm));
};
const less2css = () => {
  return gulp
    .src(paths.styles)
    .pipe(less()) // 处理less文件
    .pipe(autoprefixer()) // 根据browserslistrc增加前缀
    .pipe(cssnano({ zindex: false, reduceIdents: false })) // 压缩
    .pipe(gulp.dest(paths.dest.lib))
    .pipe(gulp.dest(paths.dest.esm));
};

function cssInjection(content) {
  return content
    .replace(/\/style\/?'/g, "/style/css'")
    .replace(/\/style\/?"/g, '/style/css"')
    .replace(/\.less/g, ".css");
}

// 并行任务 后续加入样式处理 可以并行处理
const buildScripts = gulp.series(compileCJS, compileESM);

const build = gulp.parallel(buildScripts, copyLess, less2css);

// const build = gulp.parallel(buildScripts);

exports.build = build;

exports.default = build;
