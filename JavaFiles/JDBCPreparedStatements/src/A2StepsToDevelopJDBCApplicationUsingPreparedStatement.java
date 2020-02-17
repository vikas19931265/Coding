/*

Steps to develop JDBC application using the prepared statement
===============================================================================

Step1
====================

Prepare SQLQuery either with parameters or without parameters.
=================================================================================

    Eg: insert into employees values(100,'durga',1000,'hyd');
        insert into employees values(?, ?, ?, ?);
                                        |
                                        V
                            Positional Parameter OR Place Holder OR IN Parameter
Step2
=====================

Create PreparedStatement object with our sql query.
================================================================================

PreparedStatement pst = con.prepareStatement(sqlQuery);

At this line only query will be compiled.

Step 3 
=====================

If the query is parameterized query then we have to set input values to these parameters by
using corresponding setter methods.
=================================================================================================

We have to consider these positional parameters from left to right and these are 1 index based. i.e
index of first positional parameter is 1 but not zero.

pst.setInt(1,100);
pst.setString(2,"durga");
pst.setDouble(3,1000);
pst.setString(4,"Hyd");

Note:
Before executing the query, for every positional parameter we have to provide input values
otherwise we will get SQLException

4. Execute SQL Query:
========================

PreparedStatement is the child interface of Statement and hence all methods of Statement
interface are by default available to the PreparedStatement.Hence we can use same methods to
execute sql query.

executeQuery()
executeUpdate()
execute()
Note:

We can execute same parameterized query multiple times with different sets of input values.
In this case query will be compiled only once and we can execute multiple times.


Q. Which of the following are valid sql statements?

1. delete from employees where ename=?   (valid)
2. delete from employees ? ename=?       (invalid)
3. delete from ? where ename=?           (invaild)   
4. delete ? employees where ename=?      (invalid)

Note:
We can use ? only in the place of input values and we cannot use in the place of sql
keywords,table names and column names.

*/
