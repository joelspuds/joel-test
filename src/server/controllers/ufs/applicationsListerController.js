let generalData = require('./data');
let genericFunctions = require('./generic');
const megaApplications = require('./realApplications');
const megaApplications1200 = require('./realApplications1200');
const megaApplications1200v2 = require('./realApplications1200_v2');
let applicationsList = megaApplications1200.megaApplications1200;
let applicationsListv2 = megaApplications1200v2.megaApplications1200v2;

/* **************

    Index

*************** */
export function alIndexGet(req, res) {
  let viewData;

  viewData = {};
  return res.render('prototypes/applications/index', viewData);
}

export function alIndexPost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/awards/index');
}

/* **************

    Home

*************** */
export function alHomeGet(req, res) {
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

  let uniqueStatuses = allStatuses.reduce(function(a, b) {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
  }, []);
  req.session.uniqueStatuses = uniqueStatuses.sort();

  let uniqueFunders = allFunders.reduce(function(a, b) {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
  }, []);
  req.session.uniqueFunders = uniqueFunders.sort();

  let uniqueGroups = allGroups.reduce(function(a, b) {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
  }, []);
  req.session.uniqueGroups = uniqueGroups.sort();

  console.log(uniqueGroups);

  viewData = {};
  return res.render('prototypes/applications/home', viewData);
}

export function alHomePost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/awards/home');
}

/* **************

    Applications list

*************** */
export function alApplicationsGet(req, res) {
  let viewData;

  let newDate = new Date();
  let dateString;

  newDate.setDate(newDate.getDate() + 14);
  dateString = newDate.getFullYear() + ('0' + (newDate.getMonth() + 1)).slice(-2) + ('0' + newDate.getDate()).slice(-2);
  console.log('dateString = ' + dateString);
  req.session.dateString = dateString;

  let applicationsListv2 = megaApplications1200v2.megaApplications1200v2;

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
          dateAsString: applicationsListv2[i].dateAsString,
        });
      }
    }
    //console.log('tempAppList = ');
    //console.log(tempAppList);
    applicationsListv2 = tempAppList;
  }

  if (req.session.searchQuery) {
    let searchTermTemp = req.session.searchQuery;
    let resultArray = [];
    let searchFail;
    let finalNumber;
  }

  let allData = req.session;
  viewData = {
    allData,
    applicationsListv2,
  };
  return res.render('prototypes/applications/applications', viewData);
}

export function alApplicationsPost(req, res) {
  const { statusRadios, searchQuery } = req.body;

  req.session.statusRadios = statusRadios;

  let formStuff = req.body;
  for (const [key, value] of Object.entries(formStuff)) {
    // console.log(`${key} ${value}`);
    req.session[`${key}`] = `${value}`;
  }

  if (req.body.applicationSearch === 'search') {
    req.session.searchQuery = searchQuery;
    console.log('doing a search!');
  }

  if (req.body.submitFilters === 'submitFilters') {
    // add filters stuff
    console.log('apply filters!');
  }

  if (req.body.clearFilters === 'clearFilters') {
    // delete all filter stuff
    req.session.statusRadios = null;
    console.log('clear filters!');
  }

  console.log(req.session);

  return res.redirect('/prototypes/applications/applications');
}

/* **************

    New Applications only list

*************** */
export function alNewApplicationsGet(req, res) {
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
    applicationsListv2,
  };
  return res.render('prototypes/applications/new-applications', viewData);
}

/* **************

    Applications list RAW

*************** */
export function alApplicationsRawGet(req, res) {
  let viewData;

  let allData = req.session;

  viewData = {
    allData,
    applicationsList,
  };
  return res.render('prototypes/applications/applications-raw', viewData);
}
