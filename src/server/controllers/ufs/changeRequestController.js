let generalData = require('./data');
let genericFunctions = require('./generic');
let limitedOrgs = require('./orgs400');

const prototypeData = {
  userName: 'Rohindra Khatra',
  awardName: 'AWA184: Environmental research grants 2022',
  currentEndDate: '30 October 2023',
};

let savedSession;

// ************************************************************************
//
//        index
//
// ************************************************************************
export function crIndexGet(req, res) {
  let viewData;

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    savedSession = null;
    req.session.destroy();
    let targetURL = '/prototypes/change-request/';
    return res.redirect(targetURL);
  }

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };

  return res.render('prototypes/change-request/index', viewData);
}

export function crIndexPost(req, res) {
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
export function crAwardsListGet(req, res) {
  let viewData;
  let megaDataApplications = generalData.megaDataApplications;

  if (!req.session.megaDataApplications) {
    req.session.megaDataApplications = megaDataApplications;
  }

  let allData = req.session;
  // // console.log(allData);

  viewData = {
    allData,
    prototypeData,
    savedSession,
  };

  return res.render('prototypes/change-request/awards-list', viewData);
}

// ************************************************************************
//
//        Award details
//
// ************************************************************************
export function crAwardOverviewGet(req, res) {
  let viewData;

  let allData = req.session;
  let tempSession;
  // // console.log(savedSession);

  /*if (savedSession) {
    // savedSession.requestSubmitted = null;
    // console.log('savedSession exists!');
  }*/

  viewData = {
    allData,
    prototypeData,
    savedSession,
  };

  return res.render('prototypes/change-request/award-overview', viewData);
}

// ************************************************************************
//
//        create
//
// ************************************************************************
export function crCreateGet(req, res) {
  let viewData;

  let crStatus = req.param('status');
  if (crStatus) {
    req.session.crStatus = crStatus;
  }

  let allData = req.session;

  viewData = {
    allData,
    prototypeData,
    savedSession,
  };

  return res.render('prototypes/change-request/create', viewData);
}

export function crCreatePost(req, res) {
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
export function crCreateTypeGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };

  return res.render('prototypes/change-request/create-type', viewData);
}

export function crCreateTypePost(req, res) {
  const { types } = req.body;

  let targetURL;

  // console.log('types = ' + types);

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
export function crProjectDetailsGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };

  return res.render('prototypes/change-request/project-details', viewData);
}

export function crProjectDetailsPost(req, res) {
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

export function crProjectDetailsTeamGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };

  return res.render('prototypes/change-request/project-details/team', viewData);
}

export function crProjectDetailsTeamPost(req, res) {
  const {} = req.body;
  let targetURL;
  // console.log(req.body);

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
export function crTeamRemoveGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };

  return res.render('prototypes/change-request/project-details/team-remove', viewData);
}

export function crTeamRemovePost(req, res) {
  const {} = req.body;

  let formStuff = req.body;
  for (const [key, value] of Object.entries(formStuff)) {
    // console.log(`${key} ${value}`);
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
export function crTeamAddGet(req, res) {
  let viewData;

  let limitedOrgList = limitedOrgs.limitedOrgList;

  let allData = req.session;
  viewData = {
    limitedOrgList,
    allData,
    prototypeData,
  };

  return res.render('prototypes/change-request/project-details/team-add', viewData);
}

export function crTeamAddPost(req, res) {
  const {} = req.body;
  let formStuff = req.body;
  for (const [key, value] of Object.entries(formStuff)) {
    // console.log(`${key} ${value}`);
    req.session[`${key}`] = `${value}`;
  }

  req.session.teamChangeReturnLink = '/prototypes/change-request/project-details/team';
  req.session.requestType = 'Add team member';

  let targetURL = '/prototypes/change-request/check';
  return res.redirect(targetURL);
}

/* TRANSFER */

export function crProjectDetailsTransferGet(req, res) {
  let viewData;

  let allData = req.session;
  let limitedOrgList = limitedOrgs.limitedOrgList;
  viewData = {
    limitedOrgList,
    allData,
    prototypeData,
  };

  return res.render('prototypes/change-request/project-details/transfer', viewData);
}

export function crProjectDetailsTransferPost(req, res) {
  const { subType } = req.body;
  let formStuff = req.body;
  for (const [key, value] of Object.entries(formStuff)) {
    // console.log(`${key} ${value}`);
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
export function crLogisticsAndTimingsGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };

  return res.render('prototypes/change-request/logistics-and-timings', viewData);
}

export function crLogisticsAndTimingsPost(req, res) {
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
export function crLogisticsAndTimingsExtensionGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };

  return res.render('prototypes/change-request/logistics-and-timings/extension', viewData);
}

export function crLogisticsAndTimingsExtensionPost(req, res) {
  const {} = req.body;

  let formStuff = req.body;
  for (const [key, value] of Object.entries(formStuff)) {
    // console.log(`${key} ${value}`);
    req.session[`${key}`] = `${value}`;
  }
  // console.log('req.session = ');
  // console.log(req.session);

  req.session.requestType = 'Extension';
  req.session.dateLabel1 = 'Requested end date';

  let targetURL;
  targetURL = '/prototypes/change-request/check';
  return res.redirect(targetURL);
}

/* extension */
export function crLogisticsAndTimingsFESGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };

  return res.render('prototypes/change-request/logistics-and-timings/fes', viewData);
}

export function crLogisticsAndTimingsFESPost(req, res) {
  const {} = req.body;

  let formStuff = req.body;
  for (const [key, value] of Object.entries(formStuff)) {
    // console.log(`${key} ${value}`);
    req.session[`${key}`] = `${value}`;
  }
  // console.log('req.session = ');
  // console.log(req.session);

  req.session.requestType = 'fES due date extension';
  req.session.dateLabel1 = 'Requested end date';

  let targetURL;
  targetURL = '/prototypes/change-request/check';
  return res.redirect(targetURL);
}

/* suspension */
export function crLogisticsAndTimingsSuspensionGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };

  return res.render('prototypes/change-request/logistics-and-timings/suspension', viewData);
}

export function crLogisticsAndTimingsSuspensionPost(req, res) {
  const {} = req.body;

  let formStuff = req.body;
  for (const [key, value] of Object.entries(formStuff)) {
    // console.log(`${key} ${value}`);
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
export function crLogisticsAndTimingsTerminationGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };

  return res.render('prototypes/change-request/logistics-and-timings/termination', viewData);
}

export function crLogisticsAndTimingsTerminationPost(req, res) {
  const {} = req.body;

  let formStuff = req.body;
  for (const [key, value] of Object.entries(formStuff)) {
    // console.log(`${key} ${value}`);
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
export function crLogisticsAndTimingsChangestartDateGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };

  return res.render('prototypes/change-request/logistics-and-timings/change-start-date', viewData);
}

export function crLogisticsAndTimingsChangestartDatePost(req, res) {
  const {} = req.body;

  let formStuff = req.body;
  for (const [key, value] of Object.entries(formStuff)) {
    // console.log(`${key} ${value}`);
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
export function crStrategicGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };

  return res.render('prototypes/change-request/strategic', viewData);
}

export function crStrategicPost(req, res) {
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
export function crStrategicDeliverablesGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };

  return res.render('prototypes/change-request/strategic/deliverables', viewData);
}

export function crStrategicDeliverablesPost(req, res) {
  const {} = req.body;

  let formStuff = req.body;
  for (const [key, value] of Object.entries(formStuff)) {
    // console.log(`${key} ${value}`);
    req.session[`${key}`] = `${value}`;
  }

  req.session.requestType = 'Deliverables';

  let targetURL;
  targetURL = '/prototypes/change-request/check';
  return res.redirect(targetURL);
}

/* deliverables */
export function crStrategicScopeGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };

  return res.render('prototypes/change-request/strategic/scope', viewData);
}

export function crStrategicScopePost(req, res) {
  const {} = req.body;
  let formStuff = req.body;
  for (const [key, value] of Object.entries(formStuff)) {
    // console.log(`${key} ${value}`);
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
export function crCheckGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };

  return res.render('prototypes/change-request/check', viewData);
}

export function crCheckPost(req, res) {
  const { createdTimeAndDate } = req.body;
  /* SUBMIT */
  req.session.requestSubmitted = true;
  req.session.requestSubmittedPermanent = true;
  req.session.createdTimeAndDate = createdTimeAndDate;
  savedSession = req.session;
  req.session = null;

  /*// console.log('savedSession = ');
  // console.log(savedSession);*/

  // let targetURL = '/prototypes/change-request/award-overview';
  let targetURL = '/prototypes/change-request/create';

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
export function crAwardDetailsGet(req, res) {
  let viewData;
  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };
  return res.render('prototypes/change-request/award-details', viewData);
}
export function crAwardPaymentScheduleGet(req, res) {
  let viewData;
  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };
  return res.render('prototypes/change-request/award-payment-schedule', viewData);
}

export function crAwardTeamGet(req, res) {
  let viewData;
  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };
  return res.render('prototypes/change-request/award-team', viewData);
}

export function crAwardDocsGet(req, res) {
  let viewData;
  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };
  return res.render('prototypes/change-request/award-documents', viewData);
}
export function crAwardAgreementGet(req, res) {
  let viewData;
  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };
  return res.render('prototypes/change-request/award-agreement', viewData);
}
export function crAwardCostsGet(req, res) {
  let viewData;
  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };
  return res.render('prototypes/change-request/award-costs', viewData);
}
export function crAwardFinanceGet(req, res) {
  let viewData;
  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };
  return res.render('prototypes/change-request/award-finance-summary', viewData);
}
export function crAwardExpenditureGet(req, res) {
  let viewData;
  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };
  return res.render('prototypes/change-request/award-expenditure', viewData);
}

/*
*
*   View change request page
*
* */

export function crAwardChangeRequestsGet(req, res) {
  let viewData;

  let crStatus = req.param('status');
  if (crStatus) {
    req.session.crStatus = crStatus;
  }

  let allData = req.session;

  viewData = {
    allData,
    prototypeData,
    savedSession,
  };
  return res.render('prototypes/change-request/award-view-requests', viewData);
}

/*
*
*   Award change request page
*
* */

export function crViewRequestGet(req, res) {
  let viewData;

  let crStatus = req.param('status');
  // console.log();
  if (crStatus) {
    req.session.crStatus = crStatus;
  }

  // console.log();

  let allData = req.session;

  viewData = {
    allData,
    prototypeData,
    savedSession,
  };
  return res.render('prototypes/change-request/change-request-detail', viewData);
}
