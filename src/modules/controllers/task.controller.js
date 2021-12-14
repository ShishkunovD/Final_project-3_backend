const Good = require('../../db/models/task/index');

module.exports.getAllGoods = (req, res) => {
  Good.find().then(result => {
      res.send({ data: result });
  })
}
