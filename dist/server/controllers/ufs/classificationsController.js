'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classificationsIndexGet = classificationsIndexGet;
exports.classificationsIndexPost = classificationsIndexPost;
exports.classificationsHomeGet = classificationsHomeGet;
exports.classificationsHomePost = classificationsHomePost;
exports.classificationsOpportunitiesGet = classificationsOpportunitiesGet;
exports.classificationsOpportunitiesPost = classificationsOpportunitiesPost;
exports.classificationsApplicationsGet = classificationsApplicationsGet;
exports.classificationsApplicationsPost = classificationsApplicationsPost;
exports.classificationsApplicationOverviewGet = classificationsApplicationOverviewGet;
exports.classificationsApplicationOverviewPost = classificationsApplicationOverviewPost;
exports.classificationsResearchAreasGet = classificationsResearchAreasGet;
exports.classificationsResearchAreasPost = classificationsResearchAreasPost;
exports.classificationsResearchAreasRawGet = classificationsResearchAreasRawGet;
exports.classificationsAddGet = classificationsAddGet;
exports.classificationsAddPost = classificationsAddPost;
// import { megaApplications1200v2Reversed } from './test_applications';

let generalData = require('./data');
let genericFunctions = require('./generic');

const massiveCatsList = require('./massiveCatsList');
let allTheCats = massiveCatsList.allTheCats;

const massiveCatsListFlat = require('./massiveCatsList_flat');
let flatCatsList = massiveCatsListFlat.flatMassiveCatsList;

const classificationData = require('./classificationData_2');
let reportingTags = classificationData.reportingTags;
let routingTags = classificationData.allRoutingData;
let qualifierTags = classificationData.allQualifiers;

let prototypeData = {
  oppTitle: 'OPP147: African sleeping sickness - pathways to treatment',
  applicationTitle: 'Ribosome profiling of Trypanosoma brucei',
  applicant1: 'Manolo Bauer',
  detailsEditMode: 'locked',
  detailsMarkAsComplete: true,
  classificationsMarkAsComplete: false,
  teamMarkAsComplete: false,
  caseForSupportIsComplete: false,
  resourcesAndCostsIsComplete: false,
  detailsJustBeenUpdated: false,
  summary: '<p class="govuk-body">Trypanosoma brucei, the causative agent of African trypanosomiasis (&ldquo;sleeping sickness&rdquo;), causes more than 50,000 deaths annually. Related trypanosomatid pathogens, including <em>Trypanosoma cruzi </em>(the causative agent of Chagas&rsquo; disease) and numerous <em>Leishmania </em>species (which cause a diverse spectrum of visceral, mucocutaneous, and cutaneous disease), cause even more morbidity and mortality worldwide. Each of these parasites undergoes a complex developmental cycle, alternating between mammalian and insect hosts, as well as proliferating and non-proliferating stages. Exactly how trypanosomatid gene expression gives rise to the different phenotypes at each stage is currently not well understood, but the relative contribution of gene-specific transcriptional control is low.</p>\r\n' + '<p class="govuk-body">Differences in post-transcriptional mRNA processing and stability undoubtedly play major roles but the poor correlation between mRNA and protein abundance during parasite development indicates that translational and/or post-translational controls are also important. </p>\r\n' + '<p class="govuk-body"This project seeks to globally and quantitatively assess the rate at which each mRNA is actively translated at any particular time by applying a recently-described technology that couples the ability to isolate the specific &ldquo;footprints&rdquo; of mRNAs that are occupied by ribosomes (an indicator of translation) with the depth and breadth of next generation sequencing. </p>\r\n' + '<p class="govuk-body"Aim 1 will establish the ribosome protection technology in <em>T. brucei</em>, using readily cultured non-pathogenic insect stage forms. It will optimize conditions for nuclease treatment to preserve mRNA fragments protected by ribosomes and for the generation of unbiased libraries from the RNA samples for next generation sequencing. It will also include maturation of the bioinformatics pipeline to analyze resulting sequence data. </p>\r\n' + '<p class="govuk-body"Aim 2 will expand into the pathogenic, mammalian stages of the parasite, and identify genes that are regulated at the level of translation during <em>T. brucei </em>development in infective as compared to non-infective forms. The proposed work will provide an important new tool for studying trypanosomatid gene expression, yielding a comprehensive view of the role of translational control in <em>T. brucei </em>and clues to it mechanisms, as well as new information on the extent of translation of individual gene products, such as potential drug targets. </p>\r\n' + '<p class="govuk-body"In addition, it should resolve the current debate over the function of the numerous recently identified RNAs that contain only short open-reading frames, and has the potential to identify non-canonical protein-coding open-reading frames, thus significantly enhancing the ongoing genome annotation.</p>'
};

/* **************

    Index

*************** */
function classificationsIndexGet(req, res) {
  let viewData;

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
  }

  viewData = {};
  return res.render('prototypes/classifications/index', viewData);
}

function classificationsIndexPost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/classifications/index');
}

/* **************

    Home

*************** */
function classificationsHomeGet(req, res) {
  let viewData;

  viewData = {};
  return res.render('prototypes/classifications/home', viewData);
}

function classificationsHomePost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/classifications/home');
}

/* **************

    Opportunities

*************** */
function classificationsOpportunitiesGet(req, res) {
  let viewData;

  viewData = {
    prototypeData
  };

  return res.render('prototypes/classifications/opportunities', viewData);
}

function classificationsOpportunitiesPost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/classifications/opportunities');
}

/* **************

    Applications

*************** */
function classificationsApplicationsGet(req, res) {
  let viewData;

  viewData = {
    prototypeData
  };
  return res.render('prototypes/classifications/applications', viewData);
}

function classificationsApplicationsPost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/classifications/applications');
}

/* **************

    Application overview

*************** */
function classificationsApplicationOverviewGet(req, res) {
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
  return res.render('prototypes/classifications/application-overview', viewData);
}

function classificationsApplicationOverviewPost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/classifications/application-overview');
}

/* **************

    Add research area

*************** */
function classificationsResearchAreasGet(req, res) {
  let viewData;

  // console.log(allTheCats);

  viewData = {
    prototypeData,
    allTheCats
  };
  return res.render('prototypes/classifications/research-areas', viewData);
}

function classificationsResearchAreasPost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/classifications/research-areas');
}

/* **************

    Add research area RAW

*************** */
function classificationsResearchAreasRawGet(req, res) {
  let viewData;

  viewData = {
    prototypeData,
    allTheCats
  };
  return res.render('prototypes/classifications/research-areas-raw', viewData);
}

/* **************

    Add research tags

*************** */
function classificationsAddGet(req, res) {
  let viewData;

  let finalNumber;
  let searchFail;
  let resultsArrayClassifications = [];
  let resultsArrayRouting = [];
  let resultsArrayQualifiers = [];
  let resultsArrayReporting = [];

  let countClassifications = 0;
  let countRouting = 0;
  let countQualifiers = 0;
  let countReporting = 0;

  function doTheSearch(searchTextPassed) {
    let searchText = searchTextPassed;
    searchFail = false;

    /* Search main taxonomies list */
    for (let i = 0; i < flatCatsList.length; i++) {
      let tempA = flatCatsList[i].a;
      let tempS = flatCatsList[i].s;
      let tempT = flatCatsList[i].t;
      if (tempA.includes(searchText) || tempS.includes(searchText) || tempT.includes(searchText)) {
        //console.log(tempA + ' : ' + tempS + ' : ' + tempT);
        resultsArrayClassifications.push(flatCatsList[i]);
        countClassifications++;
      }
    }

    /* search routing tags */
    for (let j = 0; j < routingTags.length; j++) {
      // let tempRoutingCouncil = routingTags[j].council;
      let tempRoutingName = routingTags[j].name;
      // console.log(routingTags[j]);

      tempRoutingName = tempRoutingName.toLowerCase();
      //console.log('tempRoutingName = ' + tempRoutingName);

      if (tempRoutingName.includes(searchText) || tempRoutingName === searchText) {
        //console.log('tempRoutingName = ' + tempRoutingName + ' AND searchText = ' + searchText);
        resultsArrayRouting.push(routingTags[j]);
        countRouting++;
      }
    }

    /* search qualifier tags */
    for (let k = 0; k < qualifierTags.length; k++) {
      let tempQualifier = qualifierTags[k];
      //console.log('tempQualifier = ' + tempQualifier + 'and searchText = ' + searchText);
      if (tempQualifier.toLowerCase().includes(searchText)) {
        resultsArrayQualifiers.push(qualifierTags[k]);
        countQualifiers++;
      }
    }

    /* search reporting tags */
    for (let l = 0; l < reportingTags.length; l++) {
      let tempReporting = reportingTags[l];
      if (tempReporting.toLowerCase().includes(searchText)) {
        resultsArrayReporting.push(reportingTags[l]);
        countReporting++;
      }
    }

    prototypeData.countClassifications = countClassifications;
    prototypeData.countRouting = countRouting;
    prototypeData.countQualifiers = countQualifiers;
    prototypeData.countReporting = countReporting;
    let countAll = countClassifications + countRouting + countQualifiers + countReporting;
    prototypeData.countAll = countAll;
    //console.log(countClassifications + ' + ' + countRouting + ' + ' + countQualifiers + ' + ' + countReporting + ' = ' + countAll);

    // console.log(resultsArrayClassifications);

    return resultsArrayClassifications;
    // return searchText;
  }

  let searchTermTemp = prototypeData.searchQuery;

  console.log('searchTermTemp = ' + searchTermTemp);

  if (searchTermTemp === ' ' || searchTermTemp === '' || searchTermTemp === null) {
    searchFail = true;
  } else {
    doTheSearch(searchTermTemp);
  }

  prototypeData.searchFail = searchFail;

  //console.log(resultsArrayClassifications);
  //console.log(resultsArrayRouting);
  //console.log(resultsArrayQualifiers);

  if (resultsArrayClassifications.length > 1 || resultsArrayRouting.length > 1 || resultsArrayQualifiers.length > 1 || resultsArrayReporting.length > 1) {
    prototypeData.haveSearchResults = true;
  } else {
    prototypeData.haveSearchResults = false;
  }

  viewData = {
    prototypeData,
    resultsArrayClassifications,
    resultsArrayRouting,
    resultsArrayQualifiers,
    resultsArrayReporting
  };

  return res.render('prototypes/classifications/research-tags', viewData);
}

function classificationsAddPost(req, res) {
  const { searchQuery, tagSearch, saveAndReturn } = req.body;
  // console.log(req.body);
  // console.log(allTheCats);
  console.log('searchQuery = ' + searchQuery);

  let classificationSavedTags = [];
  let routingSavedTags = [];
  let qualifierSavedTags = [];
  let reportingSavedTags = [];

  let formStuff = req.body;
  for (const [key, value] of Object.entries(formStuff)) {
    //console.log(`${key} ${value}`);

    if (key.includes('classification')) {
      classificationSavedTags.push(value);
    }
    if (key.includes('routing')) {
      routingSavedTags.push(value);
    }
    if (key.includes('qualifier')) {
      qualifierSavedTags.push(value);
    }
    if (key.includes('reporting')) {
      reportingSavedTags.push(value);
    }

    //console.log('key = ' + key);

    prototypeData.classificationSavedTags = classificationSavedTags;
    prototypeData.routingSavedTags = routingSavedTags;
    prototypeData.qualifierSavedTags = qualifierSavedTags;
    prototypeData.reportingSavedTags = reportingSavedTags;
    req.session[`${key}`] = `${value}`;
  }

  /*console.log('prototypeData = ');
  console.log(prototypeData);
  console.log('req.session = ');
  console.log(req.session);*/

  prototypeData.searchQuery = searchQuery.toLowerCase();

  let redirect = '/prototypes/classifications/research-tags';
  // let submitButtonValue = req.body.saveAndReturn;
  // console.log('submitButtonValue = ' + submitButtonValue);
  /*console.log(tagSearch + ' ' + saveAndReturn);
  console.log(req.body.tagSearch);*/

  if (saveAndReturn === 'saveAndReturn') {
    prototypeData.searchQuery = null;
    redirect = '/prototypes/classifications/application-overview';
  }

  return res.redirect(redirect);
}