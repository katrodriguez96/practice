function solution(upSpeed, downSpeed, desiredHeight) {
    let height = 0;
    let days = 0;
    while (height < desiredHeight) {
        if (days === 0) {
            height += upSpeed;
        } else {
            height -= downSpeed;
            height += upSpeed;
        }
        days++;
    }
    return days;
}

console.log(solution(100, 10, 910)); // 10