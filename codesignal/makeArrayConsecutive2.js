function solution(statues) {
    statues.sort((a,b) => a-b);
    let min = statues[0];
    console.log(min);
    let max = statues[statues.length - 1];
    console.log(max);
    let newStatues = [];
    for (let i = min; i <= max; i++) {
        newStatues.push(i);
    }
    console.log(newStatues);
    let difference = newStatues.filter(x => !statues.includes(x));
    return difference.length;
}

console.log("solution(statues) = " + solution([4, 2, 7, 18]))
