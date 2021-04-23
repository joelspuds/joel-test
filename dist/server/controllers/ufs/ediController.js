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
exports.ediReligionGet = ediReligionGet;
exports.ediReligionPost = ediReligionPost;
exports.ediConfirmGet = ediConfirmGet;
exports.ediConfirmPost = ediConfirmPost;
let generalData = require('./data');
let genericFunctions = require('./generic');
let userData = [];
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
  return res.redirect(redirectURL);
}

/* **************

    EDI DoB

*************** */
function ediDOBGet(req, res) {
  let viewData, dobDay, dobMonth, dobYear;

  const ediDone = req.session.ediDone;

  /*console.log(userData);
  userdata[0].ediDOB = */

  viewData = {
    ediDone,
    dobDay,
    dobMonth,
    dobYear
  };

  return res.render('prototypes/edi/edi-dob', viewData);
}

function ediDOBPost(req, res) {
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
function ediReligionGet(req, res) {
  let viewData, religion;

  const ediDone = req.session.ediDone;

  viewData = {
    ediDone,
    religion
  };

  return res.render('prototypes/edi/edi-religion', viewData);
}

function ediReligionPost(req, res) {
  const {} = req.body;
  console.log(req.body);

  // let redirectURL = '/prototypes/edi/edi-confirm';
  let redirectURL = '';

  return res.redirect(redirectURL);
}

/* **************

    EDI Confirm

*************** */
function ediConfirmGet(req, res) {
  let viewData, religion;

  const ediDone = req.session.ediDone;

  viewData = {
    ediDone,
    religion
  };

  return res.render('prototypes/edi/edi-confirm', viewData);
}

function ediConfirmPost(req, res) {
  const {} = req.body;
  console.log(req.body);

  let redirectURL = '/prototypes/edi/edi';

  return res.redirect(redirectURL);
}