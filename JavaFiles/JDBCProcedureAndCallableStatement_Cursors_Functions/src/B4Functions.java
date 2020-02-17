/*

Functions
=====================================================


Functions are exactly same as procedures except that function has return statement directly.

Procedure can also returns values indirectly in the form of OUT parameters.

Usually we can use procedure to define business logic and we can use functions to perform some
calculations like getAverage() , getMax() etc..

Syntax for functions:
==========================

create or replace function getAvg(id1 IN number,id2 IN number)return number
as
sal1 number;
sal2 number;
BEGIN
select esal into sal1 from employees where eno=id1;
select esal into sal2 from employees where eno=id2;
return (sal1+sal2)/2;
END;
/


Function call can return some value.Hence the syntax of function call is
    
    CS cst = con.prepareCall("{? = call getAvg(?,?)}");

return value of function call should be register as OUT parameter.


*/
