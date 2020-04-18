/* 
JavaScript Array splice() method
==================================

The JavaScript array splice() method is used to add/remove the elements to/from the existing array. 
It returns the removed elements from an array. The splice() method also modifies the original array.

The splice() method changes the contents of an array by removing existing elements 
and/or adding new elements. This method changes the original array. 
Syntax:- array_name.splice (start, deletecount, replacevalues); 


Start – The first argument start specifies at what position to add/remove items, use 
negative values to specify the position from the end of the array. 


Deletecount – The second argument deletecount, is the number of elements to delete 
beginning with index start.  


Replacevalues – replacevalues are inserted in place of the deleted elements. If more 
than one separate it by comma.  


Syntax
=========
The splice() method is represented by the following syntax:

array.splice(start,delete,element1,element2,element n)

start: this is the index position from which method starts to extract the elements.
delete: It is optional and denotes the number of elements from the start position to be removed
        from the array.
element 1 to element n: These are the elements to be added to the array.

Return
=======
Returns a new javascript array object with the removed elements.

*/

 
//Example 1: This program we will try to insert "vikas" after tuesday

var elements=["sun","mon","tue","thu","fri","sat"];
var spliceElements=elements.splice(3,0,"vikas");
console.log("original elements are "+ elements); //sun,mon,tue,vikas,thu,fri,sat
console.log("spliced elements are " + spliceElements);// 0 elements were deleted.

//Example  2: This program will try to remove tue from the array

var elements1=["sun","mon","tue","wed", "thu","fri","sat"];
console.log("Removing tuesday : " + elements1.splice(2,1)); //Removing tuesday : tue
    // from second position , we are going to delete 1 element.
console.log("elements in original array after slice : " + elements1 ); //sun,mon,wed,thu,fri,sat

// Example 3 : In place of tue we will make it tuesday

var elements3=["sun","mon","tue","wed", "thu","fri","sat"];
elements3.splice(2,1,"Tuesday");
console.log(elements3); //[ 'sun', 'mon', 'Tuesday', 'wed', 'thu', 'fri', 'sat' ]

// Example 4: From mon onwards remove all the elements.

var elements4=["sun","mon","tue","wed", "thu","fri","sat"];
console.log(elements4.splice(2));//[ 'sun', 'mon' ]
console.log(elements4);

// Example 5: Remove mon and insert vikas and sehwag

var elements5=["sun","mon","tue","wed", "thu","fri","sat"];
console.log(elements5.splice(1,1,"vikas","sehwag"));
console.log("values : "+ elements5); //values : sun,vikas,sehwag,tue,wed,thu,fri,sat


