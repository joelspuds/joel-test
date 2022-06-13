let generalData = require('./data');
let genericFunctions = require('./generic');
let limitedOrgs = require('./orgs400');

const prototypeData = {
  userName: 'Rohindra Khatra',
  awardName: 'AWA184 Environmental research grants 2022',
};

// ************************************************************************
//
//        index
//
// ************************************************************************
export function crIndexGet(req, res) {
  let viewData;

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
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
  targetURL = '/prototypes/change-request/create';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        create
//
// ************************************************************************
export function crCreateGet(req, res) {
  let viewData;

  console.log(prototypeData);
  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
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

  console.log('types = ' + types);

  req.session.changeType = types;

  if (types === 'Project details') {
    targetURL = '/prototypes/change-request/team-and-transfer';
  } else if (types === 'Logistics and timings') {
    targetURL = '/prototypes/change-request/logistics-and-timings';
  } else if (types === 'Strategic') {
    targetURL = '/prototypes/change-request/strategic';
  } else {
    targetURL = '/prototypes/change-request/create-type';
  }

  return res.redirect(targetURL);
}
// ************************************************************************
//
//        create, Project details
//
// ************************************************************************
export function crTeamAndTransferGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };

  return res.render('prototypes/change-request/project-details', viewData);
}

export function crTeamAndTransferPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/change-request/create-type';
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
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/change-request/create-type';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        create, strategic
//
// ************************************************************************
export function crDeliverablesAndScopeGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };

  return res.render('prototypes/change-request/strategic', viewData);
}

export function crDeliverablesAndScopePost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/change-request/create-type';
  return res.redirect(targetURL);
}

/*

// ************************************************************************
//
//        awards
//
// ************************************************************************
export function pdAwardsGet(req, res) {
  let viewData;

  let megaDataApplications = generalData.megaDataApplications;

  if (!req.session.megaDataApplications) {
    req.session.megaDataApplications = megaDataApplications;
  }

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/awards', viewData);
}

export function pdAwardsPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/post-decision/home';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        award start
//
// ************************************************************************
export function pdAwardStartGet(req, res) {
  let viewData;

  let megaDataApplications = generalData.megaDataApplications;

  if (!req.session.megaDataApplications) {
    req.session.megaDataApplications = megaDataApplications;
  }

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/award-start', viewData);
}

export function pdAwardStartPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/post-decision/home';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        award start confirmaiton
//
// ************************************************************************
export function pdAwardConfirmGet(req, res) {
  let viewData;

  /!*let megaDataApplications = generalData.megaDataApplications;

  if (!req.session.megaDataApplications) {
    req.session.megaDataApplications = megaDataApplications;
  }*!/

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/award-confirmation', viewData);
}

export function pdAwardConfirmPost(req, res) {
  const { startConfirmationDay, startConfirmationMonth, startConfirmationYear, expenditureFundingHeading } = req.body;

  req.session.startConfirmationDay = startConfirmationDay;
  req.session.startConfirmationMonth = startConfirmationMonth;
  req.session.startConfirmationYear = startConfirmationYear;
  req.session.expenditureFundingHeading = expenditureFundingHeading;
  req.session.startConfirmed = true;

  let targetURL;
  targetURL = '/prototypes/post-decision/award-start';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        award payment schedule
//
// ************************************************************************
export function pdAwardPaymentScheduleGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/award-payment-schedule', viewData);
}

export function pdAwardPaymentSchedulePost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/post-decision/award-payment-schedule';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        award details
//
// ************************************************************************
export function pdAwardDetailsGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/award-details', viewData);
}

export function pdAwardDetailsPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/post-decision/award-details';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        award team
//
// ************************************************************************
export function pdAwardTeamGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/award-team', viewData);
}

export function pdAwardTeamPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/post-decision/award-team';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        award agreement
//
// ************************************************************************
export function pdAwardAgreementGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/award-agreement', viewData);
}

export function pdAwardAgreementPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/post-decision/award-team';
  return res.redirect(targetURL);
}
// ************************************************************************
//
//        award costs
//
// ************************************************************************
export function pdAwardCostsGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/award-costs', viewData);
}
// ************************************************************************
//
//        award finance
//
// ************************************************************************
export function pdAwardFinanceGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/award-finance', viewData);
}
// ************************************************************************
//
//        award expenditure
//
// ************************************************************************
export function pdAwardExpenditureGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/award-expenditure', viewData);
}

// ************************************************************************
//
//        award docs
//
// ************************************************************************
export function pdAwardDocsGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/award-documents', viewData);
}

export function pdAwardDocsPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/post-decision/award-team';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        award change start
//
// ************************************************************************
export function pdAwardChangeStartGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/award-change-start', viewData);
}

export function pdAwardChangeStartPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/post-decision/award-change-start';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        award create new change request
//
// ************************************************************************
export function pdAwardCreateChangeRequestGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/award-create-change-request', viewData);
}

export function pdAwardCreateChangeRequestPost(req, res) {
  const { newChangeRequest } = req.body;

  req.session.newChangeRequest = newChangeRequest;

  let targetURL;
  targetURL = '/prototypes/post-decision/award-change-project-details';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        award create new change request project details
//
// ************************************************************************
export function pdAwardCreateChangeProjectDetailsGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/award-change-project-details', viewData);
}

export function pdAwardCreateChangeProjectDetailsPost(req, res) {
  const { newChangeRequestProjectDetails } = req.body;

  req.session.newChangeRequestProjectDetails = newChangeRequestProjectDetails;

  let targetURL;
  targetURL = '/prototypes/post-decision/award-change-transfer';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        award create new change request transfer
//
// ************************************************************************
export function pdAwardCreateChangeTransferGet(req, res) {
  let viewData;

  let limitedOrgList = limitedOrgs.limitedOrgList;
  console.log('limitedOrgList: ');
  console.log(limitedOrgList);

  let allData = req.session;
  viewData = {
    allData,
    limitedOrgList,
  };

  return res.render('prototypes/post-decision/award-change-transfer', viewData);
}

export function pdAwardCreateChangeTransferPost(req, res) {
  const { transferDay, transferMonth, transferYear, transferOrganisation } = req.body;

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  req.session.transferDay = transferDay;
  req.session.transferMonth = transferMonth;
  req.session.transferYear = transferYear;
  req.session.transferOrganisation = transferOrganisation;

  req.session.transferMonthName = months[parseInt(transferMonth) - 1];

  let targetURL;
  targetURL = '/prototypes/post-decision/award-change-transfer-confirm';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        award create new change request transfer CONFIRM<
//
// ************************************************************************
export function pdAwardCreateChangeTransferConfirmGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/award-change-transfer-confirm', viewData);
}

export function pdAwardCreateChangeTransferConfirmPost(req, res) {
  const {} = req.body;

  req.session.transferConfirmed = true;

  let targetURL;
  targetURL = '/prototypes/post-decision/award-change-start';
  return res.redirect(targetURL);
}
*/
