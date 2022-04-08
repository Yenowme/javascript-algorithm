function solution(arr) {
    let answer = 0;
    const length = arr.length;
    const moves = [
        [1, 1],
        [1, 0],
        [1, -1],
        [0, 1],
        [0, -1],
        [-1, 1],
        [-1, 0],
        [-1, -1],
    ];

    function findIsland(y, x) {
        for (let [moveY, moveX] of moves) {
            const [newY, newX] = [y + moveY, x + moveX];
            if (
                newY >= 0 &&
                newX >= 0 &&
                newY < length &&
                newX < length &&
                arr[newY][newX] === 1
            ) {
                arr[newY][newX] = 2;
                findIsland(newY, newX);
            }
        }
    }

    for (let y = 0; y < length; y++) {
        for (let x = 0; x < length; x++) {
            if (arr[y][x] === 1) {
                arr[y][x] = 2;
                findIsland(y, x);
                answer++;
            }
        }
    }
    return answer;
}

let arr = [
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
