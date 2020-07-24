/*

Versioning in HB
===========================

Once an object is saved into the DB, we can modify that object for multiple no of times.

If want to know, how many no of times that object was modified then we will go for version concept.

Whenever we are using this concept, for the first time or first record hibernate inserts as 0 for 
version column, later hiberanate increment version column value by 1.

Steps
-----
1.declare the property type is int in the pojo

Ex:
public class Student
{
  private int version;
  private int sno;

  //remaining properties, setters and getters.
}

2.configure version related property in the hb mapping file using <version> tag.

NOTE:
<version> tag is immediate next tag of the <id> tag.

<hibernate-mapping>
<class name="Student" table="TB_STUDENT">
<id name="sno" column="NO">
</id>

<version name="version" column="VERSION">
</version>
<property name="sname" column="NAME"</property>
--
--
</class>
</hibernate-mapping>

output
------


NOTE: Here while working with update use second approach.








*/