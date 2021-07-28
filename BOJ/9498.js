const rl = require('readline').createInterface({input:process.stdin});

var a;

rl.on('line', (line) => {
	a = parseInt(line);
	rl.close();
}).on('close', () => {
	if(90 <= a)
		console.log('A');
	else if(80 <= a)
		console.log('B');
	else if(70 <= a)
		console.log('C');
	else if(60 <= a)
		console.log('D');
	else
		console.log('F');
	process.exit;
})
