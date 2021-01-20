/*

Note: 

This way of implementing Connection Pool is useful for Standalone applications. In the case
of web and enterprise applications, we have to use server level connection pooling. Every web and
application server can provide support for Connection Pooling.


Q. What is the difference Between getting Connection object by using DriverManager and
DataSource object?


In the case of DriverManager.getConnection(), always a new Connection object will be created
and returned.

But in the case of DataSourceObject.getConnection(), a new Connection object won't be created
and existing Connection object will be returned from Connection Pool.


*/