// TODO: Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

let testList1 = [1,2,'a','b'];
let testList2 = [1,'a','b',0,15];
let testList3 = [1,2,'aasf','1','123',123];


function my_filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter(index => index >= 0 && typeof index != "string");
}

// Best practice solution
function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
}

console.log(my_filter_list(testList1));
console.log(my_filter_list(testList2));
console.log(my_filter_list(testList3));