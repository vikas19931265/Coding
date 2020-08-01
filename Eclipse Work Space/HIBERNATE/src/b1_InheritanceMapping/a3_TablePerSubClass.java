/*
 Table per sub class approach
 =================================
 

In this approach every POJO class of inheritance hierarchy will be having its own table, more over the
parent pojo class table must maintain 1-1 association with the child class table.

Each child class object represent a record of child table and associated record with parent table.

by using <joined-subclass> tag we can configure child class. it is child tag of <class> tag.
ex:
<joined-subclass name="RegularEmployee" table="REG_EMP">

by using <key> tag we can configure FK column in the child table. it is child tag of <joined-subclass> tag.

example mapping.
---------------

<hibernate-mapping>
<class name="Employee" table="EMPLOYEE">
<id name="employeeId" column="EMP_ID" type="int">
</id>
<property name="employeeName" column="EMP_NAME" />
<property name="location" column="LOCATION" />
<joined-subclass name="RegularEmployee" table="REG_EMP">
	<key column="EMP_ID" />
<property name="salary" column="SALARY" />
<property name="bonus" column="BONUS" />
</joined-subclass>
<joined-subclass name="ContractEmployee" table="CONT_EMP">
	<key column="EMP_ID" />
<property name="hourlyRate" column="HOUR_RATE" />
<property name="contractPeriod" column="CON_PERIOD" />
</joined-subclass>
</class>
</hibernate-mapping> 

 
 
 */
