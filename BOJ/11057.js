rl = require("readline").createInterface({input:process.stdin})

let N;
let answer = 0;

rl.on("line",(line)=>{
	N = +line;
	//배열 생성
	let arr = new Array(N+1);
	for(let i=0; i<=N; i++)
	{
		arr[i] = new Array(10);
	}
	//초기화
	for(let i=0; i<10; i++)
	{
		arr[1][i] = 1;
	}
	//계산
	for(let i=2; i <= N; i++) {
		for(let j=0; j <= 9; j++) {
			arr[i][j] = 0
			for (let k=j; k <= 9; k++){
				arr[i][j] = (arr[i][j] + arr[i-1][k]) % 10007;
			}
		}
}

	for(let i=0; i < 10; i++)
	{
		answer = (answer + arr[N][i]) % 10007;
	}
	console.log(answer % 10007);
	rl.close();
}).on("close", ()=>{
	process.exit;
})
