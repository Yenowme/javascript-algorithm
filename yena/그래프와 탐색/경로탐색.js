function solution(target, arr) {
    const check = new Array(target + 1).fill(0);
    const answer = [];
    const path = [1];
    function DFS(cur) {
        if (cur === target) {
            answer.push([...path]);
        } else {
            arr.forEach((i) => {
                const [node, next] = i;
                if (node === cur && check[next] === 0) {
                    console.log(i, check, path);
                    check[next] = 1;
                    path.push(next);
                    DFS(next);
                    check[next] = 0;
                    path.pop();
                }
            });
        }
    }
    check[1] = 1;
    DFS(1);
    return answer;
}

let arr = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
];
console.log(solution(5, arr));
