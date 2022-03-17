// import {megaDataApplications} from "./data";

let generalData = require('./data');
let genericFunctions = require('./generic');

// ************************************************************************
//
//        index
//
// ************************************************************************
export function pdIndexGet(req, res) {
  let viewData;

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
  }

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/index', viewData);
}

export function pdIndexPost(req, res) {
  const {} = req.body;

  req.session.organisation = 'Fulchester University';
  req.session.userName = 'Dr Randy Gartner';

  let targetURL;
  targetURL = '/prototypes/post-decision/email';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        home
//
// ************************************************************************
export function pdHomeGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/home', viewData);
}

export function pdHomePost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/post-decision/home';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        awards
//
// ************************************************************************
export function pdAwardsGet(req, res) {
  let viewData;

  let megaDataApplications = generalData.megaDataApplications;

  if (!req.session.megaDataApplications) {
    req.session.megaDataApplications = megaDataApplications;
  }

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/awards', viewData);
}

export function pdAwardsPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/post-decision/home';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        award start
//
// ************************************************************************
export function pdAwardStartGet(req, res) {
  let viewData;

  let megaDataApplications = generalData.megaDataApplications;

  if (!req.session.megaDataApplications) {
    req.session.megaDataApplications = megaDataApplications;
  }

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/award-start', viewData);
}

export function pdAwardStartPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/post-decision/home';
  return res.redirect(targetURL);
}
