/*

Case-2: executeUpdate() Vs Select Query
======================================================================


Usually we can use executeUpdate() Method for Non-Select Queries. But if we use for Select
Queries then we cannot expect the Result and it is varied from Driver to Driver.

int rowCount=st.executeUpdate("select * from employees");

For Type-1 Driver we will get SQLException where as for Type-4 Driver we won't get any Exception
and simply returns the Number of Rows selected

*/