let generalData = require('./data');
let genericFunctions = require('./generic');
let motherLoadData = require('./motherLoad3');

// ************************************************************************
//
//       AHRC opportunity
//
// ************************************************************************

// let refreshCounter = 0;

export function motherloadSearchGet(req, res) {
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

export function motherloadSearchPost(req, res) {
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

export function motherloadResultsGet(req, res) {
  let viewData;

  let resultArray = req.session.resultArray;
  let searchTerm = req.session.searchTerm;
  let searchFail = req.session.searchFail;

  viewData = {
    resultArray,
    searchTerm,
    searchFail,
  };

  return res.render('prototypes/molecules/organisations-motherload-results', viewData);
}

/*export function motherloadSearchPost(req, res) {
    const {} = req.body;

    let tempRefreshCounter = req.session.refreshCounter + 1;
    req.session.refreshCounter = tempRefreshCounter;
    return res.redirect('/prototypes/molecules/organisations-motherload-results');
}*/
