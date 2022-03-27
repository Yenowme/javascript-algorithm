function solution(N, arr) {
    const cache = new Array(N).fill(0);
    arr.forEach((i) => {
        let idx = cache.indexOf(i);
        if (idx === -1) {
            cache.unshift(i);
            cache.pop();
        } else {
            cache.splice(idx, 1);
            cache.unshift(i);
        }
        console.log(cache);
    });
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
