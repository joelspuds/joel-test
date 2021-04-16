'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.externalUsersApplicationsGet = externalUsersApplicationsGet;
exports.externalUsersApplicationsPost = externalUsersApplicationsPost;
exports.externalUsersReviewsGet = externalUsersReviewsGet;
exports.externalUsersReviewsPost = externalUsersReviewsPost;
let generalData = require('./data');
let genericFunctions = require('./generic');

/* **************

    Applications list

*************** */
function externalUsersApplicationsGet(req, res) {
  let viewData;

  const appData = generalData.megaDataApplications;

  viewData = {
    appData
  };
  return res.render('prototypes/external-users/applications', viewData);
}

function externalUsersApplicationsPost(req, res) {
  const {} = req.body;
  let redirectURL = '';
  console.log();
  return res.redirect(redirectURL);
}

/* **************

    Reviews list

*************** */
function externalUsersReviewsGet(req, res) {
  let viewData;

  const appData = generalData.megaDataReviews;

  viewData = {
    appData
  };
  return res.render('prototypes/external-users/reviews', viewData);
}

function externalUsersReviewsPost(req, res) {
  const {} = req.body;
  let redirectURL = '';
  console.log();
  return res.redirect(redirectURL);
}