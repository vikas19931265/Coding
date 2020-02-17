/*

Step 6: Close the Connection
====================================================================

After completing Database Operations it is highly recommended to close the Resources whatever
we opened in reverse order of opening.

rs.close();
    It closes the ResultSet and won't allow further processing of ResultSet

st.close();
    It closes the Statement and won't allow sending further Queries to the Database.

con.close();
    It closes the Connection and won't allow for further Communication with the Database.



Conclusions:
===================

Per Statement only one ResultSet is possible at a time.

Per Connection multiple Statement Objects are possible.

Whenever we are closing Statement Object then automatically the corresponding ResultSet
will be closed.

Similarly, whenever we are closing Connection Object automatically corresponding Statement
Objects will be closed.

Hence we required to use only con.close();








*/