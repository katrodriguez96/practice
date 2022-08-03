function solution(n) {
    let myFunc = num => Number(num);
    let nArr = Array.from(String(n), myFunc);
    let halfLength = nArr.length / 2;
    let first = nArr.slice(0, halfLength);
    let second = nArr.slice(halfLength);
    let firstSum = 0;
    let secondSum = 0;
    first.forEach(function(i) {
        firstSum += i;
    });
    second.forEach(function(i) {
        secondSum += i;
    });
    return firstSum === secondSum;
}
