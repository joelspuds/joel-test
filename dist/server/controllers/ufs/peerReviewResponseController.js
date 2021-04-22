'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prResponseIndexGet = prResponseIndexGet;
exports.prResponseIndexPost = prResponseIndexPost;
exports.prResponseRespondGet = prResponseRespondGet;
exports.prResponseRespondPost = prResponseRespondPost;
exports.prAcceptResponseGet = prAcceptResponseGet;
exports.prAcceptResponsePost = prAcceptResponsePost;
exports.prRejectResponseGet = prRejectResponseGet;
exports.prRejectResponsePost = prRejectResponsePost;
exports.prExtendResponseGet = prExtendResponseGet;
exports.prExtendResponsePost = prExtendResponsePost;
exports.prThanksGet = prThanksGet;
exports.prThanksPost = prThanksPost;
exports.prHomeGet = prHomeGet;
exports.prHomePost = prHomePost;
exports.prReviewsGet = prReviewsGet;
exports.prReviewsPost = prReviewsPost;
exports.prReviewTabsGet = prReviewTabsGet;
exports.prReviewTabsPost = prReviewTabsPost;
exports.prReviewAndSubmitGet = prReviewAndSubmitGet;
exports.prReviewAndSubmitPost = prReviewAndSubmitPost;
exports.prReviewCompleteGet = prReviewCompleteGet;
exports.prReviewsCompleteGet = prReviewsCompleteGet;
exports.prApplicantReviewTabsGet = prApplicantReviewTabsGet;
exports.prApplicantReviewTabsPost = prApplicantReviewTabsPost;
exports.prApplicantReviewCommentsTabsGet = prApplicantReviewCommentsTabsGet;
exports.prApplicantReviewCommentsTabsPost = prApplicantReviewCommentsTabsPost;
exports.prApplicantReviewTabCompletesGet = prApplicantReviewTabCompletesGet;
let generalData = require('./data');
let genericFunctions = require('./generic');

/* **************

    Peer review response index

*************** */
function prResponseIndexGet(req, res) {
  let viewData;
  viewData = {};

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
  }

  console.log(req.session);

  return res.render('prototypes/peer-review-external/index', viewData);
}

function prResponseIndexPost(req, res) {
  const {} = req.body;
  return res.redirect('/prototypes/peer-review-external/');
}

/* **************

    initial response page

*************** */
function prResponseRespondGet(req, res) {
  let viewData;

  viewData = {};
  return res.render('prototypes/peer-review-external/respond-to-invite', viewData);
}

function prResponseRespondPost(req, res) {
  const { inviteResponse } = req.body;
  let redirectURL = '/prototypes/peer-review-external/respond-to-invite';

  console.log(inviteResponse);
  /*if (inviteResponse === 'accept') {
    redirectURL = '/prototypes/peer-review-external/invite-accept';
  } else if (inviteResponse === 'reject') {
    redirectURL = '/prototypes/peer-review-external/invite-accept';
  }*/

  req.session.inviteResponse = inviteResponse;

  redirectURL = '/prototypes/peer-review-external/invite-' + inviteResponse;
  return res.redirect(redirectURL);
}

/* **************
    accept
*************** */
function prAcceptResponseGet(req, res) {
  let viewData;

  const acceptIsNotComplete = req.session.acceptIsNotComplete;
  req.session.acceptIsNotComplete = null;
  viewData = {
    acceptIsNotComplete
  };
  return res.render('prototypes/peer-review-external/invite-accept', viewData);
}

function prAcceptResponsePost(req, res) {
  const { isComplete } = req.body;
  console.log(isComplete);
  let redirectURL = '/prototypes/peer-review-external/thanks';

  if (isComplete !== 'on') {
    req.session.acceptIsNotComplete = true;
    redirectURL = '/prototypes/peer-review-external/invite-accept';
  }

  return res.redirect(redirectURL);
}
/* **************
    reject
*************** */
function prRejectResponseGet(req, res) {
  let viewData;
  viewData = {};
  return res.render('prototypes/peer-review-external/invite-reject', viewData);
}

function prRejectResponsePost(req, res) {
  const {} = req.body;
  let redirectURL = '/prototypes/peer-review-external/thanks';
  console.log();

  return res.redirect(redirectURL);
}
/* **************
    extend
*************** */
function prExtendResponseGet(req, res) {
  let viewData;
  viewData = {};
  return res.render('prototypes/peer-review-external/invite-extend', viewData);
}

function prExtendResponsePost(req, res) {
  const {} = req.body;
  let redirectURL = '/prototypes/peer-review-external/thanks';
  console.log();

  return res.redirect(redirectURL);
}
/* **************
    thanks
*************** */
function prThanksGet(req, res) {
  let viewData;

  const inviteResponse = req.session.inviteResponse;

  viewData = {
    inviteResponse
  };
  return res.render('prototypes/peer-review-external/thanks', viewData);
}

function prThanksPost(req, res) {
  const {} = req.body;
  let redirectURL = '/prototypes/peer-review-external/thanks';
  console.log();

  return res.redirect(redirectURL);
}

/* **************

    Home

*************** */
function prHomeGet(req, res) {
  let viewData;

  const inviteResponse = req.session.inviteResponse;

  viewData = {
    inviteResponse
  };
  return res.render('prototypes/peer-review-external/user-home', viewData);
}

function prHomePost(req, res) {
  const {} = req.body;
  let redirectURL = '';
  console.log();

  return res.redirect(redirectURL);
}

/* **************

    Reviews list

*************** */
function prReviewsGet(req, res) {
  let viewData;

  const appData = generalData.megaDataReviews;
  const inviteResponse = req.session.inviteResponse;

  viewData = {
    inviteResponse,
    appData
  };
  return res.render('prototypes/peer-review-external/user-reviews', viewData);
}

function prReviewsPost(req, res) {
  const {} = req.body;
  let redirectURL = '';
  console.log();

  return res.redirect(redirectURL);
}

/* **************

    Review tabs mega page

*************** */
function prReviewTabsGet(req, res) {
  let viewData;

  const inviteResponse = req.session.inviteResponse;
  const review = req.session.review;
  const rating = req.session.rating;

  viewData = {
    inviteResponse,
    review,
    rating
  };
  return res.render('prototypes/peer-review-external/review-tabs', viewData);
}

function prReviewTabsPost(req, res) {
  const { review, rating } = req.body;
  let redirectURL = '/prototypes/peer-review-external/review-and-submit';
  console.log();

  req.session.review = review;
  req.session.rating = rating;

  return res.redirect(redirectURL);
}

/* **************

    Review and submit the review

*************** */
function prReviewAndSubmitGet(req, res) {
  let viewData;

  const inviteResponse = req.session.inviteResponse;
  const review = req.session.review;
  const rating = req.session.rating;

  const reviewValues = generalData.reviewRatingValues;
  let thisReviewValue = reviewValues[rating];

  viewData = {
    inviteResponse,
    review,
    rating,
    thisReviewValue
  };
  return res.render('prototypes/peer-review-external/review-and-submit', viewData);
}

function prReviewAndSubmitPost(req, res) {
  const {} = req.body;
  let redirectURL = '/prototypes/peer-review-external/review-complete';
  // console.log('going to review complete');

  return res.redirect(redirectURL);
}

/* **************

    Review and submit the review

*************** */
function prReviewCompleteGet(req, res) {
  let viewData;
  // console.log('review complete function');

  const inviteResponse = req.session.inviteResponse;
  const review = req.session.review;
  const rating = req.session.rating;

  const reviewValues = generalData.reviewRatingValues;
  let thisReviewValue = reviewValues[rating];

  viewData = {
    inviteResponse,
    review,
    rating,
    thisReviewValue
  };
  return res.render('prototypes/peer-review-external/review-completed', viewData);
}
/* **************

    Reviews list, complete

*************** */
function prReviewsCompleteGet(req, res) {
  let viewData;
  const appData = generalData.megaDataReviews;

  viewData = {
    appData
  };
  return res.render('prototypes/peer-review-external/user-reviews-complete', viewData);
}

/* **************

    Applicant review tabs

*************** */
function prApplicantReviewTabsGet(req, res) {
  let viewData;

  // const inviteResponse = req.session.inviteResponse;
  // const review = req.session.review;
  // const rating = req.session.rating;

  // const reviewValues = generalData.reviewRatingValues;
  // let thisReviewValue = reviewValues[rating];

  let applicantReviewComment = req.session.req.session.applicantReviewComment;

  /*inviteResponse,
    review,
    rating,
    thisReviewValue,*/

  viewData = {
    applicantReviewComment
  };
  return res.render('prototypes/peer-review-external/applicant-review-tabs', viewData);
}

function prApplicantReviewTabsPost(req, res) {
  const { tinyMCEInput } = req.body;
  let redirectURL = '/prototypes/peer-review-external/applicant-review-and-submit';
  console.log(req.body);
  req.session.applicantReviewComment = tinyMCEInput;

  return res.redirect(redirectURL);
}

/* **************

    Applicant confirm review comments

*************** */
function prApplicantReviewCommentsTabsGet(req, res) {
  let viewData;

  let comment = req.session.req.session.applicantReviewComment;

  viewData = {
    comment
  };
  return res.render('prototypes/peer-review-external/applicant-review-and-submit', viewData);
}

function prApplicantReviewCommentsTabsPost(req, res) {
  const {} = req.body;
  let redirectURL = '/prototypes/peer-review-external/applicant-review-tabs-complete';

  return res.redirect(redirectURL);
}

/* **************

    Applicant review tabs compete

*************** */
function prApplicantReviewTabCompletesGet(req, res) {
  let viewData;
  let applicantReviewComment = req.session.req.session.applicantReviewComment;

  viewData = {
    applicantReviewComment
  };
  return res.render('prototypes/peer-review-external/applicant-review-tabs-complete', viewData);
}