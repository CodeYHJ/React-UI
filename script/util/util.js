const camelToDash = (str) => {
  return str.replace(/([A-Z])/g, function ($1) {
    return "-" + $1.toLowerCase();
  });
};

const dashToCamel = (str) => {
  return str.replace(/(\-[a-z])/g, function ($1) {
    return $1.toUpperCase().replace("-", "");
  });
};

const fristToUpperCase = (str) => {
  return str.replace(/^([a-z])/g, function ($1) {
    return $1.toUpperCase();
  });
};

module.exports = {
  camelToDash,
  dashToCamel,
  fristToUpperCase,
};
