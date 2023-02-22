'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trcConfigGet = trcConfigGet;
exports.trcConfigPost = trcConfigPost;
exports.trcIndexGet = trcIndexGet;
exports.trcIndexPost = trcIndexPost;
exports.trcHomeGet = trcHomeGet;
exports.trcHomePost = trcHomePost;
exports.trcApplicationsGet = trcApplicationsGet;
exports.trcApplicationsPost = trcApplicationsPost;
exports.trcApplicationOverviewGet = trcApplicationOverviewGet;
exports.trcApplicationOverviewPost = trcApplicationOverviewPost;
exports.trcSubmissionConfirmGet = trcSubmissionConfirmGet;
exports.trcSubmissionConfirmPost = trcSubmissionConfirmPost;
exports.trcSubmittedGet = trcSubmittedGet;
exports.trcTeamGet = trcTeamGet;
exports.trcTeamPost = trcTeamPost;
exports.trcSelectRoleTypeGet = trcSelectRoleTypeGet;
exports.trcSelectRoleTypePost = trcSelectRoleTypePost;
exports.trcSelectRoleGet = trcSelectRoleGet;
exports.trcSelectRolePost = trcSelectRolePost;
exports.trcOrganisationSearchGet = trcOrganisationSearchGet;
exports.trcOrganisationSearchPost = trcOrganisationSearchPost;
exports.trcAddTeamMemberGet = trcAddTeamMemberGet;
exports.trcAddTeamMemberPost = trcAddTeamMemberPost;
exports.trcAddTeamMemberAltGet = trcAddTeamMemberAltGet;
exports.trcAddTeamMemberAltPost = trcAddTeamMemberAltPost;
exports.trcTeamMemberDetailsGet = trcTeamMemberDetailsGet;
exports.trcTeamMemberDetailsPost = trcTeamMemberDetailsPost;
exports.trcResourcesAndCostsGet = trcResourcesAndCostsGet;
exports.trcResourcesAndCostsPost = trcResourcesAndCostsPost;
exports.trcOrganisationCostsGet = trcOrganisationCostsGet;
exports.trcOrganisationCostsPost = trcOrganisationCostsPost;
let generalData = require('./data');
let genericFunctions = require('./generic');
let limitedOrgs = require('./orgs400');
// let limitedOrgs2 = require('./orgs400asArray');

const prototypeData = {
  userName: 'Naimh Murphey',
  awardName: 'AWA184: Environmental research grants 2022',
  organisation: 'University of Wales',
  currentEndDate: '30 October 2023'
};

let orgCosts = [{
  name: '',
  totalFEC: 0,
  contribution: 0,
  fundingAppliedFor: 0,
  daMemberFullCosts_1: '',
  daCostAppliedFor_1: '',
  daMemberFullCosts_2: '',
  daCostAppliedFor_2: '',
  daMemberFullCosts_3: '',
  daCostAppliedFor_3: '',
  diMemberFullCosts_1: '',
  diCostAppliedFor_1: '',
  diMemberFullCosts_2: '',
  diCostAppliedFor_2: '',
  diMemberFullCosts_3: '',
  diCostAppliedFor_3: '',
  exMemberFullCosts_1: '',
  exCostAppliedFor_1: '',
  exMemberFullCosts_2: '',
  exCostAppliedFor_2: '',
  exMemberFullCosts_3: '',
  exCostAppliedFor_3: '',
  daStaff: '',
  daStaffAppliedFor: '',
  daEstates: '',
  daEstatesAppliedFor: '',
  daOther: '',
  daOtherAppliedFor: '',
  diStaff: '',
  diStaffAppliedFor: '',
  diEquipment: '',
  diEquipmentAppliedFor: '',
  diTravel: '',
  diTravelAppliedFor: '',
  diOther: '',
  diOtherAppliedFor: '',
  indirectCosts: '',
  indirectCostsAppliedFor: '',
  exStaff: '',
  exStaffAppliedFor: '',
  exEquipment: '',
  exEquipmentAppliedFor: '',
  exTravel: '',
  exTravelAppliedFor: '',
  exOther: '',
  exOtherAppliedFor: ''
}, {
  name: '',
  totalFEC: 0,
  contribution: 0,
  fundingAppliedFor: 0,
  daMemberFullCosts_1: '',
  daCostAppliedFor_1: '',
  daMemberFullCosts_2: '',
  daCostAppliedFor_2: '',
  daMemberFullCosts_3: '',
  daCostAppliedFor_3: '',
  diMemberFullCosts_1: '',
  diCostAppliedFor_1: '',
  diMemberFullCosts_2: '',
  diCostAppliedFor_2: '',
  diMemberFullCosts_3: '',
  diCostAppliedFor_3: '',
  exMemberFullCosts_1: '',
  exCostAppliedFor_1: '',
  exMemberFullCosts_2: '',
  exCostAppliedFor_2: '',
  exMemberFullCosts_3: '',
  exCostAppliedFor_3: '',
  daStaff: '',
  daStaffAppliedFor: '',
  daEstates: '',
  daEstatesAppliedFor: '',
  daOther: '',
  daOtherAppliedFor: '',
  diStaff: '',
  diStaffAppliedFor: '',
  diEquipment: '',
  diEquipmentAppliedFor: '',
  diTravel: '',
  diTravelAppliedFor: '',
  diOther: '',
  diOtherAppliedFor: '',
  indirectCosts: '',
  indirectCostsAppliedFor: '',
  exStaff: '',
  exStaffAppliedFor: '',
  exEquipment: '',
  exEquipmentAppliedFor: '',
  exTravel: '',
  exTravelAppliedFor: '',
  exOther: '',
  exOtherAppliedFor: ''
}, {
  name: '',
  totalFEC: 0,
  contribution: 0,
  fundingAppliedFor: 0,
  daMemberFullCosts_1: '',
  daCostAppliedFor_1: '',
  daMemberFullCosts_2: '',
  daCostAppliedFor_2: '',
  daMemberFullCosts_3: '',
  daCostAppliedFor_3: '',
  diMemberFullCosts_1: '',
  diCostAppliedFor_1: '',
  diMemberFullCosts_2: '',
  diCostAppliedFor_2: '',
  diMemberFullCosts_3: '',
  diCostAppliedFor_3: '',
  exMemberFullCosts_1: '',
  exCostAppliedFor_1: '',
  exMemberFullCosts_2: '',
  exCostAppliedFor_2: '',
  exMemberFullCosts_3: '',
  exCostAppliedFor_3: '',
  daStaff: '',
  daStaffAppliedFor: '',
  daEstates: '',
  daEstatesAppliedFor: '',
  daOther: '',
  daOtherAppliedFor: '',
  diStaff: '',
  diStaffAppliedFor: '',
  diEquipment: '',
  diEquipmentAppliedFor: '',
  diTravel: '',
  diTravelAppliedFor: '',
  diOther: '',
  diOtherAppliedFor: '',
  indirectCosts: '',
  indirectCostsAppliedFor: '',
  exStaff: '',
  exStaffAppliedFor: '',
  exEquipment: '',
  exEquipmentAppliedFor: '',
  exTravel: '',
  exTravelAppliedFor: '',
  exOther: '',
  exOtherAppliedFor: ''
}];

let savedSession;

let teamData = require('./team-data');
let allTeamMembers2;
let originalNumberOfMembers;

allTeamMembers2 = teamData.teamDataEmpty;
originalNumberOfMembers = 1;

/*allTeamMembers2 = teamData.teamDataFull;
originalNumberOfMembers = 5;*/

let configOptions;

// console.log('originalNumberOfMembers = ' + originalNumberOfMembers);

// ************************************************************************
//
//        config
//
// ************************************************************************
function trcConfigGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/team-resources-costs/config', viewData);
}

function trcConfigPost(req, res) {
  const { config } = req.body;
  //minimal & loads

  configOptions = config;

  let targetURL;
  targetURL = '/prototypes/team-resources-costs/?clearSession=true';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        index
//
// ************************************************************************
function trcIndexGet(req, res) {
  let viewData;

  /*if (configOptions === 'loads') {
    allTeamMembers2 = teamData.teamDataFull;
    originalNumberOfMembers = 5;
  } else {
    allTeamMembers2 = teamData.teamDataEmpty;
    originalNumberOfMembers = 1;
  }*/

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    savedSession = null;
    req.session.destroy();
    let targetURL = '/prototypes/team-resources-costs/';
    console.log('allTeamMembers2 = 👇👇👇👇👇👇');
    console.log(allTeamMembers2);

    // fix player one
    allTeamMembers2[0].role = '';
    allTeamMembers2[0].timeSpent = '';
    allTeamMembers2[0].averageHours = '';

    for (let i = originalNumberOfMembers; i < allTeamMembers2.length; i++) {
      allTeamMembers2[i].firstName = '';
      allTeamMembers2[i].lastName = '';
      allTeamMembers2[i].role = '';
      allTeamMembers2[i].roleType = '';
      allTeamMembers2[i].organisation = '';
      allTeamMembers2[i].email = '';
      allTeamMembers2[i].timeSpent = '';
      allTeamMembers2[i].averageHours = '';
      allTeamMembers2[i].startDay = '';
      allTeamMembers2[i].startMonth = '';
      allTeamMembers2[i].startYear = '';
      allTeamMembers2[i].endDay = '';
      allTeamMembers2[i].endMonth = '';
      allTeamMembers2[i].endYear = '';
      allTeamMembers2[i].isComplete = 'false';
    }
    return res.redirect(targetURL);
  }

  /*allTeamMembers2 = teamData.teamDataFull;
  originalNumberOfMembers = 5;*/

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/team-resources-costs/index', viewData);
}

function trcIndexPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/team-resources-costs';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        home
//
// ************************************************************************
function trcHomeGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/team-resources-costs/home', viewData);
}

function trcHomePost(req, res) {
  const {} = req.body;

  req.session.organisation = 'University of Wales';
  req.session.userName = 'Linda Squires';

  let targetURL;
  targetURL = '/prototypes/team-resources-costs/home';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        applications
//
// ************************************************************************
function trcApplicationsGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/team-resources-costs/applications', viewData);
}

function trcApplicationsPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/team-resources-costs/applications';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        application overview
//
// ************************************************************************
function trcApplicationOverviewGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/team-resources-costs/application-overview', viewData);
}

function trcApplicationOverviewPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/team-resources-costs/submission-confirm';
  return res.redirect(targetURL);
}
// ************************************************************************
//
//        submission confirm
//
// ************************************************************************
function trcSubmissionConfirmGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/team-resources-costs/submission-confirm', viewData);
}

function trcSubmissionConfirmPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/team-resources-costs/submitted';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        submitted
//
// ************************************************************************
function trcSubmittedGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/team-resources-costs/submitted', viewData);
}

// ************************************************************************
//
//        team
//
// ************************************************************************
function trcTeamGet(req, res) {
  let viewData;

  console.log(allTeamMembers2);

  /* DELETE TEAM MEMBER */
  //team?action=remove&teamMemberID={{ item.id }}
  let action = req.param('action');
  let teamMemberID = req.param('teamMemberID');

  let tempFirstNameNotification;
  let tempLastNameNotification;
  let teamMemberDeleted;

  if (action === 'remove' && parseInt(teamMemberID) >= 1) {
    console.log('delete person');
    for (let h = 0; h < allTeamMembers2.length; h++) {
      if (allTeamMembers2[h].id === teamMemberID) {
        tempFirstNameNotification = allTeamMembers2[h].firstName;
        tempLastNameNotification = allTeamMembers2[h].lastName;
        allTeamMembers2[h].firstName = '';
        allTeamMembers2[h].lastName = '';
        allTeamMembers2[h].role = '';
        allTeamMembers2[h].roleType = '';
        allTeamMembers2[h].organisation = '';
        allTeamMembers2[h].email = '';
        allTeamMembers2[h].timeSpent = '';
        allTeamMembers2[h].averageHours = '';
        allTeamMembers2[h].startDay = '';
        allTeamMembers2[h].startMonth = '';
        allTeamMembers2[h].startYear = '';
        allTeamMembers2[h].endDay = '';
        allTeamMembers2[h].endMonth = '';
        allTeamMembers2[h].endYear = '';
        allTeamMembers2[h].isComplete = false;
        teamMemberDeleted = true;
      }
    }
  }

  let daCount = 0;
  let diCount = 0;
  let exCount = 0;

  for (let i = 0; i < allTeamMembers2.length; i++) {
    if (allTeamMembers2[i].roleType === 'Directly allocated') {
      daCount = daCount + 1;
    }
    if (allTeamMembers2[i].roleType === 'Directly incurred') {
      diCount = diCount + 1;
    }
    if (allTeamMembers2[i].roleType === 'Exception') {
      exCount = exCount + 1;
    }
  }

  req.session.daCount = daCount;
  req.session.diCount = diCount;
  req.session.exCount = exCount;

  console.log('daCount = ' + daCount + ' diCount = ' + diCount + ' exCount = ' + exCount);

  let allData = req.session;
  console.log(allData);
  console.log(allTeamMembers2);

  viewData = {
    allData,
    prototypeData,
    allTeamMembers2,
    teamMemberDeleted,
    tempFirstNameNotification,
    tempLastNameNotification
  };

  teamMemberDeleted = null;
  tempFirstNameNotification = null;
  tempLastNameNotification = null;

  /* clear stuff from add/edit if cancelled */
  req.session.tempRole = null;
  req.session.tempRoleType = null;
  req.session.selectedOrganisation = null;
  req.session.finalNumber = null;
  req.session.resultArray = null;
  req.session.searchTerm = null;
  req.session.searchFail = null;
  req.session.newMemberAdded = true;
  req.session.action = null;
  req.session.teamMemberID = null;
  req.session.firstName = null;
  req.session.lastName = null;
  req.session.email = null;
  req.session.tempStartDay = null;
  req.session.tempStartMonth = null;
  req.session.tempStartYear = null;
  req.session.tempEndDay = null;
  req.session.tempEndMonth = null;
  req.session.tempEndYear = null;

  return res.render('prototypes/team-resources-costs/team', viewData);
}

function trcTeamPost(req, res) {
  const { isComplete } = req.body;

  req.session.teamMarkAsComplete = isComplete;
  let targetURL;
  targetURL = '/prototypes/team-resources-costs/application-overview';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        select role type
//
// ************************************************************************
function trcSelectRoleTypeGet(req, res) {
  let viewData;

  /* Edit TEAM MEMBER */
  //team?action=edit&teamMemberID={{ item.id }}
  let action = req.param('action');
  let teamMemberID = req.param('teamMemberID');
  let teamMemberType = req.param('teamMemberType');

  if (action === 'edit' && parseInt(teamMemberID) >= 1) {
    // console.log('delete person');
    for (let j = 0; j < allTeamMembers2.length; j++) {
      if (allTeamMembers2[j].id === teamMemberID) {
        req.session.action = action;
        req.session.teamMemberType = teamMemberType;
        req.session.teamMemberID = teamMemberID;
        req.session.firstName = allTeamMembers2[j].firstName;
        req.session.lastName = allTeamMembers2[j].lastName;
        req.session.selectedOrganisation = allTeamMembers2[j].organisation;
        req.session.tempRole = allTeamMembers2[j].role;
        req.session.tempRoleType = allTeamMembers2[j].roleType;
        req.session.email = allTeamMembers2[j].email;
        req.session.timeSpent = allTeamMembers2[j].timeSpent;
        req.session.averageHours = allTeamMembers2[j].averageHours;
        req.session.tempStartDay = allTeamMembers2[j].startDay;
        req.session.tempStartMonth = allTeamMembers2[j].startMonth;
        req.session.tempStartYear = allTeamMembers2[j].startYear;
        req.session.tempEndDay = allTeamMembers2[j].endDay;
        req.session.tempEndMonth = allTeamMembers2[j].endMonth;
        req.session.tempEndYear = allTeamMembers2[j].endYear;
        req.session.isComplete = allTeamMembers2[j].isComplete;
      }
    }
  }

  req.session.teamMemberDeleted = null;
  req.session.tempFirstNameNotification = null;
  req.session.tempLastNameNotification = null;

  let allData = req.session;
  console.log(allData);
  console.log(allTeamMembers2);
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/team-resources-costs/select-role-type', viewData);
}

function trcSelectRoleTypePost(req, res) {
  const { roleType } = req.body;

  req.session.tempRoleType = roleType;

  console.log(req.session);
  console.log(allTeamMembers2);

  let targetURL;
  targetURL = '/prototypes/team-resources-costs/select-role';

  /*if (roleType == 'Directly allocated') {
   }*/

  return res.redirect(targetURL);
}

// ************************************************************************
//
//        select role
//
// ************************************************************************
function trcSelectRoleGet(req, res) {
  let viewData;

  console.log(req.session);
  console.log(allTeamMembers2);
  let allData = req.session;

  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/team-resources-costs/select-role', viewData);
}

function trcSelectRolePost(req, res) {
  const { roles } = req.body;

  req.session.tempRole = roles;

  let targetURL;

  console.log(req.session);
  console.log(allTeamMembers2);

  if (req.session.action === 'edit' && req.session.tempRoleType === 'Directly allocated') {
    targetURL = '/prototypes/team-resources-costs/add-team-member';
  } else if (req.session.action === 'edit' && req.session.tempRoleType !== 'Directly allocated') {
    targetURL = '/prototypes/team-resources-costs/add-team-member-alt';
  } else {
    targetURL = '/prototypes/team-resources-costs/organisation-search';
  }

  return res.redirect(targetURL);
}

// ************************************************************************
//
//        organisation search
//
// ************************************************************************
function trcOrganisationSearchGet(req, res) {
  let viewData;

  let allData = req.session;

  console.log(req.session);
  console.log(allTeamMembers2);

  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/team-resources-costs/organisation-search', viewData);
}

function trcOrganisationSearchPost(req, res) {
  const { searchTerm } = req.body;

  req.session.searchTerm = searchTerm;
  // console.log('req.params');
  console.log(req.body.submitSearch);
  let targetURL;

  if (req.body.submitSearch === 'Search') {
    // let motherLoad = limitedOrgs2.limitedOrgList2;
    let motherLoad = limitedOrgs.limitedOrgList;

    let searchTermTemp = searchTerm;
    let resultArray = [];
    let searchFail;
    let finalNumber;

    if (searchTermTemp === ' ' || searchTermTemp === '' || searchTermTemp === null) {
      searchFail = true;
    } else {
      searchFail = false;
      let iterationNumber = 0;
      for (let i = 0; i < motherLoad.length; i++) {
        let tempName = motherLoad[i].n;
        let tempPlace = motherLoad[i].c;
        if (!tempPlace) {
          tempPlace = tempName.split(' ')[0];
          if (tempPlace.toLowerCase() === 'university' || tempPlace.toLowerCase() === 'institute' || tempPlace.toLowerCase() === 'college' || tempPlace.toLowerCase() === 'new' || tempPlace.toLowerCase() === 'north' || tempPlace.toLowerCase() === 'east' || tempPlace.toLowerCase() === 'south' || tempPlace.toLowerCase() === 'west' || tempPlace.toLowerCase() === 'the') {
            tempPlace = '';
          }
        }
        // console.log('tempName = ' + tempName);
        if (tempName.toLowerCase().includes(searchTermTemp.toLowerCase())) {
          resultArray.push({
            n: tempName,
            c: tempPlace
          });
          iterationNumber++;
        }
        finalNumber = iterationNumber;
      }
    }

    // console.log('search term = ' + searchTerm);

    if (resultArray.length === 0) {
      searchFail = true;
    }

    req.session.finalNumber = finalNumber;
    req.session.resultArray = resultArray;
    req.session.searchTerm = searchTerm;
    req.session.searchFail = searchFail;
    targetURL = '/prototypes/team-resources-costs/organisation-search';
  } else {
    req.session.selectedOrganisation = req.body.organisation;

    console.log('req.session.tempRoleType = ' + req.session.tempRoleType);

    if (req.session.tempRoleType === 'Directly allocated') {
      targetURL = '/prototypes/team-resources-costs/add-team-member';
    } else {
      targetURL = '/prototypes/team-resources-costs/add-team-member-alt';
    }
  }

  return res.redirect(targetURL);
}

// ************************************************************************
//
//        add team member
//
// ************************************************************************
function trcAddTeamMemberGet(req, res) {
  let viewData;

  let allData = req.session;
  console.log(allData);

  let limitedOrgList = limitedOrgs.limitedOrgList;
  let action = req.session.action;

  viewData = {
    allData,
    prototypeData,
    limitedOrgList,
    action
  };

  return res.render('prototypes/team-resources-costs/add-team-member', viewData);
}

function trcAddTeamMemberPost(req, res) {
  const { firstName, lastName, timeSpent, averageHours, email } = req.body;

  let action = req.session.action;
  // let teamMemberType = req.session.teamMemberType;
  let teamMemberID = req.session.teamMemberID;

  console.log('action = ' + action);
  console.log('teamMemberID = ' + teamMemberID);

  if (action === 'edit' && parseInt(teamMemberID) >= 1) {
    let arrayPos = parseInt(teamMemberID) - 1;
    allTeamMembers2[arrayPos].firstName = firstName;
    allTeamMembers2[arrayPos].lastName = lastName;
    allTeamMembers2[arrayPos].email = email;
    allTeamMembers2[arrayPos].role = req.session.tempRole;
    allTeamMembers2[arrayPos].roleType = req.session.tempRoleType;
    allTeamMembers2[arrayPos].organisation = req.session.selectedOrganisation;
    allTeamMembers2[arrayPos].timeSpent = timeSpent;
    allTeamMembers2[arrayPos].averageHours = averageHours;

    // clear data
    req.session.tempRole = null;
    req.session.tempRoleType = null;
    req.session.selectedOrganisation = null;
    req.session.action = null;
    req.session.teamMemberID = null;
    req.session.firstName = null;
    req.session.lastName = null;
    req.session.email = null;
  } else {
    for (let i = 0; i < allTeamMembers2.length; i++) {
      if (!allTeamMembers2[i].isComplete) {
        allTeamMembers2[i].firstName = firstName;
        allTeamMembers2[i].lastName = lastName;
        allTeamMembers2[i].email = email;
        allTeamMembers2[i].role = req.session.tempRole;
        allTeamMembers2[i].roleType = req.session.tempRoleType;
        allTeamMembers2[i].organisation = req.session.selectedOrganisation;
        allTeamMembers2[i].timeSpent = timeSpent;
        allTeamMembers2[i].averageHours = averageHours;
        allTeamMembers2[i].isComplete = true;
        break;
      }
    }
  }

  req.session.tempRole = null;
  req.session.tempRoleType = null;
  req.session.selectedOrganisation = null;
  req.session.finalNumber = null;
  req.session.resultArray = null;
  req.session.searchTerm = null;
  req.session.searchFail = null;
  req.session.newMemberAdded = true;

  let targetURL;
  targetURL = '/prototypes/team-resources-costs/team';
  return res.redirect(targetURL);
}
// ************************************************************************
//
//        add team member ALT for non DA
//
// ************************************************************************
function trcAddTeamMemberAltGet(req, res) {
  let viewData;

  let allData = req.session;
  console.log(allData);

  let limitedOrgList = limitedOrgs.limitedOrgList;
  let action = req.session.action;

  viewData = {
    allData,
    prototypeData,
    limitedOrgList,
    action
  };

  return res.render('prototypes/team-resources-costs/add-team-member-alt', viewData);
}

function trcAddTeamMemberAltPost(req, res) {
  const {
    firstName,
    lastName,
    timeSpent,
    averageHours,
    email,
    startDay,
    startMonth,
    startYear,
    endDay,
    endMonth,
    endYear,
    knownDetails
  } = req.body;

  let action = req.session.action;
  // let teamMemberType = req.session.teamMemberType;
  let teamMemberID = req.session.teamMemberID;

  console.log(req.body);

  if (action === 'edit' && parseInt(teamMemberID) >= 1) {
    let arrayPos = parseInt(teamMemberID) - 1;
    allTeamMembers2[arrayPos].firstName = firstName;
    allTeamMembers2[arrayPos].lastName = lastName;
    allTeamMembers2[arrayPos].email = email;
    allTeamMembers2[arrayPos].role = req.session.tempRole;
    allTeamMembers2[arrayPos].roleType = req.session.tempRoleType;
    allTeamMembers2[arrayPos].organisation = req.session.selectedOrganisation;
    allTeamMembers2[arrayPos].timeSpent = timeSpent;
    allTeamMembers2[arrayPos].averageHours = averageHours;
    allTeamMembers2[arrayPos].startDay = startDay;
    allTeamMembers2[arrayPos].startMonth = startMonth;
    allTeamMembers2[arrayPos].startYear = startYear;
    allTeamMembers2[arrayPos].endDay = endDay;
    allTeamMembers2[arrayPos].endMonth = endMonth;
    allTeamMembers2[arrayPos].endYear = endYear;

    // clear data
    req.session.tempRole = null;
    req.session.tempRoleType = null;
    req.session.selectedOrganisation = null;
    req.session.action = null;
    req.session.teamMemberID = null;
    req.session.firstName = null;
    req.session.lastName = null;
    req.session.email = null;
    req.session.tempStartDay = null;
    req.session.tempStartMonth = null;
    req.session.tempStartYear = null;
    req.session.tempEndDay = null;
    req.session.tempEndMonth = null;
    req.session.tempEndYear = null;
  } else {
    for (let i = 0; i < allTeamMembers2.length; i++) {
      if (!allTeamMembers2[i].isComplete) {
        if (knownDetails === 'knownNo') {
          allTeamMembers2[i].firstName = 'Unknown';
          allTeamMembers2[i].lastName = '';
          allTeamMembers2[i].email = 'Unknown';
        } else {
          allTeamMembers2[i].firstName = firstName;
          allTeamMembers2[i].lastName = lastName;
          allTeamMembers2[i].email = email;
        }

        allTeamMembers2[i].role = req.session.tempRole;
        allTeamMembers2[i].roleType = req.session.tempRoleType;
        allTeamMembers2[i].organisation = req.session.selectedOrganisation;
        allTeamMembers2[i].timeSpent = timeSpent;
        allTeamMembers2[i].averageHours = averageHours;
        allTeamMembers2[i].isComplete = true;
        allTeamMembers2[i].startDay = startDay;
        allTeamMembers2[i].startMonth = startMonth;
        allTeamMembers2[i].startYear = startYear;
        allTeamMembers2[i].endDay = endDay;
        allTeamMembers2[i].endMonth = endMonth;
        allTeamMembers2[i].endYear = endYear;
        break;
      }
    }
  }

  req.session.tempRole = null;
  req.session.tempRoleType = null;
  req.session.selectedOrganisation = null;
  req.session.finalNumber = null;
  req.session.resultArray = null;
  req.session.searchTerm = null;
  req.session.searchFail = null;
  req.session.newMemberAdded = true;

  /* req.session.action = null;
  req.session.teamMemberID = null;
  req.session.firstName = null;
  req.session.lastName = null;
  req.session.email = null;
  req.session.tempStartDay = null;
  req.session.tempStartMonth = null;
  req.session.tempStartYear = null;
  req.session.tempEndDay = null;
  req.session.tempEndMonth = null;
  req.session.tempEndYear = null;*/

  let targetURL;
  targetURL = '/prototypes/team-resources-costs/team';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        view team member details static
//
// ************************************************************************
function trcTeamMemberDetailsGet(req, res) {
  let viewData;
  let teamMemberID = req.param('teamMemberID');
  console.log('teamMemberID = ' + teamMemberID);
  let allData = req.session;
  viewData = {
    allData,
    allTeamMembers2,
    teamMemberID
  };

  return res.render('prototypes/team-resources-costs/team-member', viewData);
}

function trcTeamMemberDetailsPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/team-resources-costs/team-member';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        resources and costs
//
// ************************************************************************
function trcResourcesAndCostsGet(req, res) {
  let viewData;

  let allKnownOrgs = [];
  for (let i = 0; i < allTeamMembers2.length; i++) {
    if (allTeamMembers2[i].organisation.length > 1) {
      allKnownOrgs.push(allTeamMembers2[i].organisation);
    }
  }

  let uniqueOrgs = allKnownOrgs.reduce(function (a, b) {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
  }, []);

  let organisationDetails = [];
  for (let j = 0; j < uniqueOrgs.length; j++) {
    organisationDetails.push({
      name: uniqueOrgs[j],
      isComplete: '',
      costs: {}
    });
  }

  let megaTotalFEC = 0;
  let megaContribution = 0;
  let megaFundingAppliedFor = 0;
  for (let k = 0; k < orgCosts.length; k++) {
    megaTotalFEC = megaTotalFEC + parseInt(orgCosts[k].totalFEC);
    megaContribution = megaContribution + parseInt(orgCosts[k].contribution);
    megaFundingAppliedFor = megaFundingAppliedFor + parseInt(orgCosts[k].fundingAppliedFor);
  }

  req.session.megaTotalFEC = megaTotalFEC;
  req.session.megaContribution = megaContribution;
  req.session.megaFundingAppliedFor = megaFundingAppliedFor;

  req.session.uniqueOrgs = organisationDetails;
  let allData = req.session;
  console.log(allData);

  viewData = {
    allData,
    prototypeData,
    orgCosts
  };

  return res.render('prototypes/team-resources-costs/resources-and-costs', viewData);
}

function trcResourcesAndCostsPost(req, res) {
  const { justification, isComplete } = req.body;

  req.session.justification = justification;
  if (isComplete === 'on') {
    req.session.resourcesAndCostsIsComplete = true;
  } else {
    req.session.resourcesAndCostsIsComplete = false;
  }

  let targetURL;
  targetURL = '/prototypes/team-resources-costs/application-overview';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        organisation-costs
//
// ************************************************************************
function trcOrganisationCostsGet(req, res) {
  let viewData;
  let orgsArrayIndex = req.param('orgsArrayIndex');

  //console.log(req.session.uniqueOrgs);
  //console.log('orgsArrayIndex = ' + orgsArrayIndex);

  let allData = req.session;

  console.log(allData);

  viewData = {
    allData,
    prototypeData,
    orgsArrayIndex,
    allTeamMembers2,
    orgCosts
  };

  return res.render('prototypes/team-resources-costs/organisation-costs', viewData);
}

function trcOrganisationCostsPost(req, res) {
  const { isComplete, orgName, orgsArrayIndex } = req.body;

  console.log(isComplete);

  if (isComplete === 'on' && orgsArrayIndex === '0') {
    req.session.orgZeroComplete = true;
  } else if (isComplete !== 'on' && orgsArrayIndex === '0') {
    req.session.orgZeroComplete = false;
  }

  if (isComplete === 'on' && orgsArrayIndex === '1') {
    req.session.orgOneComplete = true;
  } else if (isComplete !== 'on' && orgsArrayIndex === '1') {
    req.session.orgOneComplete = false;
  }

  if (isComplete === 'on' && orgsArrayIndex === '2') {
    req.session.orgTwoComplete = true;
  } else if (isComplete !== 'on' && orgsArrayIndex === '2') {
    req.session.orgTwoComplete = false;
  }

  let formStuff = req.body;
  let uniqueOrgs = req.session.uniqueOrgs;
  orgCosts[orgsArrayIndex].totalFEC = parseFloat(formStuff.totalFEC.replace(/,/g, ''));
  orgCosts[orgsArrayIndex].contribution = parseFloat(formStuff.contribution.replace(/,/g, ''));
  orgCosts[orgsArrayIndex].fundingAppliedFor = parseFloat(formStuff.fundingAppliedFor.replace(/,/g, ''));
  orgCosts[orgsArrayIndex].daMemberFullCosts_1 = formStuff.daMemberFullCosts_1;
  orgCosts[orgsArrayIndex].daCostAppliedFor_1 = formStuff.daCostAppliedFor_1;
  orgCosts[orgsArrayIndex].daMemberFullCosts_2 = formStuff.daMemberFullCosts_2;
  orgCosts[orgsArrayIndex].daCostAppliedFor_2 = formStuff.daCostAppliedFor_2;
  orgCosts[orgsArrayIndex].daMemberFullCosts_3 = formStuff.daMemberFullCosts_3;
  orgCosts[orgsArrayIndex].daCostAppliedFor_3 = formStuff.daCostAppliedFor_3;
  orgCosts[orgsArrayIndex].diMemberFullCosts_1 = formStuff.diMemberFullCosts_1;
  orgCosts[orgsArrayIndex].diCostAppliedFor_1 = formStuff.diCostAppliedFor_1;
  orgCosts[orgsArrayIndex].diMemberFullCosts_2 = formStuff.diMemberFullCosts_2;
  orgCosts[orgsArrayIndex].diCostAppliedFor_2 = formStuff.diCostAppliedFor_2;
  orgCosts[orgsArrayIndex].diMemberFullCosts_3 = formStuff.diMemberFullCosts_3;
  orgCosts[orgsArrayIndex].diCostAppliedFor_3 = formStuff.diCostAppliedFor_3;
  orgCosts[orgsArrayIndex].exMemberFullCosts_1 = formStuff.exMemberFullCosts_1;
  orgCosts[orgsArrayIndex].exCostAppliedFor_1 = formStuff.exCostAppliedFor_1;
  orgCosts[orgsArrayIndex].exMemberFullCosts_2 = formStuff.exMemberFullCosts_2;
  orgCosts[orgsArrayIndex].exCostAppliedFor_2 = formStuff.exCostAppliedFor_2;
  orgCosts[orgsArrayIndex].exMemberFullCosts_3 = formStuff.exMemberFullCosts_3;
  orgCosts[orgsArrayIndex].exCostAppliedFor_3 = formStuff.exCostAppliedFor_3;
  orgCosts[orgsArrayIndex].daStaff = formStuff.daStaff;
  orgCosts[orgsArrayIndex].daStaffAppliedFor = formStuff.daStaffAppliedFor;
  orgCosts[orgsArrayIndex].daEstates = formStuff.daEstates;
  orgCosts[orgsArrayIndex].daEstatesAppliedFor = formStuff.daEstatesAppliedFor;
  orgCosts[orgsArrayIndex].daOther = formStuff.daOther;
  orgCosts[orgsArrayIndex].daOtherAppliedFor = formStuff.daOtherAppliedFor;
  orgCosts[orgsArrayIndex].diStaff = formStuff.diStaff;
  orgCosts[orgsArrayIndex].diStaffAppliedFor = formStuff.diStaffAppliedFor;
  orgCosts[orgsArrayIndex].diEquipment = formStuff.diEquipment;
  orgCosts[orgsArrayIndex].diEquipmentAppliedFor = formStuff.diEquipmentAppliedFor;
  orgCosts[orgsArrayIndex].diTravel = formStuff.diTravel;
  orgCosts[orgsArrayIndex].diTravelAppliedFor = formStuff.diTravelAppliedFor;
  orgCosts[orgsArrayIndex].diOther = formStuff.diOther;
  orgCosts[orgsArrayIndex].diOtherAppliedFor = formStuff.diOtherAppliedFor;
  orgCosts[orgsArrayIndex].indirectCosts = formStuff.indirectCosts;
  orgCosts[orgsArrayIndex].indirectCostsAppliedFor = formStuff.indirectCostsAppliedFor;
  orgCosts[orgsArrayIndex].exStaff = formStuff.exStaff;
  orgCosts[orgsArrayIndex].exStaffAppliedFor = formStuff.exStaffAppliedFor;
  orgCosts[orgsArrayIndex].exEquipment = formStuff.exEquipment;
  orgCosts[orgsArrayIndex].exEquipmentAppliedFor = formStuff.exEquipmentAppliedFor;
  orgCosts[orgsArrayIndex].exTravel = formStuff.exTravel;
  orgCosts[orgsArrayIndex].exTravelAppliedFor = formStuff.exTravelAppliedFor;
  orgCosts[orgsArrayIndex].exOther = formStuff.exOther;
  orgCosts[orgsArrayIndex].exOtherAppliedFor = formStuff.exOtherAppliedFor;

  // orgCosts[orgsArrayIndex].costs = formStuff;
  /*for (let i=0; i < formStuff.length; i++) {
   }*/
  //let specificCosts = orgCosts[orgsArrayIndex].costs;
  //console.log(formStuff)
  //for (const [key, value] of Object.entries(formStuff)) {
  //console.log('looping');
  //console.log(`${key} ${value}`);
  // req.session[`${key}`] = `${value}`;
  // specificCosts.push(key, value);
  //specificCosts[`${key}`] = `${value}`;
  //}

  /*console.log('formStuff.daMemberFullCosts_1 = ' + formStuff.daMemberFullCosts_1 );
  specificCosts.daMemberFullCosts_1 = formStuff.daMemberFullCosts_1;
  orgCosts[orgsArrayIndex].costs = specificCosts;
  orgCosts[orgsArrayIndex].name = orgName;
  console.log(orgCosts[orgsArrayIndex].costs);*/

  // orgCosts[orgsArrayIndex].costs = specificCosts;
  //for (let j=0; j < orgCosts[orgsArrayIndex].costs ; j++) {
  //console.log('fucking arrays');
  //console.log(orgCosts[orgsArrayIndex].costs[j] );
  //}

  /*for (let j=0; j < specificCosts.length; j++) {
    console.log(specificCosts[j]);
  }*/
  //console.log(formStuff);
  // console.log('uniqueOrgs[0][0].name = ' + uniqueOrgs[0][0].name);
  //console.log('uniqueOrgs[0].name');
  //console.log(uniqueOrgs[0].name);
  /* for (let i=0; i < uniqueOrgs.length; i++) {
    if (uniqueOrgs[0].name === orgName ) {
      uniqueOrgs[i].costs = formStuff;
    }
    console.log('LOOPING uniqueOrgs[0].name');
    console.log(uniqueOrgs[i].name);
  }*/

  req.session.orgCosts = orgCosts;
  console.log('req.session ===================================================================== ');
  console.log(req.session);
  //console.log(orgCosts[orgsArrayIndex].costs);
  //console.log(req.session);

  let targetURL;
  targetURL = '/prototypes/team-resources-costs/resources-and-costs';
  return res.redirect(targetURL);
}