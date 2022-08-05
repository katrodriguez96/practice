function getStartAndEndIndexes(inputString) {
    let startIndex = null;
    let endIndex = null;
    const chars = inputString.split('');
    for (let i = 0; i < chars.length; i++) {
        const c = chars[i];
        if (c === '(') {
            startIndex = i;
        }
        if (c === ')') {
            endIndex = i;
            break;
        }
    }
    if (startIndex === null || endIndex === null) {
        return null
    }
    return {startIndex, endIndex}
}

function reverseParentheses(startIndex, endIndex, inputString) {
    // before the parenthesis
    const startSegment = inputString.substring(0, startIndex);
    // the parenthesis
    const parenthesisSegment =
        inputString.substring(startIndex + 1, endIndex);
    // after the parenthesis
    const endSegment =
        inputString.substring(endIndex + 1, inputString.length);
    return startSegment + reverse(parenthesisSegment) + endSegment;
}

function reverse(string) {
    return string.split('').reverse().join('');
}

function solution(inputString) {
    const indexes = getStartAndEndIndexes(inputString);
    if (!indexes) {
        return inputString;
    }
    const {startIndex, endIndex} = indexes;
    const newString =
        reverseParentheses(startIndex, endIndex, inputString);
    return solution(newString);
}
