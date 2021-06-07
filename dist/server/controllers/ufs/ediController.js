'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ediIndexGet = ediIndexGet;
exports.ediIndexPost = ediIndexPost;
exports.ediHomeGet = ediHomeGet;
exports.ediHomePost = ediHomePost;
exports.ediProfileGet = ediProfileGet;
exports.ediProfilePost = ediProfilePost;
exports.ediEDIGet = ediEDIGet;
exports.ediEDIPost = ediEDIPost;
exports.ediDOBGet = ediDOBGet;
exports.ediDOBPost = ediDOBPost;
exports.ediConditionsGet = ediConditionsGet;
exports.ediConditionsPost = ediConditionsPost;
exports.ediDisabilitiesGet = ediDisabilitiesGet;
exports.ediDisabilitiesPost = ediDisabilitiesPost;
exports.ediReligionGet = ediReligionGet;
exports.ediReligionPost = ediReligionPost;
exports.ediEthnicGroupGet = ediEthnicGroupGet;
exports.ediEthnicGroupPost = ediEthnicGroupPost;
exports.ediEthnicSubGet = ediEthnicSubGet;
exports.ediEthnicSubPost = ediEthnicSubPost;
exports.ediSexGet = ediSexGet;
exports.ediSexPost = ediSexPost;
exports.ediGenderGet = ediGenderGet;
exports.ediGenderPost = ediGenderPost;
exports.ediOrientationGet = ediOrientationGet;
exports.ediOrientationPost = ediOrientationPost;
exports.ediConfirmGet = ediConfirmGet;
exports.ediConfirmPost = ediConfirmPost;
let generalData = require('./data');
let genericFunctions = require('./generic');
let userData = {};
/*userData = {
  religion: 'Any other religion',
  otherReligion: 'Jedi',
  ethnicity: 'White',
  otherEthnicGroup: '',
  ethnicSubGroup: 'Another background',
  otherEthnicSubGroup: '',
  sex: 'Prefer not to say',
  gender: 'No',
  otherGender: 'testing gender',
  genderText: 'Different from assigned at birth',
  dobDay: '12',
  dobMonth: '3',
  dobYear: '1980',
  wordMonth: 'March',
  conditions: 'Yes',
  disabilities: 'Other disability',
  disabilitiesOther: 'Sore feet',
  orientation: 'Straight or Bisexual',
  otherOrientation: '',
};*/

const backToConfirm = {
  url: '/prototypes/edi/edi-confirm',
  linkText: 'Back to confirm'
};

/* **************

    EDI index

*************** */
function ediIndexGet(req, res) {
  let viewData;

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
  }

  const ediDone = req.session.ediDone;
  viewData = {
    ediDone
  };

  return res.render('prototypes/edi/index', viewData);
}

function ediIndexPost(req, res) {
  const {} = req.body;
  console.log(req.body);

  let redirectURL = '/prototypes/edi/';
  return res.redirect(redirectURL);
}

/* **************

    EDI home

*************** */
function ediHomeGet(req, res) {
  let viewData;

  const ediDone = req.session.ediDone;

  viewData = {
    ediDone
  };

  return res.render('prototypes/edi/home', viewData);
}

function ediHomePost(req, res) {
  const {} = req.body;
  console.log(req.body);

  let redirectURL = '/prototypes/edi/';
  return res.redirect(redirectURL);
}

/* **************

    EDI profile

*************** */
function ediProfileGet(req, res) {
  let viewData;

  const ediDone = req.session.ediDone;

  viewData = {
    ediDone
  };

  return res.render('prototypes/edi/profile', viewData);
}

function ediProfilePost(req, res) {
  const {} = req.body;
  console.log(req.body);

  let redirectURL = '/prototypes/edi/';
  return res.redirect(redirectURL);
}

/* **************

    EDI edi page

*************** */
function ediEDIGet(req, res) {
  let viewData;

  const ediDone = req.session.ediDone;

  viewData = {
    ediDone
  };

  return res.render('prototypes/edi/edi', viewData);
}

function ediEDIPost(req, res) {
  const {} = req.body;
  console.log(req.body);

  let redirectURL = '/prototypes/edi/';

  console.log(userData);
  return res.redirect(redirectURL);
}

/* **************

    EDI DoB

*************** */
function ediDOBGet(req, res) {
  let viewData, dobDay, dobMonth, dobYear;

  const ediDone = req.session.ediDone;

  let edit = req.param('edit');

  viewData = {
    ediDone,
    userData,
    edit
  };

  return res.render('prototypes/edi/edi-dob', viewData);
}

function ediDOBPost(req, res) {
  const { dobDay, dobMonth, dobYear } = req.body;

  let wordMonth, months;

  months = generalData.shortMonths;
  // wordMonth = months[parseInt(dobMonth) - 1].substring(0, 3);
  wordMonth = months[parseInt(dobMonth) - 1];

  userData.dobDay = dobDay;
  userData.dobMonth = dobMonth;
  userData.dobYear = dobYear;
  userData.wordMonth = wordMonth;

  let redirectURL = '/prototypes/edi/edi-conditions';

  let edit = req.param('edit');
  if (edit === 'true') {
    redirectURL = '/prototypes/edi/edi-confirm';
  }

  console.log(userData);
  return res.redirect(redirectURL);
}

/* **************

    EDI Conditions illnesses

*************** */
function ediConditionsGet(req, res) {
  let viewData;

  let edit = req.param('edit');
  if (edit === 'true') {
    req.session.conditionsEdit = true;
  }

  viewData = {
    userData,
    edit,
    backToConfirm
  };

  return res.render('prototypes/edi/edi-conditions', viewData);
}

function ediConditionsPost(req, res) {
  const { conditions } = req.body;
  console.log(req.body);

  userData.conditions = conditions;

  let edit = req.param('edit');
  if (edit === 'true') {
    req.session.conditionsEdit = true;
  }

  let redirectURL = '/prototypes/edi/edi-religion';

  if (conditions === 'Yes') {
    if (edit === 'true') {
      redirectURL = '/prototypes/edi/edi-disabilities?edit=true';
    } else {
      redirectURL = '/prototypes/edi/edi-disabilities';
    }
  }

  if (conditions === 'No') {
    userData.disabilities = null;
    userData.disabilitiesOther = null;

    if (edit === 'true') {
      redirectURL = '/prototypes/edi/edi-confirm';
    }
  }

  console.log(userData);
  return res.redirect(redirectURL);
}

/* **************

    EDI Disabilities

*************** */
function ediDisabilitiesGet(req, res) {
  let viewData;

  // const conditionsEdit = req.session.conditionsEdit;
  req.session.conditionsEdit = null;

  let edit = req.param('edit');

  viewData = {
    userData,
    edit,
    backToConfirm
  };

  return res.render('prototypes/edi/edi-disabilities', viewData);
}

function ediDisabilitiesPost(req, res) {
  const { disabilities, disabilitiesOther } = req.body;
  // console.log(req.body);

  userData.disabilities = disabilities;
  userData.disabilitiesOther = disabilitiesOther;

  let redirectURL = '/prototypes/edi/edi-religion';

  let edit = req.param('edit');
  if (edit === 'true') {
    redirectURL = '/prototypes/edi/edi-confirm';
  }

  console.log(userData);
  return res.redirect(redirectURL);
}

/* **************

    EDI religion

*************** */
function ediReligionGet(req, res) {
  let viewData, religion, otherReligion;

  // const ediDone = req.session.ediDone;

  let edit = req.param('edit');

  religion = userData.religion;
  otherReligion = userData.otherReligion;

  viewData = {
    edit,
    religion,
    userData,
    backToConfirm
  };

  return res.render('prototypes/edi/edi-religion', viewData);
}

function ediReligionPost(req, res) {
  const { religion, otherReligion } = req.body;
  console.log(req.body);

  let redirectURL = '/prototypes/edi/edi-ethnic-group';

  let edit = req.param('edit');
  if (edit === 'true') {
    redirectURL = '/prototypes/edi/edi-confirm';
  }

  userData.religion = religion;
  userData.otherReligion = otherReligion;
  if (religion !== 'Any other religion') {
    userData.otherReligion = null;
  }

  console.log(userData);
  return res.redirect(redirectURL);
}

/* **************

    EDI ethnic group

*************** */
function ediEthnicGroupGet(req, res) {
  let viewData, redirectURL;

  let edit = req.param('edit');

  viewData = {
    edit,
    userData,
    backToConfirm
  };

  return res.render('prototypes/edi/edi-ethnic-group', viewData);
}

function ediEthnicGroupPost(req, res) {
  const { ethnicity, otherEthnicGroup } = req.body;
  console.log(req.body);

  userData.ethnicity = ethnicity;
  userData.otherEthnicGroup = otherEthnicGroup;

  let redirectURL = '/prototypes/edi/edi-ethnic-sub-group';

  let edit = req.param('edit');
  if (edit === 'true') {
    redirectURL = '/prototypes/edi/edi-ethnic-sub-group?edit=true';
  }

  if (ethnicity === 'Another ethnic group' || ethnicity === 'Prefer not to say') {
    redirectURL = '/prototypes/edi/edi-sex';
  }

  console.log(userData);
  return res.redirect(redirectURL);
}

/* **************

    EDI ethnic SUB group

*************** */
function ediEthnicSubGet(req, res) {
  let viewData;

  let edit = req.param('edit');

  viewData = {
    edit,
    userData,
    backToConfirm
  };

  return res.render('prototypes/edi/edi-ethnic-sub-group', viewData);
}

function ediEthnicSubPost(req, res) {
  const { ethnicSubGroup, otherEthnicSubGroup } = req.body;
  console.log(req.body);

  userData.ethnicSubGroup = ethnicSubGroup;
  userData.otherEthnicSubGroup = otherEthnicSubGroup;

  let redirectURL = '/prototypes/edi/edi-sex';

  let edit = req.param('edit');
  if (edit === 'true') {
    redirectURL = '/prototypes/edi/edi-confirm';
  }

  console.log(userData);
  return res.redirect(redirectURL);
}

/* **************

    EDI sex

*************** */
function ediSexGet(req, res) {
  let viewData;

  let edit = req.param('edit');

  viewData = {
    edit,
    userData,
    backToConfirm
  };

  return res.render('prototypes/edi/edi-sex', viewData);
}

function ediSexPost(req, res) {
  const { sex } = req.body;
  console.log(req.body);

  userData.sex = sex;

  let redirectURL = '/prototypes/edi/edi-gender';

  let edit = req.param('edit');
  if (edit === 'true') {
    redirectURL = '/prototypes/edi/edi-confirm';
  }

  console.log(userData);
  return res.redirect(redirectURL);
}

/* **************

    EDI gender

*************** */
function ediGenderGet(req, res) {
  let viewData, gender;

  let edit = req.param('edit');

  viewData = {
    edit,
    userData,
    backToConfirm
  };

  return res.render('prototypes/edi/edi-gender', viewData);
}

function ediGenderPost(req, res) {
  const { gender, otherGender } = req.body;
  console.log(req.body);

  // const sex = userData.sex;
  userData.gender = gender;
  userData.otherGender = otherGender;

  if (gender === 'Yes') {
    userData.genderText = 'Same as assigned at birth';
  } else {
    userData.genderText = 'Different from assigned at birth';
  }

  if (gender === 'Yes' || gender === 'Prefer not to say') {
    userData.otherGender = null;
  }

  if (gender === 'Prefer not to say') {
    userData.genderText = 'Prefer not to say';
  }

  console.log(userData);

  let redirectURL = '/prototypes/edi/edi-orientation';

  let edit = req.param('edit');
  if (edit === 'true') {
    redirectURL = '/prototypes/edi/edi-confirm';
  }

  return res.redirect(redirectURL);
}

/* **************

    EDI orientation

*************** */
function ediOrientationGet(req, res) {
  let viewData;

  let edit = req.param('edit');

  viewData = {
    edit,
    userData,
    backToConfirm
  };

  return res.render('prototypes/edi/edi-orientation', viewData);
}

function ediOrientationPost(req, res) {
  const { orientation, otherOrientation } = req.body;
  console.log(req.body);

  userData.orientation = orientation;
  userData.otherOrientation = otherOrientation;

  let redirectURL = '/prototypes/edi/edi-confirm';

  if (orientation !== 'Other sexual orientation') {
    userData.otherOrientation = null;
  }

  let edit = req.param('edit');
  if (edit === 'true') {
    redirectURL = '/prototypes/edi/edi-confirm';
  }

  console.log(userData);
  return res.redirect(redirectURL);
}

/* **************

    EDI Confirm

*************** */
function ediConfirmGet(req, res) {
  let viewData, religion, wordMonth;

  const ediDone = req.session.ediDone;

  viewData = {
    ediDone,
    userData,
    backToConfirm
  };

  return res.render('prototypes/edi/edi-confirm', viewData);
}

function ediConfirmPost(req, res) {
  const {} = req.body;
  console.log(req.body);

  let redirectURL = '/prototypes/edi/edi';

  return res.redirect(redirectURL);
}