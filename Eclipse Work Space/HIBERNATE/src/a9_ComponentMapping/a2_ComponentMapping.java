package a9_ComponentMapping;
/*
Component Mapping
=====================

The pojo class member variable is called property.

If the property mapped with single column of the table is called simple or single property mapping.

if pojo class property mapped with multiple columns of the table is called component property mapping.

to configure identity property use <id> tag.

to configure simple property use <property> tag.

to configure component property use <component> tag.


example : Student ------ Has A --------Address

public class Student {
	private long studentId;
	private String studentName;
	private Address studentAddress;  // component mapping
	// generate setters and getters
}

in the above code studentId and studentName are simple properties.

studentAddress is component property . So to configure studentAddress we will go for <component> tag.

public class Address {
	private String street;
	private String city;
	private String state;
	private String zipcode;

	//generate setters and getters
	}

NOTE:
In the above example studentAddress property mapped with multiple columns of the same table.

procedure to configure component property
<h-m>
<class name="Student" table="STUDENT">
<id name="studentId" column ="ID">
<generator class = "assigned"/>
</id>
<property name = "studentName" column="NAME"/>

<component name = "studentAddress" class="Address">
<property name = "street" column = "STREET"/>
<property name = "city" column = "CITY"/>
<property name = "state" column = "STATE"/>
<property name = "zipcode" column = "ZIPCODE"/>
</component>
</class>



*/