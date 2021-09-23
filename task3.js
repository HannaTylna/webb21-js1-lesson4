/* console.log( getDayInMonth("January") )
// Ska returnera 31
console.log( getDayInMonth("March") )
// Ska returnera 31
console.log( getDayInMonth("April") )
// Ska returnera 30 */

/* const month = ""

function getDayInMonth(month){
    switch(month){
        case "January":
            return 31
        case "February":
            return 28
        case "March":
            return 31
        case "April":
            return 30
        case "May":
            return 31
        case "June":
            return 30
        case "July":
            return 31
        case "August":
            return 31
        case "September":
            return 30
        case "October":
            return 31
        case "November":
            return 30
        case "December":
            return 31
    }
}  */

const thirtyOneDaysMonths = ["January", "March", "May", "July", "August", "October", "December"];
const thirtyDaysMonths = ["April", "June", "September", "November"];
const twentyEightDaysMonth = ["February"]
function getDayInMonth(month){
    switch(true) {
        case thirtyOneDaysMonths.includes(month):
            return 31
        case thirtyDaysMonths.includes(month):
            return 30
        case twentyEightDaysMonth.includes(month):
            return 28
        default:
            return "Choose a month!"
    }
}

console.log(getDayInMonth("January"))
console.log(getDayInMonth("February"))
console.log(getDayInMonth("April"))

