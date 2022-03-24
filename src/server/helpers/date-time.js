const dayAndTime = (exports.dayAndTime = format => {
  let d = new Date();
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let hoursHumanised;

  if ((format = 'dataAndTime')) {
    // return d.getDate() + ' ' + months[d.getMonth()] + ' at ' + d.getHours() + ':' + d.getMinutes();

    let amOrPm;
    let amPmHours = d.getHours();
    let actualHours;
    if (parseInt(amPmHours) >= 12) {
      amOrPm = 'pm';
      actualHours = parseInt(amPmHours) - 12;
    } else {
      amOrPm = 'am';
      actualHours = amPmHours;
    }

    // return d.getDate() + ' ' + months[d.getMonth()] + ' at ' + d.getHours() + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
    return (
      d.getDate() +
      ' ' +
      months[d.getMonth()] +
      ' ' +
      d.getFullYear() +
      ' ' +
      ' at ' +
      actualHours +
      ':' +
      (d.getMinutes() < 10 ? '0' : '') +
      d.getMinutes() +
      ' ' +
      amOrPm
    );
  } else {
    return d.getTime();
  }
});
