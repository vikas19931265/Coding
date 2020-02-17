/*

1. DatabaseMetaData
==============================

It is an interface present in java.sql package.

Driver Software vendor is responsible to provide implementation.

We can use DatabaseMetaData to get information about our database like database product
name, driver name, version, number of tables etc..

We can also use DatabaseMetaData to check whether a particular feature is supported by DB or
not like stored procedures, full joins etc..

We can get DatabaseMetaData object by using getMetaData() method of Connection interface.
    public DatabaseMetaData getMetaData();
    Eg: DatabaseMetaData dbmd=con.getMetaData();

Once we got DatabaseMetaData object we can call several methods on that object like

getDatabaseProductName()
getDatabaseProductVersion()
getMaxColumnsInTable()
supportsStoredProcedures()
etc...



*/