/*
3. Hibernate mapping file.
=========================================

anyanme.xml acts as hb mapping file, but there is no defaultname for hibernate mapping file.

By using this xml file we can provide the mapping between class name with table name, and properties with 
column names.

general syntax to write the mapping file name.

pojoclassname.hbm.xml

ex:Student.hbm.xml
   Employee.hbm.xml
   Registration.hbm.xml

   here Student, Employee, Registration are pojo classes.

In this xml we configure basic O-R Mapping, inheritance mapping, component mapping, association mapping, collection mapping and so on....

we configure this mapping file inside the hb configration file using <mapping> tag.
hibernate.cfg.xml
-----------------
<h-c>
<s-f>
--
--
<mapping resource="Studnet.hbm.xml">
</s-f>
</h-c>

mapping file is heart file in any ORM.So any ORM mapping file required.

mapping file syntax
--------------------
<!-- DTD/Schema -->
<hibernate-mapping>
<class name="POJO Class name" table="Table name in DB">
  <id name="property name" 
      column="PK column name" 
      type="hibernate or java data type">
    <generator class="generator class name"/>
  </id>

  <property name="property name" 
     column="column name" 
     type="hibernate or java data type"/>
  --
  --
  --
</class>
</hibernate-mapping>

Ex:
---
<hibernate-mapping>
<class name="Student" table="TB_STUDENT">
  <id name="sno" column="NO">
    <generator class="assigned"/>
  </id>
  <property name="sname" column="NAME"/>
  <property name="semail" column="EMAIL"/>
  <property name="smobile" column="PHNO"/>
</class>
</hibernate-mapping>


*/