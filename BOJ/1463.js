rl = require('readline').createInterface({input : process.stdin})

let X;
let arr = [0,0,1,1];

rl.on("line", (line) => {
	X = parseInt(line);

	for(let i = 4; i <= X; i++)
	{
		if (i % 3 === 0)
			arr[i] = Math.min(arr[i/3] + 1, arr[i] || X);
		if (i % 2 === 0)
			arr[i] = Math.min(arr[i/2] + 1, arr[i] || X);
		arr[i] = Math.min(arr[i-1] + 1, arr[i] || X);
	}
	rl.close();
}).on('close', () => {
	console.log(arr[X]);
	process.exit;
})
