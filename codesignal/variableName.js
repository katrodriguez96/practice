function solution(name) {
    let specialChars = /[`!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (specialChars.test(name)) { // has special characters
        return false;
    } else if (/^\d/.test(name)) { // starts with number
        return false;
    } else return !/\s/.test(name); // has whitespace
}

console.log(solution(" variable")); // false, has a whitespace
console.log(solution("a a_2")); // false, has a whitespace