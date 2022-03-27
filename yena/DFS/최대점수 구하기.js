function solution(time, testPoint, testTime) {
    const len = testPoint.length;
    let answer = 0;
    function DFS(L, sum, time) {
        if (time < 0) return;
        else if (L === len) {
            answer = Math.max(sum, answer);
        } else {
            DFS(L + 1, sum, time);
            DFS(L + 1, (sum += testPoint[L]), (time -= testTime[L]));
        }
    }
    DFS(0, 0, time);
    return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
