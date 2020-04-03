/* 
JavaScript Array values() Method
=====================================

The values() method creates a new array iterator object that carries the values specified at 
each array index. We can iterate the array elements via loops or iterator methods.

Syntax  : 
=======
    Array.values();

Parameter:
==========
    Does not hold any parameter

Return Types
=============:
    Return newly created iterated object.

*/

// Example 1

var elements=[1,2,3];
var itr=elements.values();
for(it of itr)
{
    console.log(it);/* 
                        1
                        2
                        3
                    */
    
}

// Example 2

var elements1=[1,2,3];
var itr1=elements1.values();
console.log(itr1.next().value);  // 1  --> itr1 position will change to next element after calling.
console.log(itr1.next().value);  // 2




