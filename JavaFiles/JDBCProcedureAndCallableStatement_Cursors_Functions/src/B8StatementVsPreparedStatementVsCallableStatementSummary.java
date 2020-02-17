/*

Statement vs PreparedStatement vs CallableStatement:
================================================================================

1. We can use normal Statement to execute multiple queries.

st.executeQuery(query1)
st.executeQuery(query2)
st.executeUpdate(query2)


i.e if we want to work with multiple queries then we should go for Statement object.

2. If we want to work with only one query,but should be executed multiple times then we should
   go for PreparedStatement.


3. If we want to work with stored procedures and functions then we should go for
CallableStatement.




*/