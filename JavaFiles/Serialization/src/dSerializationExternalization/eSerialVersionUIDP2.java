/*

**SerialVersionUID is used to ensure that during deserialization the same class 
(that was used during serialize process) is loaded. This is a one line definition
to explain why a serialVersionUID is used?


**Apart from the above definition there are quite a few things to learn from this 
serialVersionUID. As per javadocs, following is format of serialVersionUID:

    serialVersionUID Syntax
    ANY-ACCESS-MODIFIER static final long serialVersionUID = 42L;


serialVersionUID is a static final field. You can assign any number of your choice to it.

Why serialVersionUID?
=========================

Lets start with annoying warning message you get in your IDE when you declare a class as Serializable.

The serializable class Lion does not declare a static final serialVersionUID field of type long

Most of us used to ignore this message as we always do for a warning. My general note is, 
always pay attention to the java warning messages. It will help you to learn a lot of fundamentals.

serialVersionUID is a must in serialization process. But it is optional for the developer to 
add it in java source file. If you are not going to add it in java source file, serialization 
runtime will generate a serialVersionUID and associate it with the class. The serialized 
object will contain this serialVersionUID along with other data.


Even though serialVersionUID is a static field, it gets serialized along with the object. 
This is one exception to the general serialization rule that, static fields are not serialized.

How serialVersionUID is generated?
=====================================

serialVersionUID is a 64-bit hash of the class name, interface class names, methods and fields. 
Serialization runtime generates a serialVersionUID if you do not add one in source.

It is advised to have serialVersionUID as unique as possible. Thats why the java runtime 
chose to have such a complex algorithm to generate it.


How serialVersionUID works?
===================================

When an object is serialized, the serialVersionUID is serialized along with the other contents.
Later when that is deserialized, the serialVersionUID from the deserialized object is extracted 
and compared with the serialVersionUID of the loaded class.

Example
    We serialized the object with the serializeversionID os 1. Now we are trying to 
    deserialize the object.Now the loaded class has ID of 1 and deserialized object has
    also got ID 1 in that case the serializing will be success.
    
    Now if we change the the serializeVersionID to 2 and try to serialize the object
    then in that case the versionIDs wont match and we will get the error.



If the numbers do not match then, InvalidClassException is thrown.

If the loaded class is not having a serialVersionUID declared, then it is automatically
generated using the same algorithm as before.

Strongly recommended to declare serialVersionUID
Javadocs says,

the default serialVersionUID computation is highly sensitive to class details that
may vary depending on compiler implementations, and can thus result in unexpected 
InvalidClassExceptions during deserialization.
Now you know why we should declare a serialVersionUID.

Not only declaring a serialVersionUID is sufficient. You must do the following two 
things carefully. Otherwise it defeats the purpose of having the serialVersionUID.

serialVersionUID should be maintained. As and when you change anything in the class, you should upgrade the serailVersionUID.
Try your best to declare a unique serialVersionUID.


Explanation by Vikas
======================

Lets say i try to serialize the object of class Student. So after serializing the object
there will be an associated serialID with it. Whenever we are going to deserialize this
object the JVM is going to look for the dot class of Student having the same SerialID. If it finds the
serial ID then the object will get serialized successfully or else we will get the error.



*/

