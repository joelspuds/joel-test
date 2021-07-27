'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spreadSheetGet = spreadSheetGet;
exports.spreadSheetPost = spreadSheetPost;
exports.spreadSheetExampleGet = spreadSheetExampleGet;
exports.spreadSheetExamplePost = spreadSheetExamplePost;
exports.spreadSheetExampleDisplayGet = spreadSheetExampleDisplayGet;
// spreadsheet

function spreadSheetGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/example-journey/application/spreadsheet', viewData);
}

function spreadSheetPost(req, res) {
  const { formSpreadsheet } = req.body;

  console.log('formSpreadsheet = ' + formSpreadsheet);

  return res.redirect('/prototypes/example-journey/application/spreadsheet');
}

/*
*
*   Spreadsheet example - get data
*
* */
function spreadSheetExampleGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/molecules/spreadsheet/index', viewData);
}

function spreadSheetExamplePost(req, res) {
  const { data, dataHolder, colCount } = req.body;

  console.log('colCount = ' + colCount);

  req.session.colCount = colCount;
  req.session.spreadSheetData = dataHolder;

  // console.log('spreadSheetData = ' + dataHolder);

  return res.redirect('/prototypes/molecules/spreadsheet/display');
}

/*
*
*   Spreadsheet example - spew it all out
*
* */
function spreadSheetExampleDisplayGet(req, res) {
  let viewData, spreadSheetData, colCount;

  spreadSheetData = req.session.spreadSheetData;
  colCount = req.session.colCount;

  /*console.log('the data from session:');
  console.log(spreadSheetData);
  console.log(colCount);*/

  let data = [];
  data = spreadSheetData.split(',');
  let tempArray = [];
  let resultArray = [];
  for (let i = 0; i < data.length; i++) {
    tempArray.push(data[i]);
    if ((i + 1) % colCount === 0) {
      resultArray.push(tempArray);
      tempArray = [];
    }
  }

  // remove header into it's own array
  let headerRow = resultArray[0];
  resultArray.splice(0, 1);

  /*console.log('data = ');
  console.log(data);
   console.log('result = ');
  console.log(resultArray);
   console.log('headerRow = ');
  console.log(headerRow);*/

  viewData = {
    spreadSheetData,
    resultArray,
    headerRow
  };

  return res.render('prototypes/molecules/spreadsheet/display', viewData);
}