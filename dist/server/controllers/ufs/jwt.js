'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JWTGet = JWTGet;
exports.JWTPost = JWTPost;
const jwt = require('jsonwebtoken');
const fs = require('fs');
//
const privateKeyFile = './private.key';
const apiKey = 'phk3goz7y02jvj65em0m21azcq1qr7abduimch9isoe4jkor';
// const apiKey = 'l2nqkzkytjj1cdcih5cik090v6f75o1pa04irfeow06n7idc';
// 9c8fd1e3ff29c01f4bf1aa344634386b47824cb1a054d7d5b773f4cee7b44ba9
const payload = {
  sub: 'joelTest',
  name: 'Joel Test',
  exp: Math.floor(Date.now() / 1000) + 60 * 10
};
const privateKey = fs.readFileSync(privateKeyFile).toString();
const token = jwt.sign(payload, privateKey, { algorithm: 'RS256' });

function JWTGet(req, res) {
  let viewData;
  viewData = {};

  console.log(privateKey);

  return res.render('prototypes/jwt/index', viewData);
}

function JWTPost(req, res) {
  try {
    res.json({ token });
  } catch (e) {
    res.status(500);
    res.send('Failed to generate jwt token.');
    console.error(e.message);
  }
}