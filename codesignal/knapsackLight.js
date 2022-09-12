function solution(value1, weight1, value2, weight2, maxW) {
    if ((weight1 + weight2) <= maxW) {
        return value1 + value2; // take both items
    } else if (weight1 <= maxW && weight2 > maxW) {
        return value1; // item1
    } else if (weight2 <= maxW && weight1 > maxW) {
        return value2; // item2
    } else if (weight1 <= maxW && weight2 <= maxW) {
        if (value1 > value2) {
            return value1;
        } else {
            return value2;
        }
    }
    return 0; // no items
}


console.log(solution(15, 2, 20, 3, 2)); // 15