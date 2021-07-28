const rl = require("readline").createInterface({input : process.stdin});

let input;

arr = [0,1,2];

function slove(input) {
	for(let i=3;i <= input;i++)
	{
		arr[i] = arr[i-1]+arr[i-2];
	}
}

rl.on("line", (line)=>{
	input = +line;
	slove(input);
	rl.close();
})

rl.on("close",()=>{
	console.log(arr[input]);
	process.exit;
})
