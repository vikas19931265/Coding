/* 

Modifying Array elements
=============================
Note

    If we are assigning one array to another object. Then changing any index value inside
    the one array will lead to the change in the other array as well.

*/

var elements=["vikas","ravi"];
elements[0]="amit";  // modifying the value at index 0
console.log(elements); ///[ 'amit', 'ravi' ]

var elements1= elements; // here we are assigning elements to elements1
elements1[1]="asish";
console.log(elements); //[ 'amit', 'asish' ] 
/* 
    Here we changed the value inside the elements1 array but the value at index 1 
    has also changed in the elements array.

    this is because both the references are pointing to the same object.

*/




