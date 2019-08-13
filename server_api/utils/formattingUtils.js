module.exports = {
  deepCopy: function(object) {
    return JSON.parse(JSON.stringify(object));
  },
  capitalCaseString: function(string) {
    const split = string.toLowerCase().split(" ");
    const result = split.map((word) => {
      if (word.trim()) {
        let splice = word.slice(1, word.length);
        return word[0].toUpperCase() + splice;
      }
      return word;
    });
    return result.join(" ");
  },
  uppercaseString: function(string) {
    if (string.trim()) {
      return string.split(" ").join(" ").toUpperCase();
    }
    return null;
  },
  formatEstablishmentData: function(establishment, ownerId) {
    return {
      address_line: this.capitalCaseString(establishment.address.addressLine),
      city: this.capitalCaseString(establishment.address.city),
      province: this.uppercaseString(establishment.address.province),
      postal_code: this.uppercaseString(establishment.address.postalCode),
      name: this.capitalCaseString(establishment.name),
      description: establishment.description,
      ownerId
    }
  },
  formatMenuItemWeekday: function(item) {
    let copy = this.deepCopy(item);
    if (copy && Array.isArray(copy.weekday)) {
      copy.weekday = copy.weekday.join("");
      return copy;
    }
    copy.weeday = '';
    return copy;
  }
}