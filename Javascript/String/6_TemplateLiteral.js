/* 
    Template Literal
    ========================

   Template literals are string literals allowing embedded expressions. You can use multi-line 
   strings and string interpolation features with them.

   Template literals are enclosed by the back-tick (` `) character instead of double or single quotes. 

*/

// Example 1
let str='hello';
console.log(`${str} world`); //hello world


//  Example 2
let a =10;
let b =30;
console.log(`${a+b} result`);  // 40 result


// Example 3
function display()
{
    return "display";
}

console.log(`${display()}`); // display