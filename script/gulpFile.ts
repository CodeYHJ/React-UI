import gulp from 'gulp'
import gulpBabel from 'gulp-babel'


const paths = {
    dest: {
        lib: '../dist/lib',
        esm: '../dist/esm',
        dist: '../dist/dist',
    },
    styles: '../lib/**/*.less',
    scripts: ['../lib/**/*.{ts,tsx}']
}
const compileCJS = () => {
    const { dest, scripts } = paths;
    return gulp
        .src(scripts)
        .pipe(gulpBabel()) // 使用gulp-babel处理
        .pipe(gulp.dest(dest.lib));
}
// 并行任务 后续加入样式处理 可以并行处理
const build = gulp.parallel(compileCJS);

exports.build = build;

exports.default = build;