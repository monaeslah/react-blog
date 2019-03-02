var express = require('express');
var router = express.Router();
const path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'my blog' });
});
router.get('/panel*',(req,res) => {
res.sendFile('index.html', {root : path.join(__dirname, '../panel/build/')})
})
module.exports = router;
