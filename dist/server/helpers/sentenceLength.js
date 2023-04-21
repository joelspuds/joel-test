'use strict';

const sentenceLength = exports.sentenceLength = string => {
  let tempNumber = 60;
  let doneString = '';

  if (string.length > tempNumber) {
    let string1 = string.substring(0, tempNumber);
    let string2 = string.substring(tempNumber);
    doneString = string1 + '<span class="hellip">&hellip;</span>' + ' <span class="post-hellip">' + string2 + '</span>';
  } else {
    doneString = string;
  }

  return doneString;
};