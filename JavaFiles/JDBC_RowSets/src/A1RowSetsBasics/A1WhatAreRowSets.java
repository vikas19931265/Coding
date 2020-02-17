package A1RowSetsBasics;

/*

RowSets
=====================================

-> It is alternative to ResultSet. We can use RowSet to handle a group of records in more effective way than ResultSet.

-> RowSet interface present in javax.sql package

-> RowSet is child interface of ResultSet.

-> RowSet implementations will be provided by Java vendor and database vendor.

-> By default RowSet is scrollable and updatable.

-> By default RowSet is serializable and hence we can send RowSet object across the network. But
   ResultSet object is not serializable.

-> ResultSet is connected i.e to use ResultSet compulsary database Connection must be required.

-> RowSet is disconnected. ie to use RowSet database connection is not required.




*/