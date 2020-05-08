/* 
    Tagged Literal
    =====================

    Tagged Templates are advanced form of Template literal. 
    Tags allow you to parse template literals with a function. 
    The first argument of a tag function contains an array of string values. 
    The remaining arguments are related to the expressions. 
    In the end, your function can return your manipulated string.

*/

// There are 5 movie tickets Each Rs 200 and if you buy 5 tickets get discount Rs. 50 Each
// There are 5 movie tickets Each Rs 200 and if you buy less than 5 tickets get discount Rs. 0 Each

var noofticket = 5;
var buyticket = 4;
var eachprice = 200;
var disprice = 50;
// function ticket(theory, ...rest) {}
function ticket(theory, nticket, eprice, bticket, dprice) {  // this is tagged function
    if (bticket < 5) {
        dprice = 0;
        return `${theory[0]}${nticket}${theory[1]}${eprice}${theory[2]}${bticket}${theory[3]}${dprice}${theory[4]}`
    } else {
        return `${theory[0]}${nticket}${theory[1]}${eprice}${theory[2]}${bticket}${theory[3]}${dprice}${theory[4]}`

    }
}

document.write(ticket`There are ${noofticket} movie tickets Each Rs ${eachprice} and if you buy ${buyticket} tickets get discount Rs. ${disprice} Each`);
// first argument is holding array of string values
// second argument must be expression.

/*
    Here  theory is holding all the string values

    theory ---> there are, movie tickets each rs, and if you buy, tickets get discount Rs., Each
    nticket  ----> noofticket, eachprice , buyticket, dprice.

*/