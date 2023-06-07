'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editIndexGet = editIndexGet;
exports.editIndexPost = editIndexPost;
exports.editHomeGet = editHomeGet;
exports.editHomePost = editHomePost;
exports.editApplicationsGet = editApplicationsGet;
exports.editApplicationsPost = editApplicationsPost;
exports.editApplicationOverviewGet = editApplicationOverviewGet;
exports.editApplicationOverviewPost = editApplicationOverviewPost;
exports.editCaseGet = editCaseGet;
exports.editCasePost = editCasePost;
exports.editDetailsGet = editDetailsGet;
exports.editDetailsPost = editDetailsPost;
exports.editApplicationOverview2Get = editApplicationOverview2Get;
exports.editApplicationOverview2Post = editApplicationOverview2Post;

var _test_applications = require('./test_applications');

let generalData = require('./data');
let genericFunctions = require('./generic');
const megaApplications = require('./realApplications');
const megaApplications1200 = require('./realApplications1200');
const megaApplications1200v2 = require('./realApplications1200_v2');
const megaReversed = require('./test_applications');
let applicationsListv2 = megaApplications1200v2.megaApplications1200v2;

let prototypeData = {
  oppTitle: 'OPP147: African sleeping sickness - pathways to treatment',
  applicationTitle: 'Ribosome profiling of Trypanosoma brucei',
  applicant1: 'Manolo Bauer',
  summary: '<p class="govuk-body"<em>Trypanosoma brucei</em>, the causative agent of African trypanosomiasis (&ldquo;sleeping sickness&rdquo;), causes more than 50,000 deaths annually. Related trypanosomatid pathogens, including <em>Trypanosoma cruzi </em>(the causative agent of Chagas&rsquo; disease) and numerous <em>Leishmania </em>species (which cause a diverse spectrum of visceral, mucocutaneous, and cutaneous disease), cause even more morbidity and mortality worldwide. Each of these parasites undergoes a complex developmental cycle, alternating between mammalian and insect hosts, as well as proliferating and non-proliferating stages. Exactly how trypanosomatid gene expression gives rise to the different phenotypes at each stage is currently not well understood, but the relative contribution of gene-specific transcriptional control is low.</p>\r\n' + '<p class="govuk-body"<strong> [TO ADD REFERENCE]</strong> Differences in post-transcriptional mRNA processing and stability undoubtedly play major roles but the poor correlation between mRNA and protein abundance during parasite development indicates that translational and/or post-translational controls are also important. </p>\r\n' + '<p class="govuk-body"This project seeks to globally and quantitatively assess the rate at which each mRNA is actively translated at any particular time by applying a recently-described technology that couples the ability to isolate the specific &ldquo;footprints&rdquo; of mRNAs that are occupied by ribosomes (an indicator of translation) with the depth and breadth of next generation sequencing. </p>\r\n' + '<p class="govuk-body"Aim 1 will establish the ribosome protection technology in <em>T. brucei</em>, using readily cultured non-pathogenic insect stage forms. It will optimize conditions for nuclease treatment to preserve mRNA fragments protected by ribosomes and for the generation of unbiased libraries from the RNA samples for next generation sequencing. It will also include maturation of the bioinformatics pipeline to analyze resulting sequence data. </p>\r\n' + '<p class="govuk-body"Aim 2 will expand into the pathogenic, mammalian stages of the parasite, and identify genes that are regulated at the level of translation during <em>T. brucei </em>development in infective as compared to non-infective forms. The proposed work will provide an important new tool for studying trypanosomatid gene expression, yielding a comprehensive view of the role of translational control in <em>T. brucei </em>and clues to it mechanisms, as well as new information on the extent of translation of individual gene products, such as potential drug targets. </p>\r\n' + '<p class="govuk-body"In addition, it should resolve the current debate over the function of the numerous recently identified RNAs that contain only short open-reading frames, and has the potential to identify non-canonical protein-coding open-reading frames, thus significantly enhancing the ongoing genome annotation.</p>',
  detailsEditMode: 'locked',
  detailsMarkAsComplete: true,
  teamMarkAsComplete: true,
  caseMarkAsComplete: true,
  resourcesAndCostsIsComplete: true,
  detailsJustBeenUpdated: false,
  oppTitle2: 'OPP018: Greener Futures Environmental Technology Awards 2023',
  applicationTitle2: 'Environmental Energy Storage in Aqua Batteries',
  applicant2: 'Chadwell Brotwurst'
};

/* **************

    Index

*************** */
function editIndexGet(req, res) {
  let viewData;

  viewData = {};
  return res.render('prototypes/edit/index', viewData);
}

function editIndexPost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/edit/index');
}

/* **************

    Home

*************** */
function editHomeGet(req, res) {
  let viewData;

  viewData = {};
  return res.render('prototypes/edit/home', viewData);
}

function editHomePost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/edit/home');
}

/* **************

    Applications

*************** */
function editApplicationsGet(req, res) {
  let viewData;

  viewData = {
    prototypeData
  };
  return res.render('prototypes/edit/applications', viewData);
}

function editApplicationsPost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/edit/applications');
}

/* **************

    Application overview

*************** */
function editApplicationOverviewGet(req, res) {
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
    prototypeData
  };
  return res.render('prototypes/edit/application-overview', viewData);
}

function editApplicationOverviewPost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/edit/application-overview');
}

/* **************

    Case for support

*************** */
function editCaseGet(req, res) {
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
    prototypeData
  };
  return res.render('prototypes/edit/case-for-support', viewData);
}

function editCasePost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/edit/case');
}

/* **************

    Details and summary

*************** */
function editDetailsGet(req, res) {
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
    prototypeData
  };
  return res.render('prototypes/edit/details-and-summary', viewData);
}

function editDetailsPost(req, res) {
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
function editApplicationOverview2Get(req, res) {
  let viewData;

  viewData = {
    prototypeData
  };
  return res.render('prototypes/edit/application-overview-2', viewData);
}

function editApplicationOverview2Post(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/edit/application-overview-2');
}