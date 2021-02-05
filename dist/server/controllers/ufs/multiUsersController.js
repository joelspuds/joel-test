'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiUsersGet = multiUsersGet;
exports.multiUsersPost = multiUsersPost;
exports.multiUsersSignInGet = multiUsersSignInGet;
exports.multiUsersSignInPost = multiUsersSignInPost;
exports.multiUsersOpportunityGet = multiUsersOpportunityGet;
exports.multiUsersConfirmGet = multiUsersConfirmGet;
exports.multiUsersConfirmPost = multiUsersConfirmPost;
exports.multiUsersCreatePasswordGet = multiUsersCreatePasswordGet;
exports.multiUsersCreatePasswordPost = multiUsersCreatePasswordPost;
exports.multiUsersROHomeGet = multiUsersROHomeGet;
exports.multiUsersROApplicationsListGet = multiUsersROApplicationsListGet;
exports.multiUsersDataTestGet = multiUsersDataTestGet;
exports.multiUsersDataTestPost = multiUsersDataTestPost;
exports.multiUsersDataTestDisplayGet = multiUsersDataTestDisplayGet;
const untitledProjectName = 'Untitled project';
let generalData = require('./data');
let genericFunctions = require('./generic');

// ************************************************************************
//
//        MMO index
//
// ************************************************************************
function multiUsersGet(req, res) {
  let viewData;
  viewData = {};

  req.session.journey = 'multiUser';

  return res.render('prototypes/multi-users/index', viewData);
}

function multiUsersPost(req, res) {
  const { userType, wipeData } = req.body;

  let targetURL;
  req.session.userType = userType;
  console.log('userType = ' + userType);

  console.log(req.body);
  console.log(wipeData);

  if (wipeData === 'wipeData') {
    const fs = require('fs');
    const dataFileJSON = './temp-store.json';
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
    targetURL = '/prototypes/multi-user-application/opportunity';
  } else if (userType == 'office') {
    targetURL = '/prototypes/multi-users/home';
  } else {
    targetURL = '/prototypes/multi-users/';
  }

  return res.redirect(targetURL);
}

// ************************************************************************
//
//        Sign in
//
// ************************************************************************
function multiUsersSignInGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/multi-users/sign-in', viewData);
}

function multiUsersSignInPost(req, res) {
  const {} = req.body;

  /*req.session.firstName = firstName;
  req.session.lastName = lastName;*/

  return res.redirect('/prototypes/multi-users/home');
}

// ************************************************************************
//
//        Opportunity page
//
// ************************************************************************
function multiUsersOpportunityGet(req, res) {
  let viewData;

  let signedIn = req.session.signedIn;

  viewData = {
    signedIn
  };

  return res.render('prototypes/multi-users/opportunity', viewData);
}

// ************************************************************************
//
//        MMO confirm
//
// ************************************************************************
function multiUsersConfirmGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/multi-users/confirm', viewData);
}

function multiUsersConfirmPost(req, res) {
  const { firstName, lastName } = req.body;

  req.session.firstName = firstName;
  req.session.lastName = lastName;

  return res.redirect('/prototypes/multi-users/create-password');
}

// ************************************************************************
//
//        MMO create password
//
// ************************************************************************
function multiUsersCreatePasswordGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/multi-users/create-password', viewData);
}

function multiUsersCreatePasswordPost(req, res) {
  const { firstName, lastName } = req.body;

  req.session.firstName = firstName;
  req.session.lastName = lastName;

  return res.redirect('/prototypes/multi-users/check-email');
}

// ************************************************************************
//
//        MMO Research Office home
//
// ************************************************************************
function multiUsersROHomeGet(req, res) {
  let viewData;

  // get project title
  let projectName;
  const fs = require('fs');
  const dataFileJSON = './temp-store.json';
  var data = JSON.parse(fs.readFileSync(dataFileJSON, 'utf8'));
  projectName = data[0].projectName;

  viewData = {
    projectName
  };

  return res.render('prototypes/multi-users/home', viewData);
}

// ************************************************************************
//
//        MMO Research Office applications list
//
// ************************************************************************
function multiUsersROApplicationsListGet(req, res) {
  let viewData;

  // get project title
  let projectName;
  const fs = require('fs');
  const dataFileJSON = './temp-store.json';
  var data = JSON.parse(fs.readFileSync(dataFileJSON, 'utf8'));
  projectName = data[0].projectName;

  viewData = {
    projectName
  };

  return res.render('prototypes/multi-users/applications-1', viewData);
}

// ************************************************************************
//
//        Data test
//
// ************************************************************************
function multiUsersDataTestGet(req, res) {
  let viewData, dataSuccess;

  dataSuccess = req.session.dataSuccess;
  req.session.dataSuccess = null;

  viewData = {
    dataSuccess
  };

  return res.render('prototypes/multi-users/data-test', viewData);
}

function multiUsersDataTestPost(req, res) {
  const { firstName, lastName } = req.body;
  const fs = require('fs');

  const dataFileJSON = './temp-store.json';

  fs.writeFile(dataFileJSON, JSON.stringify(req.body), err => {
    if (err) return console.error(err);
    console.log('Data stored!');
    console.log(req.body);
  });

  req.session.firstName = firstName;
  req.session.lastName = lastName;
  req.session.dataSuccess = true;

  return res.redirect('/prototypes/multi-users/data-test');
}

/*  Show data */
function multiUsersDataTestDisplayGet(req, res) {
  let viewData;
  const fs = require('fs');
  const dataFileJSON = './temp-store.json';

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

  return res.render('prototypes/multi-users/data-display', viewData);
}