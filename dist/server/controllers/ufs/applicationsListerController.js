'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alIndexGet = alIndexGet;
exports.alIndexPost = alIndexPost;
exports.alHomeGet = alHomeGet;
exports.alHomePost = alHomePost;
exports.alApplicationsGet = alApplicationsGet;
exports.alApplicationsPost = alApplicationsPost;
exports.alNewApplicationsGet = alNewApplicationsGet;
exports.alApplicationsRawGet = alApplicationsRawGet;

var _test_applications = require('./test_applications');

let generalData = require('./data');
let genericFunctions = require('./generic');
const megaApplications = require('./realApplications');
const megaApplications1200 = require('./realApplications1200');
const megaApplications1200v2 = require('./realApplications1200_v2');
const megaReversed = require('./test_applications');
// let applicationsList = megaApplications1200.megaApplications1200;
let applicationsListv2 = megaApplications1200v2.megaApplications1200v2;
// let applicationsListv2 = megaReversed.megaApplications1200v2Reversed;

/*const mark = require('../../../../node_modules/mark.js');*/
/* **************

    Index

*************** */
function alIndexGet(req, res) {
  let viewData;

  viewData = {};
  return res.render('prototypes/applications/index', viewData);
}

function alIndexPost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/awards/index');
}

/* **************

    Home

*************** */
function alHomeGet(req, res) {
  let viewData;

  let allStatuses = [];
  let allFunders = [];
  let allGroups = [];

  for (let i = 0; i < applicationsListv2.length; i++) {
    allStatuses.push(applicationsListv2[i].status);
    allFunders.push(applicationsListv2[i].funder);

    let miniGroupList = applicationsListv2[i].groups;
    // console.log(miniGroupList);
    for (let j = 0; j < miniGroupList.length; j++) {
      allGroups.push(miniGroupList[j]);
    }
  }

  let uniqueStatuses = allStatuses.reduce(function (a, b) {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
  }, []);
  req.session.uniqueStatuses = uniqueStatuses.sort();

  let uniqueFunders = allFunders.reduce(function (a, b) {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
  }, []);
  req.session.uniqueFunders = uniqueFunders.sort();

  let uniqueGroups = allGroups.reduce(function (a, b) {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
  }, []);
  req.session.uniqueGroups = uniqueGroups.sort();

  console.log(uniqueGroups);

  req.session.order = 'deadline';

  viewData = {};
  return res.render('prototypes/applications/home', viewData);
}

function alHomePost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/awards/home');
}

/* **************

    Applications list

*************** */
function alApplicationsGet(req, res) {
  let viewData;

  let newDate = new Date();
  let dateString;
  let itemCount = 0;

  newDate.setDate(newDate.getDate() + 14);
  dateString = newDate.getFullYear() + ('0' + (newDate.getMonth() + 1)).slice(-2) + ('0' + newDate.getDate()).slice(-2);

  req.session.dateString = dateString;

  let clearSearch = req.param('clearSearch');
  if (clearSearch === 'true') {
    req.session.doingSearch = null;
    req.session.searchQuery = null;
  }

  let applicationsListv2 = megaApplications1200v2.megaApplications1200v2;

  /*
  * Do ordering
  */
  let order = req.param('order');
  //console.log('order = ' + order);
  if (order === 'reverse') {
    applicationsListv2 = megaApplications1200v2.megaApplications1200v2;
    applicationsListv2.reverse();
    req.session.order = 'reverse';
    req.session.hasBeenReversed = true;
  } else if (order === 'chaos') {
    req.session.order = 'chaos';
    if (req.session.hasBeenReversed === true) {
      applicationsListv2.reverse();
      req.session.hasBeenReversed = false;
    }
  } else if (order === 'deadline' || order === '' || order === null || !order) {
    req.session.order = 'deadline';
    if (req.session.hasBeenReversed === true) {
      applicationsListv2.reverse();
      req.session.hasBeenReversed = false;
    }
  }

  //console.log(applicationsListv2);

  let tempAppList = [];
  req.session.whichFunctionFirst = '';
  /*
  * Do search
  * */
  let searchTermTemp = req.session.searchQuery;
  let finalNumber;
  let searchFail;

  function doTheSearch(searchTermTemp) {
    if (searchTermTemp === ' ' || searchTermTemp === '' || searchTermTemp === null) {
      searchFail = true;
    } else {
      searchFail = false;
      let iterationNumber = 0;
      for (let i = 0; i < applicationsListv2.length; i++) {
        let tempTitle = applicationsListv2[i].title;
        let tempName = applicationsListv2[i].name;

        if (tempTitle.toLowerCase().includes(searchTermTemp.toLowerCase()) || tempName.toLowerCase().includes(searchTermTemp.toLowerCase())) {
          tempAppList.push(applicationsListv2[i]);
          iterationNumber++;
          itemCount++;
        }
      }
      finalNumber = iterationNumber;
      req.session.finalNumber = finalNumber;
      applicationsListv2 = tempAppList;
    }

    return applicationsListv2;
  }

  /*
  * Do filters
  * */
  function applyTheFilters() {
    req.session.order = 'chaos';
    for (let i = 0; i < applicationsListv2.length; i++) {
      if (applicationsListv2[i].status === req.session.statusFilter_1 || applicationsListv2[i].status === req.session.statusFilter_2 || applicationsListv2[i].status === req.session.statusFilter_3 || applicationsListv2[i].status === req.session.outcomeFilter_1 || applicationsListv2[i].status === req.session.outcomeFilter_2 || applicationsListv2[i].status === req.session.outcomeFilter_3 || applicationsListv2[i].status === req.session.outcomeFilter_4 || applicationsListv2[i].status === req.session.outcomeFilter_5) {
        tempAppList.push({
          funder: applicationsListv2[i].funder,
          groups: applicationsListv2[i].groups,
          randomID: applicationsListv2[i].randomID,
          orgName: applicationsListv2[i].orgName,
          name: applicationsListv2[i].name,
          title: applicationsListv2[i].title,
          status: applicationsListv2[i].status,
          start: applicationsListv2[i].start,
          end: applicationsListv2[i].end,
          awardValue: applicationsListv2[i].awardValue,
          additionalOrg: applicationsListv2[i].additionalOrg,
          deadlineDay: applicationsListv2[i].deadlineDay,
          deadlineMonth: applicationsListv2[i].deadlineMonth,
          deadlineYear: applicationsListv2[i].deadlineYear,
          dateAsString: applicationsListv2[i].dateAsString
        });
        itemCount++;
      }
    }

    applicationsListv2 = tempAppList;

    return applicationsListv2;
  }

  console.log('req.session.whichFunctionFirst = ' + req.session.whichFunctionFirst);
  console.log('req.session.doingFilters = ' + req.session.doingFilters);
  console.log('req.session.doingSearch = ' + req.session.doingSearch);

  /*if (req.session.doingSearch === true && req.session.doingFilters === true) {
    console.log('both');
    if (req.session.whichFunctionFirst === 'search') {
      req.session.whichFunctionFirst = 'filters';
      req.session.doingSearch = null;
      req.session.searchQuery = null;
      applyTheFilters();
    } else if (req.session.whichFunctionFirst === 'filters') {
      req.session.whichFunctionFirst = 'search';
      req.session.doingFilters = null;
      // req.session.order = 'deadline';
      req.session.statusFilter_1 = null;
      req.session.statusFilter_2 = null;
      req.session.statusFilter_3 = null;
      req.session.outcomeFilter_1 = null;
      req.session.outcomeFilter_2 = null;
      req.session.outcomeFilter_3 = null;
      req.session.outcomeFilter_4 = null;
      req.session.outcomeFilter_5 = null;
      doTheSearch(searchTermTemp);
    }
  } else if (req.session.doingSearch === true) {
    console.log('only search');
    req.session.whichFunctionFirst = 'search';
    doTheSearch(searchTermTemp);
  } else if (req.session.doingFilters === true) {
    console.log('only filters');
    req.session.whichFunctionFirst = 'filters';
    applyTheFilters();
  }*/

  if (req.session.doingSearch === true) {
    console.log('only search');
    req.session.doingFilters = null;
    // req.session.doingSearch = null;
    req.session.statusFilter_1 = null;
    req.session.statusFilter_2 = null;
    req.session.statusFilter_3 = null;
    req.session.outcomeFilter_1 = null;
    req.session.outcomeFilter_2 = null;
    req.session.outcomeFilter_3 = null;
    req.session.outcomeFilter_4 = null;
    req.session.outcomeFilter_5 = null;
    doTheSearch(searchTermTemp);
  } else if (req.session.doingFilters === true) {
    console.log('only filters');
    // req.session.doingFilters = null;
    req.session.doingSearch = null;
    req.session.searchQuery = null;
    applyTheFilters();
  }

  if (itemCount === 0) {
    itemCount = applicationsListv2.length;
    req.session.showingAll = true;
  } else {
    req.session.showingAll = false;
  }

  console.log('itemCount = ' + itemCount);

  req.session.itemCount = itemCount;

  let allData = req.session;

  viewData = {
    allData,
    applicationsListv2
  };
  return res.render('prototypes/applications/applications', viewData);
}

function alApplicationsPost(req, res) {
  const { searchQuery } = req.body;

  // console.log(req.body);

  /*
  * Statuses
  * */

  if (req.body.statusFilter_1) {
    req.session.statusFilter_1 = 'With research office';
  } else {
    req.session.statusFilter_1 = null;
  }
  if (req.body.statusFilter_2) {
    req.session.statusFilter_2 = 'With applicant';
  } else {
    req.session.statusFilter_2 = null;
  }
  if (req.body.statusFilter_3) {
    req.session.statusFilter_3 = 'Submitted';
  } else {
    req.session.statusFilter_3 = null;
  }

  /*
  * Outcomes
  * */

  if (req.body.outcomeFilter_1) {
    req.session.outcomeFilter_1 = 'Successful';
  } else {
    req.session.outcomeFilter_1 = null;
  }
  if (req.body.outcomeFilter_2) {
    req.session.outcomeFilter_2 = 'Unsuccessful';
  } else {
    req.session.outcomeFilter_2 = null;
  }
  if (req.body.outcomeFilter_3) {
    req.session.outcomeFilter_3 = 'Deadline passed';
  } else {
    req.session.outcomeFilter_3 = null;
  }
  if (req.body.outcomeFilter_4) {
    req.session.outcomeFilter_4 = 'Withdrawn';
  } else {
    req.session.outcomeFilter_4 = null;
  }
  if (req.body.outcomeFilter_5) {
    req.session.outcomeFilter_5 = 'Rejected';
  } else {
    req.session.outcomeFilter_5 = null;
  }

  if (req.body.applicationSearch === 'search') {
    req.session.searchQuery = searchQuery;
    req.session.doingSearch = true;
    req.session.whichFunctionFirst = 'search';
    console.log('doing a search!');
  }

  if (req.body.submitFilters === 'submitFilters') {
    // add filters stuff
    console.log('apply filters!');
    req.session.whichFunctionFirst = 'filters';
    req.session.doingFilters = true;
  }

  if (req.body.clearFilters === 'clearFilters') {
    // delete all filter stuff
    req.session.doingFilters = null;
    req.session.order = 'deadline';
    req.session.statusFilter_1 = null;
    req.session.statusFilter_2 = null;
    req.session.statusFilter_3 = null;
    req.session.outcomeFilter_1 = null;
    req.session.outcomeFilter_2 = null;
    req.session.outcomeFilter_3 = null;
    req.session.outcomeFilter_4 = null;
    req.session.outcomeFilter_5 = null;
    console.log('clear filters!');
  }

  console.log(req.session);

  return res.redirect('/prototypes/applications/applications');
}

/* **************

    New Applications only list

*************** */
function alNewApplicationsGet(req, res) {
  let viewData;

  let newDate = new Date();
  let dateString;

  newDate.setDate(newDate.getDate() + 14);
  dateString = newDate.getFullYear() + ('0' + (newDate.getMonth() + 1)).slice(-2) + ('0' + newDate.getDate()).slice(-2);
  console.log('dateString = ' + dateString);
  req.session.dateString = dateString;

  let allData = req.session;
  viewData = {
    allData,
    applicationsListv2
  };
  return res.render('prototypes/applications/new-applications', viewData);
}

/* **************

    Applications list RAW

*************** */
function alApplicationsRawGet(req, res) {
  let viewData;

  let allData = req.session;

  viewData = {
    allData,
    applicationsList
  };
  return res.render('prototypes/applications/applications-raw', viewData);
}