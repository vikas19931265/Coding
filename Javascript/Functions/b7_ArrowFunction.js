/* 
Arrow Function
====================

An arrow function expression (previously, and now incorrectly known as fat arrow function) has a 
shorter syntax compared to function expressions. 

Arrow functions are always anonymous. 

Syntax: -
    ( ) => { statements};

Arrow functions should not be called before declared.

An arrow function cannot contain a line break between its parameters and its arrow.
      var myfun = ( ) 
       => { document.write("Geekyshows");};
       myfun();

    
Example
=========

var myfun = function show( ) {
     document.write(“GeekyShows”);
}; 

var myfun = ( ) =>{document.write(“GeekyShows”);}; 

*/

// Arrow Function example 1

var myfun1=()=>{
            console.log(" anonymous function");// anonymous function
};
myfun1();

// Arrow function with one parameter : type 1

var myfun2=(num1)=>{
            console.log("myfun2"+ num1); //10
}

myfun2(10);

// Arrow function with one parameter : type 2

var myfun3=(num1) => { return num1 };
console.log("myfun3" + myfun3(30)); // 30

// Arrow function with one parameter : type 3

/* 
    In case there is only one parameter we dont need to specify the bracket
*/

var myfun4= num1 => { return num1}
console.log(myfun4(40)); //40

// Arrow function with one parameter : type 4
/* 
    In case we are specifying only one statement we dont need to write in brackets
    and we also dont need the return keyword.
*/

var myfun5=num1=> num1+4;
console.log("myfun5 " + myfun5(10)); //14

// Arrow function with default value 

var myfun6=(num1, num2=4)=> num1+num2
console.log("myfun6 " + myfun6(10)); //14

// Arrow function with rest arguments

var myfun7= (num1, ...args)=> num1+ args[0];
console.log("myfun 7 " + myfun7(10,10,10)); //20


