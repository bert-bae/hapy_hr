module.exports = {
  createContactObject: function(name, email) {
    return {
      name,
      email
    }
  },
  createEstablishmentObject: function(name, city, addressLine, province, postalCode, description) {
    const readableAddress = this.__createReadableAddress(city, addressLine, province, postalCode);
    return {
      address: {
        city,
        addressLine,
        province,
        postalCode,
        readableAddress,
      },
      name,
      description,
    }
  },
  __createReadableAddress: function(city, addressLine, province, postalCode) {
    return `${addressLine}, ${city}, ${province}, ${postalCode}`;
  }
}