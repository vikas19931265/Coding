/*

Differences between Statement And PreparedStatement
==================================================================

Statement  Vs PreparedStatement
===========================================


Statement                                                                         PreparedStatement
====================                                                              ===========================          

1) At the time of creating Statement Object,                                      At the time of creating prepared statement
we are not required to provide any Query.                                         we have to provide SQL query compulsary and will
Statement st = con.createStatement();                                             send to the database and will be compiled
Hence Statement Object is not associated with                                     PreparedStatement pst= con.prepareStatement(query);
any Query and we can use for multiple Queries                                     Hence PS is associated with only one query at a time.  


Whenever we are using execute() method everytime the                            Whenever we are using execute() method query will not
query will be compiled and executed.                                            be compiled but will only be executed.


Statement object can work for only static queries                               PreparedStatement object can work for both the static as
                                                                                well as the dynamic queries.

Relatively performance is low                                                   Relatively performance is high.

It is the best choice if we want to work with multiple                          It is the best choice if one query is required to be executed
queries.                                                                        multiple times.


There may be a chance of SQL injection attack                                   There is no chance of SQL injection attack.

Inserting date and large object(CLOB,BLOB) is difficult                         Inserting date and large objects(CLOB,BLOB) is easy.




*/