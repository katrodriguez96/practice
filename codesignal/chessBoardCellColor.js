function solution(cell1, cell2) {
    let chars = ["A", "B", "C", "D", "E", "F", "G", "H"];
    let cell1Index = chars.indexOf(cell1[0]);
    let cell1Total = cell1Index + Number(cell1[1]);
    let cell2Index = chars.indexOf(cell2[0]);
    let cell2Total = cell2Index + Number(cell2[1]);
    if (cell1Total % 2 === 0 && cell2Total % 2 === 0) {
        return true;
    } else return cell1Total % 2 !== 0 && cell2Total % 2 !== 0;
}

console.log(solution("A1", "C3")); // return true