/* 
Deleting the properties and Adding new properties in middle of code
=========================================================================

Delete operator is used to delete instance properties. 
Syntax:- delete object_name.property_name
Ex: - delete fees.Rahul;

After removal with delete operator, the property has the undefined value. 

*/

var student=
{
    name : "vikas",
    rollNo:1234
}

console.log(student.name);
delete student.name
console.log(student.name); // undefined.
console.log(Object.keys(student)) //[ 'rollNo' ]....note that the old key is deleted.
student.name="ravi"; // Adding the new key again.
console.log(student.name); // ravi
student.marks=100;  // a new key is added.
console.log(student.marks); //100
console.log(Object.keys(student)) // [ 'rollNo', 'name', 'marks' ]