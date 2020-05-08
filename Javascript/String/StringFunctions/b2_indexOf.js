/* 
    indexOf() function
    =======================

 The indexOf( ) method takes a string argument and returns the index of the first occurance 
 of the argument in the string. If the argument is not found returns -1 . 
 
 This method also accepts an optional second argument that specifies the index at which to start 
 the search. 
 
 The indexOf() method cannot take powerful search values (regular expressions).

*/

var str = "Hi guys Lets Learn JavaScript";
console.log(str.indexOf("L")) // 8
console.log(str.indexOf("L",9)); //13
console.log(str.indexOf("Lets")); //8