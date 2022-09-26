'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mpIndexGet = mpIndexGet;
exports.mpIndexPost = mpIndexPost;
exports.mpPanelDashboardGet = mpPanelDashboardGet;
exports.mpPanelDashboardPost = mpPanelDashboardPost;
exports.mpManageApplicationsGet = mpManageApplicationsGet;
exports.mpManageApplicationsPost = mpManageApplicationsPost;
exports.mpManageMembersGet = mpManageMembersGet;
exports.mpManageMembersPost = mpManageMembersPost;
exports.mpManageMembersManageConflictsGet = mpManageMembersManageConflictsGet;
exports.mpManageMembersManageConflictsPost = mpManageMembersManageConflictsPost;
exports.mpManageMembersNameTheRolesGet = mpManageMembersNameTheRolesGet;
exports.mpManageMembersNameTheRolesPost = mpManageMembersNameTheRolesPost;
exports.mpManageMembersAssignTheRolesGet = mpManageMembersAssignTheRolesGet;
exports.mpManageMembersAssignTheRolesPost = mpManageMembersAssignTheRolesPost;
exports.mpManageMembersReviewPanelistsGet = mpManageMembersReviewPanelistsGet;
exports.mpManageMembersReviewPanelistsPost = mpManageMembersReviewPanelistsPost;
exports.mpManageRolesGet = mpManageRolesGet;
exports.mpManageRolesPost = mpManageRolesPost;
let generalData = require('./data');
let genericFunctions = require('./generic');

const prototypeData = {
  userName: 'Winifred Bobbins',
  awardName: 'AWA184: Environmental research grants 2022',
  currentEndDate: '30 October 2023',
  panelName: 'PAN414: Inform design of cross-council digital research environments'
};

let savedSession;

// ************************************************************************
//
//        index
//
// ************************************************************************
function mpIndexGet(req, res) {
  let viewData;

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
  }

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/manage-panel/index', viewData);
}

function mpIndexPost(req, res) {
  const {} = req.body;

  req.session.organisation = 'University of Wales';
  req.session.userName = 'Linda Squires';

  let targetURL;
  targetURL = '/prototypes/manage-panel/panel-dashboard';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        panel dashboard
//
// ************************************************************************
function mpPanelDashboardGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/manage-panel/panel-dashboard', viewData);
}

function mpPanelDashboardPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/manage-panel/panel-dashboard';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        manage applications
//
// ************************************************************************
function mpManageApplicationsGet(req, res) {
  let viewData;

  const appData = generalData.megaDataReviews;
  const oppData = generalData.megaDataAwards;

  let allData = req.session;
  viewData = {
    allData,
    appData,
    prototypeData,
    oppData
  };

  return res.render('prototypes/manage-panel/manage-applications', viewData);
}

function mpManageApplicationsPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/manage-panel/panel-dashboard';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        manage members
//
// ************************************************************************
function mpManageMembersGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/manage-panel/manage-members', viewData);
}

function mpManageMembersPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/manage-panel/panel-dashboard';
  return res.redirect(targetURL);
}

/*
*   manage-applications/manage-conflicts
* */
function mpManageMembersManageConflictsGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/manage-panel/manage-members/manage-conflicts', viewData);
}

function mpManageMembersManageConflictsPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/manage-panel/panel-dashboard';
  return res.redirect(targetURL);
}

/*
*   manage-applications/name-the-roles
* */
function mpManageMembersNameTheRolesGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/manage-panel/manage-members/name-the-roles', viewData);
}

function mpManageMembersNameTheRolesPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/manage-panel/panel-dashboard';
  return res.redirect(targetURL);
}
/*
*   manage-applications/assign-the-roles
* */
function mpManageMembersAssignTheRolesGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/manage-panel/manage-members/assign-the-roles', viewData);
}

function mpManageMembersAssignTheRolesPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/manage-panel/panel-dashboard';
  return res.redirect(targetURL);
}
/*
*   manage-applications/review-panelists
* */
function mpManageMembersReviewPanelistsGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/manage-panel/manage-members/review-panelists', viewData);
}

function mpManageMembersReviewPanelistsPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/manage-panel/panel-dashboard';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        manage roles
//
// ************************************************************************
function mpManageRolesGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/manage-panel/manage-roles', viewData);
}

function mpManageRolesPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/manage-panel/panel-dashboard';
  return res.redirect(targetURL);
}