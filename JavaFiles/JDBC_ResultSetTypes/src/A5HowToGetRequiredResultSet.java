/*

How to get Required ResultSet:
==============================

We can create Statement objects as follows to get desired ResultSets.
       
        Statement st =con.createStatement(int type,int mode);
        PreparedStatement pst=con.prepareStatement(query,int type,int mode);

Allowed values for type are:

    ResultSet.TYPE_FORWARD_ONLY ➔ 1003
    ResultSet.TYPE_SCROLL_INSENSITIVE ➔ 1004
    ResultSet.TYPE_SCROLL_SENSITIVE ➔ 1005

Allowed values for mode are:

ResultSet.CONCUR_READ_ONLY ➔ 1007
ResultSet.CONCUR_UPDATABLE ➔ 1008

Eg: for Scroll sensitive and updatable ResultSet:

    Statement st =con.createStatement(1005,1008);

Note: 
=========
Default type is forward only and default mode is read only.

Note:
=========

To use various types of ResultSets underlying database support and driver support must be
required

Some databases and some driver softwares won’t provide proper support.

We can check whether the database supports a particular type of ResultSet or not by using the
following methods of DatabaseMetaData.

1. public boolean supportsResultSetConcurrency(int type, int concurrency)

    Retrieves whether this database supports the given concurrency type in combination with the
    given result set type.


2. public boolean supportsResultSetType(int type)

    Retrieves whether this database supports the given ResultSet type.



*/