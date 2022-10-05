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
exports.mpManageApplicationsAssignApplicationsGet = mpManageApplicationsAssignApplicationsGet;
exports.mpManageApplicationsAssignApplicationsPost = mpManageApplicationsAssignApplicationsPost;
exports.mpManageApplicationsReviewAssignedApplicationsGet = mpManageApplicationsReviewAssignedApplicationsGet;
exports.mpManageApplicationsReviewAssignedApplicationsPost = mpManageApplicationsReviewAssignedApplicationsPost;
exports.mpManageRolesGet = mpManageRolesGet;
exports.mpManageRolesPost = mpManageRolesPost;
exports.mpManageRolesManageConflictsGet = mpManageRolesManageConflictsGet;
exports.mpManageRolesManageConflictsPost = mpManageRolesManageConflictsPost;
exports.mpManageRolesNameTheRolesGet = mpManageRolesNameTheRolesGet;
exports.mpManageRolesNameTheRolesPost = mpManageRolesNameTheRolesPost;
exports.mpManageRolesAssignTheRolesGet = mpManageRolesAssignTheRolesGet;
exports.mpManageRolesAssignTheRolesPost = mpManageRolesAssignTheRolesPost;
exports.mpManageRolesReviewPanelistsGet = mpManageRolesReviewPanelistsGet;
exports.mpManageRolesReviewPanelistsPost = mpManageRolesReviewPanelistsPost;
exports.mpManageMembersGet = mpManageMembersGet;
exports.mpManageMembersPost = mpManageMembersPost;
exports.mpManageMembersManageMembersGet = mpManageMembersManageMembersGet;
exports.mpManageMembersManageMembersPost = mpManageMembersManageMembersPost;
exports.mpManageMembersAddMemberGet = mpManageMembersAddMemberGet;
exports.mpManageMembersAddMemberPost = mpManageMembersAddMemberPost;
let generalData = require('./data');
let genericFunctions = require('./generic');

const prototypeData = {
  userName: 'Winifred Bobbins',
  awardName: 'AWA184: Environmental research grants 2022',
  currentEndDate: '30 October 2023',
  panelName: 'PAN414: Inform design of cross-council digital research environments',
  showExternalNav: ''
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
/*
*  manage-applications/assign-applications
* */

function mpManageApplicationsAssignApplicationsGet(req, res) {
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

  return res.render('prototypes/manage-panel/manage-applications/assign-applications', viewData);
}

function mpManageApplicationsAssignApplicationsPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/manage-panel/panel-dashboard';
  return res.redirect(targetURL);
}

/*
*  manage-applications/review-assigned-applications
* */
function mpManageApplicationsReviewAssignedApplicationsGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/manage-panel/manage-applications/review-assigned-applications', viewData);
}

function mpManageApplicationsReviewAssignedApplicationsPost(req, res) {
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
/*
*   manage-roles/manage-conflicts
* */
function mpManageRolesManageConflictsGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/manage-panel/manage-roles/manage-conflicts', viewData);
}

function mpManageRolesManageConflictsPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/manage-panel/panel-dashboard';
  return res.redirect(targetURL);
}

/*
*   manage-roles/name-the-roles
* */
function mpManageRolesNameTheRolesGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/manage-panel/manage-roles/name-the-roles', viewData);
}

function mpManageRolesNameTheRolesPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/manage-panel/panel-dashboard';
  return res.redirect(targetURL);
}
/*
*   manage-roles/assign-the-roles
* */
function mpManageRolesAssignTheRolesGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/manage-panel/manage-roles/assign-the-roles', viewData);
}

function mpManageRolesAssignTheRolesPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/manage-panel/panel-dashboard';
  return res.redirect(targetURL);
}
/*
*   manage-roles/review-panelists
* */
function mpManageRolesReviewPanelistsGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/manage-panel/manage-roles/review-panelists', viewData);
}

function mpManageRolesReviewPanelistsPost(req, res) {
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
*   manage-members/manage-members
* */

function mpManageMembersManageMembersGet(req, res) {
  let viewData;

  const allPanelists = generalData.panelists;
  console.log(allPanelists);

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
    allPanelists
  };

  return res.render('prototypes/manage-panel/manage-members/manage-members', viewData);
}

function mpManageMembersManageMembersPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/manage-panel/panel-dashboard';
  return res.redirect(targetURL);
}

/*
*   manage-members/add-member
* */

function mpManageMembersAddMemberGet(req, res) {
  let viewData;

  const allPanelists = generalData.panelists;
  console.log(allPanelists);

  const allOrgs = generalData.allOrgs2;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
    allPanelists,
    allOrgs
  };

  return res.render('prototypes/manage-panel/manage-members/add-member', viewData);
}

function mpManageMembersAddMemberPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/manage-panel/manage-members/manage-members';
  return res.redirect(targetURL);
}