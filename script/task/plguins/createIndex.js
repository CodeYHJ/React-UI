const through = require("through2");
const {
  generateIconExportTemplete,
  generateIconIndexTemplete,
  greateSvgIconIndexTemplete,
} = require("./templete");

const createExportIcons = () => {
  return through.obj((file, encoding, done) => {
    if (file.isBuffer()) {
      try {
        const name = file.basename.replace(/.tsx/g, "");
        const str = generateIconExportTemplete(name);
        file.contents = Buffer.from(str);
        done(null, file);
      } catch (err) {
        done(err, null);
      }
    } else {
      done(null, file);
    }
  });
};
const createSvgIconIndex = () => {
  return through.obj((file, encoding, done) => {
    if (file.isBuffer()) {
      try {
        const content = file.contents.toString(encoding);
        const str = greateSvgIconIndexTemplete(content);
        file.contents = Buffer.from(str);
        file.basename = "index";
        file.extname = ".tsx";
        done(null, file);
      } catch (error) {
        done(err, null);
      }
    } else {
      done(null, file);
    }
  });
};
const createIndex = () => {
  return through.obj((file, encoding, done) => {
    if (file.isBuffer()) {
      try {
        const str = generateIconIndexTemplete();
        file.contents = Buffer.from(str);
        file.basename = "index";
        file.extname = ".tsx";
        done(null, file);
      } catch (err) {
        done(err, null);
      }
    } else {
      done(null, file);
    }
  });
};
module.exports = { createExportIcons, createSvgIconIndex, createIndex };
