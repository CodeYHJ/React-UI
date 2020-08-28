const through = require("through2");

const { generateIconBaseTemplete } = require("./templete");

const { fristToUpperCase } = require("../../util/util");

const createIcon = () => {
  return through.obj((file, encoding, done) => {
    if (file.isBuffer()) {
      try {
        const tsName = file.basename.replace(/Info\.ts/g, "");
        const componentName = fristToUpperCase(tsName) + "Icon";
        const str = generateIconBaseTemplete(tsName, componentName);
        file.contents = Buffer.from(str);
        file.basename = componentName;
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
module.exports = { createIcon };
