var express = require('express');
const fileUpload = require('express-fileupload');

var app = express();
app.use(fileUpload());

app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
    res.render('index.html');
});


app.post('/upload', function(req, res) {
  let sampleFile = req.files.foo;

  console.log(sampleFile);

  sampleFile.mv('/home/ahmad/Desktop/' + '/' + sampleFile.name, function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
});


app.listen(3400, () => {
	console.log('Server is running at port 3400');
})