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

  newDate.setDate(newDate.getDate() + 14);
  dateString = newDate.getFullYear() + ('0' + (newDate.getMonth() + 1)).slice(-2) + ('0' + newDate.getDate()).slice(-2);
  // console.log('dateString = ' + dateString);
  req.session.dateString = dateString;

  let clearSession = req.param('clearSearch');
  if (clearSession === 'true') {
    req.session.doingSearch = null;
    req.session.searchQuery = null;
  }

  let applicationsListv2 = megaApplications1200v2.megaApplications1200v2;
  // let applicationsListv2 = megaReversed.megaApplications1200v2Reversed;

  let order = req.param('order');
  console.log('order = ' + order);
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
    // applicationsListv2 = megaApplications1200v2.megaApplications1200v2;
  } else if (order === 'deadline' || order === '' || order === null || !order) {
    req.session.order = 'deadline';
    // applicationsListv2 = megaApplications1200v2.megaApplications1200v2;
    if (req.session.hasBeenReversed === true) {
      applicationsListv2.reverse();
      req.session.hasBeenReversed = false;
    }
  }

  console.log(applicationsListv2);

  let statusFilter = req.session.statusRadios;
  let tempAppList = [];

  if (req.session.statusRadios) {
    for (let i = 0; i < applicationsListv2.length; i++) {
      if (applicationsListv2[i].status === statusFilter) {
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
      }
    }
    //console.log('tempAppList = ');
    //console.log(tempAppList);
    applicationsListv2 = tempAppList;
  }

  let searchTermTemp = req.session.searchQuery;
  let doingSearch = req.session.doingSearch;

  if (doingSearch === true) {
    let searchFail;
    let resultArray = [];
    let finalNumber;

    if (searchTermTemp === ' ' || searchTermTemp === '' || searchTermTemp === null) {
      searchFail = true;
    } else {
      searchFail = false;
      let iterationNumber = 0;
      for (let i = 0; i < applicationsListv2.length; i++) {
        let tempTitle = applicationsListv2[i].title;
        let tempName = applicationsListv2[i].name;

        // console.log('tempName = ' + tempName);
        if (tempTitle.toLowerCase().includes(searchTermTemp.toLowerCase()) || tempName.toLowerCase().includes(searchTermTemp.toLowerCase())) {
          /*resultArray.push({
            n: tempName,
            c: tempPlace,
          });*/

          tempAppList.push(applicationsListv2[i]);
          iterationNumber++;
        }
      }
      finalNumber = iterationNumber;
      req.session.finalNumber = finalNumber;
      applicationsListv2 = tempAppList;
    }
  }

  let allData = req.session;
  viewData = {
    allData,
    applicationsListv2
  };
  return res.render('prototypes/applications/applications', viewData);
}

function alApplicationsPost(req, res) {
  const { statusRadios, searchQuery } = req.body;

  // req.session.statusRadios = statusRadios;
  console.log(req.body);
  /*let formStuff = req.body;
  for (const [key, value] of Object.entries(formStuff)) {
    console.log(`${key} ${value}`);
    if (key !== null) {
      req.session[`${key}`] = `${value}`;
    } else {
      req.session[`${key}`] = 'null';
    }
  }*/

  /*if(req.body.subitFilters) {
  // ********************************
  // ********************************
  // ********************************
  // ********************************
  // ********************************
  // ********************************
  // ********************************
  // ********************************
     req.session.statusFilter_1 = 'For checking';
  }*/

  if (req.body.statusFilter_1) {
    req.session.statusFilter_1 = 'For checking';
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

  if (req.body.applicationSearch === 'search') {
    req.session.searchQuery = searchQuery;
    req.session.doingSearch = true;
    console.log('doing a search!');
  }

  if (req.body.submitFilters === 'submitFilters') {
    // add filters stuff
    console.log('apply filters!');
  }

  if (req.body.clearFilters === 'clearFilters') {
    // delete all filter stuff

    req.session.statusFilter_1 = null;
    req.session.statusFilter_2 = null;
    req.session.statusFilter_3 = null;
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