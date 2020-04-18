
/*
indexOf function
==========================

This method allows to easily find the occurrence of an item in an array. 

• If the item not found, it returns -1. 

• The search will start at the specified position, or at the beginning if no start 
position  is specified, and end the search at the end of the array. 

• If the item is present more than once, the indexOf method returns the position of the 
first occurrence. 
Syntax: - var position = array_name.indexOf(item, start); 
Ex:- var position = geek.indexOf(“Rohit”, 2); 

*/

var elements=["vikas","sehwag","sachin","dravid","yuvraj"];
var position = elements.indexOf('sachin');  // 2
console.log(position)


