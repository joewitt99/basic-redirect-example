var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var sessionToken = req.query.sessionToken;
  var redirectUri = req.query.fromURI;
  res.redirect(`${redirectUri}?sessionToken=${sessionToken}`);
});

module.exports = router;
