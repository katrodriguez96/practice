function solution(address) {
    return address.slice(address.lastIndexOf('@') + 1);
}

console.log(solution("\"very.unusual.@.unusual.com\"@usual.com")); // usual.com