/*

Inserting Date Values into Database:
=======================================================

Various databases follow various styles to represent Date.

Eg:
Oracle: dd-MMM-yy 28-May-90
MySQL: yyyy-mm-dd 1990-05-28

If we use simple Statement object to insert Date values then we should provide Date value in the
database supported format,which is difficult to the programmer.

If we use PreparedStatement,then we are not required to worry about database supported form,
just we have to call
pst.setDate (2, java.sql.Date);

This method internally converts date value into the database supported format.
Hence it is highly recommendedto use PreparedStatement to insert Date values into database.


*/