let generalData = require('./data');
let genericFunctions = require('./generic');
let limitedOrgs = require('./orgs400');
// let limitedOrgs2 = require('./orgs400asArray');

const prototypeData = {
  userName: 'Naimh Murphey',
  awardName: 'AWA184: Environmental research grants 2022',
  organisation: 'University of Wales',
  currentEndDate: '30 October 2023',
};

let savedSession;

// teamDataFull
// teamDataEmpty
let teamData = require('./team-data');

// let allTeamMembers2 = teamData.teamDataFull;
// const originalNumberOfMembers = 4;

let allTeamMembers2 = teamData.teamDataEmpty;
const originalNumberOfMembers = 1;

// console.log('originalNumberOfMembers = ' + originalNumberOfMembers);

// ************************************************************************
//
//        index
//
// ************************************************************************
export function trcIndexGet(req, res) {
  let viewData;

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    savedSession = null;
    req.session.destroy();
    let targetURL = '/prototypes/team-resources-costs/';
    //console.log('allTeamMembers2 = 👇👇👇👇👇👇');
    //console.log(allTeamMembers2);
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

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };

  return res.render('prototypes/team-resources-costs/index', viewData);
}

export function trcIndexPost(req, res) {
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
export function trcHomeGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };

  return res.render('prototypes/team-resources-costs/home', viewData);
}

export function trcHomePost(req, res) {
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
export function trcApplicationsGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };

  return res.render('prototypes/team-resources-costs/applications', viewData);
}

export function trcApplicationsPost(req, res) {
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
export function trcApplicationOverviewGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };

  return res.render('prototypes/team-resources-costs/application-overview', viewData);
}

export function trcApplicationOverviewPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/team-resources-costs/application-overview';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        team
//
// ************************************************************************
export function trcTeamGet(req, res) {
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

  viewData = {
    allData,
    prototypeData,
    allTeamMembers2,
    teamMemberDeleted,
    tempFirstNameNotification,
    tempLastNameNotification,
  };

  teamMemberDeleted = null;
  tempFirstNameNotification = null;
  tempLastNameNotification = null;

  return res.render('prototypes/team-resources-costs/team', viewData);
}

export function trcTeamPost(req, res) {
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
export function trcSelectRoleTypeGet(req, res) {
  let viewData;

  /* Edit TEAM MEMBER */
  //team?action=edit&teamMemberID={{ item.id }}
  let action = req.param('action');
  let teamMemberID = req.param('teamMemberID');
  let teamMemberType = req.param('teamMemberType');

  if (action === 'edit' && parseInt(teamMemberID) >= 1) {
    console.log('delete person');
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
        req.session.startDay = allTeamMembers2[j].startDay;
        req.session.startMonth = allTeamMembers2[j].startMonth;
        req.session.startYear = allTeamMembers2[j].startYear;
        req.session.endDay = allTeamMembers2[j].endDay;
        req.session.endMonth = allTeamMembers2[j].endMonth;
        req.session.endYear = allTeamMembers2[j].endYear;
        req.session.isComplete = allTeamMembers2[j].isComplete;
      }
    }
  }

  req.session.teamMemberDeleted = null;
  req.session.tempFirstNameNotification = null;
  req.session.tempLastNameNotification = null;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };

  return res.render('prototypes/team-resources-costs/select-role-type', viewData);
}

export function trcSelectRoleTypePost(req, res) {
  const { roleType } = req.body;

  req.session.tempRoleType = roleType;

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
export function trcSelectRoleGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData,
  };

  return res.render('prototypes/team-resources-costs/select-role', viewData);
}

export function trcSelectRolePost(req, res) {
  const { roles } = req.body;

  req.session.tempRole = roles;

  let targetURL;

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
export function trcOrganisationSearchGet(req, res) {
  let viewData;

  let allData = req.session;

  // console.log(allData);

  viewData = {
    allData,
    prototypeData,
  };

  return res.render('prototypes/team-resources-costs/organisation-search', viewData);
}

export function trcOrganisationSearchPost(req, res) {
  const { searchTerm } = req.body;

  req.session.searchTerm = searchTerm;
  // console.log('req.params');
  // console.log(req.body.submitSearch);
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
          if (
            tempPlace.toLowerCase() === 'university' ||
            tempPlace.toLowerCase() === 'institute' ||
            tempPlace.toLowerCase() === 'college' ||
            tempPlace.toLowerCase() === 'new' ||
            tempPlace.toLowerCase() === 'north' ||
            tempPlace.toLowerCase() === 'east' ||
            tempPlace.toLowerCase() === 'south' ||
            tempPlace.toLowerCase() === 'west' ||
            tempPlace.toLowerCase() === 'the'
          ) {
            tempPlace = '';
          }
        }
        // console.log('tempName = ' + tempName);
        if (tempName.toLowerCase().includes(searchTermTemp.toLowerCase())) {
          resultArray.push({
            n: tempName,
            c: tempPlace,
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
export function trcAddTeamMemberGet(req, res) {
  let viewData;

  let allData = req.session;
  console.log(allData);

  let limitedOrgList = limitedOrgs.limitedOrgList;
  //console.log('limitedOrgList: ');
  //console.log(limitedOrgList);

  viewData = {
    allData,
    prototypeData,
    limitedOrgList,
  };

  return res.render('prototypes/team-resources-costs/add-team-member', viewData);
}

export function trcAddTeamMemberPost(req, res) {
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
export function trcAddTeamMemberAltGet(req, res) {
  let viewData;

  let allData = req.session;
  console.log(allData);

  let limitedOrgList = limitedOrgs.limitedOrgList;
  // console.log('limitedOrgList: ');
  // console.log(limitedOrgList);

  viewData = {
    allData,
    prototypeData,
    limitedOrgList,
  };

  return res.render('prototypes/team-resources-costs/add-team-member-alt', viewData);
}

export function trcAddTeamMemberAltPost(req, res) {
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
    knownDetails,
  } = req.body;

  console.log(req.body);

  for (let i = 0; i < allTeamMembers2.length; i++) {
    if (!allTeamMembers2[i].isComplete) {
      if (knownDetails === 'knownNo') {
        allTeamMembers2[i].firstName = 'Unknown';
        allTeamMembers2[i].lastName = '';
        allTeamMembers2[i].email = '';
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
//        view team member details static
//
// ************************************************************************
export function trcTeamMemberDetailsGet(req, res) {
  let viewData;
  let teamMemberID = req.param('teamMemberID');
  console.log('teamMemberID = ' + teamMemberID);
  let allData = req.session;
  viewData = {
    allData,
    allTeamMembers2,
    teamMemberID,
  };

  return res.render('prototypes/team-resources-costs/team-member', viewData);
}

export function trcTeamMemberDetailsPost(req, res) {
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
export function trcResourcesAndCostsGet(req, res) {
  let viewData;

  let allKnownOrgs = [];
  for (let i = 0; i < allTeamMembers2.length; i++) {
    if (allTeamMembers2[i].organisation.length > 1) {
      allKnownOrgs.push(allTeamMembers2[i].organisation);
    }
  }

  /*
  * resultArray.push({
            n: tempName,
            c: tempPlace,
          });
  * */

  let uniqueOrgs = allKnownOrgs.reduce(function(a, b) {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
  }, []);

  let organisationDetails = [];
  for (let j = 0; j < uniqueOrgs.length; j++) {
    organisationDetails.push({
      name: uniqueOrgs[j],
      isComplete: '',
    });
  }

  // req.session.uniqueOrgs = uniqueOrgs;
  req.session.uniqueOrgs = organisationDetails;
  let allData = req.session;
  console.log(allData);

  viewData = {
    allData,
    prototypeData,
  };

  return res.render('prototypes/team-resources-costs/resources-and-costs', viewData);
}

export function trcResourcesAndCostsPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/team-resources-costs/resources-and-costs';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        organisation-costs
//
// ************************************************************************
export function trcOrganisationCostsGet(req, res) {
  let viewData;

  //spoof for now
  /* req.session.uniqueOrgs = [
      { name: 'University of Wales', isComplete: '' },
      { name: 'University of Bristol', isComplete: '' },
      { name: 'City of Bristol College', isComplete: '' }
    ];*/

  let orgsArrayIndex = req.param('orgsArrayIndex');

  console.log('orgsArrayIndex = ' + orgsArrayIndex);

  let allData = req.session;
  console.log(allData);
  console.log(allTeamMembers2);

  viewData = {
    allData,
    prototypeData,
    orgsArrayIndex,
    allTeamMembers2,
  };

  return res.render('prototypes/team-resources-costs/organisation-costs', viewData);
}

export function trcOrganisationCostsPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/team-resources-costs/resources-and-costs';
  return res.redirect(targetURL);
}
