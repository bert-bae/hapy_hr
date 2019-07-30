module.exports = {
  deepCopy: function(object) {
    return JSON.parse(JSON.stringify(object));
  }
}