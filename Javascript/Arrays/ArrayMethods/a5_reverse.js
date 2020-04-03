/* 
reverse() function
=======================

The JavaScript array reverse() method changes the sequence of elements of the given array and 
returns the reverse sequence. In other words, the arrays last element becomes first and the
first element becomes the last. This method also made the changes in the original array.

Sytnax
=======
    array.reverse()

Return
=======
    The original array elements in reverse order.

*/

var elements=new Array(1,2,3);
elements= elements.reverse();
console.log(elements);

/* 
[ 3, 2, 1 ]
*/