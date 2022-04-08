function solution(len, r, arr, multiple) {
    let answer = 0;
    const test = [];

    function DFS(L, sum, S) {
        if (L === r) {
            console.log(test, sum, S);
            if (sum % multiple === 0) answer++;
        } else {
            for (let i = S; i < len; i++) {
                test.push(arr[i]);
                DFS(L + 1, sum + arr[i], i + 1);
                test.pop();
            }
        }
    }
    DFS(0, 0, 0);
    return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
