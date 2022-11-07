function solution(product) {
    let myNum = product;
    let result = [];

    let reducer = (acc, prod) => acc * prod;

    if (myNum === 1 || myNum === 7) {
        return myNum;
    }

    if (myNum >= 10) {
        for (let i = 9; i > 1; i--) {
            while (myNum % i === 0) {
                result.push(i);
                myNum = myNum / i;
            }
            if (i === 2 && result.length === 0) {
                return -1;
            }
        }
    } else if (myNum < 10) {
        return myNum + 10;
    }

    if (result.reduce(reducer) === product) {
        return parseInt(result.sort().join(''));
    }
    return -1;
}

console.log(solution(12));