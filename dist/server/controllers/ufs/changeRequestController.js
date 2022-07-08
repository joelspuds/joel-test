'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crIndexGet = crIndexGet;
exports.crIndexPost = crIndexPost;
exports.crAwardsListGet = crAwardsListGet;
exports.crAwardOverviewGet = crAwardOverviewGet;
exports.crCreateGet = crCreateGet;
exports.crCreatePost = crCreatePost;
exports.crCreateTypeGet = crCreateTypeGet;
exports.crCreateTypePost = crCreateTypePost;
exports.crProjectDetailsGet = crProjectDetailsGet;
exports.crProjectDetailsPost = crProjectDetailsPost;
exports.crProjectDetailsTeamGet = crProjectDetailsTeamGet;
exports.crProjectDetailsTeamPost = crProjectDetailsTeamPost;
exports.crTeamRemoveGet = crTeamRemoveGet;
exports.crTeamRemovePost = crTeamRemovePost;
exports.crTeamAddGet = crTeamAddGet;
exports.crTeamAddPost = crTeamAddPost;
exports.crProjectDetailsTransferGet = crProjectDetailsTransferGet;
exports.crProjectDetailsTransferPost = crProjectDetailsTransferPost;
exports.crLogisticsAndTimingsGet = crLogisticsAndTimingsGet;
exports.crLogisticsAndTimingsPost = crLogisticsAndTimingsPost;
exports.crLogisticsAndTimingsExtensionGet = crLogisticsAndTimingsExtensionGet;
exports.crLogisticsAndTimingsExtensionPost = crLogisticsAndTimingsExtensionPost;
exports.crLogisticsAndTimingsFESGet = crLogisticsAndTimingsFESGet;
exports.crLogisticsAndTimingsFESPost = crLogisticsAndTimingsFESPost;
exports.crLogisticsAndTimingsSuspensionGet = crLogisticsAndTimingsSuspensionGet;
exports.crLogisticsAndTimingsSuspensionPost = crLogisticsAndTimingsSuspensionPost;
exports.crLogisticsAndTimingsTerminationGet = crLogisticsAndTimingsTerminationGet;
exports.crLogisticsAndTimingsTerminationPost = crLogisticsAndTimingsTerminationPost;
exports.crLogisticsAndTimingsChangestartDateGet = crLogisticsAndTimingsChangestartDateGet;
exports.crLogisticsAndTimingsChangestartDatePost = crLogisticsAndTimingsChangestartDatePost;
exports.crStrategicGet = crStrategicGet;
exports.crStrategicPost = crStrategicPost;
exports.crStrategicDeliverablesGet = crStrategicDeliverablesGet;
exports.crStrategicDeliverablesPost = crStrategicDeliverablesPost;
exports.crStrategicScopeGet = crStrategicScopeGet;
exports.crStrategicScopePost = crStrategicScopePost;
exports.crCheckGet = crCheckGet;
exports.crCheckPost = crCheckPost;
exports.crAwardDetailsGet = crAwardDetailsGet;
exports.crAwardPaymentScheduleGet = crAwardPaymentScheduleGet;
exports.crAwardTeamGet = crAwardTeamGet;
exports.crAwardDocsGet = crAwardDocsGet;
exports.crAwardAgreementGet = crAwardAgreementGet;
exports.crAwardCostsGet = crAwardCostsGet;
exports.crAwardFinanceGet = crAwardFinanceGet;
exports.crAwardExpenditureGet = crAwardExpenditureGet;
exports.crAwardChangeRequestsGet = crAwardChangeRequestsGet;
exports.crViewRequestGet = crViewRequestGet;
let generalData = require('./data');
let genericFunctions = require('./generic');
let limitedOrgs = require('./orgs400');

const prototypeData = {
  userName: 'Rohindra Khatra',
  awardName: 'AWA184 - Environmental research grants 2022',
  currentEndDate: '30 October 2023'
};

let savedSession;

// ************************************************************************
//
//        index
//
// ************************************************************************
function crIndexGet(req, res) {
  let viewData;

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    savedSession = null;
    req.session.destroy();
  }

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/change-request/index', viewData);
}

function crIndexPost(req, res) {
  const {} = req.body;

  /*req.session.organisation = 'University of Wales';
  req.session.userName = 'Linda Squires';*/

  let targetURL;
  targetURL = '/prototypes/change-request/awards-list';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        Awards list
//
// ************************************************************************
function crAwardsListGet(req, res) {
  let viewData;
  let megaDataApplications = generalData.megaDataApplications;

  if (!req.session.megaDataApplications) {
    req.session.megaDataApplications = megaDataApplications;
  }

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/change-request/awards-list', viewData);
}

// ************************************************************************
//
//        Award details
//
// ************************************************************************
function crAwardOverviewGet(req, res) {
  let viewData;

  let allData = req.session;
  let tempSession;
  console.log(savedSession);

  if (savedSession) {
    // savedSession.requestSubmitted = null;
    console.log('savedSession exists!');
  }

  viewData = {
    allData,
    prototypeData,
    savedSession
  };

  return res.render('prototypes/change-request/award-overview', viewData);
}

// ************************************************************************
//
//        create
//
// ************************************************************************
function crCreateGet(req, res) {
  let viewData;

  console.log(prototypeData);
  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/change-request/create', viewData);
}

function crCreatePost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/change-request/create-type';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        create, TYPE
//
// ************************************************************************
function crCreateTypeGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/change-request/create-type', viewData);
}

function crCreateTypePost(req, res) {
  const { types } = req.body;

  let targetURL;

  console.log('types = ' + types);

  req.session.changeType = types;

  if (types === 'Project details') {
    targetURL = '/prototypes/change-request/project-details';
  } else if (types === 'Logistics and timings') {
    targetURL = '/prototypes/change-request/logistics-and-timings';
  } else if (types === 'Scope') {
    targetURL = '/prototypes/change-request/strategic/scope';
  } else if (types === 'fES') {
    targetURL = '/prototypes/change-request/logistics-and-timings/fes';
  } else {
    targetURL = '/prototypes/change-request/create-type';
  }

  return res.redirect(targetURL);
}
// ************************************************************************
//
//        create, Project details, and Team and Transfer
//
// ************************************************************************
function crProjectDetailsGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/change-request/project-details', viewData);
}

function crProjectDetailsPost(req, res) {
  const { subType } = req.body;

  let targetURL;

  if (subType === 'Team') {
    targetURL = '/prototypes/change-request/project-details/team';
  } else if (subType === 'Transfer') {
    targetURL = '/prototypes/change-request/project-details/transfer';
  } else {
    targetURL = '/prototypes/change-request/project-details';
  }

  return res.redirect(targetURL);
}

/*  TEAM */

function crProjectDetailsTeamGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/change-request/project-details/team', viewData);
}

function crProjectDetailsTeamPost(req, res) {
  const {} = req.body;
  let targetURL;
  console.log(req.body);

  //let formData = req.body;

  if (req.body.removeButton) {
    req.session.removeablePerson = req.body.removeButton;
    targetURL = '/prototypes/change-request/project-details/team-remove';
  } else if (req.body.submitButton) {
    targetURL = '/prototypes/change-request/project-details/team-add';
  }

  return res.redirect(targetURL);
}
/*
* Remove person
* */
function crTeamRemoveGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/change-request/project-details/team-remove', viewData);
}

function crTeamRemovePost(req, res) {
  const {} = req.body;

  let formStuff = req.body;
  for (const [key, value] of Object.entries(formStuff)) {
    console.log(`${key} ${value}`);
    req.session[`${key}`] = `${value}`;
  }

  req.session.teamChangeReturnLink = '/prototypes/change-request/project-details/team';
  req.session.requestType = 'Remove team member';

  let targetURL = '/prototypes/change-request/check';
  return res.redirect(targetURL);
}

/*
* Add person
* */
function crTeamAddGet(req, res) {
  let viewData;

  let limitedOrgList = limitedOrgs.limitedOrgList;

  let allData = req.session;
  viewData = {
    limitedOrgList,
    allData,
    prototypeData
  };

  return res.render('prototypes/change-request/project-details/team-add', viewData);
}

function crTeamAddPost(req, res) {
  const {} = req.body;
  let formStuff = req.body;
  for (const [key, value] of Object.entries(formStuff)) {
    console.log(`${key} ${value}`);
    req.session[`${key}`] = `${value}`;
  }

  req.session.teamChangeReturnLink = '/prototypes/change-request/project-details/team';
  req.session.requestType = 'Add team member';

  let targetURL = '/prototypes/change-request/check';
  return res.redirect(targetURL);
}

/* TRANSFER */

function crProjectDetailsTransferGet(req, res) {
  let viewData;

  let allData = req.session;
  let limitedOrgList = limitedOrgs.limitedOrgList;
  viewData = {
    limitedOrgList,
    allData,
    prototypeData
  };

  return res.render('prototypes/change-request/project-details/transfer', viewData);
}

function crProjectDetailsTransferPost(req, res) {
  const { subType } = req.body;
  let formStuff = req.body;
  for (const [key, value] of Object.entries(formStuff)) {
    console.log(`${key} ${value}`);
    req.session[`${key}`] = `${value}`;
  }

  // req.session.teamChangeReturnLink = '/prototypes/change-request/project-details/team';
  req.session.requestType = 'Transfer';

  let targetURL = '/prototypes/change-request/check';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        create, logistics and timings
//
// ************************************************************************
function crLogisticsAndTimingsGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/change-request/logistics-and-timings', viewData);
}

function crLogisticsAndTimingsPost(req, res) {
  const { subType } = req.body;

  let targetURL;

  if (subType === 'Extension') {
    targetURL = '/prototypes/change-request/logistics-and-timings/extension';
  } else if (subType === 'Suspension') {
    targetURL = '/prototypes/change-request/logistics-and-timings/suspension';
  } else if (subType === 'Termination') {
    targetURL = '/prototypes/change-request/logistics-and-timings/termination';
  } else if (subType === 'Change start date') {
    targetURL = '/prototypes/change-request/logistics-and-timings/change-start-date';
  } else {
    targetURL = '/prototypes/change-request/logistics-and-timings';
  }
  return res.redirect(targetURL);
}

/* extension */
function crLogisticsAndTimingsExtensionGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/change-request/logistics-and-timings/extension', viewData);
}

function crLogisticsAndTimingsExtensionPost(req, res) {
  const {} = req.body;

  let formStuff = req.body;
  for (const [key, value] of Object.entries(formStuff)) {
    console.log(`${key} ${value}`);
    req.session[`${key}`] = `${value}`;
  }
  console.log('req.session = ');
  console.log(req.session);

  req.session.requestType = 'Extension';
  req.session.dateLabel1 = 'Requested end date';

  let targetURL;
  targetURL = '/prototypes/change-request/check';
  return res.redirect(targetURL);
}

/* extension */
function crLogisticsAndTimingsFESGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/change-request/logistics-and-timings/fes', viewData);
}

function crLogisticsAndTimingsFESPost(req, res) {
  const {} = req.body;

  let formStuff = req.body;
  for (const [key, value] of Object.entries(formStuff)) {
    console.log(`${key} ${value}`);
    req.session[`${key}`] = `${value}`;
  }
  console.log('req.session = ');
  console.log(req.session);

  req.session.requestType = 'fES due date extension';
  req.session.dateLabel1 = 'Requested end date';

  let targetURL;
  targetURL = '/prototypes/change-request/check';
  return res.redirect(targetURL);
}

/* suspension */
function crLogisticsAndTimingsSuspensionGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/change-request/logistics-and-timings/suspension', viewData);
}

function crLogisticsAndTimingsSuspensionPost(req, res) {
  const {} = req.body;

  let formStuff = req.body;
  for (const [key, value] of Object.entries(formStuff)) {
    console.log(`${key} ${value}`);
    req.session[`${key}`] = `${value}`;
  }

  req.session.requestType = 'Suspension';
  req.session.dateLabel1 = 'Requested suspension date';
  req.session.dateLabel2 = 'Requested resumption date';
  req.session.reasonLabel = 'Reason for suspension';

  let targetURL;
  targetURL = '/prototypes/change-request/check';
  return res.redirect(targetURL);
}

/* termination */
function crLogisticsAndTimingsTerminationGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/change-request/logistics-and-timings/termination', viewData);
}

function crLogisticsAndTimingsTerminationPost(req, res) {
  const {} = req.body;

  let formStuff = req.body;
  for (const [key, value] of Object.entries(formStuff)) {
    console.log(`${key} ${value}`);
    req.session[`${key}`] = `${value}`;
  }

  req.session.requestType = 'Termination';
  req.session.dateLabel1 = 'Requested termination date';
  req.session.dateLabel2 = null;
  req.session.reasonLabel = 'Reason for termination';

  let targetURL;
  targetURL = '/prototypes/change-request/check';
  return res.redirect(targetURL);
}

/* change start date */
function crLogisticsAndTimingsChangestartDateGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/change-request/logistics-and-timings/change-start-date', viewData);
}

function crLogisticsAndTimingsChangestartDatePost(req, res) {
  const {} = req.body;

  let formStuff = req.body;
  for (const [key, value] of Object.entries(formStuff)) {
    console.log(`${key} ${value}`);
    req.session[`${key}`] = `${value}`;
  }

  req.session.requestType = 'Change start date';
  req.session.dateLabel1 = 'Requested new start date';

  let targetURL;
  targetURL = '/prototypes/change-request/check';
  return res.redirect(targetURL);
}
// ************************************************************************
//
//        create, strategic
//
// ************************************************************************
function crStrategicGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/change-request/strategic', viewData);
}

function crStrategicPost(req, res) {
  const { subType } = req.body;

  let targetURL;

  if (subType === 'Deliverables') {
    targetURL = '/prototypes/change-request/strategic/deliverables';
  } else if (subType === 'Scope') {
    targetURL = '/prototypes/change-request/strategic/scope';
  } else {
    targetURL = '/prototypes/change-request/strategic';
  }

  return res.redirect(targetURL);
}

/* deliverables */
function crStrategicDeliverablesGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/change-request/strategic/deliverables', viewData);
}

function crStrategicDeliverablesPost(req, res) {
  const {} = req.body;

  let formStuff = req.body;
  for (const [key, value] of Object.entries(formStuff)) {
    console.log(`${key} ${value}`);
    req.session[`${key}`] = `${value}`;
  }

  req.session.requestType = 'Deliverables';

  let targetURL;
  targetURL = '/prototypes/change-request/check';
  return res.redirect(targetURL);
}

/* deliverables */
function crStrategicScopeGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/change-request/strategic/scope', viewData);
}

function crStrategicScopePost(req, res) {
  const {} = req.body;
  let formStuff = req.body;
  for (const [key, value] of Object.entries(formStuff)) {
    console.log(`${key} ${value}`);
    req.session[`${key}`] = `${value}`;
  }

  req.session.requestType = 'Scope';

  let targetURL;
  targetURL = '/prototypes/change-request/check';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        CHECK BEFORE SAVING
//
// ************************************************************************
function crCheckGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/change-request/check', viewData);
}

function crCheckPost(req, res) {
  const { createdTimeAndDate } = req.body;
  /* SUBMIT */
  req.session.requestSubmitted = true;
  req.session.requestSubmittedPermanent = true;
  req.session.createdTimeAndDate = createdTimeAndDate;
  savedSession = req.session;
  req.session = null;

  /*console.log('savedSession = ');
  console.log(savedSession);*/

  let targetURL = '/prototypes/change-request/award-overview';

  return res.redirect(targetURL);
}

/*
crAwardPaymentScheduleGet
crAwardTeamGet
crAwardDocsGet
crAwardAgreementGet
crAwardCostsGet
crAwardFinanceGet
crAwardExpenditureGet
*/
function crAwardDetailsGet(req, res) {
  let viewData;
  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };
  return res.render('prototypes/change-request/award-details', viewData);
}
function crAwardPaymentScheduleGet(req, res) {
  let viewData;
  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };
  return res.render('prototypes/change-request/award-payment-schedule', viewData);
}

function crAwardTeamGet(req, res) {
  let viewData;
  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };
  return res.render('prototypes/change-request/award-team', viewData);
}

function crAwardDocsGet(req, res) {
  let viewData;
  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };
  return res.render('prototypes/change-request/award-documents', viewData);
}
function crAwardAgreementGet(req, res) {
  let viewData;
  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };
  return res.render('prototypes/change-request/award-agreement', viewData);
}
function crAwardCostsGet(req, res) {
  let viewData;
  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };
  return res.render('prototypes/change-request/award-costs', viewData);
}
function crAwardFinanceGet(req, res) {
  let viewData;
  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };
  return res.render('prototypes/change-request/award-finance-summary', viewData);
}
function crAwardExpenditureGet(req, res) {
  let viewData;
  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };
  return res.render('prototypes/change-request/award-expenditure', viewData);
}

/*
*
*   View change request page
*
* */

function crAwardChangeRequestsGet(req, res) {
  let viewData;

  let crStatus = req.param('status');
  console.log();
  if (crStatus) {
    req.session.crStatus = crStatus;
  }

  console.log();

  let allData = req.session;

  viewData = {
    allData,
    prototypeData,
    savedSession
  };
  return res.render('prototypes/change-request/award-view-requests', viewData);
}

/*
*
*   Award change request page
*
* */

function crViewRequestGet(req, res) {
  let viewData;

  let crStatus = req.param('status');
  console.log();
  if (crStatus) {
    req.session.crStatus = crStatus;
  }

  console.log();

  let allData = req.session;

  viewData = {
    allData,
    prototypeData,
    savedSession
  };
  return res.render('prototypes/change-request/change-request-detail', viewData);
}