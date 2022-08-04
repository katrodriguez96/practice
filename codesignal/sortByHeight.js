function solution(a) {
    let treeIndexes = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] === -1) {
            treeIndexes.push(i);
        }
    }
    let noTrees = a.filter(i => i !== -1);
    noTrees.sort(function(a, b) {return a - b});
    let newArr = new Array(a.length);
    for (let i = 0; i < newArr.length; i++) {
        if (treeIndexes.includes(i)) {
            newArr[i] = -1;
        } else {
            newArr[i] = noTrees[0];
            noTrees.shift();
        }
    }
    return newArr;
}

solution([-1, 150, 190, 170, -1, -1, 160, 180]);
