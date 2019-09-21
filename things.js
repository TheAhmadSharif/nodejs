var express = require('express');

var router = express.Router();


router.get('/', function (a,b) {
	b.send('Hello World!')
})



module.exports = router;