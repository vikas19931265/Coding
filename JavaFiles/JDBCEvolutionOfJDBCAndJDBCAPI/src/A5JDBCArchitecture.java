

/*

JDBC Architecture
===============================================================================


                        java applications
                            |
                         JDBC API
                            |
                         DriverManager
                            |
   -----------------------------------------------------------------------------
   |                            |                                          | 

Driver for oracle            Driver for Mysql                           Driver for Sybase                    
   |                            |                                          | 
    
oracle DB                    MySqlDB                                     SybaseDB                                                          



1.JDBC API provides DriverManager for our Applications.

2. Java applications can communicate with any database with help of driver manager
   and database specific driver.


Driver Manager
=======================

1. Driver manager is key component of JDBC Architecture.

2. Driver manager is java class present in java.sql package.

3. It is responsible to manage all Database drivers available in our system.

4. Driver manager is responsible to register and unregister datbase drivers.

        DriverManger.registerDriver(Driver);
        DriverManager.unregisterDriver(Driver);

5. DriverManager is responsbile to establish a connection to the Database with the 
   help of Driver Software.

        Connection con =DriverManager.getConnection(jdbc url, userName, pwd);

Database Driver
=======================

1. It is very important component of JDBC Architecture.

2. Without Database driver we cant touch our database.

3. It acts as a bridge between java application and our database.

4. It is responsible to convert java calls in database specific calls and database
   specific calls into java calls.


Note
====

1. Java Application is database independent but Driver software is Database Dependent
   
2. Because of the Driver software only java application will become database independent.

3.*** Java application is platform independent but JVM is platform dependent. Because of JVM 
   only java application will become platform independent.

*/