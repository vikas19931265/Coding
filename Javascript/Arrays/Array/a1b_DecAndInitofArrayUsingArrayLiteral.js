/* 

    Declaration and initialization of Array
    =============================================
 
    Using Array Literal 

    Syntax: - var array_name = [ ]; 

    Note - By default, array starts with index 0
 */

// First way of creating array literal

var elements= []  // empty array...Declaration
elements[0]="vikas"; // initialization
elements[1]="sachin";


var names=["vikas","sehwag","sachin"]; // Array literal ..Declaration and initialization together
for(var i=0; i<names.length;i++)
{
    console.log(names[i]);
}


var elements2=[, , , ,]; // All values are undefined here
console.log(elements2[0]); // undefined.

var a=10, b=20 , c=40;
var elements3=[a,b,c]// This is another way to declare and initialize array elements.
