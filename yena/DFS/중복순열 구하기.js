function solution(N, M) {
    const subset = new Array(M).fill(0);
    const answer = [];
    function DFS(L) {
        if (L === M + 1) {
            answer.push([...subset]);
        } else {
            for (let i = 1; i <= N; i++) {
                subset[L - 1] = i;
                DFS(L + 1);
            }
        }
    }
    DFS(1);
    console.log(answer);
    console.log(answer.length);
}

console.log(solution(3, 2));
