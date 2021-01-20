/*

JDBC Realtime coding standards
==============================================================================

Every Java Class should be Part of some Package. Hence it is recommended to take Package
Statement.

It is recommended to use explicit Class Imports than implicit Class Imports because these
Imports improve Readability of the Code.

Eg:
import java.sql.*; ➔ Implicit Class Import
import java.sql.Connection; ➔ Explicit Class Import

It is recommended to use try-catch over throws Statement, because there is a Guarantee for the
Normal Termination of the Program.

Even we are using throws Statement, somewhere compulsory we should handle that Exception by
using try-catch.

m1()
{
try
{
m2();
}
catch(Exception e)
{
}
}
m2() throws Exception
{
....
}

Avoid Duplicate Code as much as possible, otherwise Maintenance Problems may rise.

We have to use meaningful Names for Classes, Methods, Variables etc. It improves Readability
of the Code.

If any Code repeatedly required, we have to separate that Code inside some other Class and we
can call its Functionality where ever it is required.

In JDBC Applications, getting Connection and closing the Resources are common Requirement.
Hence we can separate this Code into some util Class, and we can reuse that Code where ever it is
required.





*/
