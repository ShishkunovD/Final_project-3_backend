const express = require('express');
const router = express.Router();

const {
  getAllGoods,
  createNewGood
} = require('../controllers/task.controller');

router.get('/getGoods', getAllGoods);
router.post('/createGood', createNewGood);

module.exports = router;