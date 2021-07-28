const rl = require('readline').createInterface({input: process.stdin});

arr = [];
rt = [];
testCase = true;
var tcase;

function findDis(x1,y1,x2,y2) {
	const x = Math.abs(x1 - x2);
	const y = Math.abs(y1 - y2);

	return Math.sqrt(x*x + y*y);
};

function findMarin(arr) {
	const x1 = arr[0];
	const y1 = arr[1];
	const r1 = arr[2];
	const x2 = arr[3];
	const y2 = arr[4];
	const r2 = arr[5];
	let dis;

	dis = findDis(x1,y1,x2,y2);
	if(dis === 0 && r1 === r2)
		return -1;
	else if(dis + r1 < r2 || dis + r2 < r1)
		return 0;
	else if(dis + r1 === r2 || dis + r2 === r1)
		return 1;
	else if(dis < r1 + r2)
		return 2;
	else if(dis == r1 + r2)
		return 1;
	else
		return 0;

}

rl.on('line', line => {
	if (testCase)
	{
		tcase = parseInt(line);
		testCase = false;
	} else {
		arr = line.split(' ').map(item => parseInt(item));
		rt.push(findMarin(arr));
		tcase--;
	}
	if (tcase === 0)
		rl.close();
}).on('close', () => {
	rt.forEach(element => {
		console.log(element);
	});
	process.exit;
})
