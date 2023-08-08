'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classificationsIndexGet = classificationsIndexGet;
exports.classificationsIndexPost = classificationsIndexPost;
exports.classificationsHomeGet = classificationsHomeGet;
exports.classificationsHomePost = classificationsHomePost;
exports.classificationsApplicationsGet = classificationsApplicationsGet;
exports.classificationsApplicationsPost = classificationsApplicationsPost;
exports.classificationsApplicationOverviewGet = classificationsApplicationOverviewGet;
exports.classificationsApplicationOverviewPost = classificationsApplicationOverviewPost;
exports.classificationsResearchAreasGet = classificationsResearchAreasGet;
exports.classificationsResearchAreasPost = classificationsResearchAreasPost;
exports.classificationsResearchAreasRawGet = classificationsResearchAreasRawGet;
exports.classificationsAddGet = classificationsAddGet;
exports.classificationsAddPost = classificationsAddPost;
// import { megaApplications1200v2Reversed } from './test_applications';

let generalData = require('./data');
let genericFunctions = require('./generic');

const massiveCatsList = require('./massiveCatsList');
let allTheCats = massiveCatsList.allTheCats;

const massiveCatsListFlat = require('./massiveCatsList_flat');
let flatCatsList = massiveCatsListFlat.flatMassiveCatsList;

const classificationData = require('./classificationData_2');
let reportingTags = classificationData.reportingTags;
let routingTags = classificationData.allRoutingData;
let qualifierTags = classificationData.allQualifiers;

let prototypeData = {
  oppTitle: 'OPP147: African sleeping sickness - pathways to treatment',
  applicationTitle: 'Ribosome profiling of Trypanosoma brucei',
  applicant1: 'Manolo Bauer',
  detailsEditMode: 'locked',
  detailsMarkAsComplete: true,
  classificationsMarkAsComplete: false,
  teamMarkAsComplete: false,
  caseForSupportIsComplete: false,
  resourcesAndCostsIsComplete: false,
  detailsJustBeenUpdated: false
};

/* **************

    Index

*************** */
function classificationsIndexGet(req, res) {
  let viewData;

  viewData = {};
  return res.render('prototypes/classifications/index', viewData);
}

function classificationsIndexPost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/classifications/index');
}

/* **************

    Home

*************** */
function classificationsHomeGet(req, res) {
  let viewData;

  viewData = {};
  return res.render('prototypes/classifications/home', viewData);
}

function classificationsHomePost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/classifications/home');
}

/* **************

    Applications

*************** */
function classificationsApplicationsGet(req, res) {
  let viewData;

  viewData = {
    prototypeData
  };
  return res.render('prototypes/classifications/applications', viewData);
}

function classificationsApplicationsPost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/classifications/applications');
}

/* **************

    Application overview

*************** */
function classificationsApplicationOverviewGet(req, res) {
  let viewData;

  let detailsEditMode = req.param('detailsEditMode');
  if (detailsEditMode === 'locked') {
    prototypeData.detailsEditMode = 'locked';
  }

  prototypeData.detailsJustBeenUpdated = false;
  let detailsJustBeenUpdated = req.session.detailsJustBeenUpdated;
  if (detailsJustBeenUpdated === true) {
    prototypeData.detailsJustBeenUpdated = true;
    req.session.detailsJustBeenUpdated = null;
  }

  viewData = {
    prototypeData
  };
  return res.render('prototypes/classifications/application-overview', viewData);
}

function classificationsApplicationOverviewPost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/classifications/application-overview');
}

/* **************

    Add research area

*************** */
function classificationsResearchAreasGet(req, res) {
  let viewData;

  // console.log(allTheCats);

  viewData = {
    prototypeData,
    allTheCats
  };
  return res.render('prototypes/classifications/research-areas', viewData);
}

function classificationsResearchAreasPost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/classifications/research-areas');
}

/* **************

    Add research area RAW

*************** */
function classificationsResearchAreasRawGet(req, res) {
  let viewData;

  viewData = {
    prototypeData,
    allTheCats
  };
  return res.render('prototypes/classifications/research-areas-raw', viewData);
}

/* **************

    Add research tags

*************** */
function classificationsAddGet(req, res) {
  let viewData;

  // allTheCats  NONONONO
  // reportingTags
  // routingTags
  // qualifierTags
  // flatCatsList

  let finalNumber;
  let searchFail;
  let resultsArrayClassifications = [];
  let resultsArrayRouting = [];
  let resultsArrayQualifiers = [];
  let resultsArrayReporting = [];

  let countClassifications = 0;
  let countRouting = 0;
  let countQualifiers = 0;
  let countReporting = 0;

  function doTheSearch(searchTextPassed) {
    let searchText = searchTextPassed;
    searchFail = false;

    /* Search main taxonomies list */
    for (let i = 0; i < flatCatsList.length; i++) {
      let tempA = flatCatsList[i].a;
      let tempS = flatCatsList[i].s;
      let tempT = flatCatsList[i].t;
      if (tempA.includes(searchText) || tempS.includes(searchText) || tempT.includes(searchText)) {
        //console.log(tempA + ' : ' + tempS + ' : ' + tempT);
        resultsArrayClassifications.push(flatCatsList[i]);
        countClassifications++;
      }
    }

    /* search routing tags */
    for (let j = 0; j < routingTags.length; j++) {
      // let tempRoutingCouncil = routingTags[j].council;
      let tempRoutingName = routingTags[j].name;
      // console.log(routingTags[j]);

      tempRoutingName = tempRoutingName.toLowerCase();
      console.log('tempRoutingName = ' + tempRoutingName);

      if (tempRoutingName.includes(searchText) || tempRoutingName === searchText) {
        console.log('tempRoutingName = ' + tempRoutingName + ' AND searchText = ' + searchText);
        resultsArrayRouting.push(routingTags[j]);
        countRouting++;
      }
    }

    /* search qualifier tags */
    for (let k = 0; k < qualifierTags.length; k++) {
      let tempQualifier = qualifierTags[k];
      //console.log('tempQualifier = ' + tempQualifier + 'and searchText = ' + searchText);
      if (tempQualifier.toLowerCase().includes(searchText)) {
        resultsArrayQualifiers.push(qualifierTags[k]);
        countQualifiers++;
      }
    }

    /* search reporting tags */
    for (let l = 0; l < reportingTags.length; l++) {
      let tempReporting = reportingTags[l];
      if (tempReporting.toLowerCase().includes(searchText)) {
        resultsArrayReporting.push(reportingTags[l]);
        countReporting++;
      }
    }

    prototypeData.countClassifications = countClassifications;
    prototypeData.countRouting = countRouting;
    prototypeData.countQualifiers = countQualifiers;
    prototypeData.countReporting = countReporting;
    let countAll = countClassifications + countRouting + countQualifiers + countReporting;
    prototypeData.countAll = countAll;
    console.log(countClassifications + ' + ' + countRouting + ' + ' + countQualifiers + ' + ' + countReporting + ' = ' + countAll);

    // console.log(resultsArrayClassifications);

    return resultsArrayClassifications;
    // return searchText;
  }

  let searchTermTemp = prototypeData.searchQuery;

  console.log('searchTermTemp = ' + searchTermTemp);

  if (searchTermTemp === ' ' || searchTermTemp === '' || searchTermTemp === null) {
    searchFail = true;
  } else {
    doTheSearch(searchTermTemp);
  }

  prototypeData.searchFail = searchFail;

  //console.log(resultsArrayClassifications);
  //console.log(resultsArrayRouting);
  console.log(resultsArrayQualifiers);

  if (resultsArrayClassifications.length > 1 || resultsArrayRouting.length > 1 || resultsArrayQualifiers.length > 1 || resultsArrayReporting.length > 1) {
    prototypeData.haveSearchResults = true;
  } else {
    prototypeData.haveSearchResults = false;
  }

  viewData = {
    prototypeData,
    resultsArrayClassifications,
    resultsArrayRouting,
    resultsArrayQualifiers,
    resultsArrayReporting
  };

  return res.render('prototypes/classifications/research-tags', viewData);
}

function classificationsAddPost(req, res) {
  const { searchQuery } = req.body;

  // console.log(allTheCats);
  console.log('searchQuery = ' + searchQuery);

  prototypeData.searchQuery = searchQuery.toLowerCase();

  return res.redirect('/prototypes/classifications/research-tags');
}