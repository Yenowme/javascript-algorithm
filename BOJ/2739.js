const { parse } = require('path/posix');

rl = require('readline').createInterface({input:process.stdin})

let a;

rl.on('line', (line) => {
	a = parseInt(line);
	for(let i = 1; i <= 9; i++)
		console.log(`${a} * ${i} = ${a*i}`);
	rl.close();
}).on('close',()=>{
	process.exit;
})
