function solution(num, arr) {
    arr.sort((a, b) => a - b);
    let lt = 1;
    let rt = arr[arr.length - 1] - arr[0];
    let answer = lt;

    function solve(gap) {
        let rt = 0;
        let cnt = 1;
        let tmp = arr[0];
        for (let j = 1; j < arr.length; j++) {
            if (arr[j] - tmp >= gap) {
                tmp = arr[j];
                cnt++;
            }
        }
        rt = Math.max(rt, cnt);
        return rt;
    }

    while (lt <= rt) {
        let md = parseInt((lt + rt) / 2);
        if (solve(md) >= num) {
            answer = md;
            lt = md + 1;
        } else {
            rt = md - 1;
        }
    }
    return answer;
}

let arr = [1, 4, 7];
console.log(solution(3, arr));
