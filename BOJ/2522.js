rl = require('readline').createInterface({input: process.stdin})

let input;

rl.on('line', (line)=>{
	input = parseInt(line);

	for(let i=0; i < input; i++)
	{
		for(let j=1; j <= input; j++)
			if (j >= input - i)
				process.stdout.write('*');
			else
				process.stdout.write(' ');
		process.stdout.write('\n');
	}
	for(let i=1; i < input; i++)
	{
		for(let j=0; j < input ; j++)
			if (j < i)
				process.stdout.write(' ');
			else
				process.stdout.write('*');
		process.stdout.write('\n');
	}
	rl.close();
}).on('close', ()=>{
	process.exit;
})
