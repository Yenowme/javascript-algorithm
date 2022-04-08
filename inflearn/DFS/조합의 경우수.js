function solution_fail(n, r) {
    if (r === n) {
        return 1;
    }
    if (r === 1) {
        return n;
    } else {
        let a = solution(n - 1, r - 1) + solution(n - 1, r);
        console.log(n, r, a);
        return a;
    }
}

function solution(n, r) {
    const memo = Array.from({ length: n + 1 }, (v, k) =>
        Array.from({ length: r + 1 }, () => null)
    );
    //const memo = Array(n + 1).fill([]);

    function DFS(n, r) {
        if (memo[n][r]) return memo[n][r];
        else if (r === n) return (memo[n][r] = 1);
        else if (r === 1) return (memo[n][r] = n);
        return (memo[n][r] = DFS(n - 1, r - 1) * 1 + DFS(n - 1, r) * 1);
    }
    console.log(DFS(n, r));
    console.log(memo);
} // 왜 이것만 되지?

console.log(solution(33, 19));
