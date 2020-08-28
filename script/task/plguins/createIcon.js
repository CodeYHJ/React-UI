const through = require("through2");

const { generateIconBaseTemplete } = require("./templete");

const { fristToUpperCase } = require("../../util/util");

const createIcon = () => {
  return through.obj((file, encoding, done) => {
    if (file.isBuffer()) {
      try {
        let name = file.basename.replace(/Info\.ts/g, "");
        name = fristToUpperCase(name) + "Icon";
        const str = generateIconBaseTemplete(name);
        file.contents = Buffer.from(str);
        file.basename = name;
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
