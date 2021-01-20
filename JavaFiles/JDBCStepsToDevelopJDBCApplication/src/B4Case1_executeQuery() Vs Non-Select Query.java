/*

Case-1: executeQuery() Vs Non-Select Query
===================================================================

Usually we can use executeQuery() Method for Select Queries. If we use for Non-Select Queries
then we cannot expect exact Result. It is varied from Driver to Driver.

ResultSet rs =st.executeQuery("delete from employees where esal>100000");

For Type-1 Driver we will get SQLException. But for Type-4 Driver we won't get any Exception and
Empty ResultSet will be returned.



*/