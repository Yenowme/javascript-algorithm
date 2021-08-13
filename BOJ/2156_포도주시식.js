rl = require("readline").createInterface({input:process.stdin});

let dp;
let input = [];
let n;
let testcase;

rl.on("line",(line)=>{
	if (n === undefined){
		n = +line;
		testcase = n;
		dp = new Array(n);
		for(let i=0; i <= n+1; i++){
			dp[i] = new Array(3);
		}
		return ;
	}
	input.push(parseInt(line));
	testcase--;
	if (testcase === 0)
		rl.close();
}).on("close",()=>{
	slove();
	process.exit;
})

function slove() {

	dp[1][0] = input[0];
	dp[2][0] = input[0]+input[1];
	if(n < 3){
		console.log(dp[n][0]);
		return ;
	}

	dp[3][0] = input[0]+input[2]
	dp[3][1] = input[1]+input[2]
	dp[3][2] = input[0]+input[1]

	for(let i=4; i<=n; i++){
		for(let j=0; j<3; j++){
			if (2 - i%3  === j){
				console.log("j는",j);
				dp[i][j] = dp[i-1][j]
			}
			else
				dp[i][j] = dp[i-1][j] + input[i-1]
		}
	}
	console.log(dp);

	console.log(Math.max(dp[n][0],dp[n][1],dp[n][2]));
}
