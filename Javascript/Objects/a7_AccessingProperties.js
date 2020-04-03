/* 
Accessing Properties of Objects
=======================================

A property of an object is some piece of named data it contains. These are accessed with dot operator applied to an object alternative to the dot operator is the array [ ] operator. 

Syntax: - object_name.property_name

Accessing methods of objects
======================================

Object members that are functions are called methods. These are accessed with dot operator applied to an object alternative to the dot operator is the array [ ] operator. 

Syntax: - object_name.Method_name( );

*/

var obj=
    {
        name : "vikas",
        marks1: 100,
        marks2 : 100,
        totalMarks: function(marks3){
                return this.marks1+ this.marks2 + marks3;
    }

}

// accessing the property
    console.log(obj.name); // vikas

// accessing the method
    console.log(obj.totalMarks(300)); //500

// accessing the method using []
    console.log(obj["totalMarks"](600)); //800
