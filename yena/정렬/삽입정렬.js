function solution_old1(arr) {
    for (let i = 1; i < arr.length; i++) {
        let tmp = arr[i];
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > tmp && j !== 0) {
                arr[j + 1] = arr[j];
            } else if (arr[j] <= tmp) {
                arr[j + 1] = tmp;
                break;
            } else {
                arr[j + 1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}

function solution(arr) {
    for (let i = 1; i < arr.length; i++) {
        let tmp = arr[i];
        let j;
        for (j = i - 1; j >= 0; j--) {
            if (tmp > arr[j]) break;
            else arr[j + 1] = arr[j];
        }
        arr[j + 1] = tmp;
    }
    return arr;
}

console.log(solution([11, 6, 11, 7, 10, 9]));
