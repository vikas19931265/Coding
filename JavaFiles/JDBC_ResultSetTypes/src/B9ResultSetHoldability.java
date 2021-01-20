/*

ResultSet Holdability:
======================================

The ResultSet holdability represents whether the ResultSet is closed or not whenever we call
commit() method on the Connection object.

There are two types of Holdability

HOLD_CURSORS_OVER_COMMIT ➔ 1
CLOSE_CURSORS_AT_COMMIT ➔ 2

HOLD_CURSORS_OVER_COMMIT:
===============================

It means the ResultSet will be opened for further operations even after calling con.commit()
method.

CLOSE_CURSORS_AT_COMMIT:
==============================

It means that ResultSet will be closed automatically whenever we are calling con.commit()
method.

We can get Current Holdability of the ResultSet as follows.

SOP(rs.getHoldability());

For most of the databases default holdabiltiy is 1


We can check whether database provides support for a particular holdability or not by using the
following method of DatabaseMetaData.

supportsResultSetHoldability()

We can create Statement object for our required Holdability as follows...

Statement st = con.createStatement(1005,1008,2);
RS rs = st.executeQuery("select * from employees");
con.commit();

rs.aboslute(3); ➔ SQLException

Note: Most of the databases like Oracle, MySQL won't provide support for holdability 2.

*/