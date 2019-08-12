module.exports = {
  capitalCaseString: function(string) {
    const split = string.toLowerCase().split(" ");
    const result = split.map((word) => {
      let splice = word.slice(1, word.length);
      return word[0].toUpperCase() + splice;
    });
    return result.join(" ");
  },
  uppercaseString: function(string) {
    return string.split(" ").join(" ").toUpperCase();
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
  }
}