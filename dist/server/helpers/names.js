'use strict';

let generalData = require('../controllers/ufs/data');
const namer = exports.namer = format => {
  let titles = ['Dr.', 'Prof.', ''];
  let firstNames = generalData.firstNamesList;
  let lastNames = generalData.lastNamesList;
  let fakeEmail;
  let fullName;
  let result;

  let title;
  if (format == 'addHonorific') {
    title = titles[Math.floor(Math.random() * titles.length)] + ' ';
    fullName = title + firstNames[Math.floor(Math.random() * firstNames.length)] + ' ' + lastNames[Math.floor(Math.random() * lastNames.length)];
  } else if (format == 'asEmail') {
    title = ' ';
    fakeEmail = firstNames[Math.floor(Math.random() * firstNames.length)].toLowerCase() + '.' + lastNames[Math.floor(Math.random() * lastNames.length)].toLowerCase() + '@organisation.ac.uk';
    fullName = fakeEmail;
  } else {
    title = '';
    fullName = title + firstNames[Math.floor(Math.random() * firstNames.length)] + ' ' + lastNames[Math.floor(Math.random() * lastNames.length)];
  }

  return fullName;
};