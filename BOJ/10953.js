rl = require("readline").createInterface({input: process.stdin})

let arr;
let flag = true;
let num;

rl.on("line", (line)=>{
	if(flag)
	{
		num = parseInt(line);
		flag = false;
		return ;
	}
	arr = line.split('').map(item => parseInt(item)).slice(0,num);
	rl.close();
}).on("close",()=>{
	let answer = 0;
	for(let a of arr)
		answer += a;
	console.log(answer);

	process.exit;
})
