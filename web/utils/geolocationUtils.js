module.exports = {
  getUserLocation: function(success, error) {
    navigator.geolocation.getCurrentPosition(success, error);
  }
}