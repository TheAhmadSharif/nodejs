const fs = require('fs');
const mongodb = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new mongodb.MongoClient(uri);


client.connect((err)=> {
	var db = client.db("gridFSdb");
	var bucket = new mongodb.GridFSBucket(db);

	/*fs.createReadStream('./6.jpg').
		pipe(bucket.openUploadStream('asdasdlkm.jpg')).
		on('error', (error) => {
			console.log(error);
		}).
		on('finish', () => {
			console.log('done');
			process.exit(0);
		})*/;

	bucket.openDownloadStreamByName('asdasdlkm.jpg').
	  pipe(fs.createWriteStream('./alskjdkd.jpg')).
	  on('error', function(error) {
	    assert.ifError(error);
	  }).
	  on('end', function() {
	    console.log('done!');
	    process.exit(0);
	  });




});
