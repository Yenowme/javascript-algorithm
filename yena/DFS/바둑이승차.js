function solution(num, arr) {
    let answer = 0;
    function DFS(L, sum) {
        if (L === arr.length) {
            if (sum <= num) answer = Math.max(answer, sum);
            return;
        } else {
            DFS(L + 1, sum + arr[L]);
            DFS(L + 1, sum);
        }
    }
    DFS(0, 0);
    return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(90, arr));
