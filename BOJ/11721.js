rl = require('readline').createInterface({input : process.stdin })

rl.on('line',(line) => {
	len = line.length;
	for(let i=0; i < line.length; i += 10)
	{
		console.log(line.slice(i,i+10));
	}
	rl.close()
}).on('close',()=>{
	process.exit;
})
