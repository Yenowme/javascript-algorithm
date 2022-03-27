function solution(n, f) {
    let answer = 0;
    const sequence = Array(n).fill(0);
    const memo = Array.from({ length: n + 1 }, () => Array(n).fill(null));
    const comb = Array(n).fill(0);

    function combi(num, r) {
        if (memo[num][r]) return memo[num][r];
        else if (r === num || r === 0) return (memo[num][r] = 1);
        else if (r === 1) return (memo[num][r] = num);
        return (memo[num][r] =
            combi(num - 1, r - 1) * 1 + combi(num - 1, r) * 1);
    }

    for (let i = 0; i <= n - 1; i++) {
        comb[i] = combi(n - 1, i);
    }
    console.log(comb);

    function DFS(L, sum) {
        console.log(sequence, L, sum, comb[L]);
        if (sum > f) return;
        if (L === n) {
            if (sum === f) return (answer = [...sequence]);
            else return null;
        } else {
            for (let i = 1; i <= n; i++) {
                let tmp = sum;
                if (!sequence.slice(0, L).includes(i)) {
                    sum += comb[L] * i;
                    sequence[L] = i;
                } else continue;
                if (DFS(L + 1, sum)) return answer;
                else sum = tmp;
            }
        }
    }
    DFS(0, 0);
    return answer;
}

/**
 * 순열 추측하기
 *
 * 1.n짜리 배열을 생성
 * 2. 조합수 nC0 ~nCn 까지 배열 comb를 생성 (파스칼의 삼각형)
 * 3. 조합수의 배열[L] * 정답이 될 경우의 수 배열 sequence[L] 을 곱해서 모두 더한값이 삼각형의 끝에 오는 sum이 된다.
 * 4. 정답이 될 경우의 수 배열 sequence는 DFS로 구한다.
 *
 *  => 개선방향, check배열을 만들어서 include 대신 사용값 체크
 */
console.log(solution(4, 16));
console.log(solution(5, 51));
