const untitledProjectName = 'Untitled project';
let generalData = require('./data');
let genericFunctions = require('./generic');

// ************************************************************************
//
//        Submission control index
//
// ************************************************************************
export function submissionIndexGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/submission-control/index', viewData);
}

export function submissionIndexPost(req, res) {
  const {} = req.body;

  let targetURL;

  return res.redirect(targetURL);
}

export function submissionApplicationOverviewGet(req, res) {
  let viewData,
    userType,
    isShared,
    applicationStatus,
    progressPercentage,
    reverseProgressPercentage,
    projectName,
    projectDetails,
    applicantsIsComplete,
    detailsIsComplete,
    caseForSupportIsComplete,
    resourcesAndCostsIsComplete,
    justificationIsComplete;

  projectName = 'APP171: Bio-detoxification of Ricin in castor bean';
  detailsIsComplete = true;
  caseForSupportIsComplete = true;
  resourcesAndCostsIsComplete = true;
  justificationIsComplete = true;
  applicantsIsComplete = true;

  userType = 'office';
  isShared = true;
  // applicationStatus = 'stopShare';
  progressPercentage = 100;
  reverseProgressPercentage = 0;

  viewData = {
    userType,
    projectName,
    isShared,
    applicationStatus,
    applicantsIsComplete,
    progressPercentage,
    reverseProgressPercentage,
    detailsIsComplete,
    caseForSupportIsComplete,
    resourcesAndCostsIsComplete,
    justificationIsComplete,
  };

  return res.render('prototypes/submission-control/application-overview', viewData);
}

export function submissionApplicationOverviewPost(req, res) {
  const {} = req.body;

  let targetURL;

  return res.redirect(targetURL);
}
