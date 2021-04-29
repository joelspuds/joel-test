let generalData = require('./data');
let genericFunctions = require('./generic');
let userData = [];
/* **************

    EDI index

*************** */
export function ediIndexGet(req, res) {
  let viewData;

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
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
  return res.redirect(redirectURL);
}

/* **************

    EDI DoB

*************** */
export function ediDOBGet(req, res) {
  let viewData, dobDay, dobMonth, dobYear;

  const ediDone = req.session.ediDone;

  /*console.log(userData);
  userdata[0].ediDOB = */

  viewData = {
    ediDone,
    dobDay,
    dobMonth,
    dobYear,
  };

  return res.render('prototypes/edi/edi-dob', viewData);
}

export function ediDOBPost(req, res) {
  const { dobDay, dobMonth, dobYear } = req.body;
  console.log(req.body);

  // console.log(userData);
  /*userData[0].dobDay = dobDay;
  userData[0].dobMonth = dobMonth;
  userData[0].dobYear = dobYear;
  console.log(userData);*/

  let redirectURL = '/prototypes/edi/edi-religion';

  return res.redirect(redirectURL);
}

/* **************

    EDI religion

*************** */
export function ediReligionGet(req, res) {
  let viewData, religion;

  const ediDone = req.session.ediDone;

  viewData = {
    ediDone,
    religion,
  };

  return res.render('prototypes/edi/edi-religion', viewData);
}

export function ediReligionPost(req, res) {
  const {} = req.body;
  console.log(req.body);

  let redirectURL = '/prototypes/edi/edi-ethnic-group';
  // let redirectURL = '';

  return res.redirect(redirectURL);
}

/* **************

    EDI ethnic group

*************** */
export function ediEthnicGroupGet(req, res) {
  let viewData, religion;

  const ediDone = req.session.ediDone;

  viewData = {
    ediDone,
    religion,
  };

  return res.render('prototypes/edi/edi-ethnic-group', viewData);
}

export function ediEthnicGroupPost(req, res) {
  const {} = req.body;
  console.log(req.body);

  let redirectURL = '/prototypes/edi/edi-asian';
  // let redirectURL = '';

  return res.redirect(redirectURL);
}

/* **************

    EDI ethnic group ASIAN

*************** */
export function ediEthnicAsianGet(req, res) {
  let viewData, religion;

  const ediDone = req.session.ediDone;

  viewData = {
    ediDone,
    religion,
  };

  return res.render('prototypes/edi/edi-asian', viewData);
}

export function ediEthnicAsianPost(req, res) {
  const {} = req.body;
  console.log(req.body);

  let redirectURL = '/prototypes/edi/edi-sex';

  return res.redirect(redirectURL);
}

/* **************

    EDI sex

*************** */
export function ediSexGet(req, res) {
  let viewData, religion;

  const ediDone = req.session.ediDone;

  viewData = {
    ediDone,
    religion,
  };

  return res.render('prototypes/edi/edi-sex', viewData);
}

export function ediSexPost(req, res) {
  const {} = req.body;
  console.log(req.body);

  let redirectURL = '/prototypes/edi/edi-gender';

  return res.redirect(redirectURL);
}

/* **************

    EDI gender

*************** */
export function ediGenderGet(req, res) {
  let viewData, gender;

  const ediDone = req.session.ediDone;

  viewData = {
    ediDone,
    gender,
  };

  return res.render('prototypes/edi/edi-gender', viewData);
}

export function ediGenderPost(req, res) {
  const {} = req.body;
  console.log(req.body);

  let redirectURL = '/prototypes/edi/edi-gender';

  return res.redirect(redirectURL);
}

/* **************

    EDI Confirm

*************** */
export function ediConfirmGet(req, res) {
  let viewData, religion;

  const ediDone = req.session.ediDone;

  viewData = {
    ediDone,
    religion,
  };

  return res.render('prototypes/edi/edi-confirm', viewData);
}

export function ediConfirmPost(req, res) {
  const {} = req.body;
  console.log(req.body);

  let redirectURL = '/prototypes/edi/edi';

  return res.redirect(redirectURL);
}
