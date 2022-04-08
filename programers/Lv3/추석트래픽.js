function solution(lines) {
    let answer = 0;
    const stack = [];

    const getStartDate = (endTime, processTime) => {
        const offset = processTime
            .replace(/[\.]/g, "")
            .replace("s", "")
            .split("");
        if (offset.length === 4) return endTime - offset.join("") * 1 + 1;
        else {
            const fillzero = new Array(4 - offset.length).fill(0);
            return endTime - [...offset, ...fillzero].join("") * 1 + 1;
        }
    };

    let data = lines.map((line) => {
        const [year, time, processTime] = line.split(" ");
        const endTime = new Date(`${year} ${time}`).getTime();
        const startTime = getStartDate(endTime, processTime);
        // console.log(endTime,startTime)
        // console.log(new Date(endTime),new Date(startTime))

        return [
            [1, startTime],
            [2, endTime + 999],
        ];
    });

    data = data.flat();
    data.sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0];
        else return a[1] - b[1];
    });

    data.forEach((log) => {
        const [flag, time] = log;
        if (flag === 1) stack.push(time);
        if (flag === 2) stack.pop();
        answer = Math.max(stack.length, answer);
    });
    return answer;
}

/**
1. 입력값 파싱 
    - 처리 시간 혼합해서 배열로 넣기
    - data [[hh:mm:ss.sss - hh:mm:ss.sss+999]]
        - +999를 하는 이유는 기간을 아예 늘려서 동시에 존재하는 로그를 파악하기 위함
2. 스택에 넣기 
    - 초 시간에 맞춰 스택에 넣고, 빼기
3. 현재 최대값 구하기
    - 스택의 배열에 있는 개수가 클 때마다 갱신하기.

*/
