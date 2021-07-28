const rl = require('readline').createInterface({ input: process.stdin });

let answer = [];

rl.on("line", (line) => {
	answer = line.split(' ').map((item) => parseInt(item));
	rl.close();
}).on("close", () => {
	console.log(answer[0] + answer[1]);
	console.log(answer[0] - answer[1]);
	console.log(answer[0] * answer[1]);
	console.log(Math.floor(answer[0] / answer[1]));
	console.log(answer[0] % answer[1]);
	process.exit();
});
