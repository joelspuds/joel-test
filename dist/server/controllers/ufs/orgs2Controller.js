'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orgs2ConfigGet = orgs2ConfigGet;
exports.orgs2ConfigPost = orgs2ConfigPost;
exports.orgs2IndexGet = orgs2IndexGet;
exports.orgs2IndexPost = orgs2IndexPost;
exports.orgs2ApplicantsGet = orgs2ApplicantsGet;
exports.orgs2ApplicantsPost = orgs2ApplicantsPost;
exports.orgs2SelectRoleGet = orgs2SelectRoleGet;
exports.orgs2SelectRolePost = orgs2SelectRolePost;
exports.orgs2DetailsGet = orgs2DetailsGet;
exports.orgs2DetailsPost = orgs2DetailsPost;
exports.orgs2SearchGet = orgs2SearchGet;
exports.orgs2SearchPost = orgs2SearchPost;
exports.orgs2SearchResultsGet = orgs2SearchResultsGet;
exports.orgs2SearchResultsPost = orgs2SearchResultsPost;
exports.orgs2AddManuallyGet = orgs2AddManuallyGet;
exports.orgs2AddManuallyPost = orgs2AddManuallyPost;

var _orgs = require('./orgs400');

var _orgsListCleanedDupesRemovedWith = require('./orgsListCleanedDupesRemovedWith400');

let generalData = require('./data');
let genericFunctions = require('./generic');
// let allOrgs = require('./orgsListCleaned');
let allOrgs = require('./orgsListCleanedDupesRemovedWith400');
let limitedOrgs = require('./orgs400asArray');
let allCountries = require('./countries');
let orgs2SessionData = [];
let userOneV2 = [];
let userTwoV2 = [];
let userThreeV2 = [];
let userFourV2 = [];
// ************************************************************************
//
//        config
//
// ************************************************************************
function orgs2ConfigGet(req, res) {
  let viewData;
  // console.log(orgs2SessionData);
  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
    orgs2SessionData.firstName = null;
    orgs2SessionData.lastName = null;
    orgs2SessionData.roles = null;
    orgs2SessionData.organisation = null;
    orgs2SessionData.detailsAdded = null;
    userOneV2 = [];
    userTwoV2 = [];
    userThreeV2 = [];
    userFourV2 = [];
    // return res.redirect('/prototypes/orgs2/config');
    //
  }

  viewData = {};

  return res.render('prototypes/orgs2/config', viewData);
}

function orgs2ConfigPost(req, res) {
  const { completeConfig } = req.body;

  req.session.journeyConfig = completeConfig;

  return res.redirect('/prototypes/orgs2/start');
}

// ************************************************************************
//
//        index
//
// ************************************************************************
function orgs2IndexGet(req, res) {
  let viewData;
  // console.log(orgs2SessionData);
  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
    orgs2SessionData.firstName = null;
    orgs2SessionData.lastName = null;
    orgs2SessionData.roles = null;
    orgs2SessionData.organisation = null;
    orgs2SessionData.detailsAdded = null;
    userOneV2 = [];
    userTwoV2 = [];
    userThreeV2 = [];
    userFourV2 = [];
    return res.redirect('/prototypes/orgs2/start');
    //
  }

  /*let projectName = req.session.storedProjectName;
    if (!projectName) {
        projectName = untitledProjectName;
    }*/

  // const allOrgs = generalData.allOrgs2;

  viewData = {};

  return res.render('prototypes/orgs2/index', viewData);
}

function orgs2IndexPost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/orgs2/');
}

// ************************************************************************
//
//        Applicants
//
// ************************************************************************
function orgs2ApplicantsGet(req, res) {
  let viewData;
  // console.log(orgs2SessionData);

  /*if (orgs2SessionData === null) {
    orgs2SessionData = [];
  }*/

  // let userOneV2 = [].concat(orgs2SessionData);
  // let userOneV2 = [...orgs2SessionData];
  // const userOneV2 = orgs2SessionData.slice();

  // userOneV2 = JSON.parse(JSON.stringify(orgs2SessionData));
  // console.log(userOneV2);
  // userOneV2 = orgs2SessionData;
  // userOneV2 = [...orgs2SessionData];
  /*userOneV2 = orgs2SessionData.slice();
  for(let i = 0; i < orgs2SessionData.length; i++ ) {
    userOneV2.push(orgs2SessionData[i]);
  }*/

  // clear data
  /*orgs2SessionData.firstName = null;
  orgs2SessionData.lastName = null;
  orgs2SessionData.roles = null;
  orgs2SessionData.organisation = null;
  orgs2SessionData.detailsAdded = null;
  orgs2SessionData.email = null;
  orgs2SessionData.newOrgName = null;
  orgs2SessionData.countries = null;
  orgs2SessionData.newOrgWebsite = null;*/

  function resetOrgsSession() {
    orgs2SessionData.firstName = null;
    orgs2SessionData.lastName = null;
    orgs2SessionData.roles = null;
    orgs2SessionData.organisation = null;
    orgs2SessionData.detailsAdded = null;
    orgs2SessionData.email = null;
    orgs2SessionData.countries = null;
    orgs2SessionData.newOrgWebsite = null;
  }

  function copyUserOneV2(mainObject) {
    let objectCopy = {}; // objectCopy will store a copy of the mainObject
    let key;
    for (key in mainObject) {
      userOneV2[key] = mainObject[key]; // copies each property to the objectCopy object
    }
    return objectCopy;
  }

  function copyUserTwoV2(mainObject) {
    let objectCopy = {}; // objectCopy will store a copy of the mainObject
    let key;
    for (key in mainObject) {
      userTwoV2[key] = mainObject[key]; // copies each property to the objectCopy object
    }
    return objectCopy;
  }

  function copyUserThreeV2(mainObject) {
    let objectCopy = {}; // objectCopy will store a copy of the mainObject
    let key;
    for (key in mainObject) {
      userThreeV2[key] = mainObject[key]; // copies each property to the objectCopy object
    }
    return objectCopy;
  }

  function copyUserFourV2(mainObject) {
    let objectCopy = {}; // objectCopy will store a copy of the mainObject
    let key;
    for (key in mainObject) {
      userFourV2[key] = mainObject[key]; // copies each property to the objectCopy object
    }
    return objectCopy;
  }

  /*const getLengthOfObject = (obj) => {
    let lengthOfObject = Object.keys(obj).length;
    console.log(lengthOfObject);
  }
   let testVar = getLengthOfObject(userOneV2);
  console.log('testVar = ' + testVar);
   console.log('Object.keys(userOneV2).length = ');
  console.log(Object.keys(userOneV2).length);
  */

  // copyUserOneV2(orgs2SessionData);

  console.log('userOneV2.firstName = ' + userOneV2.firstName);
  // if (userOneV2.firstName === '' || userOneV2.firstName === undefined || userOneV2.firstName === 'null') {
  // if (userOneV2.firstName === undefined userOneV2.firstName === 'null' && userTwoV2.firstName === undefined && userThreeV2.firstName === undefined) {
  if (userOneV2.firstName === undefined || userOneV2.firstName === 'null') {
    console.log('userOneV2 is empty ');
    copyUserOneV2(orgs2SessionData);
    resetOrgsSession();
  } else if (userOneV2.firstName !== undefined && userTwoV2.firstName === undefined && userThreeV2.firstName === undefined) {
    console.log('userTwoV2 is empty ');
    copyUserTwoV2(orgs2SessionData);
    resetOrgsSession();
    userOneV2.detailsAdded = false;
    // userTwoV2.detailsAdded = false;
    userThreeV2.detailsAdded = false;
    userFourV2.detailsAdded = false;
  } else if (userOneV2.firstName !== undefined && userTwoV2.firstName !== undefined && userThreeV2.firstName === undefined) {
    console.log('userThreeV2 is empty ');
    copyUserThreeV2(orgs2SessionData);
    resetOrgsSession();
    userOneV2.detailsAdded = false;
    userTwoV2.detailsAdded = false;
    userFourV2.detailsAdded = false;
  } else if (userOneV2.firstName !== undefined && userTwoV2.firstName !== undefined && userThreeV2.firstName !== undefined && userFourV2.firstName === undefined) {
    console.log('userFourV2 is empty ');
    copyUserFourV2(orgs2SessionData);
    resetOrgsSession();
    userOneV2.detailsAdded = false;
    userTwoV2.detailsAdded = false;
    userThreeV2.detailsAdded = false;
  } else {
    console.log('all full ');
  }

  /*console.log(copy(orgs2SessionData));
  console.log('userOneV2 = ');
  console.log(userOneV2);
  console.log('orgs2SessionData = ');
  console.log(orgs2SessionData);*/

  console.log('userOneV2 = ');
  console.log(userOneV2);
  console.log('userTwoV2 = ');
  console.log(userTwoV2);
  console.log('userThreeV2 = ');
  console.log(userThreeV2);

  console.log('orgs2SessionData = ');
  console.log(orgs2SessionData);

  viewData = {
    //orgs2SessionData,
    userOneV2,
    userTwoV2,
    userThreeV2,
    userFourV2
  };

  return res.render('prototypes/orgs2/applicants', viewData);
}

function orgs2ApplicantsPost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/orgs2/');
}

// ************************************************************************
//
//        Add applicants, select role
//
// ************************************************************************
function orgs2SelectRoleGet(req, res) {
  let viewData;
  console.log(orgs2SessionData);

  let journeyConfig = req.session.journeyConfig;

  viewData = {
    orgs2SessionData,
    journeyConfig
  };

  return res.render('prototypes/orgs2/select-role', viewData);
}

function orgs2SelectRolePost(req, res) {
  const { roles, otherRole } = req.body;

  // check for asking for firstName and lastName
  if (roles === 'Team Project Partner' || roles === 'Project Subcontractor' || roles === 'Project partner/collaborator' || roles === 'Subcontractor/collaborator') {
    orgs2SessionData.collectNoName = true;
    orgs2SessionData.firstName = '-';
    orgs2SessionData.lastName = '-';
  } else {
    orgs2SessionData.collectNoName = false;
  }

  // check to restrict search
  if (roles === 'Principle investigator' || roles === 'Co-investigator' || roles === 'Fellow' || roles === 'Project lead' || roles === 'Co-lead') {
    orgs2SessionData.approved400Only = true;
  } else {
    orgs2SessionData.approved400Only = false;
  }

  orgs2SessionData.otherRole = otherRole;
  orgs2SessionData.roles = roles;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/orgs2/organisation-search');
}

// ************************************************************************
//
//        Add applicants, details
//
// ************************************************************************
function orgs2DetailsGet(req, res) {
  let viewData;

  let limitedOrgList = limitedOrgs.limitedOrgList;
  // console.log('limitedOrgList: ');
  // console.log(limitedOrgList);
  viewData = {
    limitedOrgList,
    orgs2SessionData
  };

  return res.render('prototypes/orgs2/applicant-details', viewData);
}

function orgs2DetailsPost(req, res) {
  const { firstName, lastName, email, organisation, widerSearch } = req.body;

  let redirectURL = '/prototypes/orgs2/applicants';

  // console.log(req.body);
  // console.log(req.params.id);
  // console.log('widerSearch = ' + widerSearch);
  orgs2SessionData.firstName = firstName;
  orgs2SessionData.lastName = lastName;
  orgs2SessionData.email = email;
  orgs2SessionData.organisation = organisation;
  orgs2SessionData.detailsAdded = true;
  // console.log(orgs2SessionData);

  /*if (widerSearch === 'true') {
    if (orgs2SessionData.wasManual === true) {
      redirectURL = '/prototypes/orgs2/add-manually';
    } else {
      redirectURL = '/prototypes/orgs2/organisation-search';
    }
  }*/

  if (widerSearch === 'manual') {
    redirectURL = '/prototypes/orgs2/add-manually';
  } else if (widerSearch === 'true') {
    redirectURL = '/prototypes/orgs2/organisation-search';
  }

  return res.redirect(redirectURL);
}

// ************************************************************************
//
//        Add applicants, organisation search
//
// ************************************************************************
function orgs2SearchGet(req, res) {
  let viewData;

  viewData = {
    orgs2SessionData
  };

  return res.render('prototypes/orgs2/organisation-search', viewData);
}

function orgs2SearchPost(req, res) {
  const { searchTerm } = req.body;

  req.session.searchTerm = searchTerm;
  console.log('searchTerm = ' + searchTerm);

  let searchTermTemp = searchTerm;
  let motherLoad;
  let approved400Only = orgs2SessionData.approved400Only;
  if (approved400Only === true) {
    // limit to approved 400 only;
    motherLoad = limitedOrgs.limitedOrgList2;
  } else {
    motherLoad = allOrgs.organisationsMotherLoadDupesRemovedAnd400;
  }

  let resultArray = [];
  let searchFail;
  let finalNumber;

  if (searchTermTemp === ' ' || searchTermTemp === '' || searchTermTemp === null) {
    searchFail = true;
  } else {
    searchFail = false;
    let iterationNumber = 0;
    for (let i = 0; i < motherLoad.length; i++) {
      // let item = motherLoad[i];
      // let tempName = item.n;

      let tempName = motherLoad[i];
      if (tempName.toLowerCase().includes(searchTermTemp.toLowerCase())) {
        resultArray.push(tempName);
        iterationNumber++;
      }
      finalNumber = iterationNumber;
    }
  }
  // console.log('search term = ' + searchTerm);

  if (resultArray.length === 0) {
    searchFail = true;
  }

  req.session.finalNumber = finalNumber;
  req.session.resultArray = resultArray;
  req.session.searchTerm = searchTerm;
  req.session.searchFail = searchFail;

  return res.redirect('/prototypes/orgs2/search-results');
}

// ************************************************************************
//
//        Add applicants, organisation search results
//
// ************************************************************************
function orgs2SearchResultsGet(req, res) {
  let viewData;

  let resultArray = req.session.resultArray;
  let searchResultsNumber = req.session.finalNumber;
  // let searchResultsNumber = '10';
  let searchTerm = req.session.searchTerm;
  let searchFail = req.session.searchFail;

  viewData = {
    orgs2SessionData,
    resultArray,
    searchTerm,
    searchFail,
    searchResultsNumber
  };

  return res.render('prototypes/orgs2/search-results', viewData);
}

function orgs2SearchResultsPost(req, res) {
  const { organisation } = req.body;

  orgs2SessionData.organisation = organisation;
  // console.log(orgs2SessionData);

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/orgs2/applicant-details');
}

// ************************************************************************
//
//        Add applicants, enter organisation manually
//
// ************************************************************************
function orgs2AddManuallyGet(req, res) {
  let viewData;

  let countries = allCountries.allCountries;

  viewData = {
    countries,
    orgs2SessionData
  };

  return res.render('prototypes/orgs2/add-manually', viewData);
}

function orgs2AddManuallyPost(req, res) {
  const { organisation, countries, newOrgWebsite, wasManual } = req.body;

  orgs2SessionData.organisation = organisation;
  orgs2SessionData.countries = countries;
  orgs2SessionData.newOrgWebsite = newOrgWebsite;
  orgs2SessionData.detailsAdded = true;
  orgs2SessionData.wasManual = wasManual;

  return res.redirect('/prototypes/orgs2/applicant-details');
}