/*

Step-2: Establish Connection between Java Application and Database
==============================================================================


◈ Once we loaded and registered Driver, by using that we can establish Connection to the Database.
  For this DriverManager Class contains getConnection() Method.

    public static Connection getConnection(String jdbcurl, String username, String pwd) throws SQLException

    Eg: Connection con= DriverManager.getConnection(jdbcurl,username,pwd);

    "Jdbcurl" represents URL of the Database.

    username and pwd are Credentials to connect to the Database.

    JDBC URL Syntax:
                <mainprotocol> : <subprotocol> :   <subname>
                Always JDBC      Driver Protocol   Driver Connection

◈ Type-1 Driver, JDBC URL is:

    jdbc:odbc:demodsn

Eg: Connection con= DriverManager.getConnection("jdbc:odbc:demodsn","scott","tiger");

Note:

◈ DriverManager will use Driver Class internally to connect with Database.

◈ DriverManager Class getConnection() Method internally calls Driver Class connect() Method.


DSN (Data Source Name) for Type-1 Driver:
==============================================

◈ Internally Type-1 Driver uses ODBC Driver to connect with Database.

◈ ODBC Driver needs Database Name & its Location to connect with Database.

◈ ODBC Driver collect this Information from DSN i.e. internally ODBC Driver will use DSN to get

Database Information (DSN Concept applicable only for Type-1 Driver)

There are 3 Types of DSN
1. User DSN
2. System DSN
3. File DSN


*/