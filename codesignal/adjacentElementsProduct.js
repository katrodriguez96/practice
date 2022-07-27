function solution(inputArray) {
    const productArray = [];

    for (let i = 0; i < (inputArray.length - 1); i++) {
        let num1 = inputArray[i];
        console.log(num1);
        let num2 = inputArray[(i + 1)];
        console.log(num2);
        let product = num1 * num2;
        console.log(product)
        productArray.push(product);
        console.log(productArray);
    }

    return Math.max.apply(null, productArray);
}

console.log(solution([3, 6, -2, -5, 7, 3]))