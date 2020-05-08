/* 
substr() Method
===================
    
The substr() is similar to slice(). The substr() method returns the part of a string between the 
start index and a number of characters after it. substr() extracts length characters from a string, counting from the start index.

If start is a positive number, the index starts counting at the start of the string. 

If start is a negative number, the index starts counting from the end of the string.

*/

var value='vikas gautam';
console.log(value.substr(2)); //kas gautam
console.log(value.substr(2, 5)); //kas g