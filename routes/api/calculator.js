const express = require('express');
const router = express.Router();

const {
  saveExpression,
  getHistory,
  clearHistory,
} = require('../../controller/Calculator');

router.post('/save-expression', saveExpression);

router.post('/get-history', getHistory);

router.post('/clear-history', clearHistory);

module.exports = router;
