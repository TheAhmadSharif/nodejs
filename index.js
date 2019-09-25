var fs = require('fs');

fs.readdir(__dirname, function (err, files) {
  console.log(files);
});

fs.readFile('data.txt', function(err, data) {
    console.log(data.toString(), 'Data');
  });



fs.writeFile('data_1.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});


// Synchronous read
var data = fs.readFileSync('data.txt');
console.log("Synchronous read: " + data.toString())