var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(
{users: [
    {id: 1, username: "Count Chocula"},
    {id: 2, username: "Munch Monster"},
  ]


})

});



router.post('/', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.users}`,
  );
});

module.exports = router;
