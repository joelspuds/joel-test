let generalData = require('./data');
let genericFunctions = require('./generic');

const allDataConst = {
  serviceName: 'Space travel service',
  serviceURL: '/prototypes/gds-test/start',
};

let appData = {
  firstName: '',
  lastName: '',
  addressLine1: '',
  addressLine2: '',
  addressTown: '',
  addressCounty: '',
  addressPostcode: '',
  destination: '',
};

/* **************

    index

*************** */
export function gdsTestIndexGet(req, res) {
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
    allDataConst,
  };
  return res.render('prototypes/gds-test/index', viewData);
}

export function gdsTestIndexPost(req, res) {
  const {} = req.body;

  // req.session.opportunityName = opportunityName;

  return res.redirect('/prototypes/gds-test/index');
}

/* **************

    start

*************** */
export function gdsTestStartGet(req, res) {
  let viewData;

  viewData = {
    allDataConst,
  };
  return res.render('prototypes/gds-test/start', viewData);
}

export function gdsTestStartPost(req, res) {
  const {} = req.body;

  // req.session.opportunityName = opportunityName;

  return res.redirect('/prototypes/gds-test/start');
}

/* **************

    name

*************** */
export function gdsTestNameGet(req, res) {
  let viewData;

  console.log(appData);
  viewData = {
    appData,
    allDataConst,
  };
  return res.render('prototypes/gds-test/name', viewData);
}

export function gdsTestNamePost(req, res) {
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
export function gdsTestAddressGet(req, res) {
  let viewData;

  console.log(appData);
  viewData = {
    appData,
    allDataConst,
  };
  return res.render('prototypes/gds-test/address', viewData);
}

export function gdsTestAddressPost(req, res) {
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
export function gdsTestDestinationGet(req, res) {
  let viewData;

  console.log(appData);
  viewData = {
    appData,
    allDataConst,
  };
  return res.render('prototypes/gds-test/destination', viewData);
}

export function gdsTestDestinationPost(req, res) {
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
export function gdsTestConfirmGet(req, res) {
  let viewData;

  viewData = {
    appData,
    allDataConst,
  };
  return res.render('prototypes/gds-test/confirm', viewData);
}

export function gdsTestConfirmPost(req, res) {
  const {} = req.body;

  // req.session.opportunityName = opportunityName;

  return res.redirect('/prototypes/gds-test/end');
}

/* **************

    end

*************** */
export function gdsTestEndGet(req, res) {
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
    lastNameError: false,
  };

  viewData = {
    allDataConst,
  };
  return res.render('prototypes/gds-test/end', viewData);
}

export function gdsTestEndPost(req, res) {
  const {} = req.body;

  // req.session.opportunityName = opportunityName;

  return res.redirect('/prototypes/gds-test/end');
}
