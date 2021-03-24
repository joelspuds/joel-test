'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pvIndexGet = pvIndexGet;
exports.pvIndexPost = pvIndexPost;
exports.pvOpportunitySetupGet = pvOpportunitySetupGet;
exports.pvOpportunitySetupPost = pvOpportunitySetupPost;
exports.pvExpertReviewGet = pvExpertReviewGet;
exports.pvExpertReviewPost = pvExpertReviewPost;
exports.pvApplicationsListGet = pvApplicationsListGet;
exports.pvApplicationsListPost = pvApplicationsListPost;
exports.pvApplicationOverviewGet = pvApplicationOverviewGet;
exports.pvApplicationOverviewPost = pvApplicationOverviewPost;
exports.pvAddReviewerGet = pvAddReviewerGet;
exports.pvAddReviewerPost = pvAddReviewerPost;
exports.pvInvitationToReviewGet = pvInvitationToReviewGet;
exports.pvInvitationToReviewPost = pvInvitationToReviewPost;
exports.pvApplicationOverview2Get = pvApplicationOverview2Get;
exports.pvApplicationOverview2Post = pvApplicationOverview2Post;
exports.pvReviewAndAcknowledgeResponseGet = pvReviewAndAcknowledgeResponseGet;
exports.pvReviewAndAcknowledgeResponsePost = pvReviewAndAcknowledgeResponsePost;
exports.pvInvitationToReviewExtensionGet = pvInvitationToReviewExtensionGet;
exports.pvInvitationToReviewExtensionPost = pvInvitationToReviewExtensionPost;
exports.pvManageReviewsGet = pvManageReviewsGet;
exports.pvManageReviewsPost = pvManageReviewsPost;
exports.pvReviewAndReturnGet = pvReviewAndReturnGet;
exports.pvReviewAndReturnPost = pvReviewAndReturnPost;
exports.pvAddNotesGet = pvAddNotesGet;
exports.pvAddNotesPost = pvAddNotesPost;
exports.pvSendReviewsGet = pvSendReviewsGet;
exports.pvSendReviewsPost = pvSendReviewsPost;
let generalData = require('./data');
let genericFunctions = require('./generic');

/* **************

    Peer review index

*************** */
function pvIndexGet(req, res) {
  let viewData;
  viewData = {};

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
  }

  console.log(req.session);

  return res.render('prototypes/peer-review/index', viewData);
}

function pvIndexPost(req, res) {
  const {} = req.body;
  return res.redirect('/prototypes/peer-review/');
}

/* **************

    Opportunity setup

*************** */
function pvOpportunitySetupGet(req, res) {
  let viewData;

  let workflowReviewItemAdded = req.session.workflowReviewItemAdded;
  let expertReviewIsComplete = req.session.expertReviewIsComplete;

  viewData = {
    workflowReviewItemAdded,
    expertReviewIsComplete
  };
  return res.render('prototypes/peer-review/opportunity-setup', viewData);
}

function pvOpportunitySetupPost(req, res) {
  const { addWorkflowItem } = req.body;

  // console.log(req.body);
  // let workflowReviewItemAdded;

  if (addWorkflowItem === 'review') {
    req.session.workflowReviewItemAdded = true;
  }

  return res.redirect('/prototypes/peer-review/opportunity-setup');
}

/* **************

   expert review set up

*************** */
function pvExpertReviewGet(req, res) {
  let viewData;

  let guidance = req.session.guidance;
  let expertReviewIsComplete = req.session.expertReviewIsComplete;
  let wordCount = req.session.wordCount;

  viewData = {
    guidance,
    expertReviewIsComplete,
    wordCount
  };
  return res.render('prototypes/peer-review/expert-review', viewData);
}

function pvExpertReviewPost(req, res) {
  const { guidance, isComplete, wordCount } = req.body;

  console.log(req.body);

  req.session.guidance = guidance;

  if (isComplete === 'on') {
    req.session.expertReviewIsComplete = true;
  } else {
    req.session.expertReviewIsComplete = null;
  }

  req.session.wordCount = wordCount;

  return res.redirect('/prototypes/peer-review/opportunity-setup');
}

/* **************

    Applications list

*************** */
function pvApplicationsListGet(req, res) {
  let viewData;

  // const megaData = generalData.megaDataApplicationsReviews;
  const megaData = generalData.megaDataApplicationNames;
  const firstNamesList = generalData.firstNamesList;
  const lastNamesList = generalData.lastNamesList;

  let namesArray = [];
  for (let i = 0; i < 40; i++) {
    let randomFirst = Math.floor(Math.random() * firstNamesList.length);
    let randomLast = Math.floor(Math.random() * lastNamesList.length);
    namesArray.push(firstNamesList[randomFirst] + ' ' + lastNamesList[randomLast]);
  }

  viewData = {
    megaData,
    namesArray
  };
  return res.render('prototypes/peer-review/applications-list', viewData);
}

function pvApplicationsListPost(req, res) {
  const {} = req.body;

  /*let workflowReviewItemAdded;
   if (addWorkflowItem === 'review') {
    req.session.workflowReviewItemAdded = true;
  }*/

  return res.redirect('/prototypes/peer-review/applications-list');
}

/* **************

    Application overview

*************** */
function pvApplicationOverviewGet(req, res) {
  let viewData;

  let addedPerson = req.session.addedPerson;
  const examplePeople = generalData.examplePeopleList;
  const megaData = generalData.megaDataApplicationNames;

  let inviteHasBeenSent = req.session.inviteHasBeenSent;
  req.session.inviteHasBeenSent = null;
  let hiddenPersonID = req.session.idOfInvitee;

  let person0invited = req.session.person0invited;
  let person1invited = req.session.person1invited;
  let person2invited = req.session.person2invited;
  let person3invited = req.session.person3invited;
  let person4invited = req.session.person4invited;

  let hasNote = req.session.hasNote;

  let inviteSome = req.param('inviteSome');
  if (inviteSome === 'true') {
    addedPerson = {
      firstName: "Jane",
      lastName: "Doe",
      organisation: "University of Somerset"

    };
  }

  viewData = {
    megaData,
    addedPerson,
    examplePeople,
    inviteHasBeenSent,
    hiddenPersonID,
    person0invited,
    person1invited,
    person2invited,
    person3invited,
    person4invited,
    hasNote
  };
  return res.render('prototypes/peer-review/application-overview', viewData);
}

function pvApplicationOverviewPost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/peer-review/application-overview');
}

/* **************

    Add reviewer

*************** */
function pvAddReviewerGet(req, res) {
  let viewData;

  // const megaData = generalData.megaDataApplicationsReviews;
  const megaData = generalData.megaDataApplicationNames;
  const firstNamesList = generalData.firstNamesList;
  const lastNamesList = generalData.lastNamesList;

  let allOrgs = generalData.allOrgs2;

  let namesArray = [];
  for (let i = 0; i < 40; i++) {
    let randomFirst = Math.floor(Math.random() * firstNamesList.length);
    let randomLast = Math.floor(Math.random() * lastNamesList.length);
    namesArray.push(firstNamesList[randomFirst] + ' ' + lastNamesList[randomLast]);
  }

  viewData = {
    megaData,
    namesArray,
    allOrgs
  };
  return res.render('prototypes/peer-review/add-reviewer', viewData);
}

function pvAddReviewerPost(req, res) {
  const {} = req.body;
  const { firstName, lastName, organisation, emailAddress } = req.body;
  console.log(req.body);

  // let addedPerson = req.body;
  // req.sesison.addedPerson = addedPerson;
  req.session.addedPerson = req.body;

  return res.redirect('/prototypes/peer-review/application-overview');
}

/* **************

    Add reviewer

*************** */
function pvInvitationToReviewGet(req, res) {
  let viewData;

  const examplePeople = generalData.examplePeopleList;
  let personID = req.param('personID');

  let addedPerson = req.session.addedPerson;
  console.log('personID = ' + personID);
  let personName;
  if (personID === '0') {
    if (addedPerson) {
      personName = addedPerson.firstName + ' ' + addedPerson.lastName;
    } else {
      personName = 'Firstname Lastname';
    }
  } else if (personID > 0) {
    personName = examplePeople[personID];
  } else {
    personName = 'Firstname Lastname';
  }

  let showResendBanner;
  // resend=true&version=2
  let resend = req.param('resend');
  let version = req.param('version');
  if (resend === 'true') {
    showResendBanner = true;
  }

  console.log(personName);

  viewData = {
    showResendBanner,
    examplePeople,
    personID,
    personName,
    addedPerson
  };
  return res.render('prototypes/peer-review/invitation-to-review', viewData);
}

function pvInvitationToReviewPost(req, res) {
  const { deadlineDay, deadlineMonth, deadlineYear, customInviteNotes, hiddenPersonID } = req.body;

  console.log(req.body);

  req.session.inviteHasBeenSent = true;
  req.session.idOfInvitee = hiddenPersonID;

  if (hiddenPersonID === '0') {
    req.session.person0invited = true;
  }
  if (hiddenPersonID === '1') {
    req.session.person1invited = true;
  }

  if (hiddenPersonID === '2') {
    req.session.person2invited = true;
  }

  if (hiddenPersonID === '3') {
    req.session.person3invited = true;
  }

  if (hiddenPersonID === '4') {
    req.session.person4invited = true;
  }

  return res.redirect('/prototypes/peer-review/application-overview');
}

/* **************

    Application overview, version 2

*************** */
function pvApplicationOverview2Get(req, res) {
  let viewData;

  let shortcut = req.param('shortcut');
  if (shortcut === 'true') {
    req.session.addedPerson = {
      firstName: 'Shirley',
      lastName: 'Bainbridge',
      organisation: 'University of Borchester'
    };
  }

  let addedPerson = req.session.addedPerson;
  const examplePeople = generalData.examplePeopleList;
  const megaData = generalData.megaDataApplicationNames;

  let inviteHasBeenSent = req.session.inviteHasBeenSent;
  req.session.inviteHasBeenSent = null;
  let hiddenPersonID = req.session.idOfInvitee;

  let person0invited = req.session.person0invited;
  let person1invited = req.session.person1invited;
  let person2invited = req.session.person2invited;
  let person3invited = req.session.person3invited;
  let person4invited = req.session.person4invited;

  let hasNote = req.session.hasNote;

  viewData = {
    megaData,
    addedPerson,
    examplePeople,
    inviteHasBeenSent,
    hiddenPersonID,
    person0invited,
    person1invited,
    person2invited,
    person3invited,
    person4invited,
    hasNote
  };
  return res.render('prototypes/peer-review/application-overview-2', viewData);
}

function pvApplicationOverview2Post(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/peer-review/application-overview');
}

/* **************

    Review and acknowledge response

*************** */
function pvReviewAndAcknowledgeResponseGet(req, res) {
  let viewData;

  viewData = {};
  return res.render('prototypes/peer-review/review-and-acknowledge-response', viewData);
}

function pvReviewAndAcknowledgeResponsePost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/peer-review/invitation-to-review-decline-2');
}

/* **************

    invitation to review extension

*************** */
function pvInvitationToReviewExtensionGet(req, res) {
  let viewData;

  viewData = {};
  return res.render('prototypes/peer-review/invitation-to-review-extension', viewData);
}

function pvInvitationToReviewExtensionPost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/peer-review/application-overview-2');
}

/* **************

    manage reviews

*************** */
function pvManageReviewsGet(req, res) {
  let viewData;

  let review1_markReviewAsUsable = req.session.review1_markReviewAsUsable;
  let review4_markReviewAsUsable = req.session.review4_markReviewAsUsable;

  let person1Rejected = req.session.person1Rejected;
  let person4Rejected = req.session.person4Rejected;

  let review1Usable = req.session.review1Usable;
  let review4UnUsable = req.session.review4UnUsable;

  viewData = {
    /*review1_markReviewAsUsable,
    review4_markReviewAsUsable,
    person1Rejected,
    person4Rejected,*/
    review1Usable,
    review4UnUsable
  };
  return res.render('prototypes/peer-review/manage-reviews', viewData);
}

function pvManageReviewsPost(req, res) {
  const {
    review1_markReviewAsUsable,
    review4_markReviewAsUsable,
    review1_reviewAndReturnWithComments,
    review4_reviewAndReturnWithComments
  } = req.body;

  console.log(req.body);

  let redirectURL = '/prototypes/peer-review/manage-reviews';

  /*if (review1_reviewAndReturnWithComments === 'reviewAndReturn') {
    req.session.review1_status = 'return';
    redirectURL = '/prototypes/peer-review/review-and-return?reviewUser=1';
  }
  if (review4_reviewAndReturnWithComments === 'reviewAndReturn') {
    req.session.review4_status = 'return';
    redirectURL = '/prototypes/peer-review/review-and-return?reviewUser=4';
  }
   if (review1_markReviewAsUsable === 'true') {
    req.session.review1_status = 'usable';
  }
  if (review4_markReviewAsUsable === 'true') {
    req.session.review4_status = 'usable';
  }
   req.session.review1_markReviewAsUsable = review1_markReviewAsUsable;
  req.session.review4_markReviewAsUsable = review4_markReviewAsUsable;*/

  if (review1_markReviewAsUsable) {
    req.session.review1Usable = true;
  }

  if (review4_reviewAndReturnWithComments === 'reviewAndReturn') {
    req.session.review4UnUsable = true;
  }

  return res.redirect(redirectURL);
}

/* **************

    Review and return

*************** */
function pvReviewAndReturnGet(req, res) {
  let viewData;

  let review1_status = req.session.review1_status;
  let review4_status = req.session.review4_status;

  let whichUser = req.param('reviewUser');
  console.log(whichUser);
  let userName = 'Dr. Jane Doeington';
  if (whichUser === '1') {
    if (req.session.addedPerson) {
      let tempUserName = req.session.addedPerson;
      userName = tempUserName.firstName + ' ' + tempUserName.lastName;
    } else {
      userName = 'Dr. Jane Doe';
    }
  }
  if (whichUser === '4') {
    console.log('hello');
    userName = 'Dr. Patricia Particles';
  }

  req.session.userID = whichUser;

  viewData = {
    whichUser,
    userName,
    review1_status,
    review4_status
  };
  return res.render('prototypes/peer-review/review-and-return', viewData);
}

function pvReviewAndReturnPost(req, res) {
  const { whichUser, hiddenPersonID } = req.body;

  console.log(req.body);

  let redirectURL = '/prototypes/peer-review/manage-reviews';

  /*if (review1_reviewAndReturnWithComments === 'reviewAndReturn') {
    req.session.review1_status = 'return';
    redirectURL = '/prototypes/peer-review/review-and-return?reviewUser=1';
  }
  if (review4_reviewAndReturnWithComments === 'reviewAndReturn') {
    req.session.review4_status = 'return';
    redirectURL = '/prototypes/peer-review/review-and-return?reviewUser=4';
  }
   if (review1_markReviewAsUsable === 'true') {
    req.session.review1_status = 'usable';
  }
  if (review4_markReviewAsUsable === 'true') {
    req.session.review4_status = 'usable';
  }*/

  /*req.session.review1_markReviewAsUsable = review1_markReviewAsUsable;
  req.session.review4_markReviewAsUsable = review4_markReviewAsUsable;*/

  if (hiddenPersonID === '4') {
    req.session.person4Rejected = true;
  }

  if (hiddenPersonID === '1') {
    req.session.person4Rejected = true;
  }

  return res.redirect(redirectURL);
}

/* **************

    Add note

*************** */
function pvAddNotesGet(req, res) {
  let viewData;

  let linkOrigin = req.param('source');

  let userNote = req.session.userNote;
  let tempPersonName = req.session.addedPerson;
  let personName;
  if (!tempPersonName) {
    personName = 'Jane Doe';
  } else {
    personName = tempPersonName.firstName + ' ' + tempPersonName.lastName;
  }

  console.log(linkOrigin);

  viewData = {
    linkOrigin,
    personName,
    userNote
  };
  return res.render('prototypes/peer-review/add-note', viewData);
}

function pvAddNotesPost(req, res) {
  const { userNote, notesOrigin } = req.body;

  let redirectURL = '/prototypes/peer-review/application-overview';

  console.log('linkOrigin = ' + notesOrigin);

  if (notesOrigin === 'v2') {
    redirectURL = '/prototypes/peer-review/application-overview-2';
  }

  if (userNote.length > 1) {
    req.session.hasNote = true;
  }

  req.session.userNote = userNote;

  return res.redirect(redirectURL);
}

/* **************

    Send reviews to applicant

*************** */
function pvSendReviewsGet(req, res) {
  let viewData;

  viewData = {};
  return res.render('prototypes/peer-review/send-reviews-to-applicant', viewData);
}

function pvSendReviewsPost(req, res) {
  const {} = req.body;

  let redirectURL = '/prototypes/peer-review/final-applicant-response';
  return res.redirect(redirectURL);
}