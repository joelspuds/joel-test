'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiUsers2Get = multiUsers2Get;
exports.multiUsers2Post = multiUsers2Post;
exports.multiUsers2SignInGet = multiUsers2SignInGet;
exports.multiUsers2SignInPost = multiUsers2SignInPost;
exports.multiUsers2OpportunityGet = multiUsers2OpportunityGet;
exports.multiUsers2ConfirmGet = multiUsers2ConfirmGet;
exports.multiUsers2ConfirmPost = multiUsers2ConfirmPost;
exports.multiUsers2CreatePasswordGet = multiUsers2CreatePasswordGet;
exports.multiUsers2CreatePasswordPost = multiUsers2CreatePasswordPost;
exports.multiUsers2ROHomeGet = multiUsers2ROHomeGet;
exports.multiUsers2ROApplicationsListGet = multiUsers2ROApplicationsListGet;
exports.multiUsers2DataTestGet = multiUsers2DataTestGet;
exports.multiUsers2DataTestPost = multiUsers2DataTestPost;
exports.multiUsers2DataTestDisplayGet = multiUsers2DataTestDisplayGet;
const untitledProjectName = 'Untitled project';
let generalData = require('./data');
let genericFunctions = require('./generic');

// ************************************************************************
//
//        MMO index
//
// ************************************************************************
function multiUsers2Get(req, res) {
  let viewData;
  viewData = {};

  req.session.journey = 'multiUser';

  return res.render('prototypes/multi-users2/index', viewData);
}

function multiUsers2Post(req, res) {
  const { userType, wipeData } = req.body;

  let targetURL;
  req.session.userType = userType;
  console.log('userType = ' + userType);

  console.log(req.body);
  console.log(wipeData);

  if (wipeData === 'wipeData') {
    const fs = require('fs');
    const dataFileJSON = './temp-store2.json';
    fs.readFile(dataFileJSON, 'utf8', (err, data) => {
      if (err) {
        console.log(`Error reading file from disk: ${err}`);
      } else {
        // parse JSON string to JSON object
        const databases = JSON.parse(data);
        databases[0].userType = null;
        databases[0].applicationStatus = null;
        databases[0].detailsInput = null;
        databases[0].projectName = null;
        databases[0].caseForSupportNotes = null;
        databases[0].directlyIncurredCost = null;
        databases[0].directlyAllocatedCost = null;
        databases[0].indirectCost = null;
        databases[0].exceptionCost = null;
        databases[0].resourcesAndCostsIsComplete = null;
        databases[0].caseForSupportIsComplete = null;
        databases[0].detailsIsComplete = null;
        databases[0].applicantsIsComplete = null;
        databases[0].justificationIsComplete = null;
        databases[0].hasBeenSubmitted = null;
        fs.writeFile(dataFileJSON, JSON.stringify(databases, null, 2), err => {
          if (err) {
            console.log(`Error writing file: ${err}`);
          }
        });
      }
    });
  }

  if (userType == 'applicant') {
    targetURL = '/prototypes/multi-user-application2/opportunity';
  } else if (userType == 'office') {
    targetURL = '/prototypes/multi-users2/home';
  } else {
    targetURL = '/prototypes/multi-users2/';
  }

  return res.redirect(targetURL);
}

// ************************************************************************
//
//        Sign in
//
// ************************************************************************
function multiUsers2SignInGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/multi-users2/sign-in', viewData);
}

function multiUsers2SignInPost(req, res) {
  const {} = req.body;

  /*req.session.firstName = firstName;
  req.session.lastName = lastName;*/

  return res.redirect('/prototypes/multi-users2/home');
}

// ************************************************************************
//
//        Opportunity page
//
// ************************************************************************
function multiUsers2OpportunityGet(req, res) {
  let viewData;

  let signedIn = req.session.signedIn;

  viewData = {
    signedIn
  };

  return res.render('prototypes/multi-users2/opportunity', viewData);
}

// ************************************************************************
//
//        MMO confirm
//
// ************************************************************************
function multiUsers2ConfirmGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/multi-users2/confirm', viewData);
}

function multiUsers2ConfirmPost(req, res) {
  const { firstName, lastName } = req.body;

  req.session.firstName = firstName;
  req.session.lastName = lastName;

  return res.redirect('/prototypes/multi-users2/create-password');
}

// ************************************************************************
//
//        MMO create password
//
// ************************************************************************
function multiUsers2CreatePasswordGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/multi-users2/create-password', viewData);
}

function multiUsers2CreatePasswordPost(req, res) {
  const { firstName, lastName } = req.body;

  req.session.firstName = firstName;
  req.session.lastName = lastName;

  return res.redirect('/prototypes/multi-users2/check-email');
}

// ************************************************************************
//
//        MMO Research Office home
//
// ************************************************************************
function multiUsers2ROHomeGet(req, res) {
  let viewData;

  // get project title
  let projectName;
  const fs = require('fs');
  const dataFileJSON = './temp-store2.json';
  var data = JSON.parse(fs.readFileSync(dataFileJSON, 'utf8'));
  projectName = data[0].projectName;

  viewData = {
    projectName
  };

  return res.render('prototypes/multi-users2/home', viewData);
}

// ************************************************************************
//
//        MMO Research Office applications list
//
// ************************************************************************
function multiUsers2ROApplicationsListGet(req, res) {
  let viewData, detailsIsComplete, caseForSupportIsComplete, applicantsIsComplete, resourcesAndCostsIsComplete, justificationIsComplete;

  // get project title
  let projectName;
  const fs = require('fs');
  const dataFileJSON = './temp-store2.json';
  var data = JSON.parse(fs.readFileSync(dataFileJSON, 'utf8'));
  projectName = data[0].projectName;
  detailsIsComplete = data[0].detailsIsComplete;
  caseForSupportIsComplete = data[0].caseForSupportIsComplete;
  applicantsIsComplete = data[0].applicantsIsComplete;
  resourcesAndCostsIsComplete = data[0].resourcesAndCostsIsComplete;
  justificationIsComplete = data[0].justificationIsComplete;
  let hasBeenSubmitted = data[0].hasBeenSubmitted;
  /*if (hasBeenSubmitted === 'true') {
    return res.redirect('/prototypes/multi-user-application/submitted');
  }*/

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

  viewData = {
    projectName,
    progressPercentage,
    reverseProgressPercentage,
    hasBeenSubmitted
  };

  return res.render('prototypes/multi-users2/applications-1', viewData);
}

// ************************************************************************
//
//        Data test
//
// ************************************************************************
function multiUsers2DataTestGet(req, res) {
  let viewData, dataSuccess;

  dataSuccess = req.session.dataSuccess;
  req.session.dataSuccess = null;

  viewData = {
    dataSuccess
  };

  return res.render('prototypes/multi-users2/data-test', viewData);
}

function multiUsers2DataTestPost(req, res) {
  const { firstName, lastName } = req.body;
  const fs = require('fs');

  const dataFileJSON = './temp-store2.json';

  fs.writeFile(dataFileJSON, JSON.stringify(req.body), err => {
    if (err) return console.error(err);
    console.log('Data stored!');
    console.log(req.body);
  });

  req.session.firstName = firstName;
  req.session.lastName = lastName;
  req.session.dataSuccess = true;

  return res.redirect('/prototypes/multi-users2/data-test');
}

/*  Show data */
function multiUsers2DataTestDisplayGet(req, res) {
  let viewData;
  const fs = require('fs');
  const dataFileJSON = './temp-store2.json';

  const dataFileJSONContents = fs.readFileSync(dataFileJSON);
  const actualJSONData = JSON.parse(dataFileJSONContents);

  let firstName = actualJSONData.firstName;
  let lastName = actualJSONData.lastName;
  let isComplete = actualJSONData.isComplete;

  viewData = {
    firstName,
    lastName,
    isComplete
  };

  return res.render('prototypes/multi-users2/data-display', viewData);
}