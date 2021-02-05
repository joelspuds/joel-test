'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appV3AHRCOpportunityGet = appV3AHRCOpportunityGet;
exports.appV3AHRCOpportunityPost = appV3AHRCOpportunityPost;
exports.appV3tinyMCEApplicationIndexGet = appV3tinyMCEApplicationIndexGet;
exports.appV3tinyMCEApplicationIndexPost = appV3tinyMCEApplicationIndexPost;
exports.appV3tinyMCEApplicationViewGet = appV3tinyMCEApplicationViewGet;
exports.appV3AdminViewGet = appV3AdminViewGet;
exports.appV3DetailsGet = appV3DetailsGet;
exports.appV3DetailsPost = appV3DetailsPost;
exports.appV3ApplicantsGet = appV3ApplicantsGet;
exports.appV3ApplicantsPost = appV3ApplicantsPost;
exports.appV3JustificationGet = appV3JustificationGet;
exports.appV3JustificationPost = appV3JustificationPost;
exports.appV3SubmittedGet = appV3SubmittedGet;
exports.appV3caseForSupportGet = appV3caseForSupportGet;
exports.appV3caseForSupportPost = appV3caseForSupportPost;
exports.appV3ResourcesAndCostsGet = appV3ResourcesAndCostsGet;
exports.appV3ResourcesAndCostsPost = appV3ResourcesAndCostsPost;
exports.appV3AddApplicantGet = appV3AddApplicantGet;
exports.appV3AddApplicantPost = appV3AddApplicantPost;
exports.appV3PopulateDataGet = appV3PopulateDataGet;

var _createOpportunityV = require('./createOpportunity-v3');

var demosController = _interopRequireWildcard(_createOpportunityV);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// const cheerio = require('cheerio');

const untitledProjectName = 'Untitled project'; // suggested learning full list GET
// This is the fuller version with

let generalData = require('./data');
let genericFunctions = require('./generic');

// ************************************************************************
//
//       AHRC opportunity
//
// ************************************************************************

function appV3AHRCOpportunityGet(req, res) {
  let viewData;
  // req.session.ahrcDemo = true;

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
  }

  viewData = {};

  return res.render('prototypes/multi-user-application/opportunity', viewData);
}

function appV3AHRCOpportunityPost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/multi-user-application/opportunity');
}

// ************************************************************************
//
//       Application overview
//
// ************************************************************************

function appV3tinyMCEApplicationIndexGet(req, res) {
  let viewData, hasBeenUpdated, projectDetails, projectName;

  console.log('appV3tinyMCEApplicationIndexGet');

  projectDetails = req.session.projectDetails;
  hasBeenUpdated = req.session.hasBeenUpdated;

  req.session.hasBeenUpdated = null;

  // let journey = req.session.journey = 'multiUser';
  // applicant or office
  let userType = req.session.userType;
  // userType = 'applicant';

  let applicationStatus, detailsIsComplete, caseForSupportIsComplete, applicantsIsComplete, resourcesAndCostsIsComplete, justificationIsComplete;

  const fs = require('fs');
  const dataFileJSON = './temp-store.json';
  var data = JSON.parse(fs.readFileSync(dataFileJSON, 'utf8'));
  applicationStatus = data[0].applicationStatus;
  detailsIsComplete = data[0].detailsIsComplete;
  caseForSupportIsComplete = data[0].caseForSupportIsComplete;
  applicantsIsComplete = data[0].applicantsIsComplete;
  resourcesAndCostsIsComplete = data[0].resourcesAndCostsIsComplete;
  justificationIsComplete = data[0].justificationIsComplete;
  projectName = data[0].projectName;

  let incrementValue = 20;
  let progressPercentage = 0;
  let reverseProgressPercentage = 0;

  if (detailsIsComplete) {
    progressPercentage += incrementValue;
  }
  if (caseForSupportIsComplete) {
    progressPercentage = progressPercentage + incrementValue;
  }
  if (applicantsIsComplete) {
    progressPercentage = progressPercentage + incrementValue;
  }
  if (resourcesAndCostsIsComplete) {
    progressPercentage = progressPercentage + incrementValue;
  }
  if (justificationIsComplete) {
    progressPercentage = progressPercentage + incrementValue;
  }

  progressPercentage = progressPercentage.toFixed(0);
  if (progressPercentage > 95) {
    progressPercentage = 100;
  }

  reverseProgressPercentage = 100 - progressPercentage;
  if (reverseProgressPercentage < 10) {
    reverseProgressPercentage = '0';
  }

  hasBeenUpdated = null;
  let isShared;
  if (applicationStatus === 'startShare') {
    isShared = true;
  } else if (applicationStatus === 'stopShare') {
    isShared = false;
  }

  viewData = {
    userType,
    isShared,
    applicationStatus,
    projectName,
    hasBeenUpdated,
    projectDetails,
    progressPercentage,
    reverseProgressPercentage,
    detailsIsComplete,
    caseForSupportIsComplete,
    applicantsIsComplete,
    resourcesAndCostsIsComplete,
    justificationIsComplete
  };

  return res.render('prototypes/multi-user-application/index', viewData);
}

function appV3tinyMCEApplicationIndexPost(req, res) {
  const { submitButton } = req.body;
  console.log('button action = ' + submitButton);

  let userType = req.session.userType;

  const fs = require('fs');
  const dataFileJSON = './temp-store.json';
  fs.readFile(dataFileJSON, 'utf8', (err, data) => {
    if (err) {
      console.log(`Error reading file from disk: ${err}`);
    } else {
      // parse JSON string to JSON object
      const databases = JSON.parse(data);
      databases[0].applicationStatus = submitButton;
      // console.log(databases);
      // write new data back to the file
      fs.writeFile(dataFileJSON, JSON.stringify(databases, null, 2), err => {
        if (err) {
          console.log(`Error writing file: ${err}`);
        }
      });
    }
  });

  let targetURL;
  if (submitButton === 'submitToUKRI') {
    targetURL = '/prototypes/multi-user-application/submitted';
  } else {
    targetURL = '/prototypes/multi-user-application/';
  }
  return res.redirect(targetURL);
}

// ************************************************************************
//
//       VIEW DYNAMIC
//
// ************************************************************************
function appV3tinyMCEApplicationViewGet(req, res) {
  let viewData;

  let readOnly;
  let userType = req.session.userType;
  if (userType === 'office') {
    readOnly = true;
  }

  let detailsInput, projectName, caseForSupportNotes, directlyIncurredCost, directlyAllocatedCost, indirectCost, exceptionCost;

  const fs = require('fs');
  const dataFileJSON = './temp-store.json';
  let data = JSON.parse(fs.readFileSync(dataFileJSON, 'utf8'));
  projectName = data[0].projectName;
  detailsInput = data[0].detailsInput;
  directlyIncurredCost = data[0].directlyIncurredCost;
  directlyAllocatedCost = data[0].directlyAllocatedCost;
  indirectCost = data[0].indirectCost;
  exceptionCost = data[0].exceptionCost;
  caseForSupportNotes = data[0].caseForSupportNotes;

  viewData = {
    projectName,
    detailsInput,
    caseForSupportNotes,
    directlyIncurredCost,
    directlyAllocatedCost,
    indirectCost,
    exceptionCost,
    readOnly
  };
  return res.render('prototypes/multi-user-application/view', viewData);
}

// ************************************************************************
//
//       VIEW ADMIN
//
// ************************************************************************
function appV3AdminViewGet(req, res) {
  let viewData, detailsInput, programmeTopic, widerEffect, researchExperience, writeReview, eligibilityInput;

  let projectName = req.session.storedProjectName;
  if (!projectName) {
    projectName = untitledProjectName;
  }

  detailsInput = req.session.detailsInput;
  eligibilityInput = req.session.eligibilityInput;
  programmeTopic = req.session.programmeTopic;
  widerEffect = req.session.widerEffect;
  researchExperience = req.session.researchExperience;

  writeReview = req.session.writeReview;
  let readOnly = req.session.readOnly;

  viewData = {
    projectName,
    detailsInput,
    eligibilityInput,
    programmeTopic,
    widerEffect,
    researchExperience,
    writeReview,
    readOnly
  };
  return res.render('prototypes/multi-user-application/admin-view', viewData);
}

// ************************************************************************
//
//        DETAILS
//
// ************************************************************************
function appV3DetailsGet(req, res) {
  let viewData, readOnly;

  let projectNameDB, detailsInputDB, detailsIsComplete;
  const fs = require('fs');
  const dataFileJSON = './temp-store.json';
  let data = JSON.parse(fs.readFileSync(dataFileJSON, 'utf8'));
  projectNameDB = data[0].projectName;
  detailsInputDB = data[0].detailsInput;
  detailsIsComplete = data[0].detailsIsComplete;
  let userType = req.session.userType;
  if (userType === 'office') {
    readOnly = true;
  }

  viewData = {
    projectNameDB,
    detailsInputDB,
    detailsIsComplete,
    readOnly
  };

  return res.render('prototypes/multi-user-application/details', viewData);
}

function appV3DetailsPost(req, res) {
  const { projectName, projectSummary, isComplete } = req.body;

  // console.log('isComplete = ' + isComplete);

  /*req.session.storedProjectName = projectName;
  req.session.detailsInput = projectSummary;
  req.session.hasBeenUpdated = true;*/

  let detailsIsComplete = null;
  if (isComplete === 'on') {
    detailsIsComplete = 'on';
  }

  const fs = require('fs');
  const dataFileJSON = './temp-store.json';
  fs.readFile(dataFileJSON, 'utf8', (err, data) => {
    if (err) {
      console.log(`Error reading file from disk: ${err}`);
    } else {
      // parse JSON string to JSON object
      const databases = JSON.parse(data);
      databases[0].projectName = projectName;
      databases[0].detailsInput = projectSummary;
      databases[0].detailsIsComplete = detailsIsComplete;
      fs.writeFile(dataFileJSON, JSON.stringify(databases, null, 2), err => {
        if (err) {
          console.log(`Error writing file: ${err}`);
        }
      });
    }
  });

  return res.redirect('/prototypes/multi-user-application/');
}

// ************************************************************************
//
//        Applicants
//
// ************************************************************************
function appV3ApplicantsGet(req, res) {
  let viewData, projectName, applicantsIsComplete;

  let readOnly = req.session.readOnly;
  let userType = req.session.userType;
  if (userType === 'office') {
    readOnly = true;
  }

  const fs = require('fs');
  const dataFileJSON = './temp-store.json';
  let data = JSON.parse(fs.readFileSync(dataFileJSON, 'utf8'));
  projectName = data[0].projectName;
  applicantsIsComplete = data[0].applicantsIsComplete;

  viewData = {
    applicantsIsComplete,
    projectName,
    readOnly
  };

  return res.render('prototypes/multi-user-application/applicants', viewData);
}

function appV3ApplicantsPost(req, res) {
  const { isComplete } = req.body;

  let applicantsIsComplete = null;
  if (isComplete === 'on') {
    applicantsIsComplete = 'on';
  }

  const fs = require('fs');
  const dataFileJSON = './temp-store.json';
  fs.readFile(dataFileJSON, 'utf8', (err, data) => {
    if (err) {
      console.log(`Error reading file from disk: ${err}`);
    } else {
      // parse JSON string to JSON object
      const databases = JSON.parse(data);
      databases[0].applicantsIsComplete = applicantsIsComplete;
      fs.writeFile(dataFileJSON, JSON.stringify(databases, null, 2), err => {
        if (err) {
          console.log(`Error writing file: ${err}`);
        }
      });
    }
  });

  return res.redirect('/prototypes/multi-user-application/');
}

// ************************************************************************
//
//        Justification of resources
//
// ************************************************************************
function appV3JustificationGet(req, res) {
  let viewData, projectName, justificationIsComplete;

  let readOnly = req.session.readOnly;
  let userType = req.session.userType;
  if (userType === 'office') {
    readOnly = true;
  }

  const fs = require('fs');
  const dataFileJSON = './temp-store.json';
  let data = JSON.parse(fs.readFileSync(dataFileJSON, 'utf8'));
  projectName = data[0].projectName;
  justificationIsComplete = data[0].justificationIsComplete;

  viewData = {
    justificationIsComplete,
    projectName,
    readOnly
  };

  return res.render('prototypes/multi-user-application/justification-of-resources', viewData);
}

function appV3JustificationPost(req, res) {
  const { isComplete } = req.body;

  let justificationIsComplete = null;
  if (isComplete === 'on') {
    justificationIsComplete = 'on';
  }

  const fs = require('fs');
  const dataFileJSON = './temp-store.json';
  fs.readFile(dataFileJSON, 'utf8', (err, data) => {
    if (err) {
      console.log(`Error reading file from disk: ${err}`);
    } else {
      // parse JSON string to JSON object
      const databases = JSON.parse(data);
      databases[0].justificationIsComplete = justificationIsComplete;
      fs.writeFile(dataFileJSON, JSON.stringify(databases, null, 2), err => {
        if (err) {
          console.log(`Error writing file: ${err}`);
        }
      });
    }
  });

  return res.redirect('/prototypes/multi-user-application/');
}

// ************************************************************************
//
//        Submitted
//
// ************************************************************************
function appV3SubmittedGet(req, res) {
  let viewData, projectName;
  const fs = require('fs');
  const dataFileJSON = './temp-store.json';
  let data = JSON.parse(fs.readFileSync(dataFileJSON, 'utf8'));
  projectName = data[0].projectName;

  viewData = {
    projectName
  };

  return res.render('prototypes/multi-user-application/submitted', viewData);
}

// ************************************************************************
//
//        Eligibility - research area
//
// ************************************************************************
/*export function appV3EligibilityResearchAreaGet(req, res) {
  let viewData, programmeTopic;

  let projectName = req.session.storedProjectName;
  if (!projectName) {
    projectName = untitledProjectName;
  }

  let programmeTopicIsComplete = req.session.programmeTopicIsComplete;
  programmeTopic = req.session.programmeTopic;
  let readOnly = req.session.readOnly;

  viewData = {
    projectName,
    programmeTopic,
    programmeTopicIsComplete,
    readOnly,
  };

  return res.render('prototypes/multi-user-application/eligibility-research-area', viewData);
}

export function appV3EligibilityResearchAreaPost(req, res) {
  const { programmeTopic, isComplete } = req.body;

  req.session.programmeTopic = programmeTopic;
  req.session.hasBeenUpdated = true;

  console.log('programmeTopic = ' + programmeTopic);

  if (isComplete == 'on') {
    req.session.programmeTopicIsComplete = true;
  } else {
    req.session.programmeTopicIsComplete = null;
  }

  return res.redirect('/prototypes/multi-user-application/');
}*/
// ************************************************************************
//
//        Current research activity
//        Your research and its wider effect
//
// ************************************************************************
/*
export function appV3CurrentResearchActivityGet(req, res) {
  let viewData, widerEffect, widerEffectIsComplete;

  let projectName = req.session.storedProjectName;
  if (!projectName) {
    projectName = untitledProjectName;
  }

  widerEffect = req.session.widerEffect;
  widerEffectIsComplete = req.session.widerEffectIsComplete;

  let readOnly = req.session.readOnly;

  viewData = {
    projectName,
    widerEffect,
    widerEffectIsComplete,
    readOnly,
  };

  return res.render('prototypes/multi-user-application/current-research-activity', viewData);
}

export function appV3CurrentResearchActivityPost(req, res) {
  const { widerEffect, isComplete } = req.body;

  req.session.widerEffect = widerEffect;
  req.session.hasBeenUpdated = true;

  console.log('widerEffect = ' + widerEffect);

  if (isComplete == 'on') {
    req.session.widerEffectIsComplete = true;
  } else {
    req.session.widerEffectIsComplete = null;
  }

  return res.redirect('/prototypes/multi-user-application/');
}
*/

// ************************************************************************
//
//        Research history
//        Your research experience
//
// ************************************************************************
/*export function appV3ResearchHistoryGet(req, res) {
  let viewData, researchExperience;

  let projectName = req.session.storedProjectName;
  if (!projectName) {
    projectName = untitledProjectName;
  }

  let readOnly = req.session.readOnly;

  researchExperience = req.session.researchExperience;
  let researchExperienceIsComplete = req.session.researchExperienceIsComplete;
  viewData = {
    projectName,
    researchExperience,
    researchExperienceIsComplete,
    readOnly,
  };

  return res.render('prototypes/multi-user-application/research-history', viewData);
}

export function appV3ResearchHistoryPost(req, res) {
  const { researchExperience, isComplete } = req.body;

  req.session.researchExperience = researchExperience;
  req.session.hasBeenUpdated = true;

  if (isComplete == 'on') {
    req.session.researchExperienceIsComplete = true;
  } else {
    req.session.researchExperienceIsComplete = null;
  }

  return res.redirect('/prototypes/multi-user-application/');
}*/
// ************************************************************************
//
//        Write a review
//
// ************************************************************************
/*export function appV3ReviewGet(req, res) {
  let viewData, writeReview;

  let projectName = req.session.storedProjectName;
  if (!projectName) {
    projectName = untitledProjectName;
  }

  let readOnly = req.session.readOnly;

  writeReview = req.session.writeReview;
  let writeReviewIsComplete = req.session.writeReviewIsComplete;

  viewData = {
    projectName,
    writeReview,
    writeReviewIsComplete,
    readOnly,
  };

  return res.render('prototypes/multi-user-application/review', viewData);
}

export function appV3ReviewPost(req, res) {
  const { writeReview, isComplete } = req.body;

  req.session.writeReview = writeReview;
  req.session.hasBeenUpdated = true;

  if (isComplete == 'on') {
    req.session.writeReviewIsComplete = true;
  } else {
    req.session.writeReviewIsComplete = null;
  }

  return res.redirect('/prototypes/multi-user-application/');
}*/

// ************************************************************************
//
//        CASE FOR SUPPORT
//
// ************************************************************************
function appV3caseForSupportGet(req, res) {
  let viewData, caseForSupportNotes, caseForSupportIsComplete, projectName;

  // let caseForSupportNotes;
  const fs = require('fs');
  const dataFileJSON = './temp-store.json';
  var data = JSON.parse(fs.readFileSync(dataFileJSON, 'utf8'));
  caseForSupportNotes = data[0].caseForSupportNotes;
  caseForSupportIsComplete = data[0].caseForSupportIsComplete;
  projectName = data[0].projectName;

  let readOnly;
  let userType = req.session.userType;
  if (userType === 'office') {
    readOnly = true;
  }

  viewData = {
    caseForSupportIsComplete,
    caseForSupportNotes,
    projectName,
    readOnly
  };

  return res.render('prototypes/multi-user-application/case-for-support', viewData);
}

function appV3caseForSupportPost(req, res) {
  const { caseForSupportNotes, isComplete } = req.body;

  let caseForSupportIsComplete = null;
  if (isComplete === 'on') {
    caseForSupportIsComplete = 'on';
  }

  const fs = require('fs');
  const dataFileJSON = './temp-store.json';
  fs.readFile(dataFileJSON, 'utf8', (err, data) => {
    if (err) {
      console.log(`Error reading file from disk: ${err}`);
    } else {
      // parse JSON string to JSON object
      const databases = JSON.parse(data);
      databases[0].caseForSupportNotes = caseForSupportNotes;
      databases[0].caseForSupportIsComplete = caseForSupportIsComplete;
      fs.writeFile(dataFileJSON, JSON.stringify(databases, null, 2), err => {
        if (err) {
          console.log(`Error writing file: ${err}`);
        }
      });
    }
  });

  /*if (isComplete == 'on') {
    req.session.caseForSupportIsComplete = true;
  } else {
    req.session.caseForSupportIsComplete = null;
  }
   req.session.caseForSupportNotes = caseForSupportNotes;
  req.session.caseHasBeenUpdated = true;
  req.session.hasBeenUpdated = true;*/

  return res.redirect('/prototypes/multi-user-application/');
}
// ************************************************************************
//
//        Resources and costs
//        appV3ResourcesAndCostsGet
//        appV3ResourcesAndCostsPost
//
// ************************************************************************
function appV3ResourcesAndCostsGet(req, res) {
  let viewData, directlyIncurredCost, directlyAllocatedCost, indirectCost, exceptionCost, projectName, resourcesAndCostsIsComplete;

  // let caseForSupportNotes;
  const fs = require('fs');
  const dataFileJSON = './temp-store.json';
  var data = JSON.parse(fs.readFileSync(dataFileJSON, 'utf8'));
  projectName = data[0].projectName;
  directlyIncurredCost = data[0].directlyIncurredCost;
  directlyAllocatedCost = data[0].directlyAllocatedCost;
  indirectCost = data[0].indirectCost;
  exceptionCost = data[0].exceptionCost;
  resourcesAndCostsIsComplete = data[0].resourcesAndCostsIsComplete;

  let readOnly;
  let userType = req.session.userType;
  if (userType === 'office') {
    readOnly = true;
  }

  viewData = {
    resourcesAndCostsIsComplete,
    directlyIncurredCost,
    directlyAllocatedCost,
    indirectCost,
    exceptionCost,
    projectName,
    readOnly
  };

  return res.render('prototypes/multi-user-application/resources-and-costs', viewData);
}

function appV3ResourcesAndCostsPost(req, res) {
  const { directlyIncurredCost, directlyAllocatedCost, indirectCost, exceptionCost, isComplete } = req.body;

  let resourcesAndCostsIsComplete = null;
  if (isComplete === 'on') {
    resourcesAndCostsIsComplete = 'on';
  }
  const fs = require('fs');
  const dataFileJSON = './temp-store.json';
  fs.readFile(dataFileJSON, 'utf8', (err, data) => {
    if (err) {
      console.log(`Error reading file from disk: ${err}`);
    } else {
      // parse JSON string to JSON object
      const databases = JSON.parse(data);

      databases[0].resourcesAndCostsIsComplete = resourcesAndCostsIsComplete;
      databases[0].directlyIncurredCost = directlyIncurredCost;
      databases[0].directlyAllocatedCost = directlyAllocatedCost;
      databases[0].indirectCost = indirectCost;
      databases[0].exceptionCost = exceptionCost;
      fs.writeFile(dataFileJSON, JSON.stringify(databases, null, 2), err => {
        if (err) {
          console.log(`Error writing file: ${err}`);
        }
      });
    }
  });

  return res.redirect('/prototypes/multi-user-application/');
}

// ************************************************************************
//
//        Add applicant
//
// ************************************************************************
function appV3AddApplicantGet(req, res) {
  let viewData;

  let projectName = req.session.storedProjectName;
  if (!projectName) {
    projectName = untitledProjectName;
  }

  const allOrgs = generalData.allOrgs2;

  viewData = {
    projectName,
    allOrgs
  };

  return res.render('prototypes/multi-user-application/add-applicant', viewData);
}

function appV3AddApplicantPost(req, res) {
  const { firstName, lastName, email, organisation, role } = req.body;

  req.session.firstName = firstName;
  req.session.lastName = lastName;
  req.session.email = email;
  req.session.organisation = organisation;
  req.session.role = role;

  return res.redirect('/prototypes/multi-user-application/add-applicant');
}

// ************************************************************************
//
//        Prefill with data!
//
// ************************************************************************
function appV3PopulateDataGet(req, res) {
  let viewData;

  let readOnly = req.param('readOnly');
  if (readOnly === 'true') {
    req.session.readOnly = true;
  }

  let projectName = 'New thinkers test project name';
  req.session.storedProjectName = projectName;

  req.session.projectDetailsIsComplete = true;
  req.session.eligibilityInputComplete = true;
  req.session.programmeTopicIsComplete = true;
  req.session.widerEffectIsComplete = true;
  req.session.researchExperienceIsComplete = true;
  req.session.writeReviewIsComplete = true;

  // req.session.caseForSupportNotes = '';

  req.session.detailsInput = '<p class="govuk-body ">Pellentesque molestie ante quis elit gravida euismod. Vestibulum egestas elementum sapien. Nullam scelerisque convallis odio a euismod. Vestibulum id neque ac urna aliquet pharetra. Suspendisse vel convallis turpis, pretium rutrum metus. Proin in condimentum ex. Vestibulum quis eros faucibus, ornare ligula quis, rutrum metus. Morbi accumsan sit amet nisi et interdum. Sed vulputate enim nibh, sed iaculis odio porta et. Cras blandit commodo facilisis. Cras feugiat erat arcu, at egestas purus luctus sed. Nullam molestie tempus sapien sed interdum. Nunc non dui faucibus, viverra nisl eget, ultricies ex.</p> <p class="govuk-body ">Nam hendrerit sapien eget pellentesque ultrices. Curabitur urna ante, tempor nec bibendum quis, rutrum sed arcu. Etiam nec aliquet lacus. Aenean gravida viverra leo quis blandit. Integer nunc nunc, dignissim a nibh et, lacinia ornare metus. Pellentesque elementum metus sed mauris cursus ornare. Ut venenatis massa nec risus cursus blandit. In imperdiet nisi eget diam semper, sit amet venenatis turpis faucibus. Vestibulum finibus lobortis vulputate.</p><h3 class="govuk-heading-s">Start date</h3><p class="govuk-body ">August 2020</p><h3 class="govuk-heading-s">Duration</h3><p class="govuk-body ">36 months</p><p class="govuk-body ">Nam hendrerit sapien eget pellentesque ultrices. Curabitur urna ante, tempor nec bibendum quis, rutrum sed arcu. Etiam nec aliquet lacus. Aenean gravida viverra leo quis blandit. Integer nunc nunc, dignissim a nibh et, lacinia ornare metus. Pellentesque elementum metus sed mauris cursus ornare. Ut venenatis massa nec risus cursus blandit. In imperdiet nisi eget diam semper, sit amet venenatis turpis faucibus. Vestibulum finibus lobortis vulputate. ';
  req.session.eligibilityInput = '<p class="govuk-body ">Nam hendrerit sapien eget pellentesque ultrices. Curabitur urna ante, tempor nec bibendum quis, rutrum sed arcu. Etiam nec aliquet lacus. Aenean gravida viverra leo quis blandit. Integer nunc nunc, dignissim a nibh et, lacinia ornare metus. Pellentesque elementum metus sed mauris cursus ornare. Ut venenatis massa nec risus cursus blandit. In imperdiet nisi eget diam semper, sit amet venenatis turpis faucibus. Vestibulum finibus lobortis vulputate.</p>';
  req.session.programmeTopic = '<p class="govuk-body ">Pellentesque elementum metus sed mauris cursus ornare. Ut venenatis massa nec risus cursus blandit. In imperdiet nisi eget diam semper, sit amet venenatis turpis faucibus. Vestibulum finibus lobortis vulputate. </p>';
  req.session.widerEffect = '<p class="govuk-body ">Etiam ut molestie dui. Pellentesque semper ante non massa malesuada, id dictum turpis consectetur. Fusce euismod nunc at suscipit laoreet. Morbi blandit justo est, quis accumsan justo mollis viverra. Aenean non tempus est. Sed metus nibh, facilisis suscipit porttitor sed, porttitor quis justo. Fusce placerat nunc at tincidunt gravida. Vestibulum pharetra mollis eros, nec vulputate velit. Aenean tristique elit dignissim malesuada rhoncus. Sed viverra velit quis nunc varius convallis.</p><p class="govuk-body ">Nam hendrerit sapien eget pellentesque ultrices. Curabitur urna ante, tempor nec bibendum quis, rutrum sed arcu. Etiam nec aliquet lacus. Aenean gravida viverra leo quis blandit. Integer nunc nunc, dignissim a nibh et, lacinia ornare metus. Pellentesque elementum metus sed mauris cursus ornare. Ut venenatis massa nec risus cursus blandit. In imperdiet nisi eget diam semper, sit amet venenatis turpis faucibus. Vestibulum finibus lobortis vulputate. Quisque fringilla blandit venenatis. Duis consequat, purus at sodales ornare, sapien eros maximus urna, eget ultrices tellus velit vitae lorem.</p>';
  req.session.researchExperience = '<p class="govuk-body ">Etiam ut molestie dui. Pellentesque semper ante non massa malesuada, id dictum turpis consectetur. Fusce euismod nunc at suscipit laoreet. Morbi blandit justo est, quis accumsan justo mollis viverra. Aenean non tempus est. Sed metus nibh, facilisis suscipit porttitor sed, porttitor quis justo. Fusce placerat nunc at tincidunt gravida. Vestibulum pharetra mollis eros, nec vulputate velit. Aenean tristique elit dignissim malesuada rhoncus. Sed viverra velit quis nunc varius convallis.</p><p class="govuk-body ">Nam hendrerit sapien eget pellentesque ultrices. Curabitur urna ante, tempor nec bibendum quis, rutrum sed arcu. Etiam nec aliquet lacus. Aenean gravida viverra leo quis blandit. Integer nunc nunc, dignissim a nibh et, lacinia ornare metus. Pellentesque elementum metus sed mauris cursus ornare. Ut venenatis massa nec risus cursus blandit. In imperdiet nisi eget diam semper, sit amet venenatis turpis faucibus. Vestibulum finibus lobortis vulputate. Quisque fringilla blandit venenatis. Duis consequat, purus at sodales ornare, sapien eros maximus urna.</p><p class="govuk-body ">Pellentesque elementum metus sed mauris cursus ornare. Ut venenatis massa nec risus cursus blandit. In imperdiet nisi eget diam semper, sit amet venenatis turpis faucibus. Vestibulum finibus lobortis vulputate. Quisque fringilla blandit venenatis. Duis consequat, purus at sodales ornare, sapien eros maximus urna.</p>';
  req.session.writeReview = '<p class="govuk-body ">Quisque malesuada efficitur viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc tincidunt est quis turpis tincidunt, quis luctus lorem ornare. Curabitur pulvinar mollis arcu. Praesent vehicula vulputate nibh sit amet lobortis. Suspendisse fringilla facilisis dui, sed sagittis lectus. Duis at eros nulla. Sed ac enim ornare, consectetur risus vel, molestie massa.</p><p class="govuk-body ">Pellentesque molestie ante quis elit gravida euismod. Vestibulum egestas elementum sapien. Nullam scelerisque convallis odio a euismod. Vestibulum id neque ac urna aliquet pharetra. Suspendisse vel convallis turpis, pretium rutrum metus. Proin in condimentum ex. Vestibulum quis eros faucibus, ornare ligula quis, rutrum metus. Morbi accumsan sit amet nisi et interdum. Sed vulputate enim nibh, sed iaculis odio porta et. Cras blandit commodo facilisis. Cras feugiat erat arcu, at egestas purus luctus sed. Nullam molestie tempus sapien sed interdum. Nunc non dui faucibus, viverra nisl eget, ultricies ex.</p><p class="govuk-body ">Nam hendrerit sapien eget pellentesque ultrices. Curabitur urna ante, tempor nec bibendum quis, rutrum sed arcu. Etiam nec aliquet lacus. Aenean gravida viverra leo quis blandit. Integer nunc nunc, dignissim a nibh et, lacinia ornare metus. Pellentesque elementum metus sed mauris cursus ornare. Ut venenatis massa nec risus cursus blandit. In imperdiet nisi eget diam semper, sit amet venenatis turpis faucibus. Vestibulum finibus lobortis vulputate. Quisque fringilla blandit venenatis. Duis consequat, purus at sodales ornare, sapien eros maximus urna, eget ultrices tellus velit vitae lorem.';

  return res.render('prototypes/multi-user-application/populate-data', viewData);
}