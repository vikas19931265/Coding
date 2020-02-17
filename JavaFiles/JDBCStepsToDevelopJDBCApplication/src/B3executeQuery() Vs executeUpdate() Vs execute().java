/*

executeQuery() Vs executeUpdate() Vs execute():
================================================================================

1. If we know the Type of Query at the beginning and it is always Select Query then we should use
"executeQuery() Method".

2. If we know the Type of Query at the beginning and it is always Non-Select Query then we should
use executeUpdate() Method.

3. If we don't know the Type of SQL Query at the beginning and it is available dynamically at
Runtime (May be from Properties File OR From Command Prompt Etc) then we should go for
execute() Method.

Note:
Based on our Requirement we have to use corresponding appropriate Method.

st.executeQuery();
st.executeUpdate();
st.execute();
st.getResultSet();
st.getUpdateCount();

*/