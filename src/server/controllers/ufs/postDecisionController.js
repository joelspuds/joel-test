// import {megaDataApplications} from "./data";

let generalData = require('./data');
let genericFunctions = require('./generic');
let limitedOrgs = require('./orgs400');

// ************************************************************************
//
//        index
//
// ************************************************************************
export function pdIndexGet(req, res) {
  let viewData;

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
  }

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/index', viewData);
}

export function pdIndexPost(req, res) {
  const {} = req.body;

  req.session.organisation = 'University of Wales';
  req.session.userName = 'Paul Hogben';

  let targetURL;
  targetURL = '/prototypes/post-decision/email';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        home
//
// ************************************************************************
export function pdHomeGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/home', viewData);
}

export function pdHomePost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/post-decision/home';
  return res.redirect(targetURL);
}

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

  /*let megaDataApplications = generalData.megaDataApplications;

  if (!req.session.megaDataApplications) {
    req.session.megaDataApplications = megaDataApplications;
  }*/

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
