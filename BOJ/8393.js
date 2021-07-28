const { config } = require('process');

rl = require('readline').createInterface({input: process.stdin})

let a = -1;
let arr = [];

rl.on('line', (line) => {
	if (a == -1)
	{
		a = parseInt(line);
		return ;
	}
	arr = line.split(' ').map(item => parseInt(item)).slice(0,a);

	let min = arr[0];
	let max = arr[0];

	for(let i of arr)
	{
		if(min > i)
			min = i;
		if(max < i)
			max = i;
	}
	console.log(`${min} ${max}`);
	rl.close();

}).on('close', ()=>{
	process.exit;
})
