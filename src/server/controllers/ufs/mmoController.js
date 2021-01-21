// suggested learning full list GET
// This is the fuller version with

import * as demosController from './createOpportunity-v3';

// const cheerio = require('cheerio');

const untitledProjectName = 'Untitled project';
let generalData = require('./data');
let genericFunctions = require('./generic');

// ************************************************************************
//
//        MMO index
//
// ************************************************************************
export function mmoIndexGet(req, res) {
  let viewData;

  let projectName = req.session.storedProjectName;
  if (!projectName) {
    projectName = untitledProjectName;
  }

  const allOrgs = generalData.allOrgs2;

  viewData = {
    projectName,
    allOrgs,
  };

  return res.render('prototypes/application-v2/add-applicant', viewData);
}

export function mmoIndexPost(req, res) {
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
export function mmoConfirmGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/champion/confirm', viewData);
}

export function mmoConfirmPost(req, res) {
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
export function mmoCreatePasswordGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/champion/create-password', viewData);
}

export function mmoCreatePasswordPost(req, res) {
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
export function mmoDataTestGet(req, res) {
  let viewData, dataSuccess;

  dataSuccess = req.session.dataSuccess;
  req.session.dataSuccess = null;

  viewData = {
    dataSuccess,
  };

  return res.render('prototypes/champion/data-test', viewData);
}

export function mmoDataTestPost(req, res) {
  const { firstName, lastName } = req.body;
  const fs = require('fs');

  const dataFileJSON = './temp-store.json';

  fs.writeFile(dataFileJSON, JSON.stringify(req.body), err => {
    if (err) return console.error(err);
    console.log('Data stored!');
  });

  req.session.firstName = firstName;
  req.session.lastName = lastName;
  req.session.dataSuccess = true;

  return res.redirect('/prototypes/champion/data-test');
}

/*  Show data */
export function mmoDataTestDisplayGet(req, res) {
  let viewData;
  const fs = require('fs');
  const dataFileJSON = './temp-store.json';

  const dataFileJSONContents = fs.readFileSync(dataFileJSON);
  const actualJSONData = JSON.parse(dataFileJSONContents);

  let firstName = actualJSONData.firstName;
  let lastName = actualJSONData.lastName;

  viewData = {
    firstName,
    lastName,
  };

  return res.render('prototypes/champion/data-display', viewData);
}
