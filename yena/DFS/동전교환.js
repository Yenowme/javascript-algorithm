function solution(num, coins) {
    let answer = Number.MAX_SAFE_INTEGER;
    function DFS(sum, cnt) {
        console.log(sum, cnt);
        if (sum > num) return;
        if (sum === num) {
            answer = Math.min(answer, cnt);
        } else {
            arr.forEach((i) => {
                DFS(sum + i, cnt + 1);
            });
        }
    }
    DFS(0, 0);
    return answer;
}
let arr = [1, 2, 5];
console.log(solution(15, arr));
