/*

List of allowed methods on Scrollable ResultSets:
===================================================================

1.rs.next()
===================

2.rs.getXxx()
====================

3.rs.getRow()
======================

4.rs.previous()
======================

It checks whether previous record is available or not. If it is available then the cursor will move
to that record position

5.rs.beforeFirst();
======================

The cursor will be moved to before first record position

6.rs.afterLast()
========================

This will moves the cursor after last record position

7.rs.first()
========================

moves the cursor to the first record position

8.rs.last()
========================

moves the cursor to the last record position

9.rs.absolute(int x)
=========================

The argument can be either positive or negative.
If it is positive then the cursor will be moved to that record position from top of ResultSet.
If the argument is negative then it will be moved to the specified record position from last.

10.rs.relative(int x)
===========================

The argument can be either positive or negative
If the argument is positive then the cursor will move to forward direction to specified number of
records from the current position. If the argument is negative then the cursor will move to
backward direction to the specified number of records from the current position.

11. rs.isFirst()
===========================

returns true if the cursor is locating at first record position

12. rs.isLast()
===========================

13. rs.isBeforeFirst()
===========================

14. rs.isAfterLast()
============================

15. rs.refreshRow()
==============================

We can use this method in scroll sensitive ResultSets to update row with latest values from
Database.


*/