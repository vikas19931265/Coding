/* 
Declaration and initialization of Object using Object literal
=============================================================

Using object literal where declaration and initialization is at same place.

Syntax
========

Syntax: - var object_name = {key1:value1, key2:value2, key_n:value_n, key: function};


note
=========

Since here student is single object which is not going to get dynamic values hence, we cannot use
this keyword here, instead we need to  use the same name of variable to access the function also.

However if we would have used constructor then values inside the object would change dynamically
and hence we could use this keyword.

*/

var student=
{
    name: 'vikas',
    rollNo:1234,
    marks1:100,
    marks2:300,
    marks3:600,
    total:()=> { return student.marks1+ student.marks2+ student.marks3 } // note here i m unable to use this keyword.
};

// accessing the properties of student object

console.log(student.name); //vikas
console.log(student.rollNo); //1234
console.log(student.marks1); // 100
console.log(student.marks2); //300
console.log(student.total());//1000