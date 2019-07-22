const successLocation = (position) => {
  console.log(position);
  return {
    success: true,
    position,
  }
}

const errorLocation = (error) => {
  console.log(`this is an error, should appear ${error}`);
  return {
    success: false,
    error,
  }
}

module.exports = {
  getUserLocation: function() {
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation);
  }
}