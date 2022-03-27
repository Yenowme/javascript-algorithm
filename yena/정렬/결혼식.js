function solution(arr) {
    arr.sort((a, b) => a[0] - b[0]);
    let stack = [];
    let answer = 0;
    console.log(arr);
    arr.forEach((i) => {
        stack = stack.filter((j) => {
            return j[1] > i[0];
        });
        stack.push(i);
        console.log(stack);
        if (answer < stack.length) answer = stack.length;
    });
    return answer;
}

let arr = [
    [1, 3],
    [4, 8],
    [5, 9],
    [6, 10],
];
console.log(solution(arr));
