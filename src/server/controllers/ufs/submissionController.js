const untitledProjectName = 'Untitled project';
let generalData = require('./data');
let genericFunctions = require('./generic');
let caseForSupportData = require('./case-for-support-2');

let dummyFillerHTML =
  '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. </p>\n' +
  '\n' +
  '<p>Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. </p>\n' +
  '\n' +
  '<p>Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. </p>\n' +
  '\n' +
  '<p>Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. </p>\n' +
  '\n' +
  '<p>Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. </p>';
let dummyFiller =
  'Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. ';

let journeyData = {
  detailsIsComplete: true,
  detailsReadOnly: true,
  projectName: 'APP171: Bio-detoxification of Ricin in castor bean',
  detailsInput: dummyFillerHTML,
  caseForSupportIsComplete: true,
  caseForSupportReadOnly: true,
  caseForSupportNotes: dummyFillerHTML,
  directlyIncurredCost: '25000',
  directlyAllocatedCost: '25000',
  indirectCost: '25000',
  exceptionCost: '25000',
  resourcesAndCostsIsComplete: '25000',
  resourcesAndCostsReadOnly: true,
  justificationIsComplete: true,
  justificationReadOnly: true,
  justificationContent: dummyFiller,
};

let journeyDataApplicant = {
  detailsIsComplete: true,
  detailsReadOnly: false,
  projectName: 'APP171: Bio-detoxification of Ricin in castor bean',
  detailsInput: dummyFillerHTML,
  caseForSupportIsComplete: false,
  caseForSupportReadOnly: false,
  caseForSupportNotes: '',
  directlyIncurredCost: '25000',
  directlyAllocatedCost: '25000',
  indirectCost: '25000',
  exceptionCost: '25000',
  resourcesAndCostsIsComplete: '25000',
  resourcesAndCostsReadOnly: false,
  justificationIsComplete: true,
  justificationReadOnly: false,
  justificationContent: dummyFiller,
  progressPercentage: 75,
};

// ************************************************************************
//
//        Submission control index
//
// ************************************************************************
export function submissionIndexGet(req, res) {
  let viewData;
  let templateName = 'prototypes/submission-control/index';

  let clearSession = req.param('clearSession');
  let from = req.param('from');
  if (from === 'participant') {
    templateName = 'prototypes/submission-control/index-participant';
  }

  if (clearSession === 'true') {
    req.session.destroy();
    /*journeyDataApplicant = null;
    journeyData = null;*/
    journeyData = {
      detailsIsComplete: true,
      detailsReadOnly: true,
      projectName: 'APP171: Bio-detoxification of Ricin in castor bean',
      detailsInput: dummyFillerHTML,
      caseForSupportIsComplete: true,
      caseForSupportReadOnly: true,
      caseForSupportNotes: dummyFillerHTML,
      directlyIncurredCost: '25000',
      directlyAllocatedCost: '25000',
      indirectCost: '25000',
      exceptionCost: '25000',
      resourcesAndCostsIsComplete: '25000',
      resourcesAndCostsReadOnly: true,
      justificationIsComplete: true,
      justificationReadOnly: true,
      justificationContent: dummyFiller,
    };
    journeyDataApplicant = {
      detailsIsComplete: true,
      detailsReadOnly: false,
      projectName: 'APP171: Bio-detoxification of Ricin in castor bean',
      detailsInput: dummyFillerHTML,
      caseForSupportIsComplete: false,
      caseForSupportReadOnly: false,
      caseForSupportNotes: '',
      directlyIncurredCost: '25000',
      directlyAllocatedCost: '25000',
      indirectCost: '25000',
      exceptionCost: '25000',
      resourcesAndCostsIsComplete: '25000',
      resourcesAndCostsReadOnly: false,
      justificationIsComplete: true,
      justificationReadOnly: false,
      justificationContent: dummyFiller,
      progressPercentage: 75,
    };
  }

  viewData = {};

  return res.render(templateName, viewData);
}

export function submissionIndexPost(req, res) {
  const {} = req.body;

  let targetURL;

  return res.redirect(targetURL);
}

/*

 Application overview

*/

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

  projectName = journeyData.projectName;
  detailsIsComplete = true;
  caseForSupportIsComplete = true;
  resourcesAndCostsIsComplete = true;
  justificationIsComplete = true;
  applicantsIsComplete = true;

  userType = 'office';
  isShared = true;
  // applicationStatus = 'stopShare';
  progressPercentage = '100';
  reverseProgressPercentage = '0';

  let sentBackToApplicant = req.session.sentBackToApplicant;
  if (sentBackToApplicant === true) {
    // userType = 'applicant';
    // isShared = false;
  }

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
    sentBackToApplicant,
  };

  return res.render('prototypes/submission-control/application-overview', viewData);
}

export function submissionApplicationOverviewPost(req, res) {
  const { submitButton } = req.body;
  let targetURL = '/prototypes/submission-control/application-overview';
  if (submitButton === 'stopShare') {
    // targetURL = '/prototypes/submission-control/application-overview-with-applicant';
    req.session.sentBackToApplicant = true;
  }
  return res.redirect(targetURL);
}

/*

 Application View

*/
export function submissionApplicationViewGet(req, res) {
  let viewData;

  // let detailsInput = caseForSupportData.caseForSupport2;
  let projectName = journeyData.projectName;

  viewData = {
    projectName,
  };

  return res.render('prototypes/submission-control/view', viewData);
}

export function submissionApplicationViewPost(req, res) {
  const {} = req.body;
  let targetURL = '/prototypes/submission-control/view';
  return res.redirect(targetURL);
}

/*

 Details

 */
export function submissionDetailsGet(req, res) {
  let viewData;
  let detailsIsComplete = journeyData.detailsIsComplete;
  let readOnly = journeyData.detailsReadOnly;
  let projectNameDB = journeyData.projectName;
  let detailsInputDB = journeyData.detailsInput;

  viewData = {
    detailsIsComplete,
    readOnly,
    projectNameDB,
    detailsInputDB,
  };

  return res.render('prototypes/submission-control/details', viewData);
}

export function submissionDetailsPost(req, res) {
  const {} = req.body;
  let targetURL = '/prototypes/submission-control/application-overview';
  return res.redirect(targetURL);
}

/*

 Case for support

 */
export function submissionCaseGet(req, res) {
  let viewData;

  let readOnly = journeyData.detailsReadOnly;
  let projectName = journeyData.projectName;
  let caseForSupportIsComplete = journeyData.caseForSupportIsComplete;
  let caseForSupportReadOnly = journeyData.caseForSupportReadOnly;
  let caseForSupportNotes = journeyData.caseForSupportNotes;

  viewData = {
    readOnly,
    projectName,
    caseForSupportIsComplete,
    caseForSupportReadOnly,
    caseForSupportNotes,
  };

  return res.render('prototypes/submission-control/case-for-support', viewData);
}

export function submissionCasePost(req, res) {
  const {} = req.body;
  let targetURL = '/prototypes/submission-control/application-overview';
  return res.redirect(targetURL);
}

/*

 Justification of resources

 */
export function submissionJustificationGet(req, res) {
  let viewData;

  let justificationIsComplete = journeyData.justificationIsComplete;
  let readOnly = journeyData.justificationIsComplete;
  let projectName = journeyData.projectName;
  let justificationContent = journeyData.justificationContent;

  viewData = {
    justificationIsComplete,
    readOnly,
    projectName,
    justificationContent,
  };

  return res.render('prototypes/submission-control/justification-of-resources', viewData);
}

export function submissionJustificationPost(req, res) {
  const {} = req.body;
  let targetURL = '/prototypes/submission-control/application-overview';
  return res.redirect(targetURL);
}

/*

 Resources and costs

 */
export function submissionResourcesGet(req, res) {
  let viewData;

  let directlyIncurredCost = journeyData.directlyIncurredCost;
  let directlyAllocatedCost = journeyData.directlyAllocatedCost;
  let indirectCost = journeyData.indirectCost;
  let exceptionCost = journeyData.exceptionCost;
  let resourcesAndCostsIsComplete = journeyData.resourcesAndCostsIsComplete;
  let readOnly = journeyData.resourcesAndCostsReadOnly;
  let projectName = journeyData.projectName;

  viewData = {
    projectName,
    readOnly,
    directlyIncurredCost,
    directlyAllocatedCost,
    indirectCost,
    exceptionCost,
    resourcesAndCostsIsComplete,
  };

  return res.render('prototypes/submission-control/resources-and-costs', viewData);
}

export function submissionResourcesPost(req, res) {
  const {} = req.body;

  let targetURL = '/prototypes/submission-control/application-overview';

  return res.redirect(targetURL);
}

/*
*
* Research office application overview
* */

export function submissionApplicationOverview2Get(req, res) {
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

  projectName = journeyData.projectName;
  detailsIsComplete = true;
  caseForSupportIsComplete = true;
  resourcesAndCostsIsComplete = true;
  justificationIsComplete = true;
  applicantsIsComplete = true;

  userType = 'office';
  isShared = true;
  // applicationStatus = 'stopShare';
  progressPercentage = '100';
  reverseProgressPercentage = '0';

  let hasBeenSubmitted = req.session.hasBeenSubmitted;
  /*if (hasBeenSubmitted === true) {
    // userType = 'applicant';
    // isShared = false;
  }*/

  let hasBeenSubmitted2 = req.param('hasBeenSubmitted');
  if (hasBeenSubmitted2 === 'true') {
    hasBeenSubmitted = true;
  }

  viewData = {
    hasBeenSubmitted,
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

  return res.render('prototypes/submission-control/application-overview-2', viewData);
}

export function submissionApplicationOverview2Post(req, res) {
  const { submitButton } = req.body;
  let targetURL = '/prototypes/submission-control/application-overview-2';
  if (submitButton === 'submitToUKRI') {
    req.session.hasBeenSubmitted = true;
  }
  return res.redirect(targetURL);
}

/*
*
* Applications list
*
* */

export function submissionApplicationsListGet(req, res) {
  let viewData;

  let hasBeenSubmitted = req.session.hasBeenSubmitted;
  let sentBackToApplicant = req.session.sentBackToApplicant;

  viewData = {
    hasBeenSubmitted,
    sentBackToApplicant,
  };

  return res.render('prototypes/submission-control/applications-list', viewData);
}
/*

export function submissionApplicationsListPost(req, res) {
  const {} = req.body;

  let targetURL;

  return res.redirect(targetURL);
}*/

/*
* ******************************************************************************************************************************
* */

/*
*    APPLICANTS STUFF
* */

export function submissionApplicantApplicationsListGet(req, res) {
  let viewData;

  let showReturnedBanner, showFullPercentage;
  let returned = req.param('returned');
  console.log('returned = ' + returned);
  if (returned === 'true') {
    journeyDataApplicant.detailsReadOnly = false;
    journeyDataApplicant.caseForSupportReadOnly = false;
    journeyDataApplicant.resourcesAndCostsReadOnly = false;
    journeyDataApplicant.justificationReadOnly = false;
    journeyDataApplicant.detailsIsComplete = true;
    journeyDataApplicant.caseForSupportIsComplete = true;
    journeyDataApplicant.resourcesAndCostsIsComplete = true;
    journeyDataApplicant.justificationIsComplete = true;
    journeyDataApplicant.progressPercentage = 100;
    showReturnedBanner = true;
  }

  viewData = {
    showReturnedBanner,
  };
  return res.render('prototypes/submission-control/applicant/applications-list', viewData);
}

export function submissionApplicantApplicationsListPost(req, res) {
  const {} = req.body;
  let targetURL = '/prototypes/submission-control/applicant/applications-list';
  return res.redirect(targetURL);
}

/*

 Application overview

*/

export function submissionApplicantApplicationOverviewGet(req, res) {
  let viewData,
    userType,
    isShared,
    progressPercentage,
    reverseProgressPercentage,
    projectName,
    detailsIsComplete,
    caseForSupportIsComplete,
    resourcesAndCostsIsComplete,
    justificationIsComplete;

  let showReturnedBanner;
  let returned = req.param('returned');
  if (returned === 'true') {
    journeyDataApplicant.detailsReadOnly = false;
    journeyDataApplicant.caseForSupportReadOnly = false;
    journeyDataApplicant.resourcesAndCostsReadOnly = false;
    journeyDataApplicant.justificationReadOnly = false;
    journeyDataApplicant.detailsIsComplete = true;
    journeyDataApplicant.caseForSupportIsComplete = true;
    journeyDataApplicant.resourcesAndCostsIsComplete = true;
    journeyDataApplicant.justificationIsComplete = true;
    journeyDataApplicant.progressPercentage = 100;
    showReturnedBanner = true;
  }

  projectName = journeyDataApplicant.projectName;
  detailsIsComplete = journeyDataApplicant.detailsIsComplete;
  caseForSupportIsComplete = journeyDataApplicant.caseForSupportIsComplete;
  resourcesAndCostsIsComplete = journeyDataApplicant.resourcesAndCostsIsComplete;
  justificationIsComplete = journeyDataApplicant.justificationIsComplete;
  progressPercentage = journeyDataApplicant.progressPercentage;

  // userType = 'applicant';
  // isShared = false;
  // applicationStatus = 'stopShare';
  // progressPercentage = '100';

  let readyToSend;

  let tempPercentage = 0;
  if (detailsIsComplete) {
    tempPercentage += 25;
  }
  if (caseForSupportIsComplete) {
    tempPercentage += 25;
  }
  if (resourcesAndCostsIsComplete) {
    tempPercentage += 25;
  }

  if (justificationIsComplete) {
    tempPercentage += 25;
  }

  if (tempPercentage === 100) {
    readyToSend = true;
  }
  /*
  if (detailsIsComplete && caseForSupportIsComplete && resourcesAndCostsIsComplete &&  justificationIsComplete) {
    progressPercentage = 100
  }*/

  progressPercentage = tempPercentage;

  reverseProgressPercentage = 100 - progressPercentage;
  if (progressPercentage === 100) {
    reverseProgressPercentage = '0';
  }

  let sendToResearchOffice = req.session.sendToResearchOffice;
  // req.session.sendToResearchOffice = null;

  viewData = {
    projectName,
    readyToSend,
    showReturnedBanner,
    progressPercentage,
    reverseProgressPercentage,
    detailsIsComplete,
    caseForSupportIsComplete,
    resourcesAndCostsIsComplete,
    justificationIsComplete,
    sendToResearchOffice,
  };

  return res.render('prototypes/submission-control/applicant/application-overview', viewData);
}

export function submissionApplicantApplicationOverviewPost(req, res) {
  const { submitButton } = req.body;

  let targetURL = '/prototypes/submission-control/applicant/application-overview';

  if (submitButton === 'sendToResearchOffice') {
    req.session.sendToResearchOffice = true;
    journeyDataApplicant.detailsReadOnly = true;
    journeyDataApplicant.caseForSupportReadOnly = true;
    journeyDataApplicant.resourcesAndCostsReadOnly = true;
    journeyDataApplicant.justificationReadOnly = true;
  }
  return res.redirect(targetURL);
}

/*

 Details

 */
export function submissionApplicantDetailsGet(req, res) {
  let viewData;
  let detailsIsComplete = journeyDataApplicant.detailsIsComplete;
  let readOnly = journeyDataApplicant.detailsReadOnly;
  let projectNameDB = journeyDataApplicant.projectName;
  let detailsInputDB = journeyDataApplicant.detailsInput;

  viewData = {
    detailsIsComplete,
    readOnly,
    projectNameDB,
    detailsInputDB,
  };

  return res.render('prototypes/submission-control/applicant/details', viewData);
}

export function submissionApplicantDetailsPost(req, res) {
  const { isComplete } = req.body;

  if (isComplete === 'on') {
    journeyDataApplicant.detailsIsComplete = true;
  } else if (isComplete !== 'on') {
    journeyDataApplicant.detailsIsComplete = false;
  }
  let targetURL = '/prototypes/submission-control/applicant/application-overview';
  return res.redirect(targetURL);
}

/*

 Case for support

 */
export function submissionApplicantCaseGet(req, res) {
  let viewData;

  let readOnly = journeyDataApplicant.detailsReadOnly;
  let projectName = journeyDataApplicant.projectName;
  let caseForSupportIsComplete = journeyDataApplicant.caseForSupportIsComplete;
  let caseForSupportReadOnly = journeyDataApplicant.caseForSupportReadOnly;
  let caseForSupportNotes = journeyDataApplicant.caseForSupportNotes;

  viewData = {
    readOnly,
    projectName,
    caseForSupportIsComplete,
    caseForSupportReadOnly,
    caseForSupportNotes,
  };

  return res.render('prototypes/submission-control/applicant/case-for-support', viewData);
}

export function submissionApplicantCasePost(req, res) {
  const { isComplete } = req.body;

  // req.session.isComplete

  if (isComplete === 'on') {
    journeyDataApplicant.caseForSupportIsComplete = true;
  } else if (isComplete !== 'on') {
    journeyDataApplicant.caseForSupportIsComplete = false;
  }

  let targetURL = '/prototypes/submission-control/applicant/application-overview';
  return res.redirect(targetURL);
}

/*

 Justification of resources

 */
export function submissionApplicantJustificationGet(req, res) {
  let viewData;

  let justificationIsComplete = journeyDataApplicant.justificationIsComplete;
  let readOnly = journeyDataApplicant.justificationReadOnly;
  let projectName = journeyDataApplicant.projectName;
  let justificationContent = journeyDataApplicant.justificationContent;

  viewData = {
    justificationIsComplete,
    readOnly,
    projectName,
    justificationContent,
  };

  return res.render('prototypes/submission-control/applicant/justification-of-resources', viewData);
}

export function submissionApplicantJustificationPost(req, res) {
  const { isComplete } = req.body;

  if (isComplete === 'on') {
    journeyDataApplicant.justificationIsComplete = true;
  } else if (isComplete !== 'on') {
    journeyDataApplicant.justificationIsComplete = false;
  }

  let targetURL = '/prototypes/submission-control/applicant/application-overview';
  return res.redirect(targetURL);
}

/*

 Resources and costs

 */
export function submissionApplicantResourcesGet(req, res) {
  let viewData;

  let directlyIncurredCost = journeyDataApplicant.directlyIncurredCost;
  let directlyAllocatedCost = journeyDataApplicant.directlyAllocatedCost;
  let indirectCost = journeyDataApplicant.indirectCost;
  let exceptionCost = journeyDataApplicant.exceptionCost;
  let resourcesAndCostsIsComplete = journeyDataApplicant.resourcesAndCostsIsComplete;
  let readOnly = journeyDataApplicant.resourcesAndCostsReadOnly;
  let projectName = journeyDataApplicant.projectName;

  viewData = {
    projectName,
    directlyIncurredCost,
    directlyAllocatedCost,
    indirectCost,
    exceptionCost,
    readOnly,
    resourcesAndCostsIsComplete,
  };

  return res.render('prototypes/submission-control/applicant/resources-and-costs', viewData);
}

export function submissionApplicantResourcesPost(req, res) {
  const { isComplete } = req.body;

  if (isComplete === 'on') {
    journeyDataApplicant.resourcesAndCostsIsComplete = true;
  } else if (isComplete !== 'on') {
    journeyDataApplicant.resourcesAndCostsIsComplete = false;
  }

  let targetURL = '/prototypes/submission-control/applicant/application-overview';

  return res.redirect(targetURL);
}

/*

 Applicant Application View

*/
export function submissionApplicantApplicationViewGet(req, res) {
  let viewData;

  // let detailsInput = caseForSupportData.caseForSupport2;
  let projectName = journeyData.projectName;

  viewData = {
    projectName,
  };

  return res.render('prototypes/submission-control/applicant/view', viewData);
}

export function submissionApplicantApplicationViewPost(req, res) {
  const {} = req.body;
  let targetURL = '/prototypes/submission-control/applicant/view';
  return res.redirect(targetURL);
}
