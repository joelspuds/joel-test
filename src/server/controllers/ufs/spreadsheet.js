// spreadsheet

export function spreadSheetGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/example-journey/application/spreadsheet', viewData);
}

export function spreadSheetPost(req, res) {
  const { formSpreadsheet } = req.body;

  console.log('formSpreadsheet = ' + formSpreadsheet);

  return res.redirect('/prototypes/example-journey/application/spreadsheet');
}

/*
*
*   Spreadsheet example - get data
*
* */
export function spreadSheetExampleGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/molecules/spreadsheet/index', viewData);
}

export function spreadSheetExamplePost(req, res) {
  const { data, dataHolder, colCount } = req.body;

  let redirectURL = '/prototypes/molecules/spreadsheet/display';
  // let redirectURL = '/prototypes/molecules/spreadsheet/';

  console.log('colCount = ' + colCount);
  console.log('data = ');
  console.log(data);

  req.session.colCount = colCount;
  req.session.spreadSheetData = dataHolder;
  console.log('dataHolder = ');
  console.log(dataHolder);

  // console.log('spreadSheetData = ' + dataHolder);

  return res.redirect(redirectURL);
}

/*
*
*   Spreadsheet example - spew it all out
*
* */
export function spreadSheetExampleDisplayGet(req, res) {
  let viewData, spreadSheetData, colCount;

  spreadSheetData = req.session.spreadSheetData;
  colCount = req.session.colCount;

  let data;
  let tempArray = [];
  let resultArray = [];
  let headerRow;

  if (spreadSheetData) {
    console.log('the data from session:');
    console.log(spreadSheetData);
    console.log(colCount);

    data = spreadSheetData.split(',');

    for (let i = 0; i < data.length; i++) {
      tempArray.push(data[i]);
      if ((i + 1) % colCount === 0) {
        resultArray.push(tempArray);
        tempArray = [];
      }
    }

    // remove header into it's own array
    headerRow = resultArray[0];
    resultArray.splice(0, 1);

    console.log('data = ');
    console.log(data);

    console.log('result = ');
    console.log(resultArray);

    console.log('headerRow = ');
    console.log(headerRow);
  }

  viewData = {
    spreadSheetData,
    resultArray,
    headerRow,
  };

  return res.render('prototypes/molecules/spreadsheet/display', viewData);
}
