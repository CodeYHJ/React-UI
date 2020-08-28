const through = require("through2");
const parseXML = require("@rgrove/parse-xml");
const SVGO = require("svgo");
const { generateTemplete } = require("./templete");
const { dashToCamel } = require("./util");
const filterXML = (svgStr) => {
  let xmlObj = parseXML(svgStr);
  return xmlObj.children[0];
};

const handleSVGAST = (obj) => {
  return Object.keys(obj).reduce((s, key) => {
    const value = obj[key];
    if (key === "name" || key === "attributes") {
      s[key] = value;
    }
    if (key === "children") {
      obj[key].forEach((el) => {
        if (el.name === "path") {
          s.path = el.attributes.d;
        }
      });
    }
    return s;
  }, {});
};

const createFile = (file, svg) => {
  if (file.basename) {
    file.basename = file.basename.replace(/.svg/g, "");
    file.basename = dashToCamel(file.basename);
    const templete = generateTemplete(file.basename, JSON.stringify(svg));
    file.contents = Buffer.from(templete);
    file.extname = ".ts";
  }
};
const transform = () => {
  return through.obj((file, encoding, done) => {
    if (file.isBuffer()) {
      const before = file.contents.toString(encoding);
      try {
        const ast = filterXML(before);
        const svg = handleSVGAST(ast);
        createFile(file, svg);
        done(null, file);
      } catch {
        done(err, null);
      }
    } else {
      done(null, file);
    }
  });
};
module.exports = { transform };
