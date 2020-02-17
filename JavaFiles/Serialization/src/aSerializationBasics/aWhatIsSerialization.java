package aSerializationBasics;

/*

Serialization in Java
========================

Introduction
-------------------------

The Process of writing state of an object to the file is called as the serialization.
But strictly it is the process of converting an object from java supported form into 
either file supported form or network supported form.

Objects are binary data and to write them to the file we need Streams.

By Using fileoutputstream and ObjectOutputStream classes we can implement the 
concept of Serialization.


------OOS.writeObject()----
                           |---fos--------  |---------
    OBJECT----------------------------------|-       |
                            --------------- |FILE    |-----(a.sir)// any extension possible
---------------------------|-               |        | 
                                            |---------
In order to save this object to the file we will need two streams one is going to 
be ObjectOutputStream and FileOutputStream



Deserialization in Java
--------------------------------

The process of reading the state of an object from the file in called as the Deserialization.
But strictly speaking it is the process of converting an object from either file supported form
or network supported form into java supported form.


------OIS.readObject()-----
                           |---fis--------  |---------
    OBJECT----------------------------------|-       |
                            --------------- |FILE    |-----(a.sir)// any extension possible
           ----------------|-               |        | 
                                            |---------

By using FileInputStream and ObjectInputStream Classes we can implement deserialization.


*/