let generalData = require('./data');
let genericFunctions = require('./generic');

/* **************

    Applications list

*************** */
export function externalUsersApplicationsGet(req, res) {
  let viewData;

  const appData = generalData.megaDataApplications;

  viewData = {
    appData,
  };
  return res.render('prototypes/external-users/applications', viewData);
}

export function externalUsersApplicationsPost(req, res) {
  const {} = req.body;
  let redirectURL = '';
  console.log();
  return res.redirect(redirectURL);
}

/* **************

    Reviews list

*************** */
export function externalUsersReviewsGet(req, res) {
  let viewData;

  const appData = generalData.megaDataReviews;

  viewData = {
    appData,
  };
  return res.render('prototypes/external-users/reviews', viewData);
}

export function externalUsersReviewsPost(req, res) {
  const {} = req.body;
  let redirectURL = '';
  console.log();
  return res.redirect(redirectURL);
}
