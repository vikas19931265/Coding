/* 

For-Each loop
=====================

The forEach calls a provided function once for each element in an array, in order. 
Syntax: - array.forEach(function (value, index, arr) {  
 }); 

 Where,  
       value – It is the current value of array index. 
       index – Array‟s index number 
       arr - The array object the current element belongs to 

       Ex:- geek.forEach( function(name){ 
 document.write(name); 
 } ); 

*/

var element=[0,1,2,3,4];

element.forEach(function(value, index, arr)
{
        console.log(value);
})

/* 
0
1
2
3
4

*/



