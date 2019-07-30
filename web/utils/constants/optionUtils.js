module.exports = { 
  mapBoxConfig: function(w, h, lat, lon, zoom) {
    return {
      width: w,
      height: h,
      latitude: lat,
      longitude: lon,
      zoom: zoom
    }
  }
}