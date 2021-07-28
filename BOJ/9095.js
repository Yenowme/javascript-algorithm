rl = require("readline").createInterface({input:process.stdin})

let test;
let input;
arr =[0,1,2,4];

rl.on("line",(line)=>{
	if (test === undefined)
	{
		test = +line;
		return ;
	}
	input = +line;
	for(let i=4; i <= input; i++)
	{
		arr[i] = arr[i-1] + arr[i-2] + arr[i-3];
	}
	console.log(arr[input]);
	test--;
	if(test === 0)
		rl.close();
}).on("close",()=>{
	process.exit;
})
