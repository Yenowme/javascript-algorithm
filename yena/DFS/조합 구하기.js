function solution(N, M) {
    const union = new Array(M);
    const answer = [];

    function DFS(L, S) {
        if (L === M) {
            answer.push([...union]);
        } else {
            for (let i = S; i <= N; i++) {
                union[L] = i;
                DFS(L + 1, i + 1);
            }
        }
    }
    DFS(0, 1);
    return answer;
}

console.log(solution(4, 2));
