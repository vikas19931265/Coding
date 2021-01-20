/*

Q. How many getConnection() methods are available in DriverManager class.
===========================================================================

1. Connection con=DM.getConnection(url,user,pwd); // in properties file define everything.
2. Connection con=DM.getConnection(url,Properties); //in properties file define only username and password.
3. Connection con=DM.getConnection(url);



Eg:

Connection
con=DM.getConnection("jdbc:mysql://localhost:3306/durgadb?user=root&password=root");


Eg:
Connection con=DriverManager.getConnection("jdbc:oracle:thin:scott/tiger@localhost:1521:XE");

*/