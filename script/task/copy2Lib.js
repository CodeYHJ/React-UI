const { src, dest } = require("gulp");
const { paths } = require("./config");

const copy2Lib = () => {
  return src(paths.entry.distSvg).pipe(dest(paths.dest.iconLib));
};
module.exports = { copy2Lib };
