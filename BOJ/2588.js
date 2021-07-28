const rl = require('readline').createInterface({ input: process.stdin });

let arr = [];
let i = 0;

rl.on("line", (line) => {
	arr[i] = line;
	i++;
	if (i === 2){
		rl.close()
	}
}).on("close", () => {
	const a = parseInt(arr[0]);
	const b = parseInt(arr[1]);
	const _b = arr[1].split('').map(item => parseInt(item));
	console.log(a * _b[2]);//일의자리 곱셈
	console.log(a * _b[1]);//일의자리 곱셈
	console.log(a * _b[0]);//일의자리 곱셈
	console.log(a * b);//일의자리 곱셈
	///두개 곱샘
	process.exit;
})
