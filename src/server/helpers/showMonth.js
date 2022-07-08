const showMonth = (exports.showMonth = monthNumber => {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return months[parseInt(monthNumber - 1)];
});
