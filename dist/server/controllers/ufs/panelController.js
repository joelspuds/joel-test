'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.panelConfigGet = panelConfigGet;
exports.panelConfigPost = panelConfigPost;
exports.panelIndexGet = panelIndexGet;
exports.panelIndexPost = panelIndexPost;
exports.panelExternalEmailGet = panelExternalEmailGet;
exports.panelExternalEmailPost = panelExternalEmailPost;
exports.panelSigninOptionsGet = panelSigninOptionsGet;
exports.panelSigninOptionsPost = panelSigninOptionsPost;
exports.panelSigninGet = panelSigninGet;
exports.panelSigninPost = panelSigninPost;
exports.panelHomeGet = panelHomeGet;
exports.panelHomePost = panelHomePost;
exports.panelPanelsGet = panelPanelsGet;
exports.panelPanelsPost = panelPanelsPost;
exports.panelPanelsInProgressGet = panelPanelsInProgressGet;
exports.panelPanelsInProgressPost = panelPanelsInProgressPost;
exports.panelPanelsPreviousGet = panelPanelsPreviousGet;
exports.panelPanelsPreviousPost = panelPanelsPreviousPost;
exports.panelPanelOverviewGet = panelPanelOverviewGet;
exports.panelPanelOverviewPost = panelPanelOverviewPost;
exports.panelPanelGuidanceGet = panelPanelGuidanceGet;
exports.panelPanelGuidancePost = panelPanelGuidancePost;
exports.panelMeetingDetailsGet = panelMeetingDetailsGet;
exports.panelMeetingDetailsPost = panelMeetingDetailsPost;
exports.panelPanelistsGet = panelPanelistsGet;
exports.panelPanelistsPost = panelPanelistsPost;
exports.panelConflictGet = panelConflictGet;
exports.panelConflictPost = panelConflictPost;
exports.panelApplicationOverviewGet = panelApplicationOverviewGet;
exports.panelApplicationOverviewPost = panelApplicationOverviewPost;
exports.panelReadApplicationGet = panelReadApplicationGet;
exports.panelReadApplicationPost = panelReadApplicationPost;
exports.panelApplicationReviewsGet = panelApplicationReviewsGet;
exports.panelApplicationReviewsPost = panelApplicationReviewsPost;
exports.panelApplicationResponseGet = panelApplicationResponseGet;
exports.panelApplicationResponsePost = panelApplicationResponsePost;
exports.panelPreScoreGet = panelPreScoreGet;
exports.panelPreScorePost = panelPreScorePost;
exports.panelPreScoreConfirmGet = panelPreScoreConfirmGet;
exports.panelPreScoreConfirmPost = panelPreScoreConfirmPost;
let generalData = require('./data');
let genericFunctions = require('./generic');
let panelSessionData = [];

// ************************************************************************
//
//        config
//
// ************************************************************************
function panelConfigGet(req, res) {
  let viewData;

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
  }

  viewData = {};

  return res.render('prototypes/panel/config', viewData);
}

function panelConfigPost(req, res) {
  const { panelConfig } = req.body;

  // chair | normal
  req.session.journeyType = panelConfig;

  let targetURL;
  /*if (panelConfig === 'chair') {
    targetURL = '/prototypes/panel/external-email-chair';
  } else {
    targetURL = '/prototypes/panel/external-email';
  }*/

  targetURL = '/prototypes/panel/external-email';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        panel index
//
// ************************************************************************
function panelIndexGet(req, res) {
  let viewData;

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
    // res.redirect('/prototypes/panel/config');
  }

  viewData = {};

  return res.render('prototypes/panel/index', viewData);
}

function panelIndexPost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/panel/email');
}

// ************************************************************************
//
//        external email
//
// ************************************************************************
function panelExternalEmailGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/panel/external-email', viewData);
}

function panelExternalEmailPost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/panel/home');
}

// ************************************************************************
//
//        signin options
//
// ************************************************************************
function panelSigninOptionsGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/panel/signin-options', viewData);
}

function panelSigninOptionsPost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/panel/signin');
}

// ************************************************************************
//
//        signin
//
// ************************************************************************
function panelSigninGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/panel/signin', viewData);
}

function panelSigninPost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/panel/home');
}

// ************************************************************************
//
//        home
//
// ************************************************************************
function panelHomeGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/panel/home', viewData);
}

function panelHomePost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/panel/home');
}

// ************************************************************************
//
//        panels
//
// ************************************************************************
function panelPanelsGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/panel/home', viewData);
}

function panelPanelsPost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/panel/home');
}

// ************************************************************************
//
//        panels in progress
//
// ************************************************************************
function panelPanelsInProgressGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/panel/panels-in-progress', viewData);
}

function panelPanelsInProgressPost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/panel/panels-in-progress');
}

// ************************************************************************
//
//        panels previous
//
// ************************************************************************
function panelPanelsPreviousGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/panel/panels-previous', viewData);
}

function panelPanelsPreviousPost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/panel/panels-previous');
}

// ************************************************************************
//
//        panel overviews
//
// ************************************************************************
function panelPanelOverviewGet(req, res) {
  let viewData;

  // let journeyType = req.session.journeyType;
  let allData = req.session;

  viewData = { allData };

  return res.render('prototypes/panel/panel-overview', viewData);
}

function panelPanelOverviewPost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/panel/panel-overview');
}

// ************************************************************************
//
//        panel guidance
//
// ************************************************************************
function panelPanelGuidanceGet(req, res) {
  let viewData;

  let allData = req.session;

  viewData = { allData };

  return res.render('prototypes/panel/panel-guidance', viewData);
}

function panelPanelGuidancePost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/panel/panel-overview');
}

// ************************************************************************
//
//        panel meeting details
//
// ************************************************************************
function panelMeetingDetailsGet(req, res) {
  let viewData;

  let allData = req.session;

  viewData = { allData };

  return res.render('prototypes/panel/panel-meeting-details', viewData);
}

function panelMeetingDetailsPost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/panel/panel-meeting-details');
}

// ************************************************************************
//
//        panelists
//
// ************************************************************************
function panelPanelistsGet(req, res) {
  let viewData;

  let allData = req.session;

  viewData = { allData };

  return res.render('prototypes/panel/panelists', viewData);
}

function panelPanelistsPost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/panel/panelists');
}

// ************************************************************************
//
//        declare conflict
//
// ************************************************************************
function panelConflictGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/panel/declare-conflict', viewData);
}

function panelConflictPost(req, res) {
  const { conflict } = req.body;

  let targetURL = '/prototypes/panel/application-overview';

  req.session.hasConflict = conflict;

  req.session.hasDeclared = true;

  console.log(req.session);
  if (conflict === 'yes') {
    targetURL = '/prototypes/panel/application-overview-conflict';
  }

  /* panelSessionData.hasConflict = conflict;
  if (conflict === 'yes') {
    // targetURL = '/prototypes/panel/application-overview-conflict';
  }*/

  return res.redirect(targetURL);
}

// ************************************************************************
//
//        Application overview
//
// ************************************************************************
function panelApplicationOverviewGet(req, res) {
  let viewData;

  /*let allData = req.session;
  console.log('session stuff: ');
  console.log(allData);
   console.log('hasConflict stuff: ');
  console.log(allData.hasConflict);*/

  let allData = req.session;

  console.log(allData);

  viewData = { allData };

  return res.render('prototypes/panel/application-overview', viewData);
}

function panelApplicationOverviewPost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/panel/application-overview');
}

// ************************************************************************
//
//        Read Application
//
// ************************************************************************
function panelReadApplicationGet(req, res) {
  let viewData;

  let allData = req.session;

  console.log(allData);

  viewData = { allData };

  return res.render('prototypes/panel/read-application', viewData);
}

function panelReadApplicationPost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/panel/read-application');
}

// ************************************************************************
//
//        Application reviews
//
// ************************************************************************
function panelApplicationReviewsGet(req, res) {
  let viewData;

  let allData = req.session;

  console.log(allData);

  viewData = { allData };

  return res.render('prototypes/panel/application-reviews', viewData);
}

function panelApplicationReviewsPost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/panel/application-reviews');
}

// ************************************************************************
//
//        Application response
//
// ************************************************************************
function panelApplicationResponseGet(req, res) {
  let viewData;

  let allData = req.session;

  console.log(allData);

  viewData = { allData };

  return res.render('prototypes/panel/application-response', viewData);
}

function panelApplicationResponsePost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/panel/application-response');
}

// ************************************************************************
//
//        Pre score
//
// ************************************************************************
function panelPreScoreGet(req, res) {
  let viewData;

  let allData = req.session;
  console.log(allData);

  // let preScoreSet = req.session.preScoreSet;

  viewData = { allData };

  return res.render('prototypes/panel/pre-score', viewData);
}

function panelPreScorePost(req, res) {
  const { preScore } = req.body;

  req.session.preScore = preScore;

  return res.redirect('/prototypes/panel/pre-score-confirm');
}

// ************************************************************************
//
//        Pre score confirm
//
// ************************************************************************
function panelPreScoreConfirmGet(req, res) {
  let viewData;

  let allData = req.session;

  console.log(allData);

  viewData = { allData };

  return res.render('prototypes/panel/pre-score-confirm', viewData);
}

function panelPreScoreConfirmPost(req, res) {
  const {} = req.body;

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var currentdate = new Date();
  // var datetime = currentdate.getDate() + " " + months[(currentdate.getMonth())]  + " at " + currentdate.getHours() + ":" + currentdate.getMinutes();
  var datetime = currentdate.getDate() + ' ' + months[currentdate.getMonth()] + ' at ' + currentdate.toTimeString().substr(0, 5);
  req.session.preScoreDateAndTime = datetime;

  req.session.preScoreSet = true;

  return res.redirect('/prototypes/panel/pre-score');
}