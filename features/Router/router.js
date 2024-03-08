
const express = require('express');
const router = express.Router();
const {allCharacters,alphaNumerics,alphabeths,numerics,alphaSymbols,numericSymbols}  = require('../controller/passwordController');

router.route('/allCharacters').post(allCharacters);
router.route('/alphaNumeric').post(alphaNumerics);
router.route('/alphabeth').post(alphabeths);
router.route('/numeric').post(numerics);
router.route('/alphaSymbol').post(alphaSymbols);
router.route('/numericSymbol').post(numericSymbols)


module.exports = router