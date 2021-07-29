rl = require("readline").createInterface({input:process.stdin})

let N;
let arr = [BigInt(0),BigInt(1)]

rl.on("line", (line)=>{
	N = +line;
	for(let i=2; i <= N; i++){
		arr[i]= arr[i-1]+arr[i-2]
	}
	console.log(String(arr[N]));
	rl.close();
}).on("close",()=>{
	process.exit;
})
