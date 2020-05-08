/* 
Declaration and initialization of Object using Object literal
=============================================================

Syntax: - var object_name = { };

*/

var student={};

// this is one way of initializing the object.
    student['name']='vikas';
    student['rollNo']=1234;

// this is another way of initializing object
    student['address']='kabilar street';

//if more then one word forms a key then use double quotes and only array way of initializing can be used.
    student["date of birth"]='06/09';

// we can also intitialize using the dot which is the most common way.
    student.marks1=50;
    student.marks2=100;
    student.marks3=70;

student.total=() => { return (student.marks1+ student.marks2+ student.marks3)};
console.log("total score of the student is "+ student.total())  // 220




