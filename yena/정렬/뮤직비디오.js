function solution(num, arr) {
    let answer = 0;
    let lt = Math.max(...arr);
    let rt = arr.reduce((acc, cur) => acc + cur);

    while (lt <= rt) {
        let cnt = 0;
        let n = 1;
        let md = parseInt((lt + rt) / 2);
        arr.forEach((i) => {
            cnt += i;
            if (cnt > md) {
                cnt = i;
                n++;
            }
        });
        if (n <= num) {
            answer = md;
            rt = md - 1;
        } else {
            lt = md + 1;
        }
    }
    return answer;
}

let arr = [9, 2, 3, 4, 5, 6, 7, 8, 1];
console.log(solution(3, arr));
