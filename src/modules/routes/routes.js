const express = require('express');
const router = express.Router();

const {
  getAllGoods,
  createNewGood,
  deleteGood,
  updateGood
} = require('../controllers/task.controller');

router.get('/getGoods', getAllGoods);
router.post('/createGood', createNewGood);
router.delete('/deleteGood', deleteGood);
router.patch('/updateGood', updateGood);

module.exports = router;