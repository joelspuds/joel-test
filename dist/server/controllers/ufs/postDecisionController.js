'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pdIndexGet = pdIndexGet;
exports.pdIndexPost = pdIndexPost;
exports.pdHomeGet = pdHomeGet;
exports.pdHomePost = pdHomePost;
exports.pdAwardsGet = pdAwardsGet;
exports.pdAwardsPost = pdAwardsPost;
let generalData = require('./data');
let genericFunctions = require('./generic');

// ************************************************************************
//
//        index
//
// ************************************************************************
function pdIndexGet(req, res) {
  let viewData;

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
  }

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/index', viewData);
}

function pdIndexPost(req, res) {
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
function pdHomeGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/home', viewData);
}

function pdHomePost(req, res) {
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
function pdAwardsGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = { allData };

  return res.render('prototypes/post-decision/awards', viewData);
}

function pdAwardsPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/post-decision/home';
  return res.redirect(targetURL);
}