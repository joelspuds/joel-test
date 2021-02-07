const dayAndTime = (exports.dayAndTime = format => {
  var d = new Date();
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  if ((format = 'dataAndTime')) {
    // return d.getDate() + ' ' + months[d.getMonth()] + ' at ' + d.getHours() + ':' + d.getMinutes();
    return d.getDate() + ' ' + months[d.getMonth()] + ' at ' + d.getHours() + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
  } else {
    return d.getTime();
  }
});
