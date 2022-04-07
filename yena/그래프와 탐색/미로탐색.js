function solution(arr) {
    let answer = 0;
    const stack = [];
    const offset = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
    ];

    function DFS(x, y) {
        if (x === 6 && y === 6) {
            answer++;
            return;
        } else {
            offset.forEach((i) => {
                let [offx, offy] = i;
                offx += x;
                offy += y;
                if (
                    offx >= 0 &&
                    offy >= 0 &&
                    offx <= 6 &&
                    offy <= 6 &&
                    arr[offx][offy] === 0
                ) {
                    arr[offx][offy] = 1;
                    DFS(offx, offy);
                    arr[offx][offy] = 0;
                }
            });
        }
    }
    arr[0][0] = 1;
    DFS(0, 0);
    return answer;
}
let arr = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
