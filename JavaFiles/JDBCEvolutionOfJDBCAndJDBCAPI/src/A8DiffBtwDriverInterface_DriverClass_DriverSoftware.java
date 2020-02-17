

/*

Difference between Driver Interface, Driver Class and Driver Software:
================================================================================

1) Driver Interface:

    This Interface present in java.sql Package.

    This Interface acts as Requirement Specification to implement Driver Class.



2) Driver Class:
        
        It is the Implementation Class of Driver Interface
        Eg: sun.jdbc.odbc.jdbcodbcdriver



3) Driver Software:

     It is the Collection of Implementation Classes of various Interfaces present in JDBC API.

     It acts as Bridge between Java Application and Database.

     It is responsible to convert Java Calls into Database specific Calls and Database specific Calls
     into Java Calls.

Usually Driver Software are available in the Form of jar File.
Eg:

  ojdbc14.jar
  ojdbc6.jar
  ojdbc7.jar
  mysql-connector.jar

Driver Softwares can be provided by the following Vendors


    Java Vendor (Until 1.7 Version Only)
    Database Vendor
    Third Party Vendor


   Type-1 Driver (JDBC-ODBC Bridge Driver) provided by Java Vendor.
 
   Thin Driver provided by Oracle Database Vendor.

   Inet is a Third Party Vendor and providing several Driver Software for different Databases.

Eg:
    Inet Oraxo For Oracle Database
    Inet Merlia For Microsoft SQL Server
    Inet Sybelux For Sybase Database

Note: It is highly recommended to use Database Vendor provided Driver Software.



  While developing Driver Software, Vendors may use only Java OR Java with other Languages
  like C OR C++.

  If Driver Software is developed only in Java Language then such Type of Drivers are called Pure
  Java Drivers.

  If Driver Software developed with Java and other Languages, then such Type of Driver
  Softwares are called Partial Java Drivers.

*/