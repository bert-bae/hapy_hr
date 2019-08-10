module.exports = {
  mapboxApi: function(endpoint, token) {
    return `https://api.mapbox.com/${endpoint}&access_token=${token}`;
  }
}