const Good = require('../../db/models/task/index');

module.exports.getAllGoods = (req, res) => {
  Good.find().then(result => {
    res.send({ data: result });
  });
}

module.exports.createNewGood = (req, res) => {
  if (req.body.where !== undefined && typeof req.body.howMuch === 'number' && (typeof req.body.day === 'string' && req.body.day.length === 10)) {
    const good = new Good(req.body)
    good.save().then(result => {
      res.send({ data: result });
    })
  } else {
    res.status(404).send('Error. Please enter all values correctly');
  }
}

module.exports.deleteGood = (req, res) => {
  if(req.query.id !== undefined) {
    const param = req.query.id;
    Good.deleteOne({ _id: param }).then(result => {
      Good.find().then(result => {
        res.send({ data:result });
      })
    })
  } else {
    res.status(404).send('Error. Please enter id');
  }
}
