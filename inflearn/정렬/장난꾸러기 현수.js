function solutio_old1(arr) {
    const rt = [];
    let i = 0;
    while (arr[i] <= arr[++i]) {}
    rt.push(i);
    while (arr[i] <= arr[++i]) {}
    rt.push(i + 1);
    return rt;
}

function solution_old2(arr) {
    const rt = [];
    let tmp;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < arr[i - 1]) {
            tmp = arr[i];
            rt.push(i + 1);
            let j;
            for (j = i - 1; j >= 0; j--) {
                if (tmp >= arr[j]) {
                    rt.unshift(j + 2);
                    return rt;
                }
            }
            rt.unshift(j + 2);
            break;
        }
    }
    return rt;
}

function solution(arr) {
    const sorted = [...arr];
    const rt = [];
    sorted.sort((a, b) => a - b);
    sorted.forEach((i, idx) => {
        if (i !== arr[idx]) rt.push(idx + 1);
    });
    return rt;
}

//let arr = [170, 130];
//let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
let arr = [120, 130, 150, 150, 130, 150];
console.log(solution(arr));
