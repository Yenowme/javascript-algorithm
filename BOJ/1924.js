rl = require("readline").createInterface({input:process.stdin})

mon = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 30];
week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

rl.on('line',(line)=>{
	arr = line.split(' ');
	m = parseInt(arr[0]);
	d = parseInt(arr[1]);

	let day = 0;
	for (let i=0; i < m; i++)
		day += mon[i]
	day += d;
	console.log(week[day % 7]);
	rl.close();
}).on('close', () => {
	process.exit;
})
