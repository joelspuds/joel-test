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
  otherGender: 'non-binary',
  genderText: 'Different from assigned at birth',
  dobDay: '12',
  dobMonth: '3',
  dobYear: '1980',
  wordMonth: 'March',
  conditions: 'Yes',
  disabilities: 'Other disability',
  disabilitiesOther: 'Sore feet',
  orientation: 'Straight or heterosexual',
  otherOrientation: '',
};*/

let backToConfirm = {
  url: '/prototypes/edi/edi-confirm',
  linkText: 'Back to confirm',
};
let confirmURL = '/prototypes/edi/edi-confirm';

/* **************

    EDI index

*************** */
export function ediIndexGet(req, res) {
  let viewData;

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
    userData = {};
  }

  const ediDone = req.session.ediDone;
  viewData = {
    ediDone,
  };

  return res.render('prototypes/edi/index', viewData);
}

export function ediIndexPost(req, res) {
  const {} = req.body;
  console.log(req.body);

  let redirectURL = '/prototypes/edi/';
  return res.redirect(redirectURL);
}

/* **************

    EDI home

*************** */
export function ediHomeGet(req, res) {
  let viewData;

  const ediDone = req.session.ediDone;

  viewData = {
    ediDone,
  };

  return res.render('prototypes/edi/home', viewData);
}

export function ediHomePost(req, res) {
  const {} = req.body;
  console.log(req.body);

  let redirectURL = '/prototypes/edi/';
  return res.redirect(redirectURL);
}

/* **************

    EDI profile

*************** */
export function ediProfileGet(req, res) {
  let viewData;

  const ediDone = req.session.ediDone;

  viewData = {
    ediDone,
  };

  return res.render('prototypes/edi/profile', viewData);
}

export function ediProfilePost(req, res) {
  const {} = req.body;
  console.log(req.body);

  let redirectURL = '/prototypes/edi/';
  return res.redirect(redirectURL);
}

/* **************

    EDI edi page

*************** */
export function ediEDIGet(req, res) {
  let viewData;

  const ediDone = req.session.ediDone;

  viewData = {
    ediDone,
  };

  return res.render('prototypes/edi/edi', viewData);
}

export function ediEDIPost(req, res) {
  const {} = req.body;
  console.log(req.body);

  let redirectURL = '/prototypes/edi/';

  console.log(userData);
  return res.redirect(redirectURL);
}

/* **************

    EDI DoB

*************** */
export function ediDOBGet(req, res) {
  let viewData, dobDay, dobMonth, dobYear;

  const ediDone = req.session.ediDone;

  let edit = req.param('edit');

  viewData = {
    ediDone,
    userData,
    edit,
  };

  return res.render('prototypes/edi/edi-dob', viewData);
}

export function ediDOBPost(req, res) {
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
    redirectURL = confirmURL;
  }

  console.log(userData);
  return res.redirect(redirectURL);
}

/* **************

    EDI Conditions illnesses

*************** */
export function ediConditionsGet(req, res) {
  let viewData;

  let edit = req.param('edit');
  if (edit === 'true') {
    req.session.conditionsEdit = true;
  }

  viewData = {
    userData,
    edit,
    backToConfirm,
  };

  return res.render('prototypes/edi/edi-conditions', viewData);
}

export function ediConditionsPost(req, res) {
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
      redirectURL = confirmURL;
    }
  }

  console.log(userData);
  return res.redirect(redirectURL);
}

/* **************

    EDI Disabilities

*************** */
export function ediDisabilitiesGet(req, res) {
  let viewData;

  // const conditionsEdit = req.session.conditionsEdit;
  req.session.conditionsEdit = null;

  let edit = req.param('edit');

  viewData = {
    userData,
    edit,
    backToConfirm,
  };

  return res.render('prototypes/edi/edi-disabilities', viewData);
}

export function ediDisabilitiesPost(req, res) {
  const { disabilities, disabilitiesOther } = req.body;
  // console.log(req.body);

  userData.disabilities = disabilities;
  userData.disabilitiesOther = disabilitiesOther;

  let redirectURL = '/prototypes/edi/edi-religion';

  let edit = req.param('edit');
  if (edit === 'true') {
    redirectURL = confirmURL;
  }

  console.log(userData);
  return res.redirect(redirectURL);
}

/* **************

    EDI religion

*************** */
export function ediReligionGet(req, res) {
  let viewData, religion, otherReligion;

  // const ediDone = req.session.ediDone;

  let edit = req.param('edit');

  religion = userData.religion;
  otherReligion = userData.otherReligion;

  viewData = {
    edit,
    religion,
    userData,
    backToConfirm,
  };

  return res.render('prototypes/edi/edi-religion', viewData);
}

export function ediReligionPost(req, res) {
  const { religion, otherReligion } = req.body;
  console.log(req.body);

  let redirectURL = '/prototypes/edi/edi-ethnic-group';

  let edit = req.param('edit');
  if (edit === 'true') {
    redirectURL = confirmURL;
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
export function ediEthnicGroupGet(req, res) {
  let viewData, redirectURL;

  let edit = req.param('edit');

  viewData = {
    edit,
    userData,
    backToConfirm,
  };

  return res.render('prototypes/edi/edi-ethnic-group', viewData);
}

export function ediEthnicGroupPost(req, res) {
  const { ethnicity, otherEthnicGroup } = req.body;
  console.log(req.body);

  userData.ethnicity = ethnicity;
  userData.otherEthnicGroup = otherEthnicGroup;

  let redirectURL = '/prototypes/edi/edi-ethnic-sub-group';

  let edit = req.param('edit');
  if (edit === 'true') {
    redirectURL = '/prototypes/edi/edi-ethnic-sub-group?edit=true';
  }

  if (
    ethnicity === 'Another ethnic group' ||
    ethnicity === 'Prefer not to say' ||
    ethnicity === '' ||
    ethnicity === undefined ||
    ethnicity === null
  ) {
    userData.otherEthnicSubGroup = null;
    userData.ethnicSubGroup = null;

    if (edit === 'true') {
      redirectURL = confirmURL;
    } else {
      redirectURL = '/prototypes/edi/edi-sex';
    }
  }

  console.log(userData);
  return res.redirect(redirectURL);
}

/* **************

    EDI ethnic SUB group

*************** */
export function ediEthnicSubGet(req, res) {
  let viewData;

  let edit = req.param('edit');

  viewData = {
    edit,
    userData,
    backToConfirm,
  };

  return res.render('prototypes/edi/edi-ethnic-sub-group', viewData);
}

export function ediEthnicSubPost(req, res) {
  const { ethnicSubGroup, otherEthnicSubGroup } = req.body;
  console.log(req.body);

  userData.ethnicSubGroup = ethnicSubGroup;
  userData.otherEthnicSubGroup = otherEthnicSubGroup;
  userData.otherEthnicGroup = null;

  let redirectURL = '/prototypes/edi/edi-sex';

  let edit = req.param('edit');
  if (edit === 'true') {
    redirectURL = confirmURL;
  }

  console.log(userData);
  return res.redirect(redirectURL);
}

/* **************

    EDI sex

*************** */
export function ediSexGet(req, res) {
  let viewData;

  let edit = req.param('edit');

  viewData = {
    edit,
    userData,
    backToConfirm,
  };

  return res.render('prototypes/edi/edi-sex', viewData);
}

export function ediSexPost(req, res) {
  const { sex } = req.body;
  console.log(req.body);

  userData.sex = sex;

  let redirectURL = '/prototypes/edi/edi-gender';

  let edit = req.param('edit');
  if (edit === 'true') {
    redirectURL = confirmURL;
  }

  console.log(userData);
  return res.redirect(redirectURL);
}

/* **************

    EDI gender

*************** */
export function ediGenderGet(req, res) {
  let viewData, gender;

  let edit = req.param('edit');

  viewData = {
    edit,
    userData,
    backToConfirm,
  };

  return res.render('prototypes/edi/edi-gender', viewData);
}

export function ediGenderPost(req, res) {
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
    redirectURL = confirmURL;
  }

  return res.redirect(redirectURL);
}

/* **************

    EDI orientation

*************** */
export function ediOrientationGet(req, res) {
  let viewData;

  let edit = req.param('edit');

  viewData = {
    edit,
    userData,
    backToConfirm,
  };

  return res.render('prototypes/edi/edi-orientation', viewData);
}

export function ediOrientationPost(req, res) {
  const { orientation, otherOrientation } = req.body;
  console.log(req.body);

  userData.orientation = orientation;
  userData.otherOrientation = otherOrientation;

  let redirectURL = confirmURL;

  if (orientation !== 'Other sexual orientation') {
    userData.otherOrientation = null;
  }

  let edit = req.param('edit');
  if (edit === 'true') {
    redirectURL = confirmURL;
  }

  console.log(userData);
  return res.redirect(redirectURL);
}

/* **************

    EDI Confirm

*************** */
export function ediConfirmGet(req, res) {
  let viewData;

  viewData = {
    userData,
    backToConfirm,
  };

  return res.render('prototypes/edi/edi-confirm', viewData);
}

export function ediConfirmPost(req, res) {
  const {} = req.body;
  console.log(req.body);

  let redirectURL = '/prototypes/edi/edi-complete';

  req.session.ediIsComplete = true;
  backToConfirm = {
    url: '/prototypes/edi/edi-complete',
    linkText: 'Back to Equality, Diversity and Inclusion (EDI) profile',
  };

  confirmURL = '/prototypes/edi/edi-complete';

  return res.redirect(redirectURL);
}

/* **************

    EDI complete

*************** */
export function ediCompleteGet(req, res) {
  let viewData;

  let ediIsComplete = req.session.ediIsComplete;
  req.session.ediIsComplete = null;

  viewData = {
    userData,
    ediIsComplete,
  };

  return res.render('prototypes/edi/edi-complete', viewData);
}
