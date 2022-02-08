let generalData = require('./data');
let genericFunctions = require('./generic');
let panelSessionData = [];

// ************************************************************************
//
//        config
//
// ************************************************************************
export function panelConfigGet(req, res) {
  let viewData;

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
  }

  viewData = {};

  return res.render('prototypes/panel/config', viewData);
}

export function panelConfigPost(req, res) {
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
export function panelIndexGet(req, res) {
  let viewData;

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
    // res.redirect('/prototypes/panel/config');
  }

  viewData = {};

  return res.render('prototypes/panel/index', viewData);
}

export function panelIndexPost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/panel/email');
}

// ************************************************************************
//
//        external email
//
// ************************************************************************
export function panelExternalEmailGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/panel/external-email', viewData);
}

export function panelExternalEmailPost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/panel/home');
}

// ************************************************************************
//
//        signin options
//
// ************************************************************************
export function panelSigninOptionsGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/panel/signin-options', viewData);
}

export function panelSigninOptionsPost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/panel/signin');
}

// ************************************************************************
//
//        signin
//
// ************************************************************************
export function panelSigninGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/panel/signin', viewData);
}

export function panelSigninPost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/panel/home');
}

// ************************************************************************
//
//        home
//
// ************************************************************************
export function panelHomeGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/panel/home', viewData);
}

export function panelHomePost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/panel/home');
}

// ************************************************************************
//
//        panels
//
// ************************************************************************
export function panelPanelsGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/panel/home', viewData);
}

export function panelPanelsPost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/panel/home');
}

// ************************************************************************
//
//        panels in progress
//
// ************************************************************************
export function panelPanelsInProgressGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/panel/panels-in-progress', viewData);
}

export function panelPanelsInProgressPost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/panel/panels-in-progress');
}

// ************************************************************************
//
//        panels previous
//
// ************************************************************************
export function panelPanelsPreviousGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/panel/panels-previous', viewData);
}

export function panelPanelsPreviousPost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/panel/panels-previous');
}

// ************************************************************************
//
//        panel overviews
//
// ************************************************************************
export function panelPanelOverviewGet(req, res) {
  let viewData;

  // let journeyType = req.session.journeyType;
  let allData = req.session;

  viewData = { allData };

  return res.render('prototypes/panel/panel-overview', viewData);
}

export function panelPanelOverviewPost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/panel/panel-overview');
}

// ************************************************************************
//
//        panel guidance
//
// ************************************************************************
export function panelPanelGuidanceGet(req, res) {
  let viewData;

  let allData = req.session;

  viewData = { allData };

  return res.render('prototypes/panel/panel-guidance', viewData);
}

export function panelPanelGuidancePost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/panel/panel-overview');
}

// ************************************************************************
//
//        panel meeting details
//
// ************************************************************************
export function panelMeetingDetailsGet(req, res) {
  let viewData;

  let allData = req.session;

  viewData = { allData };

  return res.render('prototypes/panel/panel-meeting-details', viewData);
}

export function panelMeetingDetailsPost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/panel/panel-meeting-details');
}

// ************************************************************************
//
//        panelists
//
// ************************************************************************
export function panelPanelistsGet(req, res) {
  let viewData;

  let allData = req.session;

  viewData = { allData };

  return res.render('prototypes/panel/panelists', viewData);
}

export function panelPanelistsPost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/panel/panelists');
}

// ************************************************************************
//
//        declare conflict
//
// ************************************************************************
export function panelConflictGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/panel/declare-conflict', viewData);
}

export function panelConflictPost(req, res) {
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
export function panelApplicationOverviewGet(req, res) {
  let viewData;

  /*let allData = req.session;
  console.log('session stuff: ');
  console.log(allData);

  console.log('hasConflict stuff: ');
  console.log(allData.hasConflict);*/

  let allData = panelSessionData;

  console.log(allData);

  viewData = { allData };

  return res.render('prototypes/panel/application-overview', viewData);
}

export function panelApplicationOverviewPost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/panel/application-overview');
}

// ************************************************************************
//
//        Read Application
//
// ************************************************************************
export function panelReadApplicationGet(req, res) {
  let viewData;

  let allData = panelSessionData;

  console.log(allData);

  viewData = { allData };

  return res.render('prototypes/panel/read-application', viewData);
}

export function panelReadApplicationPost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/panel/read-application');
}

// ************************************************************************
//
//        Pre score
//
// ************************************************************************
export function panelPreScoreGet(req, res) {
  let viewData;

  let allData = req.session;
  console.log(allData);

  // let preScoreSet = req.session.preScoreSet;

  viewData = { allData };

  return res.render('prototypes/panel/pre-score', viewData);
}

export function panelPreScorePost(req, res) {
  const { preScore } = req.body;

  req.session.preScore = preScore;

  return res.redirect('/prototypes/panel/pre-score-confirm');
}

// ************************************************************************
//
//        Pre score confirm
//
// ************************************************************************
export function panelPreScoreConfirmGet(req, res) {
  let viewData;

  let allData = req.session;

  console.log(allData);

  viewData = { allData };

  return res.render('prototypes/panel/pre-score-confirm', viewData);
}

export function panelPreScoreConfirmPost(req, res) {
  const {} = req.body;

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var currentdate = new Date();
  // var datetime = currentdate.getDate() + " " + months[(currentdate.getMonth())]  + " at " + currentdate.getHours() + ":" + currentdate.getMinutes();
  var datetime = currentdate.getDate() + ' ' + months[currentdate.getMonth()] + ' at ' + currentdate.toTimeString().substr(0, 5);
  req.session.preScoreDateAndTime = datetime;

  req.session.preScoreSet = true;

  return res.redirect('/prototypes/panel/pre-score');
}
