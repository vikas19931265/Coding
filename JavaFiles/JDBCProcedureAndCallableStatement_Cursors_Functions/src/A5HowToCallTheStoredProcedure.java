/*

Process to call Stored Procedure from java application by using CallableStatement:
===================================================================================


1. Make sure Stored procedure available in the database
=============================================================


1) create or replace procedure addProc(num1 IN number,num2 IN number,num3 OUT numbe
r) as
2) BEGIN
3) num3 :=num1+num2;
4) END;
5) /



2. Create a CallableStatement with the procedure call.
===============================================================================

CallableStatement cst = con.prepareCall("{call addProc(?,?,?)}");


3. Provide values for every IN parameter by using corresponding setter methods.
===============================================================================

cst.setInt(1, 100);
cst.setInt(2, 200);

4. Register every OUT parameter with JDBC Types.
==============================================================================

If stored procedure has OUT parameter then to hold that output value we should register every
OUT parameter by using the following method.

    public void registerOutParameter (int index, int jdbcType)

    Eg: cst.registerOutParameter(3,Types.INTEGER);
Note:

Before executing procedure call, all input parameters should set with values and every OUT
parameter we have to register with jdbc type.

5. execute procedure call
===============================================================================
cst.execute();

6. Get the result from OUT parameter by using the corresponding getXxx() method.
================================================================================

Eg: int result=cst.getInt(3);



*/