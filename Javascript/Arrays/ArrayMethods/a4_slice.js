/* 
JavaScript Array slice() method
============================================
The JavaScript array slice() method extracts the part of the given array and returns it. 
This method doesn't change the original array.

Syntax
================

The slice() method is represented by the following syntax:

array.slice(start,end)  

Parameter
=================
start - It is optional. It represents the index from where the method starts to extract the 
elements.

please note that end is not counted. Instead end-1 is counted.


Start 
=============
If begin is undefined, slice begins from index 0. 
If begin is greater than the length of the sequence, an empty array is returned. 
A negative index can be used, indicating an offset from the end of the sequence. 
slice(-2) extracts the last two elements in the sequence. 

End
===============

If end is omitted, slice extracts through the end of the sequence (arr.length). 
If end is greater than the length of the sequence, slice extracts through to the end of the sequence (arr.length). 
A negative index can be used, indicating an offset from the end of the sequence. slice(2,-1) extracts the third 
element through the second-to-last element in the sequence. 
slice extracts up to but not including end. 
*/

// Example 1

var elements= ["v","d","t","w","y","x"];
console.log(elements.slice(1,4)); //[ 'd', 't', 'w' ]
console.log(elements.slice(4)); // [ 'y', 'x' ]  ..start from 4 to end
console.log(elements.slice(0,4)); //[ 'v', 'd', 't', 'w' ]
console.log(elements.slice(2,-1)); //[ 't', 'w', 'y'
            /* 
            reach the 2nd index found( t ) and then from the back reach the 1st index found(y)
            now extract it (t, w , y)
            */