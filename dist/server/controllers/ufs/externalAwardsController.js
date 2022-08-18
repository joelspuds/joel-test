'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eaIndexGet = eaIndexGet;
exports.eaIndexPost = eaIndexPost;
exports.eaSetUpGet = eaSetUpGet;
exports.eaSetUpPost = eaSetUpPost;
exports.eaAwardAgreementGet = eaAwardAgreementGet;
exports.eaAwardAgreementPost = eaAwardAgreementPost;
exports.eaAwardCollaborationAgreementGet = eaAwardCollaborationAgreementGet;
exports.eaAwardCollaborationAgreementPost = eaAwardCollaborationAgreementPost;
exports.eaAwardCostsGet = eaAwardCostsGet;
exports.eaAwardCostsPost = eaAwardCostsPost;
exports.eaAwardDetailsGet = eaAwardDetailsGet;
exports.eaAwardDetailsPost = eaAwardDetailsPost;
exports.eaAwardPaymentScheduleGet = eaAwardPaymentScheduleGet;
exports.eaAwardPaymentSchedulePost = eaAwardPaymentSchedulePost;
exports.eaAwardTeamGet = eaAwardTeamGet;
exports.eaAwardTeamPost = eaAwardTeamPost;
exports.eaAwardTermsGet = eaAwardTermsGet;
exports.eaAwardTermsPost = eaAwardTermsPost;
exports.eaAwardTermsAddedGet = eaAwardTermsAddedGet;
exports.eaAwardTermsAddedPost = eaAwardTermsAddedPost;
let generalData = require('./data');
let genericFunctions = require('./generic');
let limitedOrgs = require('./orgs400');

const externalAwardPrototypeData = {
  userName: 'Rohindra Khatra',
  awardName: 'AWA184: Environmental research grants 2022',
  currentEndDate: '30 October 2023'
};

let savedSession;

// ************************************************************************
//
//        index
//
// ************************************************************************
function eaIndexGet(req, res) {
  let viewData;

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    savedSession = null;
    req.session.destroy();
    let targetURL = '/prototypes/external-award/';
    return res.redirect(targetURL);
  }

  let allData = req.session;
  viewData = {
    allData,
    externalAwardPrototypeData
  };

  return res.render('prototypes/external-award/index', viewData);
}

function eaIndexPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/external-award/awards-list';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        Awards set up overview
//
// ************************************************************************
function eaSetUpGet(req, res) {
  let viewData;
  let megaDataApplications = generalData.megaDataApplications;

  if (!req.session.megaDataApplications) {
    req.session.megaDataApplications = megaDataApplications;
  }

  let allData = req.session;

  viewData = {
    allData,
    externalAwardPrototypeData,
    savedSession
  };

  return res.render('prototypes/external-award/set-up', viewData);
}
function eaSetUpPost(req, res) {
  const {} = req.body;
  let targetURL;
  targetURL = '/prototypes/external-award/set-up';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        Awards set up minor sub pages
//
// ************************************************************************

/*
* Agreement
* */
function eaAwardAgreementGet(req, res) {
  let viewData;
  let allData = req.session;

  viewData = {
    allData,
    externalAwardPrototypeData,
    savedSession
  };
  return res.render('prototypes/external-award/award-agreement', viewData);
}
function eaAwardAgreementPost(req, res) {
  const {} = req.body;
  let targetURL;
  targetURL = '/prototypes/external-award/set-up';
  return res.redirect(targetURL);
}
/*
* Collab agreement
* */
function eaAwardCollaborationAgreementGet(req, res) {
  let viewData;

  let allData = req.session;

  viewData = {
    allData,
    externalAwardPrototypeData,
    savedSession
  };

  return res.render('prototypes/external-award/award-collaboration-agreement', viewData);
}
function eaAwardCollaborationAgreementPost(req, res) {
  const { isComplete } = req.body;
  let targetURL;
  console.log('isComplete = ' + isComplete);
  req.session.collabAgreement = isComplete;
  targetURL = '/prototypes/external-award/set-up';
  return res.redirect(targetURL);
}
/*
* Costs
* */
function eaAwardCostsGet(req, res) {
  let viewData;

  let allData = req.session;

  viewData = {
    allData,
    externalAwardPrototypeData,
    savedSession
  };

  return res.render('prototypes/external-award/award-costs', viewData);
}
function eaAwardCostsPost(req, res) {
  const {} = req.body;
  let targetURL;
  targetURL = '/prototypes/external-award/set-up';
  return res.redirect(targetURL);
}
/*
* Details
* */
function eaAwardDetailsGet(req, res) {
  let viewData;

  let allData = req.session;

  viewData = {
    allData,
    externalAwardPrototypeData,
    savedSession
  };

  return res.render('prototypes/external-award/award-details', viewData);
}
function eaAwardDetailsPost(req, res) {
  const {} = req.body;
  let targetURL;
  targetURL = '/prototypes/external-award/set-up';
  return res.redirect(targetURL);
}
/*
* Payment schedule
* */
function eaAwardPaymentScheduleGet(req, res) {
  let viewData;

  let allData = req.session;

  viewData = {
    allData,
    externalAwardPrototypeData,
    savedSession
  };

  return res.render('prototypes/external-award/award-payment-schedule', viewData);
}
function eaAwardPaymentSchedulePost(req, res) {
  const {} = req.body;
  let targetURL;
  targetURL = '/prototypes/external-award/set-up';
  return res.redirect(targetURL);
}
/*
* Team
* */
function eaAwardTeamGet(req, res) {
  let viewData;

  let allData = req.session;

  viewData = {
    allData,
    externalAwardPrototypeData,
    savedSession
  };

  return res.render('prototypes/external-award/award-team', viewData);
}
function eaAwardTeamPost(req, res) {
  const {} = req.body;
  let targetURL;
  targetURL = '/prototypes/external-award/set-up';
  return res.redirect(targetURL);
}
/*
* Terms
* */
function eaAwardTermsGet(req, res) {
  let viewData;

  let allData = req.session;

  viewData = {
    allData,
    externalAwardPrototypeData,
    savedSession
  };

  return res.render('prototypes/external-award/award-terms', viewData);
}
function eaAwardTermsPost(req, res) {
  const {} = req.body;
  let targetURL;
  targetURL = '/prototypes/external-award/set-up';
  return res.redirect(targetURL);
}

/*
* Added Terms
* */
function eaAwardTermsAddedGet(req, res) {
  let viewData;

  let allData = req.session;

  viewData = {
    allData,
    externalAwardPrototypeData,
    savedSession
  };

  return res.render('prototypes/external-award/terms-and-conditions/added', viewData);
}
function eaAwardTermsAddedPost(req, res) {
  const { isComplete } = req.body;
  let targetURL;
  console.log('isComplete = ' + isComplete);
  req.session.addedTerms = isComplete;
  targetURL = '/prototypes/external-award/award-terms';
  return res.redirect(targetURL);
}