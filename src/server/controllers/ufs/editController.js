import { megaApplications1200v2Reversed } from './test_applications';

let generalData = require('./data');
let genericFunctions = require('./generic');
const megaApplications = require('./realApplications');
const megaApplications1200 = require('./realApplications1200');
const megaApplications1200v2 = require('./realApplications1200_v2');
const megaReversed = require('./test_applications');
let applicationsListv2 = megaApplications1200v2.megaApplications1200v2;

let prototypeData = {
  oppTitle: 'OPP147: Cleaner marine ecosystems',
  applicationTitle: 'Marine-degradable bio plastics and bacterial digestion',
  applicant1: 'Manolo Bauer',
  summary:
    '<h2>Lorem ipsum nunc est bibendum</h2><p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p><h2>Header Level 2</h2><ol><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li><li>Aliquam tincidunt mauris eu risus.</li></ol><h3>Header Level 3</h3><ul><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li><li>Aliquam tincidunt mauris eu risus.</li></ul><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>',
  detailsEditMode: 'locked',
  detailsMarkAsComplete: true,
  teamMarkAsComplete: true,
  caseMarkAsComplete: true,
  resourcesAndCostsIsComplete: true,
  detailsJustBeenUpdated: false,
  oppTitle2: 'OPP018: Greener Futures Environmental Technology Awards 2023',
  applicationTitle2: 'Environmental Energy Storage in Aqua Batteries',
  applicant2: 'Chadwell Brotwurst',
};

/* **************

    Index

*************** */
export function editIndexGet(req, res) {
  let viewData;

  viewData = {};
  return res.render('prototypes/edit/index', viewData);
}

export function editIndexPost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/edit/index');
}

/* **************

    Home

*************** */
export function editHomeGet(req, res) {
  let viewData;

  viewData = {};
  return res.render('prototypes/edit/home', viewData);
}

export function editHomePost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/edit/home');
}

/* **************

    Applications

*************** */
export function editApplicationsGet(req, res) {
  let viewData;

  viewData = {
    prototypeData,
  };
  return res.render('prototypes/edit/applications', viewData);
}

export function editApplicationsPost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/edit/applications');
}

/* **************

    Application overview

*************** */
export function editApplicationOverviewGet(req, res) {
  let viewData;

  let detailsEditMode = req.param('detailsEditMode');
  if (detailsEditMode === 'locked') {
    prototypeData.detailsEditMode = 'locked';
  }

  prototypeData.detailsJustBeenUpdated = false;
  let detailsJustBeenUpdated = req.session.detailsJustBeenUpdated;
  if (detailsJustBeenUpdated === true) {
    prototypeData.detailsJustBeenUpdated = true;
    req.session.detailsJustBeenUpdated = null;
  }

  viewData = {
    prototypeData,
  };
  return res.render('prototypes/edit/application-overview', viewData);
}

export function editApplicationOverviewPost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/edit/application-overview');
}

/* **************

    Case for support

*************** */
export function editCaseGet(req, res) {
  let viewData;

  let utcMilli = new Date().getTime() + 3600000;
  let utcMilliPlusThirty = utcMilli + 1400000;
  let minutesInThirty = new Date(utcMilliPlusThirty).getUTCMinutes();
  minutesInThirty = minutesInThirty.toString();
  if (minutesInThirty.length <= 1) {
    minutesInThirty = '0' + minutesInThirty;
  }
  prototypeData.finishTime = new Date(utcMilliPlusThirty).getUTCHours() + ':' + minutesInThirty;

  viewData = {
    prototypeData,
  };
  return res.render('prototypes/edit/case-for-support', viewData);
}

export function editCasePost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/edit/case');
}

/* **************

    Details and summary

*************** */
export function editDetailsGet(req, res) {
  let viewData;

  //detailsEditMode
  let detailsEditMode = req.param('detailsEditMode');
  if (detailsEditMode === 'unlocked') {
    prototypeData.detailsEditMode = 'unlocked';
    let utcMilli = new Date().getTime() + 3600000;
    let utcMilliPlusThirty = utcMilli + 1800000;

    console.log('utcMilli = ' + utcMilli);

    prototypeData.UTCtimeNow = utcMilli;
    prototypeData.UTCtimeNowDate = new Date(utcMilli);
    prototypeData.UTCtimeInThirty = utcMilliPlusThirty;
    prototypeData.hoursInThirty = new Date(utcMilliPlusThirty).getUTCHours();
    let minutesInThirty = new Date(utcMilliPlusThirty).getUTCMinutes();
    minutesInThirty = minutesInThirty.toString();
    if (minutesInThirty.length <= 1) {
      minutesInThirty = '0' + minutesInThirty;
    }
    prototypeData.minutesInThirty = minutesInThirty;
  }
  if (detailsEditMode === 'locked') {
    prototypeData.detailsEditMode = 'locked';
  }

  viewData = {
    prototypeData,
  };
  return res.render('prototypes/edit/details-and-summary', viewData);
}

export function editDetailsPost(req, res) {
  const { projectName, projectSummary, isComplete } = req.body;

  prototypeData.applicationTitle = projectName;
  prototypeData.summary = projectSummary;
  if (isComplete === 'on') {
    prototypeData.detailsMarkAsComplete = true;
  } else {
    prototypeData.detailsMarkAsComplete = false;
  }
  prototypeData.detailsEditMode = 'locked';

  console.log(prototypeData);

  req.session.detailsJustBeenUpdated = true;

  return res.redirect('/prototypes/edit/application-overview');
}

/* **************

    Application overview TWO

*************** */
export function editApplicationOverview2Get(req, res) {
  let viewData;

  viewData = {
    prototypeData,
  };
  return res.render('prototypes/edit/application-overview-2', viewData);
}

export function editApplicationOverview2Post(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/edit/application-overview-2');
}
