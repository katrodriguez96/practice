function solution(names) {
    for (let i = 1; i < names.length; i++) {
        let prevNames = names.slice(0, i);
        if (prevNames.includes(names[i])) {
            let count = 1;
            while (prevNames.includes(names[i] + "(" + count + ")")) {
                count++;
            }
            names[i] += "(" + count + ")";
        }
    }
    return names;
}

console.log(solution(["doc", "doc", "image", "doc(1)", "doc"]));