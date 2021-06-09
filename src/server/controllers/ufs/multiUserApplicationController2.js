// suggested learning full list GET
// This is the fuller version with

import * as demosController from './createOpportunity-v3';

// const cheerio = require('cheerio');

const untitledProjectName = 'Untitled project';
let generalData = require('./data');
let genericFunctions = require('./generic');

// ************************************************************************
//
//       AHRC opportunity
//
// ************************************************************************

export function appV3_2AHRCOpportunityGet(req, res) {
  let viewData;
  // req.session.ahrcDemo = true;

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
  }

  viewData = {};

  return res.render('prototypes/multi-user-application2/opportunity', viewData);
}

export function appV3_2AHRCOpportunityPost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/multi-user-application2/opportunity');
}

// ************************************************************************
//
//       Application overview
//
// ************************************************************************

export function appV3_2tinyMCEApplicationIndexGet(req, res) {
  let viewData, hasBeenUpdated, projectDetails, projectName;

  console.log('appV3tinyMCEApplicationIndexGet');

  projectDetails = req.session.projectDetails;
  hasBeenUpdated = req.session.hasBeenUpdated;

  req.session.hasBeenUpdated = null;

  // let journey = req.session.journey = 'multiUser';
  // applicant or office
  let userType = req.session.userType;
  // userType = 'applicant';

  let applicationStatus,
    detailsIsComplete,
    caseForSupportIsComplete,
    applicantsIsComplete,
    resourcesAndCostsIsComplete,
    justificationIsComplete;

  const fs = require('fs');
  const dataFileJSON = './temp-store2.json';
  var data = JSON.parse(fs.readFileSync(dataFileJSON, 'utf8'));
  applicationStatus = data[0].applicationStatus;
  detailsIsComplete = data[0].detailsIsComplete;
  caseForSupportIsComplete = data[0].caseForSupportIsComplete;
  applicantsIsComplete = data[0].applicantsIsComplete;
  resourcesAndCostsIsComplete = data[0].resourcesAndCostsIsComplete;
  justificationIsComplete = data[0].justificationIsComplete;
  projectName = data[0].projectName;

  let hasBeenSubmitted = data[0].hasBeenSubmitted;
  if (hasBeenSubmitted === 'true') {
    return res.redirect('/prototypes/multi-user-application2/submitted');
  }

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
    justificationIsComplete,
  };

  return res.render('prototypes/multi-user-application2/index', viewData);
}

export function appV3_2tinyMCEApplicationIndexPost(req, res) {
  const { submitButton } = req.body;
  console.log('button action = ' + submitButton);

  let tempSubmitButton = submitButton;
  let hasBeenSubmitted;

  if (submitButton === 'submitToUKRI') {
    tempSubmitButton = 'startShare';
    hasBeenSubmitted = 'true';
  }

  const fs = require('fs');
  const dataFileJSON = './temp-store2.json';
  fs.readFile(dataFileJSON, 'utf8', (err, data) => {
    if (err) {
      console.log(`Error reading file from disk: ${err}`);
    } else {
      // parse JSON string to JSON object
      const databases = JSON.parse(data);
      // databases[0].applicationStatus = submitButton;
      databases[0].applicationStatus = tempSubmitButton;
      databases[0].hasBeenSubmitted = hasBeenSubmitted;
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
    targetURL = '/prototypes/multi-user-application2/submitted';
  } else {
    targetURL = '/prototypes/multi-user-application2/';
  }
  return res.redirect(targetURL);
}

// ************************************************************************
//
//       VIEW DYNAMIC
//
// ************************************************************************
export function appV3_2tinyMCEApplicationViewGet(req, res) {
  let viewData;

  let readOnly;
  let userType = req.session.userType;
  if (userType === 'office') {
    readOnly = true;
  }

  let detailsInput, projectName, caseForSupportNotes, directlyIncurredCost, directlyAllocatedCost, indirectCost, exceptionCost;

  const fs = require('fs');
  const dataFileJSON = './temp-store2.json';
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
    readOnly,
  };
  return res.render('prototypes/multi-user-application2/view', viewData);
}

// ************************************************************************
//
//       VIEW ADMIN
//
// ************************************************************************
export function appV3_2AdminViewGet(req, res) {
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
    readOnly,
  };
  return res.render('prototypes/multi-user-application2/admin-view', viewData);
}

// ************************************************************************
//
//        DETAILS
//
// ************************************************************************
export function appV3_2DetailsGet(req, res) {
  let viewData, readOnly;

  let projectNameDB, detailsInputDB, detailsIsComplete, applicationStatus;
  const fs = require('fs');
  const dataFileJSON = './temp-store2.json';
  let data = JSON.parse(fs.readFileSync(dataFileJSON, 'utf8'));
  projectNameDB = data[0].projectName;
  detailsInputDB = data[0].detailsInput;
  detailsIsComplete = data[0].detailsIsComplete;
  applicationStatus = data[0].applicationStatus;
  let userType = req.session.userType;
  if (userType === 'office') {
    readOnly = true;
  }
  if (applicationStatus === 'startShare') {
    readOnly = true;
  }

  viewData = {
    projectNameDB,
    detailsInputDB,
    detailsIsComplete,
    readOnly,
  };

  return res.render('prototypes/multi-user-application2/details', viewData);
}

export function appV3_2DetailsPost(req, res) {
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
  const dataFileJSON = './temp-store2.json';
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

  return res.redirect('/prototypes/multi-user-application2/');
}

// ************************************************************************
//
//        Applicants
//
// ************************************************************************
export function appV3_2ApplicantsGet(req, res) {
  let viewData, projectName, applicantsIsComplete, applicationStatus;

  let readOnly = req.session.readOnly;
  let userType = req.session.userType;
  if (userType === 'office') {
    readOnly = true;
  }

  const fs = require('fs');
  const dataFileJSON = './temp-store2.json';
  let data = JSON.parse(fs.readFileSync(dataFileJSON, 'utf8'));
  projectName = data[0].projectName;
  applicantsIsComplete = data[0].applicantsIsComplete;
  applicationStatus = data[0].applicationStatus;

  if (applicationStatus === 'startShare') {
    readOnly = true;
  }

  viewData = {
    applicantsIsComplete,
    projectName,
    readOnly,
  };

  return res.render('prototypes/multi-user-application2/applicants', viewData);
}

export function appV3_2ApplicantsPost(req, res) {
  const { isComplete } = req.body;

  let applicantsIsComplete = null;
  if (isComplete === 'on') {
    applicantsIsComplete = 'on';
  }

  const fs = require('fs');
  const dataFileJSON = './temp-store2.json';
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

  return res.redirect('/prototypes/multi-user-application2/');
}

// ************************************************************************
//
//        Justification of resources
//
// ************************************************************************
export function appV3_2JustificationGet(req, res) {
  let viewData, projectName, justificationIsComplete, applicationStatus;

  let readOnly = req.session.readOnly;
  let userType = req.session.userType;
  if (userType === 'office') {
    readOnly = true;
  }

  const fs = require('fs');
  const dataFileJSON = './temp-store2.json';
  let data = JSON.parse(fs.readFileSync(dataFileJSON, 'utf8'));
  projectName = data[0].projectName;
  justificationIsComplete = data[0].justificationIsComplete;
  applicationStatus = data[0].applicationStatus;

  if (applicationStatus === 'startShare') {
    readOnly = true;
  }

  viewData = {
    justificationIsComplete,
    projectName,
    readOnly,
  };

  return res.render('prototypes/multi-user-application2/justification-of-resources', viewData);
}

export function appV3_2JustificationPost(req, res) {
  const { isComplete } = req.body;

  let justificationIsComplete = null;
  if (isComplete === 'on') {
    justificationIsComplete = 'on';
  }

  const fs = require('fs');
  const dataFileJSON = './temp-store2.json';
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

  return res.redirect('/prototypes/multi-user-application2/');
}

// ************************************************************************
//
//        Submitted
//
// ************************************************************************
export function appV3_2SubmittedGet(req, res) {
  let viewData, projectName;
  const fs = require('fs');
  const dataFileJSON = './temp-store2.json';
  let data = JSON.parse(fs.readFileSync(dataFileJSON, 'utf8'));
  projectName = data[0].projectName;

  viewData = {
    projectName,
  };

  return res.render('prototypes/multi-user-application2/submitted', viewData);
}

// ************************************************************************
//
//        Read
//
// ************************************************************************
export function appV3_2ReadGet(req, res) {
  let viewData, detailsInput, projectName, caseForSupportNotes, directlyIncurredCost, directlyAllocatedCost, indirectCost, exceptionCost;

  const fs = require('fs');
  const dataFileJSON = './temp-store2.json';
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
  };

  return res.render('prototypes/multi-user-application2/read', viewData);
}

// ************************************************************************
//
//        CASE FOR SUPPORT
//
// ************************************************************************
export function appV3_2caseForSupportGet(req, res) {
  let viewData, caseForSupportNotes, caseForSupportIsComplete, projectName, applicationStatus;

  // let caseForSupportNotes;
  const fs = require('fs');
  const dataFileJSON = './temp-store2.json';
  var data = JSON.parse(fs.readFileSync(dataFileJSON, 'utf8'));
  caseForSupportNotes = data[0].caseForSupportNotes;
  caseForSupportIsComplete = data[0].caseForSupportIsComplete;
  projectName = data[0].projectName;
  applicationStatus = data[0].applicationStatus;

  let readOnly;
  let userType = req.session.userType;
  if (userType === 'office') {
    readOnly = true;
  }

  if (applicationStatus === 'startShare') {
    readOnly = true;
  }

  viewData = {
    caseForSupportIsComplete,
    caseForSupportNotes,
    projectName,
    readOnly,
  };

  return res.render('prototypes/multi-user-application2/case-for-support', viewData);
}

export function appV3_2caseForSupportPost(req, res) {
  const { caseForSupportNotes, isComplete } = req.body;

  let caseForSupportIsComplete = null;
  if (isComplete === 'on') {
    caseForSupportIsComplete = 'on';
  }

  const fs = require('fs');
  const dataFileJSON = './temp-store2.json';
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

  return res.redirect('/prototypes/multi-user-application2/');
}
// ************************************************************************
//
//        Resources and costs
//
// ************************************************************************
export function appV3_2ResourcesAndCostsGet(req, res) {
  let viewData,
    directlyIncurredCost,
    directlyAllocatedCost,
    indirectCost,
    exceptionCost,
    projectName,
    resourcesAndCostsIsComplete,
    applicationStatus;

  // let caseForSupportNotes;
  const fs = require('fs');
  const dataFileJSON = './temp-store2.json';
  var data = JSON.parse(fs.readFileSync(dataFileJSON, 'utf8'));
  projectName = data[0].projectName;
  directlyIncurredCost = data[0].directlyIncurredCost;
  directlyAllocatedCost = data[0].directlyAllocatedCost;
  indirectCost = data[0].indirectCost;
  exceptionCost = data[0].exceptionCost;
  resourcesAndCostsIsComplete = data[0].resourcesAndCostsIsComplete;
  applicationStatus = data[0].applicationStatus;

  let readOnly;
  let userType = req.session.userType;
  if (userType === 'office') {
    readOnly = true;
  }
  if (applicationStatus === 'startShare') {
    readOnly = true;
  }

  viewData = {
    resourcesAndCostsIsComplete,
    directlyIncurredCost,
    directlyAllocatedCost,
    indirectCost,
    exceptionCost,
    projectName,
    readOnly,
  };

  return res.render('prototypes/multi-user-application2/resources-and-costs', viewData);
}

export function appV3_2ResourcesAndCostsPost(req, res) {
  const { directlyIncurredCost, directlyAllocatedCost, indirectCost, exceptionCost, isComplete } = req.body;

  let resourcesAndCostsIsComplete = null;
  if (isComplete === 'on') {
    resourcesAndCostsIsComplete = 'on';
  }
  const fs = require('fs');
  const dataFileJSON = './temp-store2.json';
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

  return res.redirect('/prototypes/multi-user-application2/');
}

// ************************************************************************
//
//        Add applicant
//
// ************************************************************************
/*
export function appV3_2AddApplicantGet(req, res) {
  let viewData;

  let projectName = req.session.storedProjectName;
  if (!projectName) {
    projectName = untitledProjectName;
  }

  const allOrgs = generalData.allOrgs2;

  viewData = {
    projectName,
    allOrgs,
  };

  return res.render('prototypes/multi-user-application2/add-applicant', viewData);
}

export function appV3_2AddApplicantPost(req, res) {
  const { firstName, lastName, email, organisation, role } = req.body;

  req.session.firstName = firstName;
  req.session.lastName = lastName;
  req.session.email = email;
  req.session.organisation = organisation;
  req.session.role = role;

  return res.redirect('/prototypes/multi-user-application2/add-applicant');
}
*/

// ************************************************************************
//
//        Prefill with data!
//
// ************************************************************************
/*
export function appV3_2PopulateDataGet(req, res) {
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

  req.session.detailsInput =
    '<p class="govuk-body ">Pellentesque molestie ante quis elit gravida euismod. Vestibulum egestas elementum sapien. Nullam scelerisque convallis odio a euismod. Vestibulum id neque ac urna aliquet pharetra. Suspendisse vel convallis turpis, pretium rutrum metus. Proin in condimentum ex. Vestibulum quis eros faucibus, ornare ligula quis, rutrum metus. Morbi accumsan sit amet nisi et interdum. Sed vulputate enim nibh, sed iaculis odio porta et. Cras blandit commodo facilisis. Cras feugiat erat arcu, at egestas purus luctus sed. Nullam molestie tempus sapien sed interdum. Nunc non dui faucibus, viverra nisl eget, ultricies ex.</p> <p class="govuk-body ">Nam hendrerit sapien eget pellentesque ultrices. Curabitur urna ante, tempor nec bibendum quis, rutrum sed arcu. Etiam nec aliquet lacus. Aenean gravida viverra leo quis blandit. Integer nunc nunc, dignissim a nibh et, lacinia ornare metus. Pellentesque elementum metus sed mauris cursus ornare. Ut venenatis massa nec risus cursus blandit. In imperdiet nisi eget diam semper, sit amet venenatis turpis faucibus. Vestibulum finibus lobortis vulputate.</p><h3 class="govuk-heading-s">Start date</h3><p class="govuk-body ">August 2020</p><h3 class="govuk-heading-s">Duration</h3><p class="govuk-body ">36 months</p><p class="govuk-body ">Nam hendrerit sapien eget pellentesque ultrices. Curabitur urna ante, tempor nec bibendum quis, rutrum sed arcu. Etiam nec aliquet lacus. Aenean gravida viverra leo quis blandit. Integer nunc nunc, dignissim a nibh et, lacinia ornare metus. Pellentesque elementum metus sed mauris cursus ornare. Ut venenatis massa nec risus cursus blandit. In imperdiet nisi eget diam semper, sit amet venenatis turpis faucibus. Vestibulum finibus lobortis vulputate. ';
  req.session.eligibilityInput =
    '<p class="govuk-body ">Nam hendrerit sapien eget pellentesque ultrices. Curabitur urna ante, tempor nec bibendum quis, rutrum sed arcu. Etiam nec aliquet lacus. Aenean gravida viverra leo quis blandit. Integer nunc nunc, dignissim a nibh et, lacinia ornare metus. Pellentesque elementum metus sed mauris cursus ornare. Ut venenatis massa nec risus cursus blandit. In imperdiet nisi eget diam semper, sit amet venenatis turpis faucibus. Vestibulum finibus lobortis vulputate.</p>';
  req.session.programmeTopic =
    '<p class="govuk-body ">Pellentesque elementum metus sed mauris cursus ornare. Ut venenatis massa nec risus cursus blandit. In imperdiet nisi eget diam semper, sit amet venenatis turpis faucibus. Vestibulum finibus lobortis vulputate. </p>';
  req.session.widerEffect =
    '<p class="govuk-body ">Etiam ut molestie dui. Pellentesque semper ante non massa malesuada, id dictum turpis consectetur. Fusce euismod nunc at suscipit laoreet. Morbi blandit justo est, quis accumsan justo mollis viverra. Aenean non tempus est. Sed metus nibh, facilisis suscipit porttitor sed, porttitor quis justo. Fusce placerat nunc at tincidunt gravida. Vestibulum pharetra mollis eros, nec vulputate velit. Aenean tristique elit dignissim malesuada rhoncus. Sed viverra velit quis nunc varius convallis.</p><p class="govuk-body ">Nam hendrerit sapien eget pellentesque ultrices. Curabitur urna ante, tempor nec bibendum quis, rutrum sed arcu. Etiam nec aliquet lacus. Aenean gravida viverra leo quis blandit. Integer nunc nunc, dignissim a nibh et, lacinia ornare metus. Pellentesque elementum metus sed mauris cursus ornare. Ut venenatis massa nec risus cursus blandit. In imperdiet nisi eget diam semper, sit amet venenatis turpis faucibus. Vestibulum finibus lobortis vulputate. Quisque fringilla blandit venenatis. Duis consequat, purus at sodales ornare, sapien eros maximus urna, eget ultrices tellus velit vitae lorem.</p>';
  req.session.researchExperience =
    '<p class="govuk-body ">Etiam ut molestie dui. Pellentesque semper ante non massa malesuada, id dictum turpis consectetur. Fusce euismod nunc at suscipit laoreet. Morbi blandit justo est, quis accumsan justo mollis viverra. Aenean non tempus est. Sed metus nibh, facilisis suscipit porttitor sed, porttitor quis justo. Fusce placerat nunc at tincidunt gravida. Vestibulum pharetra mollis eros, nec vulputate velit. Aenean tristique elit dignissim malesuada rhoncus. Sed viverra velit quis nunc varius convallis.</p><p class="govuk-body ">Nam hendrerit sapien eget pellentesque ultrices. Curabitur urna ante, tempor nec bibendum quis, rutrum sed arcu. Etiam nec aliquet lacus. Aenean gravida viverra leo quis blandit. Integer nunc nunc, dignissim a nibh et, lacinia ornare metus. Pellentesque elementum metus sed mauris cursus ornare. Ut venenatis massa nec risus cursus blandit. In imperdiet nisi eget diam semper, sit amet venenatis turpis faucibus. Vestibulum finibus lobortis vulputate. Quisque fringilla blandit venenatis. Duis consequat, purus at sodales ornare, sapien eros maximus urna.</p><p class="govuk-body ">Pellentesque elementum metus sed mauris cursus ornare. Ut venenatis massa nec risus cursus blandit. In imperdiet nisi eget diam semper, sit amet venenatis turpis faucibus. Vestibulum finibus lobortis vulputate. Quisque fringilla blandit venenatis. Duis consequat, purus at sodales ornare, sapien eros maximus urna.</p>';
  req.session.writeReview =
    '<p class="govuk-body ">Quisque malesuada efficitur viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc tincidunt est quis turpis tincidunt, quis luctus lorem ornare. Curabitur pulvinar mollis arcu. Praesent vehicula vulputate nibh sit amet lobortis. Suspendisse fringilla facilisis dui, sed sagittis lectus. Duis at eros nulla. Sed ac enim ornare, consectetur risus vel, molestie massa.</p><p class="govuk-body ">Pellentesque molestie ante quis elit gravida euismod. Vestibulum egestas elementum sapien. Nullam scelerisque convallis odio a euismod. Vestibulum id neque ac urna aliquet pharetra. Suspendisse vel convallis turpis, pretium rutrum metus. Proin in condimentum ex. Vestibulum quis eros faucibus, ornare ligula quis, rutrum metus. Morbi accumsan sit amet nisi et interdum. Sed vulputate enim nibh, sed iaculis odio porta et. Cras blandit commodo facilisis. Cras feugiat erat arcu, at egestas purus luctus sed. Nullam molestie tempus sapien sed interdum. Nunc non dui faucibus, viverra nisl eget, ultricies ex.</p><p class="govuk-body ">Nam hendrerit sapien eget pellentesque ultrices. Curabitur urna ante, tempor nec bibendum quis, rutrum sed arcu. Etiam nec aliquet lacus. Aenean gravida viverra leo quis blandit. Integer nunc nunc, dignissim a nibh et, lacinia ornare metus. Pellentesque elementum metus sed mauris cursus ornare. Ut venenatis massa nec risus cursus blandit. In imperdiet nisi eget diam semper, sit amet venenatis turpis faucibus. Vestibulum finibus lobortis vulputate. Quisque fringilla blandit venenatis. Duis consequat, purus at sodales ornare, sapien eros maximus urna, eget ultrices tellus velit vitae lorem.';

  return res.render('prototypes/multi-user-application2/populate-data', viewData);
}
*/
