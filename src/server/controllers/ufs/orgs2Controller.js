import { limitedOrgList } from './orgs400';
import { organisationsMotherLoadDupesRemovedAnd400 } from './orgsListCleanedDupesRemovedWith400';

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
export function orgs2ConfigGet(req, res) {
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

export function orgs2ConfigPost(req, res) {
  const { completeConfig } = req.body;

  req.session.journeyConfig = completeConfig;

  return res.redirect('/prototypes/orgs2/start');
}

// ************************************************************************
//
//        index
//
// ************************************************************************
export function orgs2IndexGet(req, res) {
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

  viewData = {};

  return res.render('prototypes/orgs2/index', viewData);
}

export function orgs2IndexPost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/orgs2/');
}

// ************************************************************************
//
//        Applicants
//
// ************************************************************************
export function orgs2ApplicantsGet(req, res) {
  let viewData;

  function resetOrgsSession() {
    orgs2SessionData.firstName = null;
    orgs2SessionData.lastName = null;
    orgs2SessionData.roles = null;
    orgs2SessionData.organisation = null;
    orgs2SessionData.detailsAdded = null;
    orgs2SessionData.email = null;
    orgs2SessionData.countries = null;
    orgs2SessionData.newOrgWebsite = null;
    orgs2SessionData.titleName = null;
    orgs2SessionData.collectNoName = null;
    orgs2SessionData.approved400Only = null;
    orgs2SessionData.otherRole = null;
    orgs2SessionData.wasManual = null;
  }

  function copyUserOneV2(mainObject) {
    let objectCopy = {};
    let key;
    for (key in mainObject) {
      userOneV2[key] = mainObject[key];
    }
    return objectCopy;
  }

  function copyUserTwoV2(mainObject) {
    let objectCopy = {};
    let key;
    for (key in mainObject) {
      userTwoV2[key] = mainObject[key];
    }
    return objectCopy;
  }

  function copyUserThreeV2(mainObject) {
    let objectCopy = {};
    let key;
    for (key in mainObject) {
      userThreeV2[key] = mainObject[key];
    }
    return objectCopy;
  }

  function copyUserFourV2(mainObject) {
    let objectCopy = {};
    let key;
    for (key in mainObject) {
      userFourV2[key] = mainObject[key];
    }
    return objectCopy;
  }

  console.log('userOneV2.firstName = ' + userOneV2.firstName);

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
  } else if (
    userOneV2.firstName !== undefined &&
    userTwoV2.firstName !== undefined &&
    userThreeV2.firstName !== undefined &&
    userFourV2.firstName === undefined
  ) {
    console.log('userFourV2 is empty ');
    copyUserFourV2(orgs2SessionData);
    resetOrgsSession();
    userOneV2.detailsAdded = false;
    userTwoV2.detailsAdded = false;
    userThreeV2.detailsAdded = false;
  } else {
    console.log('all full ');
  }
  console.log('userOneV2 = ');
  console.log(userOneV2);
  console.log('userTwoV2 = ');
  console.log(userTwoV2);
  console.log('userThreeV2 = ');
  console.log(userThreeV2);

  console.log('orgs2SessionData = ');
  console.log(orgs2SessionData);

  viewData = {
    userOneV2,
    userTwoV2,
    userThreeV2,
    userFourV2,
  };

  return res.render('prototypes/orgs2/applicants', viewData);
}

export function orgs2ApplicantsPost(req, res) {
  const {} = req.body;
  return res.redirect('/prototypes/orgs2/');
}

// ************************************************************************
//
//        Add applicants, select role
//
// ************************************************************************
export function orgs2SelectRoleGet(req, res) {
  let viewData;
  console.log(orgs2SessionData);

  let journeyConfig = req.session.journeyConfig;

  viewData = {
    orgs2SessionData,
    journeyConfig,
  };

  return res.render('prototypes/orgs2/select-role', viewData);
}

export function orgs2SelectRolePost(req, res) {
  const { roles, otherRole } = req.body;

  // check for asking for firstName and lastName
  if (
    roles === 'Team Project Partner' ||
    roles === 'Project Subcontractor' ||
    roles === 'Project partner/collaborator' ||
    roles === 'Subcontractor/collaborator'
  ) {
    orgs2SessionData.collectNoName = true;
    // orgs2SessionData.firstName = '-';
    // orgs2SessionData.lastName = '-';
  } else {
    orgs2SessionData.collectNoName = false;
  }

  // check to restrict search
  // roles === 'Co-investigator' ||
  // roles === 'Co-lead'
  if (roles === 'Principle investigator' || roles === 'Fellow' || roles === 'Project lead') {
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
export function orgs2DetailsGet(req, res) {
  let viewData;

  let limitedOrgList = limitedOrgs.limitedOrgList;
  // console.log('limitedOrgList: ');
  // console.log(limitedOrgList);
  viewData = {
    limitedOrgList,
    orgs2SessionData,
  };

  return res.render('prototypes/orgs2/applicant-details', viewData);
}

export function orgs2DetailsPost(req, res) {
  const { titleName, firstName, lastName, email, organisation, widerSearch } = req.body;

  let redirectURL = '/prototypes/orgs2/applicants';

  // console.log(req.body);
  // console.log(req.params.id);
  // console.log('widerSearch = ' + widerSearch);

  orgs2SessionData.titleName = titleName;
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
export function orgs2SearchGet(req, res) {
  let viewData;

  viewData = {
    orgs2SessionData,
  };

  return res.render('prototypes/orgs2/organisation-search', viewData);
}

export function orgs2SearchPost(req, res) {
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
export function orgs2SearchResultsGet(req, res) {
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
    searchResultsNumber,
  };

  return res.render('prototypes/orgs2/search-results', viewData);
}

export function orgs2SearchResultsPost(req, res) {
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
export function orgs2AddManuallyGet(req, res) {
  let viewData;

  let countries = allCountries.allCountries;

  viewData = {
    countries,
    orgs2SessionData,
  };

  return res.render('prototypes/orgs2/add-manually', viewData);
}

export function orgs2AddManuallyPost(req, res) {
  const { organisation, countries, newOrgWebsite, wasManual, city } = req.body;

  orgs2SessionData.organisation = organisation;
  orgs2SessionData.city = city;
  orgs2SessionData.countries = countries;
  orgs2SessionData.newOrgWebsite = newOrgWebsite;
  orgs2SessionData.detailsAdded = true;
  orgs2SessionData.wasManual = wasManual;

  return res.redirect('/prototypes/orgs2/applicant-details');
}
