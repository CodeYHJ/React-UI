const path = require("path");
const pathFn = (url) => {
  const root = path.resolve(__dirname, "../..");
  return path.resolve(root, url);
};
module.exports = pathFn;
