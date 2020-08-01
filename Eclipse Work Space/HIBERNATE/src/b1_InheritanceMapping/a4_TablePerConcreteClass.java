/*

Table per concrete class ( not important)



In this approach each pojo class uses seperate table in the DB, but there is no relation between the table.

So in the above diagram 3 pojo classes uses 3 seperate tables. but there is no relation between the tables.

NOTE:
There is no seperate tag to configure sub class in table per concrete class approach.

by using <class> tag only we can configure child class.

If we want to configure child class and child class properties we should configure inherited properties also.

example mapping
1200-1237

<class name="Empoyee" table="TB_EMP">
--
--
</class>

<class name="RegularEmpoyee" table="REG_EMP">
--
<!--configure inherited properties also->
--
</class>

<class name="ContractEmpoyee" table="CONT_EMP">
--
<!--configure inherited properties also->
--
</class>

write a program for table per concrete class.
1192-1309

output
-------

Table per concrete class with <union-subclass> tag.
--------------------------------------------
It is similar to Table per concrete class approach.

In the previous approach(Table per concrete class) we are writing duplicate code in hb mapping file while
 configuring subclass.

To eliminate the duplicate code we will go for <union-subclass> tag.

<union-subclass> tag is child tag for <class>

<union-subclass name="ContractEmployee" table="CONT_EMP">
<!-- configure sub class properies only, but not inherited properties -->
</union-subclass>

mapping file for union-subclass tag.

*/
 




