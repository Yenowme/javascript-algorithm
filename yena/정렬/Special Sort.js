function solution(arr) {
    const pos = [];
    const neg = [];
    arr.forEach((v) => {
        if (v < 0) {
            neg.push(v);
        } else {
            pos.push(v);
        }
    });
    return [...neg, ...pos];
}
let arr = [1, 2, 3, -3, -2, 5, 6, -6];
//console.log(solution(arr));
