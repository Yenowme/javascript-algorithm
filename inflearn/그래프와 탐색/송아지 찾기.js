function solution(S, E) {
    const moves = [1, -1, 5];
    const MAX = 10000;

    const queue = [];
    const check = Array.from({ length: MAX }).fill(false);
    const jumpCnt = Array.from({ length: MAX }).fill(0);

    queue.push(S);
    check[S] = true;
    while (queue.length) {
        const currentLocation = queue.shift();
        if (currentLocation === E) return jumpCnt[currentLocation];
        for (let move of moves) {
            let newLocation = currentLocation + move;
            if (newLocation === E) return jumpCnt[currentLocation] + 1;
            if (
                check[newLocation] === false &&
                newLocation >= 0 &&
                newLocation <= MAX
            ) {
                queue.push(newLocation);
                check[newLocation] = true;
                jumpCnt[newLocation] = jumpCnt[currentLocation] + 1;
            }
        }
    }
}
console.log(solution(8, 8));

//근데 굳이 이 방법 말고 탐욕법으로 하면 안되나?
