let generalData = require('./data');
let genericFunctions = require('./generic');

const prototypeData = {
  userName: 'Winifred Bobbins',
  awardName: 'AWA184: Environmental research grants 2022',
  currentEndDate: '30 October 2023',
  panelName: 'PAN414: Inform design of cross-council digital research environments',
  showExternalNav: '',
};

let savedSession;

// ************************************************************************
//
//        index
//
// ************************************************************************
export function mpIndexGet(req, res) {
  let viewData;

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
  }

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };

  return res.render('prototypes/manage-panel/index', viewData);
}

export function mpIndexPost(req, res) {
  const { prototypeConfig } = req.body;

  req.session.prototypeConfig = prototypeConfig;
  console.log(req.session.prototypeConfig);

  if (prototypeConfig === 'multiple') {
    req.session.rolesJourneyLabel = 'Select the roles';
  } else {
    req.session.rolesJourneyLabel = 'Name the roles';
  }

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
export function mpPanelDashboardGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };

  return res.render('prototypes/manage-panel/panel-dashboard', viewData);
}

export function mpPanelDashboardPost(req, res) {
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
export function mpManageApplicationsGet(req, res) {
  let viewData;

  const appData = generalData.megaDataReviews;
  const oppData = generalData.megaDataAwards;

  let allData = req.session;
  viewData = {
    allData,
    appData,
    prototypeData,
    oppData,
  };

  return res.render('prototypes/manage-panel/manage-applications', viewData);
}

export function mpManageApplicationsPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/manage-panel/panel-dashboard';
  return res.redirect(targetURL);
}
/*
*  manage-applications/assign-applications
* */

export function mpManageApplicationsAssignApplicationsGet(req, res) {
  let viewData;

  const appData = generalData.megaDataReviews;
  const oppData = generalData.megaDataAwards;

  let allData = req.session;
  viewData = {
    allData,
    appData,
    prototypeData,
    oppData,
  };

  return res.render('prototypes/manage-panel/manage-applications/assign-applications', viewData);
}

export function mpManageApplicationsAssignApplicationsPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/manage-panel/panel-dashboard';
  return res.redirect(targetURL);
}

/*
*  manage-applications/review-assigned-applications
* */
export function mpManageApplicationsReviewAssignedApplicationsGet(req, res) {
  let viewData;

  const appData = generalData.megaDataReviews;
  const oppData = generalData.megaDataAwards;

  let allData = req.session;
  viewData = {
    allData,
    appData,
    prototypeData,
    oppData,
  };

  return res.render('prototypes/manage-panel/manage-applications/review-assigned-applications', viewData);
}

export function mpManageApplicationsReviewAssignedApplicationsPost(req, res) {
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
export function mpManageRolesGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };

  return res.render('prototypes/manage-panel/manage-roles', viewData);
}

export function mpManageRolesPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/manage-panel/panel-dashboard';
  return res.redirect(targetURL);
}
/*
*   manage-roles/manage-conflicts
* */
export function mpManageRolesManageConflictsGet(req, res) {
  let viewData;

  const appData = generalData.megaDataReviews;
  const oppData = generalData.megaDataAwards;

  let allData = req.session;
  viewData = {
    allData,
    appData,
    prototypeData,
    oppData,
  };

  return res.render('prototypes/manage-panel/manage-roles/manage-conflicts', viewData);
}

export function mpManageRolesManageConflictsPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/manage-panel/panel-dashboard';
  return res.redirect(targetURL);
}

/*
*   manage-roles/name-the-roles
* */
export function mpManageRolesNameTheRolesGet(req, res) {
  let viewData;

  let nameTheRolesUpdated = req.session.nameTheRolesUpdated;
  req.session.nameTheRolesUpdated = null;

  let prototypeConfig = req.session.prototypeConfig;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
    nameTheRolesUpdated,
  };

  if (prototypeConfig === 'multiple') {
    return res.render('prototypes/manage-panel/manage-roles/select-the-roles', viewData);
  } else {
    return res.render('prototypes/manage-panel/manage-roles/name-the-roles', viewData);
  }
}

export function mpManageRolesNameTheRolesPost(req, res) {
  const {} = req.body;

  req.session.nameTheRolesUpdated = true;

  let targetURL;
  targetURL = '/prototypes/manage-panel/manage-roles/name-the-roles';
  return res.redirect(targetURL);
}
/*
*   manage-roles/assign-the-roles
* */
export function mpManageRolesAssignTheRolesGet(req, res) {
  let viewData;

  const allPanelists = generalData.panelists;
  // console.log(allPanelists);

  let assignedRolesHasBeenUpdated = req.session.assignedRolesHasBeenUpdated;

  const appData = generalData.megaDataReviews;
  const oppData = generalData.megaDataAwards;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
    allPanelists,
    assignedRolesHasBeenUpdated,
    appData,
    oppData,
  };

  return res.render('prototypes/manage-panel/manage-roles/assign-the-roles', viewData);
}

export function mpManageRolesAssignTheRolesPost(req, res) {
  const {} = req.body;

  let formStuff = req.body;
  for (const [key, value] of Object.entries(formStuff)) {
    req.session[`${key}`] = `${value}`;
  }

  console.log(req.body);

  for (let i = 0; i < 20; i++) {
    if (req.session['select' + i + '1'] !== '-' || req.session['select' + i + '2'] !== '-' || req.session['select' + i + '3'] !== '-') {
      req.session['select' + i + 'HasData'] = true;
    } else {
      req.session['select' + i + 'HasData'] = false;
    }
  }

  req.session.assignedRolesHasBeenUpdated = true;

  console.log(req.session);

  let targetURL;
  targetURL = '/prototypes/manage-panel/manage-roles/assign-the-roles';
  return res.redirect(targetURL);
}
/*
*   manage-roles/review-panelists
* */
export function mpManageRolesReviewPanelistsGet(req, res) {
  let viewData;

  // const appData = generalData.megaDataReviews;
  // const oppData = generalData.megaDataAwards;

  const allPanelists = generalData.panelists;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
    allPanelists,
  };

  return res.render('prototypes/manage-panel/manage-roles/review-panelists', viewData);
}

export function mpManageRolesReviewPanelistsPost(req, res) {
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

export function mpManageMembersGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };

  return res.render('prototypes/manage-panel/manage-members', viewData);
}

export function mpManageMembersPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/manage-panel/panel-dashboard';
  return res.redirect(targetURL);
}
/*
*   manage-members/manage-members
* */

export function mpManageMembersManageMembersGet(req, res) {
  let viewData;

  const allPanelists = generalData.panelists;
  console.log(allPanelists);

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
    allPanelists,
  };

  return res.render('prototypes/manage-panel/manage-members/manage-members', viewData);
}

export function mpManageMembersManageMembersPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/manage-panel/panel-dashboard';
  return res.redirect(targetURL);
}

/*
*   manage-members/add-member
* */

export function mpManageMembersAddMemberGet(req, res) {
  let viewData;

  const allPanelists = generalData.panelists;
  console.log(allPanelists);

  const allOrgs = generalData.allOrgs2;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
    allPanelists,
    allOrgs,
  };

  return res.render('prototypes/manage-panel/manage-members/add-member', viewData);
}

export function mpManageMembersAddMemberPost(req, res) {
  const {} = req.body;

  let formStuff = req.body;
  for (const [key, value] of Object.entries(formStuff)) {
    // console.log(`${key} ${value}`);
    req.session[`${key}`] = `${value}`;
  }

  req.session.addedNewMember = true;

  let targetURL;
  targetURL = '/prototypes/manage-panel/manage-members/manage-members';
  return res.redirect(targetURL);
}
