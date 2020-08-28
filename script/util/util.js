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

module.exports={
    camelToDash,
    dashToCamel
}