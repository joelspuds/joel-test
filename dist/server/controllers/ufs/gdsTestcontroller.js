'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gdsTestIndexGet = gdsTestIndexGet;
exports.gdsTestIndexPost = gdsTestIndexPost;
exports.gdsTestStartGet = gdsTestStartGet;
exports.gdsTestStartPost = gdsTestStartPost;
exports.gdsTestNameGet = gdsTestNameGet;
exports.gdsTestNamePost = gdsTestNamePost;
exports.gdsTestAddressGet = gdsTestAddressGet;
exports.gdsTestAddressPost = gdsTestAddressPost;
exports.gdsTestDestinationGet = gdsTestDestinationGet;
exports.gdsTestDestinationPost = gdsTestDestinationPost;
exports.gdsTestConfirmGet = gdsTestConfirmGet;
exports.gdsTestConfirmPost = gdsTestConfirmPost;
exports.gdsTestEndGet = gdsTestEndGet;
exports.gdsTestEndPost = gdsTestEndPost;
let generalData = require('./data');
let genericFunctions = require('./generic');

const allDataConst = {
  serviceName: 'Space travel service',
  serviceURL: '/prototypes/gds-test/start'
};

let appData = {
  firstName: '',
  lastName: '',
  addressLine1: '',
  addressLine2: '',
  addressTown: '',
  addressCounty: '',
  addressPostcode: '',
  destination: ''
};

/* **************

    index

*************** */
function gdsTestIndexGet(req, res) {
  let viewData;

  /*let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    appData = {
      firstName: '',
      lastName: '',
      addressLine1: '',
      addressLine2: '',
      addressTown: '',
      addressCounty: '',
      addressPostcode: '',
      destination: '',
    };
  }*/
  console.log(allDataConst);
  console.log(appData);

  viewData = {
    allDataConst
  };
  return res.render('prototypes/gds-test/index', viewData);
}

function gdsTestIndexPost(req, res) {
  const {} = req.body;

  // req.session.opportunityName = opportunityName;

  return res.redirect('/prototypes/gds-test/index');
}

/* **************

    start

*************** */
function gdsTestStartGet(req, res) {
  let viewData;

  viewData = {
    allDataConst
  };
  return res.render('prototypes/gds-test/start', viewData);
}

function gdsTestStartPost(req, res) {
  const {} = req.body;

  // req.session.opportunityName = opportunityName;

  return res.redirect('/prototypes/gds-test/start');
}

/* **************

    name

*************** */
function gdsTestNameGet(req, res) {
  let viewData;

  console.log(appData);
  viewData = {
    appData,
    allDataConst
  };
  return res.render('prototypes/gds-test/name', viewData);
}

function gdsTestNamePost(req, res) {
  const { firstName, lastName } = req.body;
  let nameError = false;

  appData.firstName = firstName;
  appData.lastName = lastName;

  if (firstName === '' || !firstName || firstName === ' ') {
    appData.firstNameError = true;
    appData.nameError = true;
  } else {
    appData.firstNameError = false;
    appData.nameError = false;
  }

  if (lastName === '' || !lastName || lastName === ' ') {
    appData.lastNameError = true;
    appData.nameError = true;
  } else {
    appData.lastNameError = false;
    appData.nameError = false;
  }

  let redirectURL = '/prototypes/gds-test/address';

  if (appData.nameError === true) {
    redirectURL = '/prototypes/gds-test/name';
  }

  return res.redirect(redirectURL);
}

/* **************

    address

*************** */
function gdsTestAddressGet(req, res) {
  let viewData;

  console.log(appData);
  viewData = {
    appData,
    allDataConst
  };
  return res.render('prototypes/gds-test/address', viewData);
}

function gdsTestAddressPost(req, res) {
  const { addressLine1, addressLine2, addressTown, addressCounty, addressPostcode } = req.body;

  let addressError = false;

  appData.addressLine1 = addressLine1;
  appData.addressLine2 = addressLine2;
  appData.addressTown = addressTown;
  appData.addressCounty = addressCounty;
  appData.addressPostcode = addressPostcode;

  let redirectURL = '/prototypes/gds-test/destination';

  if (addressError === true) {
    redirectURL = '/prototypes/gds-test/address';
  }

  return res.redirect(redirectURL);
}

/* **************

    destination

*************** */
function gdsTestDestinationGet(req, res) {
  let viewData;

  console.log(appData);
  viewData = {
    appData,
    allDataConst
  };
  return res.render('prototypes/gds-test/destination', viewData);
}

function gdsTestDestinationPost(req, res) {
  const { destination } = req.body;
  appData.destination = destination;

  let destinationError = false;

  let redirectURL = '/prototypes/gds-test/confirm';

  if (destinationError === true) {
    redirectURL = '/prototypes/gds-test/destination';
  }

  return res.redirect(redirectURL);
}

/* **************

    confirm

*************** */
function gdsTestConfirmGet(req, res) {
  let viewData;

  viewData = {
    appData,
    allDataConst
  };
  return res.render('prototypes/gds-test/confirm', viewData);
}

function gdsTestConfirmPost(req, res) {
  const {} = req.body;

  // req.session.opportunityName = opportunityName;

  return res.redirect('/prototypes/gds-test/end');
}

/* **************

    end

*************** */
function gdsTestEndGet(req, res) {
  let viewData;

  appData = {
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    addressTown: '',
    addressCounty: '',
    addressPostcode: '',
    destination: '',
    firstNameError: false,
    nameError: false,
    lastNameError: false
  };

  viewData = {
    allDataConst
  };
  return res.render('prototypes/gds-test/end', viewData);
}

function gdsTestEndPost(req, res) {
  const {} = req.body;

  // req.session.opportunityName = opportunityName;

  return res.redirect('/prototypes/gds-test/end');
}