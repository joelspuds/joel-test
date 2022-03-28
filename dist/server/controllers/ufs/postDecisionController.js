'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pdIndexGet = pdIndexGet;
exports.pdIndexPost = pdIndexPost;
exports.pdHomeGet = pdHomeGet;
exports.pdHomePost = pdHomePost;
exports.pdAwardsGet = pdAwardsGet;
exports.pdAwardsPost = pdAwardsPost;
exports.pdAwardStartGet = pdAwardStartGet;
exports.pdAwardStartPost = pdAwardStartPost;
exports.pdAwardConfirmGet = pdAwardConfirmGet;
exports.pdAwardConfirmPost = pdAwardConfirmPost;
exports.pdAwardPaymentScheduleGet = pdAwardPaymentScheduleGet;
exports.pdAwardPaymentSchedulePost = pdAwardPaymentSchedulePost;
exports.pdAwardDetailsGet = pdAwardDetailsGet;
exports.pdAwardDetailsPost = pdAwardDetailsPost;
exports.pdAwardTeamGet = pdAwardTeamGet;
exports.pdAwardTeamPost = pdAwardTeamPost;
exports.pdAwardAgreementGet = pdAwardAgreementGet;
exports.pdAwardAgreementPost = pdAwardAgreementPost;
exports.pdAwardCostsGet = pdAwardCostsGet;
exports.pdAwardFinanceGet = pdAwardFinanceGet;
exports.pdAwardExpenditureGet = pdAwardExpenditureGet;
exports.pdAwardDocsGet = pdAwardDocsGet;
exports.pdAwardDocsPost = pdAwardDocsPost;
exports.pdAwardChangeStartGet = pdAwardChangeStartGet;
exports.pdAwardChangeStartPost = pdAwardChangeStartPost;
exports.pdAwardCreateChangeRequestGet = pdAwardCreateChangeRequestGet;
exports.pdAwardCreateChangeRequestPost = pdAwardCreateChangeRequestPost;
exports.pdAwardCreateChangeProjectDetailsGet = pdAwardCreateChangeProjectDetailsGet;
exports.pdAwardCreateChangeProjectDetailsPost = pdAwardCreateChangeProjectDetailsPost;
exports.pdAwardCreateChangeTransferGet = pdAwardCreateChangeTransferGet;
exports.pdAwardCreateChangeTransferPost = pdAwardCreateChangeTransferPost;
exports.pdAwardCreateChangeTransferConfirmGet = pdAwardCreateChangeTransferConfirmGet;
exports.pdAwardCreateChangeTransferConfirmPost = pdAwardCreateChangeTransferConfirmPost;
// import {megaDataApplications} from "./data";

let generalData = require('./data');
let genericFunctions = require('./generic');
let limitedOrgs = require('./orgs400');

// ************************************************************************
//
//        index
//
// ************************************************************************
function pdIndexGet(req, res) {
  let viewData;

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
  }

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/index', viewData);
}

function pdIndexPost(req, res) {
  const {} = req.body;

  req.session.organisation = 'University of Wales';
  req.session.userName = 'Binoo Rastogi';

  let targetURL;
  targetURL = '/prototypes/post-decision/email';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        home
//
// ************************************************************************
function pdHomeGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/home', viewData);
}

function pdHomePost(req, res) {
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
function pdAwardsGet(req, res) {
  let viewData;

  let megaDataApplications = generalData.megaDataApplications;

  if (!req.session.megaDataApplications) {
    req.session.megaDataApplications = megaDataApplications;
  }

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/awards', viewData);
}

function pdAwardsPost(req, res) {
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
function pdAwardStartGet(req, res) {
  let viewData;

  let megaDataApplications = generalData.megaDataApplications;

  if (!req.session.megaDataApplications) {
    req.session.megaDataApplications = megaDataApplications;
  }

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/award-start', viewData);
}

function pdAwardStartPost(req, res) {
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
function pdAwardConfirmGet(req, res) {
  let viewData;

  /*let megaDataApplications = generalData.megaDataApplications;
   if (!req.session.megaDataApplications) {
    req.session.megaDataApplications = megaDataApplications;
  }*/

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/award-confirmation', viewData);
}

function pdAwardConfirmPost(req, res) {
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
function pdAwardPaymentScheduleGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/award-payment-schedule', viewData);
}

function pdAwardPaymentSchedulePost(req, res) {
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
function pdAwardDetailsGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/award-details', viewData);
}

function pdAwardDetailsPost(req, res) {
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
function pdAwardTeamGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/award-team', viewData);
}

function pdAwardTeamPost(req, res) {
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
function pdAwardAgreementGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/award-agreement', viewData);
}

function pdAwardAgreementPost(req, res) {
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
function pdAwardCostsGet(req, res) {
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
function pdAwardFinanceGet(req, res) {
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
function pdAwardExpenditureGet(req, res) {
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
function pdAwardDocsGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/award-documents', viewData);
}

function pdAwardDocsPost(req, res) {
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
function pdAwardChangeStartGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/award-change-start', viewData);
}

function pdAwardChangeStartPost(req, res) {
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
function pdAwardCreateChangeRequestGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/award-create-change-request', viewData);
}

function pdAwardCreateChangeRequestPost(req, res) {
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
function pdAwardCreateChangeProjectDetailsGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/award-change-project-details', viewData);
}

function pdAwardCreateChangeProjectDetailsPost(req, res) {
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
function pdAwardCreateChangeTransferGet(req, res) {
  let viewData;

  let limitedOrgList = limitedOrgs.limitedOrgList;
  console.log('limitedOrgList: ');
  console.log(limitedOrgList);

  let allData = req.session;
  viewData = {
    allData,
    limitedOrgList
  };

  return res.render('prototypes/post-decision/award-change-transfer', viewData);
}

function pdAwardCreateChangeTransferPost(req, res) {
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
function pdAwardCreateChangeTransferConfirmGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/award-change-transfer-confirm', viewData);
}

function pdAwardCreateChangeTransferConfirmPost(req, res) {
  const {} = req.body;

  req.session.transferConfirmed = true;

  let targetURL;
  targetURL = '/prototypes/post-decision/award-change-start';
  return res.redirect(targetURL);
}