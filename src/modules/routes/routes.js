const express = require('express');
const router = express.Router();

const {
  getAllGoods
} = require('../controllers/task.controller');

router.get('/getGoods', getAllGoods);

module.exports = router;