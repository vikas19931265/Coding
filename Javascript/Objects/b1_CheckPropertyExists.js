/* 
Check Property Exists
===============================

This can be done using typeOf operator

*/

var student=
{
    name : "vikas",
    rollNo: 1234
}

console.log(typeof student.name!=="undefined");  // true ... property is not undefined.
console.log(student.name==="vikas"); // true.

//We can do the same using in operator as well

/* 
    Syntax
    =========

    Syntax: - if (‘key’ in object_name)

*/
if("name" in student)
{
    console.log("proerty exists");  // property exists.
}

// We can do this using hasOwnProperty() method as well on object

var per=function Persons(pname)
{ 
    this.name=pname
}
var firstPerson= new per("ravi");
console.log(firstPerson.name); // ravi
console.log(firstPerson.hasOwnProperty("name"));