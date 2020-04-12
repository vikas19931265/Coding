/*
If we create array using constructor then we dont need to initialize the value of array
elements later on.

Syntax: - var array_name = new Array( );

*/

var elements= new Array() ; // same as var elements=[] ; ..this is empty array.
elements[0]="vikas";
elements[1]="ravi"; 


var employees= new Array("vikas","sachin","sehwag"); // Declaration and initialization of array at same line
for(var i=0; i<employees.length; i++)
{
    console.log(employees[i]);
}

// important note

var ele = new Array(3);

/* 
    If we have only one element inside the Array constructor and it is numeric. Then its treated
    as length of the array and 3 is not the index value of ele[0];

    Therefore its always a good idea to use Array literal in order to create the object.

*/