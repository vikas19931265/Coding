/*

ResultSetMetaData:
======================================

It is an interface present in java.sql package.

Driver software vendor is responsible to provide implementation.

It provides information about database table represented by ResultSet object.

Useful to get number of columns, column types etc..

We can get ResultSetMetaData object by using getMetaData() method of ResultSet interface.

    public ResultSetMetaData getMetaData()
    Eg: ResultSetMetaData rsmd=rs.getMetaData();

Once we got ResultSetMetaData object, we can call the following methods on that object like
getColumnCount()
getColumnName()
getColumnType()
etc...


*/