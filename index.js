const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Student', { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', ()=> {
	console.log(error);
})

db.on('open', ()=> {
	// console.log('success');
})

const StudentSchema = mongoose.Schema({
	name: String,
	age: Number
});

const dbModel = mongoose.model("student", StudentSchema); // Collection Creation



/* Mongoose Find */
dbModel.find({"_id" : "5d9371cc4f552502c86e2aab"}, (error, success) => {
	console.log(success);
	if (error) {
		console.log(error);
	}
})



/* Mongoose Delete */
dbModel.deleteOne({"_id" : "5d9371cc4f552502c86e2aab"}, (error, success) => {
	if (error) {
		console.log(error);
	}
	else {
		console.log(success);
	}
})


const StudentDocument = new dbModel({ name: "AhmadSharif", age: 24});


/* Mongoose Insert */

StudentDocument.save((error, success) => {
	console.log(success);
	if (error) {
		console.log(error);
	}
})
