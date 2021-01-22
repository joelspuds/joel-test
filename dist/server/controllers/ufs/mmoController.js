'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mmoIndexGet = mmoIndexGet;
exports.mmoIndexPost = mmoIndexPost;
exports.mmoConfirmGet = mmoConfirmGet;
exports.mmoConfirmPost = mmoConfirmPost;
exports.mmoCreatePasswordGet = mmoCreatePasswordGet;
exports.mmoCreatePasswordPost = mmoCreatePasswordPost;
exports.mmoDataTestGet = mmoDataTestGet;
exports.mmoDataTestPost = mmoDataTestPost;
exports.mmoDataTestDisplayGet = mmoDataTestDisplayGet;

var _createOpportunityV = require('./createOpportunity-v3');

var demosController = _interopRequireWildcard(_createOpportunityV);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// const cheerio = require('cheerio');

const untitledProjectName = 'Untitled project'; // suggested learning full list GET
// This is the fuller version with

let generalData = require('./data');
let genericFunctions = require('./generic');

// ************************************************************************
//
//        MMO index
//
// ************************************************************************
function mmoIndexGet(req, res) {
  let viewData;

  let projectName = req.session.storedProjectName;
  if (!projectName) {
    projectName = untitledProjectName;
  }

  const allOrgs = generalData.allOrgs2;

  viewData = {
    projectName,
    allOrgs
  };

  return res.render('prototypes/application-v2/add-applicant', viewData);
}

function mmoIndexPost(req, res) {
  const { firstName, lastName, email, organisation, role } = req.body;

  req.session.firstName = firstName;
  req.session.lastName = lastName;
  req.session.email = email;
  req.session.organisation = organisation;
  req.session.role = role;

  // return res.redirect('/prototypes/application-v2/add-applicant');
}

// ************************************************************************
//
//        MMO confirm
//
// ************************************************************************
function mmoConfirmGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/champion/confirm', viewData);
}

function mmoConfirmPost(req, res) {
  const { firstName, lastName } = req.body;

  req.session.firstName = firstName;
  req.session.lastName = lastName;

  return res.redirect('/prototypes/champion/create-password');
}

// ************************************************************************
//
//        MMO create password
//
// ************************************************************************
function mmoCreatePasswordGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/champion/create-password', viewData);
}

function mmoCreatePasswordPost(req, res) {
  const { firstName, lastName } = req.body;

  req.session.firstName = firstName;
  req.session.lastName = lastName;

  return res.redirect('/prototypes/champion/check-email');
}

// ************************************************************************
//
//        Data test
//
// ************************************************************************
function mmoDataTestGet(req, res) {
  let viewData, dataSuccess;

  dataSuccess = req.session.dataSuccess;
  req.session.dataSuccess = null;

  viewData = {
    dataSuccess
  };

  return res.render('prototypes/champion/data-test', viewData);
}

function mmoDataTestPost(req, res) {
  const { firstName, lastName } = req.body;
  const fs = require('fs');

  const dataFileJSON = './temp-store.json';

  fs.writeFile(dataFileJSON, JSON.stringify(req.body), err => {
    if (err) return console.error(err);
    console.log('Data stored!');
    console.log(req.body);
  });

  req.session.firstName = firstName;
  req.session.lastName = lastName;
  req.session.dataSuccess = true;

  return res.redirect('/prototypes/champion/data-test');
}

/*  Show data */
function mmoDataTestDisplayGet(req, res) {
  let viewData;
  const fs = require('fs');
  const dataFileJSON = './temp-store.json';

  const dataFileJSONContents = fs.readFileSync(dataFileJSON);
  const actualJSONData = JSON.parse(dataFileJSONContents);

  let firstName = actualJSONData.firstName;
  let lastName = actualJSONData.lastName;
  let isComplete = actualJSONData.isComplete;

  viewData = {
    firstName,
    lastName,
    isComplete
  };

  return res.render('prototypes/champion/data-display', viewData);
}