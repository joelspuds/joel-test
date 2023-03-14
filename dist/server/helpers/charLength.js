'use strict';

const charLength = exports.charLength = number => {
  let tempNumber = number.toString();

  if (tempNumber.length == 1) {
    return '0' + tempNumber;
  } else {
    return tempNumber;
  }
};