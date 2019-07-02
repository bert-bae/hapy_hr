import moment from 'moment';

module.exports = {
  setVoucherDate: function(time) {
    const cHour = moment(time).hours();
    // If time is past 8PM, set voucher for the next day
    // Otherwise, set it for 8PM of the current date
    if (Number(cHour) > 20) {
      return moment(time).add(1,'days').hours(20).minutes(0).seconds(0).format('YYYY-MM-DD HH:mm:ss');
    }
    return moment(time).hours(20).minutes(0).seconds(0).format('YYYY-MM-DD HH:mm:ss');
  }
}