import { limitedOrgList } from './orgs400';
import { organisationsMotherLoadDupesRemovedAnd400 } from './orgsListCleanedDupesRemovedWith400';

let generalData = require('./data');
let genericFunctions = require('./generic');
// let allOrgs = require('./orgsListCleaned');
let allOrgs = require('./orgsListCleanedDupesRemovedWith400');
let limitedOrgs = require('./orgs400asArray');
let allCountries = require('./countries');
let orgs3SessionData = [];
let userOneV3 = [];
let userTwoV3 = [];
let userThreeV3 = [];
let userFourV3 = [];
// ************************************************************************
//
//        config
//
// ************************************************************************
export function orgs3ConfigGet(req, res) {
  let viewData;
  // console.log(orgs3SessionData);
  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
    orgs3SessionData.firstName = null;
    orgs3SessionData.lastName = null;
    orgs3SessionData.roles = null;
    orgs3SessionData.organisation = null;
    orgs3SessionData.detailsAdded = null;
    userOneV3 = [];
    userTwoV3 = [];
    userThreeV3 = [];
    userFourV3 = [];
    // return res.redirect('/prototypes/orgs3/config');
    //
  }

  viewData = {};

  return res.render('prototypes/orgs3/config', viewData);
}

export function orgs3ConfigPost(req, res) {
  const { completeConfig } = req.body;

  req.session.journeyConfig = completeConfig;

  return res.redirect('/prototypes/orgs3/start');
}

// ************************************************************************
//
//        index
//
// ************************************************************************
export function orgs3IndexGet(req, res) {
  let viewData;
  // console.log(orgs3SessionData);
  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
    orgs3SessionData.firstName = null;
    orgs3SessionData.lastName = null;
    orgs3SessionData.roles = null;
    orgs3SessionData.organisation = null;
    orgs3SessionData.detailsAdded = null;
    userOneV3 = [];
    userTwoV3 = [];
    userThreeV3 = [];
    userFourV3 = [];
    return res.redirect('/prototypes/orgs3/start');
    //
  }

  viewData = {};

  return res.render('prototypes/orgs3/index', viewData);
}

export function orgs3IndexPost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/orgs3/');
}

// ************************************************************************
//
//        Applicants
//
// ************************************************************************
export function orgs3ApplicantsGet(req, res) {
  let viewData;

  function resetOrgsSession() {
    orgs3SessionData.firstName = null;
    orgs3SessionData.lastName = null;
    orgs3SessionData.roles = null;
    orgs3SessionData.organisation = null;
    orgs3SessionData.detailsAdded = null;
    orgs3SessionData.email = null;
    orgs3SessionData.countries = null;
    orgs3SessionData.newOrgWebsite = null;
    orgs3SessionData.titleName = null;
    orgs3SessionData.collectNoName = null;
    orgs3SessionData.approved400Only = null;
    orgs3SessionData.otherRole = null;
    orgs3SessionData.wasManual = null;
  }

  function copyUserOneV3(mainObject) {
    let objectCopy = {};
    let key;
    for (key in mainObject) {
      userOneV3[key] = mainObject[key];
    }
    return objectCopy;
  }

  function copyUserTwoV3(mainObject) {
    let objectCopy = {};
    let key;
    for (key in mainObject) {
      userTwoV3[key] = mainObject[key];
    }
    return objectCopy;
  }

  function copyUserThreeV3(mainObject) {
    let objectCopy = {};
    let key;
    for (key in mainObject) {
      userThreeV3[key] = mainObject[key];
    }
    return objectCopy;
  }

  function copyUserFourV3(mainObject) {
    let objectCopy = {};
    let key;
    for (key in mainObject) {
      userFourV3[key] = mainObject[key];
    }
    return objectCopy;
  }

  console.log('userOneV3.firstName = ' + userOneV3.firstName);

  if (userOneV3.firstName === undefined || userOneV3.firstName === 'null') {
    console.log('userOneV3 is empty ');
    copyUserOneV3(orgs3SessionData);
    resetOrgsSession();
  } else if (userOneV3.firstName !== undefined && userTwoV3.firstName === undefined && userThreeV3.firstName === undefined) {
    console.log('userTwoV3 is empty ');
    copyUserTwoV3(orgs3SessionData);
    resetOrgsSession();
    userOneV3.detailsAdded = false;
    // userTwoV3.detailsAdded = false;
    userThreeV3.detailsAdded = false;
    userFourV3.detailsAdded = false;
  } else if (userOneV3.firstName !== undefined && userTwoV3.firstName !== undefined && userThreeV3.firstName === undefined) {
    console.log('userThreeV3 is empty ');
    copyUserThreeV3(orgs3SessionData);
    resetOrgsSession();
    userOneV3.detailsAdded = false;
    userTwoV3.detailsAdded = false;
    userFourV3.detailsAdded = false;
  } else if (
    userOneV3.firstName !== undefined &&
    userTwoV3.firstName !== undefined &&
    userThreeV3.firstName !== undefined &&
    userFourV3.firstName === undefined
  ) {
    console.log('userFourV3 is empty ');
    copyUserFourV3(orgs3SessionData);
    resetOrgsSession();
    userOneV3.detailsAdded = false;
    userTwoV3.detailsAdded = false;
    userThreeV3.detailsAdded = false;
  } else {
    console.log('all full ');
  }
  console.log('userOneV3 = ');
  console.log(userOneV3);
  console.log('userTwoV3 = ');
  console.log(userTwoV3);
  console.log('userThreeV3 = ');
  console.log(userThreeV3);

  console.log('orgs3SessionData = ');
  console.log(orgs3SessionData);

  viewData = {
    userOneV3,
    userTwoV3,
    userThreeV3,
    userFourV3,
  };

  return res.render('prototypes/orgs3/applicants', viewData);
}

export function orgs3ApplicantsPost(req, res) {
  const {} = req.body;
  return res.redirect('/prototypes/orgs3/');
}

// ************************************************************************
//
//        Add applicants, select role
//
// ************************************************************************
export function orgs3SelectRoleGet(req, res) {
  let viewData;
  console.log(orgs3SessionData);

  let journeyConfig = req.session.journeyConfig;

  viewData = {
    orgs3SessionData,
    journeyConfig,
  };

  return res.render('prototypes/orgs3/select-role', viewData);
}

export function orgs3SelectRolePost(req, res) {
  const { roles, otherRole } = req.body;

  // check for asking for firstName and lastName
  if (
    roles === 'Team Project Partner' ||
    roles === 'Project Subcontractor' ||
    roles === 'Project partner/collaborator' ||
    roles === 'Subcontractor/collaborator'
  ) {
    orgs3SessionData.collectNoName = true;
    // orgs3SessionData.firstName = '-';
    // orgs3SessionData.lastName = '-';
  } else {
    orgs3SessionData.collectNoName = false;
  }

  // check to restrict search
  // roles === 'Co-investigator' ||
  // roles === 'Co-lead'
  if (roles === 'Principal investigator' || roles === 'Fellow' || roles === 'Project lead') {
    orgs3SessionData.approved400Only = true;
  } else {
    orgs3SessionData.approved400Only = false;
  }

  orgs3SessionData.otherRole = otherRole;
  orgs3SessionData.roles = roles;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/orgs3/organisation-search');
}

// ************************************************************************
//
//        Add applicants, details
//
// ************************************************************************
export function orgs3DetailsGet(req, res) {
  let viewData;

  let limitedOrgList = limitedOrgs.limitedOrgList;
  // console.log('limitedOrgList: ');
  // console.log(limitedOrgList);
  viewData = {
    limitedOrgList,
    orgs3SessionData,
  };

  return res.render('prototypes/orgs3/applicant-details', viewData);
}

export function orgs3DetailsPost(req, res) {
  const { titleName, firstName, lastName, email, organisation, widerSearch } = req.body;

  let redirectURL = '/prototypes/orgs3/applicants';

  // console.log(req.body);
  // console.log(req.params.id);
  // console.log('widerSearch = ' + widerSearch);

  orgs3SessionData.titleName = titleName;
  orgs3SessionData.firstName = firstName;
  orgs3SessionData.lastName = lastName;
  orgs3SessionData.email = email;
  orgs3SessionData.organisation = organisation;
  orgs3SessionData.detailsAdded = true;
  // console.log(orgs3SessionData);

  /*if (widerSearch === 'true') {
    if (orgs3SessionData.wasManual === true) {
      redirectURL = '/prototypes/orgs3/add-manually';
    } else {
      redirectURL = '/prototypes/orgs3/organisation-search';
    }
  }*/

  if (widerSearch === 'manual') {
    redirectURL = '/prototypes/orgs3/add-manually';
  } else if (widerSearch === 'true') {
    redirectURL = '/prototypes/orgs3/organisation-search';
  }

  return res.redirect(redirectURL);
}

// ************************************************************************
//
//        Add applicants, organisation search
//
// ************************************************************************
export function orgs3SearchGet(req, res) {
  let viewData;

  viewData = {
    orgs3SessionData,
  };

  return res.render('prototypes/orgs3/organisation-search', viewData);
}

export function orgs3SearchPost(req, res) {
  const { searchTerm } = req.body;

  req.session.searchTerm = searchTerm;
  console.log('searchTerm = ' + searchTerm);

  let searchTermTemp = searchTerm;
  let motherLoad;
  let approved400Only = orgs3SessionData.approved400Only;
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

  return res.redirect('/prototypes/orgs3/search-results');
}

// ************************************************************************
//
//        Add applicants, organisation search results
//
// ************************************************************************
export function orgs3SearchResultsGet(req, res) {
  let viewData;

  let resultArray = req.session.resultArray;
  let searchResultsNumber = req.session.finalNumber;
  // let searchResultsNumber = '10';
  let searchTerm = req.session.searchTerm;
  let searchFail = req.session.searchFail;

  let randomValue;
  if (Math.random() < 0.5) {
    randomValue = true;
  }

  viewData = {
    orgs3SessionData,
    resultArray,
    searchTerm,
    searchFail,
    searchResultsNumber,
    randomValue,
  };

  return res.render('prototypes/orgs3/search-results', viewData);
}

export function orgs3SearchResultsPost(req, res) {
  const { organisation } = req.body;

  orgs3SessionData.organisation = organisation;
  // console.log(orgs3SessionData);

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/orgs3/applicant-details');
}

// ************************************************************************
//
//        Add applicants, enter organisation manually
//
// ************************************************************************
export function orgs3AddManuallyGet(req, res) {
  let viewData;

  let countries = allCountries.allCountries;

  viewData = {
    countries,
    orgs3SessionData,
  };

  return res.render('prototypes/orgs3/add-manually', viewData);
}

export function orgs3AddManuallyPost(req, res) {
  const { organisation, countries, newOrgWebsite, wasManual, city } = req.body;

  orgs3SessionData.organisation = organisation;
  orgs3SessionData.city = city;
  orgs3SessionData.countries = countries;
  orgs3SessionData.newOrgWebsite = newOrgWebsite;
  orgs3SessionData.detailsAdded = true;
  orgs3SessionData.wasManual = wasManual;

  return res.redirect('/prototypes/orgs3/applicant-details');
}
