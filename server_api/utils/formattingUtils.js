module.exports = {
  capitalCaseString: function(string) {
    const split = string.toLowerCase().split(" ");
    const result = split.map((word) => {
      let splice = word.slice(1, word.length);
      return word[0].toUpperCase() + splice;
    });
    return result.join(" ");
  },
  uppercasePostalCode: function(string) {
    return string.join(" ").toUpperCase();
  }
}