export default (node) => {
  if (node.format === "int-or-string") {
    return "string | number";
  }
};
