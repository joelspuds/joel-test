'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.motherloadSearchGet = motherloadSearchGet;
exports.motherloadSearchPost = motherloadSearchPost;
exports.motherloadResultsGet = motherloadResultsGet;
exports.motherloadTypeaheadGet = motherloadTypeaheadGet;
exports.motherloadTypeaheadConfigGet = motherloadTypeaheadConfigGet;
exports.motherloadTypeaheadConfigPost = motherloadTypeaheadConfigPost;
let generalData = require('./data');
let genericFunctions = require('./generic');
let motherLoadData = require('./motherLoad3');
let miniMotherLoadData = require('./miniMotherLoad');

// ************************************************************************
//
//       AHRC opportunity
//
// ************************************************************************

// let refreshCounter = 0;

function motherloadSearchGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/molecules/organisations-motherload-search', viewData);
}

/*

{
   "name": "StellariSE Limited",
   "orgID": 55050
},

* */

function motherloadSearchPost(req, res) {
  const { searchTerm } = req.body;

  let searchTermTemp = searchTerm;

  let motherLoad = motherLoadData.organisationsMotherLoad;
  let resultArray = [];
  let searchFail;

  if (searchTermTemp == 'the' || searchTermTemp == 'The') {
    searchTermTemp = 'the ';
  }

  console.log('searchTermTemp = ' + searchTermTemp);

  if (searchTermTemp === ' ' || searchTermTemp === '' || searchTermTemp === null) {
    searchFail = true;
  } else {
    searchFail = false;
    for (let i = 0; i < motherLoad.length; i++) {
      let item = motherLoad[i];
      let tempName = item.n;
      if (tempName.toLowerCase().includes(searchTermTemp.toLowerCase())) {
        //console.log(tempName);
        resultArray.push(tempName);
      }
    }
  }

  // console.log('search term = ' + searchTerm);

  if (resultArray.length === 0) {
    searchFail = true;
  }

  req.session.resultArray = resultArray;
  req.session.searchTerm = searchTerm;
  req.session.searchFail = searchFail;
  return res.redirect('/prototypes/molecules/organisations-motherload-results');
}
/*
*
*   Results page
*
* */
function motherloadResultsGet(req, res) {
  let viewData;

  let resultArray = req.session.resultArray;
  let searchTerm = req.session.searchTerm;
  let searchFail = req.session.searchFail;

  viewData = {
    resultArray,
    searchTerm,
    searchFail
  };

  return res.render('prototypes/molecules/organisations-motherload-results', viewData);
}

// ************************************************************************
//
//       AHRC opportunity load all 55k records into the DOM
//
// ************************************************************************

// let refreshCounter = 0;

function motherloadTypeaheadGet(req, res) {
  let viewData;

  let orgNumber = parseInt(req.session.orgNumber);
  req.session.orgNumber = null;
  if (orgNumber < 1) {
    orgNumber = 55052;
  }

  console.log('orgNumber = ' + orgNumber);

  let newOrgsArray = [];
  let motherLoad = motherLoadData.organisationsMotherLoad;
  // let motherLoad = miniMotherLoadData.organisationsMiniMotherLoad;
  // console.log(motherLoad);

  function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }
  // getRandomNumber(50);

  // let randomNumber  = Math.floor(Math.random() * 20);
  // getRandomNumber(100);

  /*if (orgNumber > 1 && orgNumber < 10000 ) {
    for (let i = 1; i < motherLoad.length; i + getRandomNumber(10) ) {
      motherLoad.splice(1, getRandomNumber(5));
    }
    if (motherLoad.length >= orgNumber) {
      return;
    }
  } else if (orgNumber > 10001 && orgNumber < 40000 ) {
    for (let i = 1; i < motherLoad.length; i + getRandomNumber(5) ) {
      motherLoad.splice(1, getRandomNumber(2));
    }
    if (motherLoad.length >= orgNumber) {
      return;
    }
  } else if (orgNumber > 40001 ) {
    for (let i = 1; i < motherLoad.length; i + getRandomNumber(5) ) {
      motherLoad.splice(1, getRandomNumber(2));
    }
    if (motherLoad.length >= orgNumber) {
      return;
    }
  }*/

  if (orgNumber > 1) {
    for (let i = 1; i <= motherLoad.length; i + getRandomNumber(10)) {
      motherLoad.splice(i, getRandomNumber(5));
    }
    if (motherLoad.length >= orgNumber) {
      return;
    }
  }

  viewData = {
    motherLoad
  };

  return res.render('prototypes/molecules/organisations-typeahead', viewData);
}

// ************************************************************************
//
//       motherloadTypeaheadConfigGet
//
// ************************************************************************

// let refreshCounter = 0;

function motherloadTypeaheadConfigGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/molecules/organisations-typeahead-config', viewData);
}

function motherloadTypeaheadConfigPost(req, res) {
  const { orgNumber } = req.body;

  // let orgNumber = orgNumber;

  console.log(orgNumber);

  req.session.orgNumber = orgNumber;

  return res.redirect('/prototypes/molecules/organisations-typeahead');
}