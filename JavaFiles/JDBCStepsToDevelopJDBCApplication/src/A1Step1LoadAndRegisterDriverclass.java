/*

Standard Steps for developing JDBC Application
==================================================================

Step 1: Load and Register Driver Class
==================================================================

1. Load and register Driver Class
2. Establish Connection between Java Application and Database
3. Create Statement Object
4. Send and execute SQL Query
5. Process Result from ResultSet
6. Close Connection


1.  JDBC API is a Set of Interfaces defined by Java Vendor.

2.  Database Vendor is responsible to provide Implementation. This Group of Implementation Classes
    is nothing but "Driver Software".

3.  We have to make this Driver Software available to our Java Program. For this we have to place
    corresponding Jar File in the Class Path.

Note:

Type-1 Driver is available as the Part of JDK and hence we are not required to set any Class Path
explicitly.

4.  Every Driver Software is identified by some special Class, which is nothing but Driver Class.
    For Type-1 Driver, the corresponding Driver Class Name is

        sun.jdbc.odbc.JdbcOdbcDriver

5.  We can load any Java Class by using Class.forName() Method. Hence by using the same Method
    we can load Driver Class.

        Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");


6. Whenever we are loading Driver Class automatically Static Block present in that Driver Class will
  be executed.


    class JdbOdbcDriver

    {

        static
            {
               JdbOdbcDriver driver= new JdbOdbcDriver();
               DriverManager.registerDriver(driver);
            }
    }

7. Because of this Static Block, whenever we are loading automatically registering with
   DriverManager will be called.

8. Hence we are not required to perform this activity explicitly.

9. If we want to register explicitly without using Class.forName() then we can do as follows by using
   registerDriver() Method of DriverManager Class.

    JdbOdbcDriver driver= new JdbOdbcDriver();
    DriverManager.registerDriver(driver);

Note: From JDBC 4.0 V (Java 1.6 V) onwards Driver Class will be loaded automatically from Class
Path and we are not required to perform this step explicitly.


*/