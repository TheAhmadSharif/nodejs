const mongodb = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new mongodb.MongoClient(uri);

client.connect((err) => {
	if (!err) {
		console.log('connection created');
	}
	const newDB = client.db("YourNewDatabase");
	newDB.createCollection("YourCreatedCollectionName");

})