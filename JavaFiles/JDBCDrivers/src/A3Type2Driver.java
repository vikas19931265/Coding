/*

Type-2 Driver:
======================

1. It is also known as Native API -Partly Java Driver OR Native Driver.



               ------->                                     -------->                                   --------->
java application           Native API partly java  driver               vendor specific native library            Database
               <-------                                     <--------                                   <---------

-------------------------client machine--------------------------------------------------------------


2. Type-2 Driver is exactly same as Type-1 Driver except that ODBC Driver is replaced with Vendor
   specific Native Libraries.


3.  Type-2 Driver internally uses Vendor specific Native Libraries to Communicate with Database.
    Native Libraries means the Set of Functions written in Non-Java (Mostly C OR C++).

4.  We have to install Vendor provided Native Libraries on the Client Machine.

5.  Type-2 Driver converts JDBC Calls into Vendor specific Native Library Calls, which can be
    understandable directly by Database Engine.

Advantages:
----------------

1. When compared with Type-1 Driver Performance is High, because it required only one Level
Conversion from JDBC to Native Library Calls.

2. No need of arranging ODBC Drivers.

3. When compared with Type-1 Driver, Portability is more because Type-1 Driver is applicable only
for Windows Machines.

Limitations:
-------------------

1. Internally this Driver using Database specific Native Libraries and hence it is Database
   Dependent Driver. Because of this migrating from one Database to another Database will become
   Difficult.

2. This Driver is Platform Dependent Driver as we are going to use native libraray functions
   written in C or C++ which is not platform independent.

3. On the Client Machine compulsory we should install Database specific Native Libraries.

4. There is no Guarantee for every Database Vendor will provide This Driver.
   (Oracle People provided Type-2 Driver but MySql People won't provide this Driver)

Eg: OCI (Oracle Call Interface) Driver is Type-2 Driver provided by Oracle.
OCI Driver internally uses OCI Libraries to communicate with Database.

OCI Libraries contain "C Language Functions"

OCI Driver and corresponding OCI Libraries are available in the following Jar File. Hence we have to
place this Jar File in the Class Path.

ojdbc14.jar ➔ Oracle 10g (Internally Uses Java 1.4V)
ojdbc6.jar ➔ Oracle 11g (Internally Uses Java 1.6V)
ojdbc7.jar ➔ Oracle 12c (Internally Uses Java 1.7V)

Note: The only Driver which is both Platform Dependent and Database Dependent is Type-2
Driver. Hence it is not recommended to use Type-2 Driver.


*/