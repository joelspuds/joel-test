let generalData = require('./data');
let genericFunctions = require('./generic');

/* **************

    Peer review response index

*************** */
export function prResponseIndexGet(req, res) {
  let viewData;
  viewData = {};

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
  }

  console.log(req.session);

  return res.render('prototypes/peer-review-external/index', viewData);
}

export function prResponseIndexPost(req, res) {
  const {} = req.body;
  return res.redirect('/prototypes/peer-review-external/');
}

/* **************

    initial response page

*************** */
export function prResponseRespondGet(req, res) {
  let viewData;

  viewData = {};
  return res.render('prototypes/peer-review-external/respond-to-invite', viewData);
}

export function prResponseRespondPost(req, res) {
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
export function prAcceptResponseGet(req, res) {
  let viewData;

  const acceptIsNotComplete = req.session.acceptIsNotComplete;
  req.session.acceptIsNotComplete = null;
  viewData = {
    acceptIsNotComplete,
  };
  return res.render('prototypes/peer-review-external/invite-accept', viewData);
}

export function prAcceptResponsePost(req, res) {
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
export function prRejectResponseGet(req, res) {
  let viewData;
  viewData = {};
  return res.render('prototypes/peer-review-external/invite-reject', viewData);
}

export function prRejectResponsePost(req, res) {
  const {} = req.body;
  let redirectURL = '/prototypes/peer-review-external/thanks';
  console.log();

  return res.redirect(redirectURL);
}
/* **************
    extend
*************** */
export function prExtendResponseGet(req, res) {
  let viewData;
  viewData = {};
  return res.render('prototypes/peer-review-external/invite-extend', viewData);
}

export function prExtendResponsePost(req, res) {
  const {} = req.body;
  let redirectURL = '/prototypes/peer-review-external/thanks';
  console.log();

  return res.redirect(redirectURL);
}
/* **************
    thanks
*************** */
export function prThanksGet(req, res) {
  let viewData;

  const inviteResponse = req.session.inviteResponse;

  viewData = {
    inviteResponse,
  };
  return res.render('prototypes/peer-review-external/thanks', viewData);
}

export function prThanksPost(req, res) {
  const {} = req.body;
  let redirectURL = '/prototypes/peer-review-external/thanks';
  console.log();

  return res.redirect(redirectURL);
}

/* **************

    Home

*************** */
export function prHomeGet(req, res) {
  let viewData;

  const inviteResponse = req.session.inviteResponse;

  viewData = {
    inviteResponse,
  };
  return res.render('prototypes/peer-review-external/user-home', viewData);
}

export function prHomePost(req, res) {
  const {} = req.body;
  let redirectURL = '';
  console.log();

  return res.redirect(redirectURL);
}

/* **************

    Reviews list

*************** */
export function prReviewsGet(req, res) {
  let viewData;

  const appData = generalData.megaDataReviews;
  const inviteResponse = req.session.inviteResponse;

  viewData = {
    inviteResponse,
    appData,
  };
  return res.render('prototypes/peer-review-external/user-reviews', viewData);
}

export function prReviewsPost(req, res) {
  const {} = req.body;
  let redirectURL = '';
  console.log();

  return res.redirect(redirectURL);
}

/* **************

    Review tabs mega page

*************** */
export function prReviewTabsGet(req, res) {
  let viewData;

  const inviteResponse = req.session.inviteResponse;
  const review = req.session.review;
  const rating = req.session.rating;

  viewData = {
    inviteResponse,
    review,
    rating,
  };
  return res.render('prototypes/peer-review-external/review-tabs', viewData);
}

export function prReviewTabsPost(req, res) {
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
export function prReviewAndSubmitGet(req, res) {
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
    thisReviewValue,
  };
  return res.render('prototypes/peer-review-external/review-and-submit', viewData);
}

export function prReviewAndSubmitPost(req, res) {
  const {} = req.body;
  let redirectURL = '';
  console.log();

  return res.redirect(redirectURL);
}
