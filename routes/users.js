var express = require('express');
var router = express.Router();
var models = require('../server/models')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send(
// {users: [
//     {id: 1, username: "Count Chocula"},
//     {id: 2, username: "Munch Monster"},
//   ]
//
//
// })
//
// });


router.get('/', function(req, res, next) {
    models.User.findAll().then(function(users){
      // console.log(users, fields)
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({users: users}))
  })
})


// router.post('/', function(req, res, next) => {
//   models.User.findAll({where: {id: 1}}).then(function(user) {
//     res.send(user)
//   })
// });


router.post('/', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.users}`,
  );
});

module.exports = router;
