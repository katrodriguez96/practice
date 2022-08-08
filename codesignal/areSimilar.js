function solution(a, b) {
    if (isEqual(a, b)) {
        return true;
    } else {
        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < a.length; j++) {
                if (isEqual(swapElements(a, i, j), b)) {
                    return true;
                }
            }
        }
    }
    return false;
}

function swapElements(a, x, y) {
    let arrCopy = a.slice();
    arrCopy.splice(y, 1, arrCopy.splice(x, 1, arrCopy[y])[0]);
    return arrCopy;
}

function isEqual(a, b) {
    return a.every((val, index) => val === b[index]);
}
// the above works but exceeds the execution time limit
console.log(solution([1, 2, 1, 2], [2, 2, 1, 1]));

function areSimilar(a, b) {
    const ad = a.filter((v,i)=>v!=b[i])
    const bd = b.filter((v,i)=>v!=a[i])
    return ad.length == 0 || (ad.length == 2 && ad.join('') == bd.reverse().join(''))
}
