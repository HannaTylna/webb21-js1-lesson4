/* console.log( upper("hello") )
// Ska returnera "HELLO"
console.log( lower("DONT SHOUT") )
// Ska returnera "dont shout" */


function lower(phrase) {
    return phrase.toLowerCase()
}

function upper(phrase) {
    return phrase.toUpperCase()
}
console.log(lower("DONT SHOUT"));
console.log(upper("hello"));