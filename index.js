var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://localhost:27017/Img"
var app = express();
var fs = require('fs');



const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
		const collection = client.db("Img").collection("store");
  		collection.find().toArray((error, doc) => {
  			if (doc) {
  				//console.log(doc);
  			}
  		})

  		var file2 = __dirname + '/' + 'data.txt'
		var file = __dirname + '/' + '1.jpg';

		var imageAsBase64 = fs.readFileSync(file, 'base64');



		var base64data = imageAsBase64.toString();


			collection.insertOne({imgObject: base64data}, (er, res) => {
	  			console.log(res);
	  		})


});


app.get('/', (req, res)=> {
	client.connect(err => {
		const collection = client.db("Img").collection("store");

  		collection.find().toArray((error, doc) => {
  			if (doc) {
  				
  					 var thumb = doc[0].imgObject.toString();


  					 console.log(thumb);


  					 var thumbSrc = `data:image/jpg;base64,${thumb} `;  

  					 console.log(thumbSrc, '----------------------------');


  			
  				res.send("<img src='"+thumbSrc+"'>");

				
  			}
  		})


	});
	
})



app.get('/test', (req, res, next) => {
	res.render('index');
});




app.listen('3400', () => {
	console.log('Server is running at port 3400');
}) 


