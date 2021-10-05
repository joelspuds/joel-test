'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orgsIndexGet = orgsIndexGet;
exports.orgsIndexPost = orgsIndexPost;
exports.orgsApplicantsGet = orgsApplicantsGet;
exports.orgsApplicantsPost = orgsApplicantsPost;
exports.orgsSelectRoleGet = orgsSelectRoleGet;
exports.orgsSelectRolePost = orgsSelectRolePost;
exports.orgsDetailsGet = orgsDetailsGet;
exports.orgsDetailsPost = orgsDetailsPost;
exports.orgsSearchGet = orgsSearchGet;
exports.orgsSearchPost = orgsSearchPost;
exports.orgsSearchResultsGet = orgsSearchResultsGet;
exports.orgsSearchResultsPost = orgsSearchResultsPost;
exports.orgsAddManuallyGet = orgsAddManuallyGet;
exports.orgsAddManuallyPost = orgsAddManuallyPost;

var _orgs = require('./orgs400');

let generalData = require('./data');
let genericFunctions = require('./generic');
// let allOrgs = require('./orgsListCleaned');
let allOrgs = require('./orgsListCleanedDupesRemoved');
let limitedOrgs = require('./orgs400');
let allCountries = require('./countries');
let orgsSessionData = [];

// ************************************************************************
//
//        index
//
// ************************************************************************
function orgsIndexGet(req, res) {
  let viewData;
  // console.log(orgsSessionData);
  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
    orgsSessionData.firstName = null;
    orgsSessionData.lastName = null;
    orgsSessionData.roles = null;
    orgsSessionData.organisation = null;
    orgsSessionData.detailsAdded = null;
    return res.redirect('/prototypes/orgs/');
    //
  }

  /*let projectName = req.session.storedProjectName;
    if (!projectName) {
        projectName = untitledProjectName;
    }*/

  // const allOrgs = generalData.allOrgs2;

  viewData = {};

  return res.render('prototypes/orgs/index', viewData);
}

function orgsIndexPost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/orgs/');
}

// ************************************************************************
//
//        Applicants
//
// ************************************************************************
function orgsApplicantsGet(req, res) {
  let viewData;
  // console.log(orgsSessionData);

  /*if (orgsSessionData === null) {
    orgsSessionData = [];
  }*/

  // let userOne = [].concat(orgsSessionData);
  // let userOne = [...orgsSessionData];
  // const userOne = orgsSessionData.slice();
  let userOne = [];
  // userOne = JSON.parse(JSON.stringify(orgsSessionData));
  // console.log(userOne);
  // userOne = orgsSessionData;
  // userOne = [...orgsSessionData];
  /*userOne = orgsSessionData.slice();
  for(let i = 0; i < orgsSessionData.length; i++ ) {
    userOne.push(orgsSessionData[i]);
  }*/

  // clear data
  /*orgsSessionData.firstName = null;
  orgsSessionData.lastName = null;
  orgsSessionData.roles = null;
  orgsSessionData.organisation = null;
  orgsSessionData.detailsAdded = null;
  orgsSessionData.email = null;
  orgsSessionData.newOrgName = null;
  orgsSessionData.countries = null;
  orgsSessionData.newOrgWebsite = null;*/

  function copy(mainObject) {
    let objectCopy = {}; // objectCopy will store a copy of the mainObject
    let key;
    for (key in mainObject) {
      userOne[key] = mainObject[key]; // copies each property to the objectCopy object
    }
    return objectCopy;
  }

  console.log(copy(orgsSessionData));

  console.log('userOne = ');
  console.log(userOne);
  console.log('orgsSessionData = ');
  console.log(orgsSessionData);

  viewData = {
    orgsSessionData,
    userOne
  };

  return res.render('prototypes/orgs/applicants', viewData);
}

function orgsApplicantsPost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/orgs/');
}

// ************************************************************************
//
//        Add applicants, select role
//
// ************************************************************************
function orgsSelectRoleGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/orgs/select-role', viewData);
}

function orgsSelectRolePost(req, res) {
  const { roles } = req.body;

  orgsSessionData.roles = roles;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/orgs/applicant-details');
}

// ************************************************************************
//
//        Add applicants, details
//
// ************************************************************************
function orgsDetailsGet(req, res) {
  let viewData;

  let limitedOrgList = limitedOrgs.limitedOrgList;
  // console.log('limitedOrgList: ');
  // console.log(limitedOrgList);
  viewData = {
    limitedOrgList,
    orgsSessionData
  };

  return res.render('prototypes/orgs/applicant-details', viewData);
}

function orgsDetailsPost(req, res) {
  const { firstName, lastName, email, organisation, widerSearch } = req.body;

  let redirectURL = '/prototypes/orgs/applicants';

  // console.log(req.body);
  // console.log(req.params.id);
  // console.log('widerSearch = ' + widerSearch);
  orgsSessionData.firstName = firstName;
  orgsSessionData.lastName = lastName;
  orgsSessionData.email = email;
  orgsSessionData.organisation = organisation;
  orgsSessionData.detailsAdded = true;
  // console.log(orgsSessionData);

  if (widerSearch === 'true') {
    redirectURL = '/prototypes/orgs/organisation-search';
  }

  return res.redirect(redirectURL);
}

// ************************************************************************
//
//        Add applicants, organisation search
//
// ************************************************************************
function orgsSearchGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/orgs/organisation-search', viewData);
}

function orgsSearchPost(req, res) {
  const { searchTerm } = req.body;

  req.session.searchTerm = searchTerm;
  console.log('searchTerm = ' + searchTerm);

  let searchTermTemp = searchTerm;
  let motherLoad = allOrgs.organisationsMotherLoadDupesRemoved;
  let resultArray = [];
  let searchFail;

  if (searchTermTemp === ' ' || searchTermTemp === '' || searchTermTemp === null) {
    searchFail = true;
  } else {
    searchFail = false;
    for (let i = 0; i < motherLoad.length; i++) {
      // let item = motherLoad[i];
      // let tempName = item.n;
      let tempName = motherLoad[i];
      if (tempName.toLowerCase().includes(searchTermTemp.toLowerCase())) {
        resultArray.push(tempName);
      }
    }
  }
  // console.log('search term = ' + searchTerm);

  if (resultArray.length === 0) {
    searchFail = true;
  }

  req.session.resultArray = resultArray;
  req.session.searchTerm = searchTerm;
  req.session.searchFail = searchFail;

  return res.redirect('/prototypes/orgs/search-results');
}

// ************************************************************************
//
//        Add applicants, organisation search results
//
// ************************************************************************
function orgsSearchResultsGet(req, res) {
  let viewData;

  let resultArray = req.session.resultArray;
  let searchTerm = req.session.searchTerm;
  let searchFail = req.session.searchFail;

  viewData = {
    resultArray,
    searchTerm,
    searchFail
  };

  return res.render('prototypes/orgs/search-results', viewData);
}

function orgsSearchResultsPost(req, res) {
  const { organisation } = req.body;

  orgsSessionData.organisation = organisation;
  // console.log(orgsSessionData);

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/orgs/applicants');
}

// ************************************************************************
//
//        Add applicants, enter organisation manually
//
// ************************************************************************
function orgsAddManuallyGet(req, res) {
  let viewData;

  let countries = allCountries.allCountries;

  viewData = {
    countries
  };

  return res.render('prototypes/orgs/add-manually', viewData);
}

function orgsAddManuallyPost(req, res) {
  const { newOrgName, countries, newOrgWebsite } = req.body;

  orgsSessionData.newOrgName = newOrgName;
  orgsSessionData.countries = countries;
  orgsSessionData.newOrgWebsite = newOrgWebsite;
  orgsSessionData.detailsAdded = true;

  return res.redirect('/prototypes/orgs/applicants');
}