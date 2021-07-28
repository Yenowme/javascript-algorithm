rl = require('readline').createInterface({input: process.stdin})

rl.on('line', (line)=>{
	let a = parseInt(line);

	for (let i=1; i<=a; i++)
	{
		for (let j=a; j > i; j--)
			process.stdout.write(' ');
		for (let j=0; j < i*2-1; j++)
			if(j === 0 || j === i*2-2 || i == a)
				process.stdout.write('*')
			else
				process.stdout.write(' ');
		process.stdout.write('\n')
	}
	rl.close()

	}).on('close', ()=>{
		process.exit;
})
