/*

Type 4 Driver
====================================


1. Also known as Pure Java Driver OR Thin Driver.


               ------->                                     --------->
java application           All Java native protocol driver                 Database
               <-------                                     <---------

-------------------------client machine--------------------


1. This Driver is developed to talk with the Database directly without taking Support of ODBC Driver
   OR Vendor Specific Native Libraries OR Middleware Server.

2. This Driver uses Database specific Native Protocols to communicate with the Database.

3. This Driver converts JDBC Calls directly into Database specific Calls.

4. This Driver developed only in Java and hence it is also known as Pure Java Driver. Because of this,
   Type-4 Driver is Platform Independent Driver.

5. This Driver won't require any Native Libraries at Client side and hence it is light weighted. Because
   of this it is treated as Thin Driver.


Advantages:
-------------------

1. It won't require any Native Libraries, ODBC Driver OR Middleware Server

2. It is Platform Independent Driver

3. It uses Database Vendor specific Native Protocol and hence Security is more.


Limitation:
----------------------

The only Limitation of this Driver is, it is Database Dependent Driver because it is communicating
with the Database directly.

Eg: Thin Driver for Oracle
Connector/J Driver for MySQL
Note: It is highly recommended to use Type-4 Driver.


*/