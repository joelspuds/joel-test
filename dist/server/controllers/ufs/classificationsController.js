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
exports.classificationsAddGet = classificationsAddGet;
exports.classificationsAddPost = classificationsAddPost;
// import { megaApplications1200v2Reversed } from './test_applications';

let generalData = require('./data');
let genericFunctions = require('./generic');
//const megaApplications = require('./realApplications');
//const megaApplications1200 = require('./realApplications1200');
//const megaApplications1200v2 = require('./realApplications1200_v2');
//const megaReversed = require('./test_applications');
//let applicationsListv2 = megaApplications1200v2.megaApplications1200v2;
// const taxonomyData = require('./clasificationsData_1');
// let concatTaxonomy1 = taxonomyData.concatTaxonomy1;
const massiveCatsList = require('./massiveCatsList');
let allTheCats = massiveCatsList.allTheCats;
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

    Add research tags

*************** */
function classificationsAddGet(req, res) {
  let viewData;

  // allTheCats
  // reportingTags
  // routingTags
  // qualifierTags


  viewData = {
    prototypeData

  };
  return res.render('prototypes/classifications/research-tags', viewData);
}

function classificationsAddPost(req, res) {
  const { searchTerm } = req.body;

  return res.redirect('/prototypes/classifications/research-tags');
}