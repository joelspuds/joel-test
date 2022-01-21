'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.panelIndexGet = panelIndexGet;
exports.panelIndexPost = panelIndexPost;
exports.panelExternalEmailGet = panelExternalEmailGet;
exports.panelExternalEmailPost = panelExternalEmailPost;
exports.panelHomeGet = panelHomeGet;
exports.panelHomePost = panelHomePost;
exports.panelPanelsGet = panelPanelsGet;
exports.panelPanelsPost = panelPanelsPost;
let generalData = require('./data');
let genericFunctions = require('./generic');
let panelSessionData = [];

// ************************************************************************
//
//        panel index
//
// ************************************************************************
function panelIndexGet(req, res) {
  let viewData;

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
    // panelSessionData = null;
  }

  viewData = {};

  return res.render('prototypes/panel/index', viewData);
}

function panelIndexPost(req, res) {
  const {} = req.body;

  req.session.journeyConfig = completeConfig;

  return res.redirect('/prototypes/orgs3/start');
}

// ************************************************************************
//
//        external email
//
// ************************************************************************
function panelExternalEmailGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/panel/external-email', viewData);
}

function panelExternalEmailPost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/panel/home');
}

// ************************************************************************
//
//        home
//
// ************************************************************************
function panelHomeGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/panel/home', viewData);
}

function panelHomePost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/panel/home');
}

// ************************************************************************
//
//        panels
//
// ************************************************************************
function panelPanelsGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/panel/home', viewData);
}

function panelPanelsPost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/panel/home');
}