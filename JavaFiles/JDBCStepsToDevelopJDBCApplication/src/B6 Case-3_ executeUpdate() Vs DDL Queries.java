/*

Case-3: executeUpdate() Vs DDL Queries
================================================================================

If we use executeUpdate() Method for DDL Queries like Create Table, Alter Table, Drop Table Etc,
then Updated Record Count is not applicable. The Result is varied from Driver to Driver.

int rowCount=st.executeUpdate("create table employees(eno number,ename varchar2(20)");

For Type-1 Driver, we will get -1 and For Type-4 Driver, we will get 0

st.executeUpdate("create table employees(eno number,ename varchar2(20)");

*/