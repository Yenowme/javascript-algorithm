function solution(arr) {
    const subset = new Array(arr.length).fill(0);
    function DFS(n) {
        if (n === arr.length) {
            let a = 0,
                b = 0;
            subset.forEach((i, idx) => {
                if (i === 1) a += arr[idx] * 1;
                else if (i === 2) b += arr[idx] * 1;
            });
            console.log(arr, subset);
            console.log(a, b);
            if (a === b) return "YES";
        } else {
            subset[n] = 1;
            if (DFS(n + 1) === "YES") return "YES";
            subset[n] = 2;
            if (DFS(n + 1) === "YES") return "YES";
        }
    }
    if (DFS(0) === "YES") return "YES";
    return "NO";
}
let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
