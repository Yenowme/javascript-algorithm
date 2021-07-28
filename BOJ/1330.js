const rl = require('readline').createInterface({input:process.stdin});

a = []

rl.on('line', (line) => {
	a = line.split(' ').map(item => parseInt(item));
	rl.close();
}).on('close', () => {
	if(a[0] > a[1])
		console.log('>');
	else if(a[0] < a[1])
		console.log('<');
	if(a[0] === a[1])
		console.log('==');
	process.exit;
})
