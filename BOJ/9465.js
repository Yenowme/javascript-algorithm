rl = require("readline").createInterface({input:process.stdin})

let tcase = -1;
let dp = [[],[]];
let i = 0
let arr
let n

function slove() {
	//초기화
	dp[0][0] = arr[0][0];
	dp[1][0] = arr[1][0];
	dp[0][1] = arr[1][0] + arr[0][1];
	dp[1][1] = arr[0][0] + arr[1][1];

	//문제풀이
	for(let i=2; i< n; i++){
		dp[0][i] = Math.max(dp[1][i-1], dp[1][i-2]) + arr[0][i]
		dp[1][i] = Math.max(dp[0][i-1], dp[0][i-2]) + arr[1][i]
	}
	answer = Math.max(dp[0][n-1], dp[1][n-1]);
	//출력
	console.log(answer);
}

rl.on("line",(line)=>{
	//input testcase
	if (tcase === -1){
		tcase = +line;
		return ;
	}
	//solve parts
	if (n === undefined){
		n = +line;
		arr = new Array(2);
	} else if (i === 0) {
		arr[i] = line.split(' ').map(item => parseInt(item))
		//console.log('arr set');
		i++;
	} else {
		arr[i] = line.split(' ').map(item => parseInt(item))
		//console.log('solve run');
		slove();
		tcase--;
		i = 0;
		n = undefined;
	}
	if (tcase === 0){
		rl.close();
	}
})
