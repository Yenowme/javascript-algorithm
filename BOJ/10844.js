rl = require('readline').createInterface({input:process.stdin})

let N;
let answer = 0;

rl.on('line',(line)=>{
	N = +line;
	//배열선언
	let arr = new Array(N+1);
	for(let i=0; i < N+1; i++){
		arr[i] = new Array(10)
	}
	//초기화
	arr[1][0] = 0;
	for(let i=1; i < 10; i++){
		arr[1][i] = 1;
	}
	//경우의 수 할당
	for(let i=2; i <= N; i++){
		for(let j=0; j < 10; j++){
			if ( j === 9)
				arr[i][j] = arr[i-1][j-1];
			else if (j === 0)
				arr[i][j] = arr[i-1][j+1];
			else
				arr[i][j] = (arr[i-1][j-1] + arr[i-1][j+1])% 1000000000;
		}
	}
	//정답 도출
	for(let i=0; i < 10; i++){
	answer = (answer + arr[N][i])% 1000000000;
	}
	console.log(answer % 1000000000);

	rl.close();
}).on("close",()=>{
	process.exit;
})
