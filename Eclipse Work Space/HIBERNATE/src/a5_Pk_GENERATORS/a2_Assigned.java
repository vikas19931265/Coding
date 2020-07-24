package a5_Pk_GENERATORS;
/*
Assigned
==================

It is a default algorithm.
In this algorithm the programmer has to assign the value for primary key property before calling session 
methods(save(-)).

<h-m>
<class name = "Student" table = "TB_STUDENT">
<id name = "sno" column="NO">
<generator class="assigned"/>
</id>
--
--
</class>	
</h-m>

If we are not assigning the value for pk property the default value will be assigned to the id property.

NOTE: If the pk property type is non numeric(String or VARCHAR2) then we will go for assigned.


*/





