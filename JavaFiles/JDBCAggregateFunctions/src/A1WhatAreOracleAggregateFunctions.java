/*

Oracle Aggregate Functions
============================================================================

Oracle Database defines several Aggregate Functions to get Summary Results like the Number of
Records, Maximum Value of a particular Column etc

count(*)
➔ Returns The Number of Records

➔ max(esal) ➔ Returns Maximum Salary

➔ min(esal) ➔ Returns Minimum Salary

Eg:

String sqlQuery="select count(*) from employees";

ResultSet rs =st.executeQuery(sqlQuery);

if(rs.next())
{
System.out.println(rs.getInt(1));
}

Note: If Number of Records is more, then we should use while Loop.
If Number of Records is only one then we should use if Statement.


*/