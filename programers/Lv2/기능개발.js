function solution(progresses, speeds) {
    const days = progresses.reduce((acc, progress, idx) => {
        const day = Math.ceil((100 - progress) / speeds[idx]);
        if (idx === 0) return (acc[idx] = day), acc;
        else if (day < acc[idx - 1]) return (acc[idx] = acc[idx - 1]), acc;
        return (acc[idx] = day), acc;
    }, []);
    let idx = 0;
    const rt = days.reduce((acc, cur, i, src) => {
        if (i === 0) {
            acc[idx] = 1;
            return acc;
        } else if (cur === src[i - 1]) {
            acc[idx]++;
            return acc;
        } else {
            idx++;
            acc[idx] = 1;
            return acc;
        }
    }, []);

    console.log(days, rt);
    return rt;
}
