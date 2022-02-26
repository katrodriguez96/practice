// TODO: write a function that counts the number of duplicate characters.

function duplicates (string) {
    let chars = string.split("");
    let counts = {};
    chars.forEach(function (x) {
        counts[x] = (counts[x] || 0) + 1;
    })
    console.log(counts)
}

duplicates("hjasgdadhas");