const path = require('path');
const express = require('express');

const toolController = require('../controllers/toolController.js');

const router = express.Router();

router.use(express.static(path.resolve(__dirname, '../../build')));

router.get('/', (req, res) =>
  res.sendFile(path.resolve(__dirname, '../build/index.html'))
);

router.get('/data', (req, res) => {
  return res.status(200).json(res.locals.clusterData);
});

module.exports = router;
