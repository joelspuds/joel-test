let generalData = require('./data');
let genericFunctions = require('./generic');
let limitedOrgs = require('./orgs400');

const externalAwardPrototypeData = {
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
export function eaIndexGet(req, res) {
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
    externalAwardPrototypeData,
  };

  return res.render('prototypes/external-award/index', viewData);
}

export function eaIndexPost(req, res) {
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
export function eaSetUpGet(req, res) {
  let viewData;
  let megaDataApplications = generalData.megaDataApplications;

  if (!req.session.megaDataApplications) {
    req.session.megaDataApplications = megaDataApplications;
  }

  let allData = req.session;

  viewData = {
    allData,
    externalAwardPrototypeData,
    savedSession,
  };

  return res.render('prototypes/external-award/set-up', viewData);
}
export function eaSetUpPost(req, res) {
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
export function eaAwardAgreementGet(req, res) {
  let viewData;
  let allData = req.session;

  viewData = {
    allData,
    externalAwardPrototypeData,
    savedSession,
  };
  return res.render('prototypes/external-award/award-agreement', viewData);
}
export function eaAwardAgreementPost(req, res) {
  const {} = req.body;
  let targetURL;
  targetURL = '/prototypes/external-award/set-up';
  return res.redirect(targetURL);
}
/*
* Collab agreement
* */
export function eaAwardCollaborationAgreementGet(req, res) {
  let viewData;

  let allData = req.session;

  viewData = {
    allData,
    externalAwardPrototypeData,
    savedSession,
  };

  return res.render('prototypes/external-award/award-collaboration-agreement', viewData);
}
export function eaAwardCollaborationAgreementPost(req, res) {
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
export function eaAwardCostsGet(req, res) {
  let viewData;

  let allData = req.session;

  viewData = {
    allData,
    externalAwardPrototypeData,
    savedSession,
  };

  return res.render('prototypes/external-award/award-costs', viewData);
}
export function eaAwardCostsPost(req, res) {
  const {} = req.body;
  let targetURL;
  targetURL = '/prototypes/external-award/set-up';
  return res.redirect(targetURL);
}
/*
* Details
* */
export function eaAwardDetailsGet(req, res) {
  let viewData;

  let allData = req.session;

  viewData = {
    allData,
    externalAwardPrototypeData,
    savedSession,
  };

  return res.render('prototypes/external-award/award-details', viewData);
}
export function eaAwardDetailsPost(req, res) {
  const {} = req.body;
  let targetURL;
  targetURL = '/prototypes/external-award/set-up';
  return res.redirect(targetURL);
}
/*
* Payment schedule
* */
export function eaAwardPaymentScheduleGet(req, res) {
  let viewData;

  let allData = req.session;

  viewData = {
    allData,
    externalAwardPrototypeData,
    savedSession,
  };

  return res.render('prototypes/external-award/award-payment-schedule', viewData);
}
export function eaAwardPaymentSchedulePost(req, res) {
  const {} = req.body;
  let targetURL;
  targetURL = '/prototypes/external-award/set-up';
  return res.redirect(targetURL);
}
/*
* Team
* */
export function eaAwardTeamGet(req, res) {
  let viewData;

  let allData = req.session;

  viewData = {
    allData,
    externalAwardPrototypeData,
    savedSession,
  };

  return res.render('prototypes/external-award/award-team', viewData);
}
export function eaAwardTeamPost(req, res) {
  const {} = req.body;
  let targetURL;
  targetURL = '/prototypes/external-award/set-up';
  return res.redirect(targetURL);
}
/*
* Terms
* */
export function eaAwardTermsGet(req, res) {
  let viewData;

  let allData = req.session;

  viewData = {
    allData,
    externalAwardPrototypeData,
    savedSession,
  };

  return res.render('prototypes/external-award/award-terms', viewData);
}
export function eaAwardTermsPost(req, res) {
  const {} = req.body;
  let targetURL;
  targetURL = '/prototypes/external-award/set-up';
  return res.redirect(targetURL);
}

/*
* Added Terms
* */
export function eaAwardTermsAddedGet(req, res) {
  let viewData;

  let allData = req.session;

  viewData = {
    allData,
    externalAwardPrototypeData,
    savedSession,
  };

  return res.render('prototypes/external-award/terms-and-conditions/added', viewData);
}
export function eaAwardTermsAddedPost(req, res) {
  const { isComplete } = req.body;
  let targetURL;
  console.log('isComplete = ' + isComplete);
  req.session.addedTerms = isComplete;
  targetURL = '/prototypes/external-award/award-terms';
  return res.redirect(targetURL);
}
