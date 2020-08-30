const { src, dest } = require("gulp");
const svgmin = require("gulp-svgmin");
const concat = require("gulp-concat");
const { paths } = require("./config");
const { transform } = require("./plguins/transformXmlAst");
const { createIcon } = require("./plguins/createIcon");
const {
  createExportIcons,
  createIndex,
  createSvgIconIndex,
} = require("./plguins/createIndex");

const handleSvgInfoFile = () => {
  // return src(paths.entry.testSvg)
  return src(paths.entry.svg)
    .pipe(svgmin(paths.svgConfig))
    .pipe(transform())
    .pipe(dest(paths.dest.distInfo));
};

const handleSvgTsFile = () => {
  return src(paths.entry.ts).pipe(dest(paths.dest.distTs));
};

const handleSvgIcon = () => {
  return src(paths.entry.distInfo)
    .pipe(createIcon())
    .pipe(dest(paths.dest.distIcon))
    .pipe(createExportIcons())
    .pipe(concat("cach.tsx"))
    .pipe(createSvgIconIndex())
    .pipe(dest(paths.dest.distIcon));
};
const handleSvgIndex = () => {
  return src(paths.entry.distIcon)
    .pipe(createIndex())
    .pipe(dest(paths.dest.index));
};
module.exports = {
  handleSvgInfoFile,
  handleSvgTsFile,
  handleSvgIcon,
  handleSvgIndex,
};
