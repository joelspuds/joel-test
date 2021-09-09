let generalData = require('./data');
let genericFunctions = require('./generic');
let designData = require('./design-data');

/* **************

    EDI index

*************** */
export function designHomeGet(req, res) {
  let viewData;

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
  }

  viewData = {};

  return res.render('design/index', viewData);
}

export function designHomePost(req, res) {
  const {} = req.body;
  let redirectURL = '/design/';
  return res.redirect(redirectURL);
}
/* **************

    Components page

*************** */
// index
export function designComponentsGet(req, res) {
  let viewData;
  let components = designData.components;

  // console.log(components);

  viewData = {
    components,
  };

  return res.render('design/components/index', viewData);
}

// actual component
export function designComponentGet(req, res) {
  let viewData;

  let components = designData.components;
  // console.log(components);

  let urlTail = req.url;
  // console.log('urlTail = ' + urlTail);
  let urlChunks = urlTail.split('/');
  //  console.log('urlChunks = ' + urlChunks);
  let lastChunk = urlChunks[urlChunks.length - 1];
  console.log('lastChunk = ' + lastChunk);

  let chunkFile = './partials/' + lastChunk + '.njk';

  function convertChunkToTitle(chunk) {
    let tempChunk = chunk.replace(/-/g, ' ');
    tempChunk = tempChunk.charAt(0).toUpperCase() + tempChunk.slice(1);

    return tempChunk;
  }

  let newChunkAsString = convertChunkToTitle(lastChunk);

  const Fs = require('fs');
  const Path = require('path');
  const thisPath = Path.join(__dirname, '../../views/design/components/partials/' + lastChunk + '.njk');

  if (Fs.existsSync(thisPath) === false) {
    chunkFile = './partials/error.njk';
    // console.log('is false');
  }

  viewData = {
    components,
    chunkFile,
    lastChunk,
    newChunkAsString,
  };

  return res.render('design/components/component', viewData);
}
