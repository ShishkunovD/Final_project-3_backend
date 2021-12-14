const express = require('express');
const router = express.Router();

const {
  getAllGoods,
  createNewGood,
  deleteGood
} = require('../controllers/task.controller');

router.get('/getGoods', getAllGoods);
router.post('/createGood', createNewGood);
router.delete('/deleteGood', deleteGood);

module.exports = router;