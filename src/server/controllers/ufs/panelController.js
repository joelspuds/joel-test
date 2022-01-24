let generalData = require('./data');
let genericFunctions = require('./generic');
let panelSessionData = [];

// ************************************************************************
//
//        config
//
// ************************************************************************
export function panelConfigGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/panel/config', viewData);
}

export function panelConfigPost(req, res) {
  const { panelConfig } = req.body;

  panelSessionData.journeyTYpe = panelConfig;
  // req.session.firstName = firstName;

  return res.redirect('/prototypes/panel/external-email');
}

// ************************************************************************
//
//        panel index
//
// ************************************************************************
export function panelIndexGet(req, res) {
  let viewData;

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
    // panelSessionData = null;
  }

  viewData = {};

  return res.render('prototypes/panel/index', viewData);
}

export function panelIndexPost(req, res) {
  const {} = req.body;

  req.session.journeyConfig = complpanelConfigeteConfig;

  return res.redirect('/prototypes/panel/email');
}

// ************************************************************************
//
//        external email
//
// ************************************************************************
export function panelExternalEmailGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/panel/external-email', viewData);
}

export function panelExternalEmailPost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/panel/home');
}

// ************************************************************************
//
//        home
//
// ************************************************************************
export function panelHomeGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/panel/home', viewData);
}

export function panelHomePost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/panel/home');
}

// ************************************************************************
//
//        panels
//
// ************************************************************************
export function panelPanelsGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/panel/home', viewData);
}

export function panelPanelsPost(req, res) {
  const {} = req.body;

  // req.session.firstName = firstName;

  return res.redirect('/prototypes/panel/home');
}
