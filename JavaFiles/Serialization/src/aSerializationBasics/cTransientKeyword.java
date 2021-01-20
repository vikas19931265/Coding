package aSerializationBasics;

/*

Transient keyword in serialization
-------------------------------------

Transient modifier is applicable only for the variables but not for methods and the 
classes.

At the time of the serialization , if we do not want to save the value of the particular
variable to meet the security constraints then we should declare that variable as 
transient variable.

While performing serialization JVM will ignore the original value of the transient
variable and saves default value to the file.

Hence Transient means not to Serialize

*/ 


