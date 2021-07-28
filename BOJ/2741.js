const rl = require('readline').createInterface({input:process.stdin});

let n;
let arr = '';

rl.on('line',(line)=>{
	a = parseInt(line);
	rl.close();
}).on('close',()=>{
	let i;
	for(i=1; i < a; i++){
		arr += i + "\n";
	}
	arr += i;
	console.log(arr);
})
