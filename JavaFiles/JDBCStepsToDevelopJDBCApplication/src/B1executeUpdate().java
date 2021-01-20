/*

executeUpdate() Method:
===============================================================================

We can use this Method for Non-Select Operations (Insert|Delete|Update)

Because of this Method Execution, we won't get a Group of Records and we will get a Numeric
Value represents the Number of Rows effected. Hence Return Type of this Method is int


public int executeUpdate(String sqlQuery) throws SQLException

Eg: int rowCount = st.executeUpdate("delete from employees where esal>100000");
    SOP("The number of employees deleted:"+rowCount);


*/