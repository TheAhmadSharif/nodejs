const express = require('express');
const app = express();

const fs = require('fs');
const jwt = require('jsonwebtoken');


const secretKey = 'helloWorld';

var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZm9vYmFyIiwiaWF0IjoxNTcwMDAxODU1LCJleHAiOjE1NzAwMDIxNTV9.DNeOfHjlPVYp7q75rgcCT1GinukfJeWk1kjJFYYpFc4';

/*jwt.sign({
  data: 'foobar'
}, secretKey, { expiresIn: 60 * 5 }, (error, token) => {
	console.log(token);
});
*/



jwt.verify(token, secretKey, function(err, decoded) {
  console.log(decoded) // bar
});