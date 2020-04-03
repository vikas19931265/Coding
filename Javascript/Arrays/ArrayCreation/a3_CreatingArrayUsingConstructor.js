/*
If we create array using constructor then we dont need to initialize the value of array
elements later on.
*/

var employees= new Array("vikas","sachin","sehwag");
for(var i=0; i<employees.length; i++)
{
    console.log(employees[i]);
}