/*

Which Driver should be used?
=================================================

1. If we are using only one Type of Database in our Application then it is recommended to use
   Type-4 Driver.

   Eg: Stand Alone Applications, Small Scale Web Applications

2. If we are using multiple Databases in our Application then Type-3 Driver is recommended to
   use.

    Eg: Large Scale Web Applications and Enterprise Applications


3. If Type-3 and Type-4 Drivers are not available then only we should go for Type-2 Driver.

4. If no other Driver is available then only we should go for Type-1 Driver.



Differences between Thin and Thick Driver:
==============================================================


1.  If Driver won't require any extra Component to communicate with Database, such type of Driver is
    called Thin Driver.

    Eg: Type-4 Driver


2.  If Driver require some extra Component (like ODBC Driver OR Vendor specific Native Libraries
    OR Middleware Server), such Type of Driver is called Thick Driver.

    Eg: Type-1, Type-2 and Type-3 Drivers


3   Type-1, Type-2 and Type-4 Drivers follow 2-Tier Architecture.
    Type-3 Driver follows 3-Tier Architecture.




*/