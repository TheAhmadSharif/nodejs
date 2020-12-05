/*
	stdout // Standard Input Output
*/

process.stdout.write("Hello \n");
process.stdout.write("world \n");

process.stdin.on('data', data => {

	if(data.toString().trim().toLowerCase() === 'exit') {
		process.exit();
	}
	else {
		console.log(data.toString());
	}
});


process.on('exit', () => {
	console.log('You are going to close');
});
