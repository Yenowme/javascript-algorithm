function solution_old(num) {
    function DFS(n, arr) {
        if (n > num + 1) {
            return;
        } else {
            DFS(n + 1, [...arr, n]);
            DFS(n + 1, arr);
            if (arr.length) console.log(arr);
        }
    }
    DFS(1, []);
} //=> 중복된 노드가 모두 출력 -> 가장 마지막 노드만 출력해야함

function solution(num) {
    const subset = new Array(num + 1).fill(0);
    const answer = [];
    function DFS(n) {
        if (n === num + 1) {
            //출력
            let tmp = [];
            for (let i = 1; i < num + 1; i++) {
                if (subset[i] === 1) tmp.push(i);
            }
            if (tmp.length) answer.push(tmp);
        } else {
            //분기
            subset[n] = 1;
            DFS(n + 1);
            subset[n] = 0;
            DFS(n + 1);
        }
    }
    DFS(1);
    return answer;
}

console.log(solution(3));
