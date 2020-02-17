/*

Process to implement Connection Pooling:
============================================

1. Creation of DataSource object
==================================

DataSource is responsible to manage connections in Connection Pool.

DataSource is an interface present in javax.sql package.

Driver Software vendor is responsible to provide implementation.

Oracle people provided implementation class name is :
        OracleConnectionPoolDataSource.


This class present inside oracle.jdbc.pool package and it is the part of ojdbc6.jar.

OracleConnectionPoolDataSource ds= new OracleConnectionPoolDataSource();


2. Set required JDBC Properties to the DataSource object:
============================================================

ds.setURL("jdbc:oracle:thin:@localhost:1521:XE");
ds.setUser("scott");
ds.setPassword("tiger");

3. Get Connection from DataSource object:
===========================================================

Connection con = ds.getConnection();
Once we got Connection object then remaining process is as usual.


*/