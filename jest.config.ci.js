const config = require("./jest.config");
module.exports = Object.assign({}, config, {
  collectCoverage: true,
  reporters: ["default", "jest-junit"],
});
