package b2_AssociationMappingAndCollectionMapping;
/*
Cascade Attribute
======================


when ever we apply relationship between objects, cascade attribute transfers operations done on one object
onto its related child objects

Cascade attribute allows different values.

all
save-update
persist
delete
none (default).....

cascade="all"
------------
If we write cascade = "all" then changes at parent class object will be effected to child class object too.

if we write cascade = "all" then all operations like insert, delete, update at parent object will be effected to child object also.

If we apply insert or update or delete operation on parent class object, then child class objects will be effected

Example:
-------
 So when we insert Team object by default Player objects are inserted in to DB.
 When we delete Team object by defualt Player objects are deleted from Player table.

cascade ="none"
-----------------
default value of cascade ="none", means no operations will be transfers to the child class

if we apply cascade="none", insert or update or delete operations on parent class object, it doesn't effects on child objects.

lazy attribute:
=====================================

It allows boolean value, the default value is true.

if it is true, hibernate loads the data lazily, means when we load parent object it never loads the child objects immediatly.

If it is false hb doesn't perform lazy loading, means when we load parent object immediatly hb loads the child data.





*/