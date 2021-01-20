/*
Steps to insert BLOB type into database:
===========================================

1. create a table in the database which can accept BLOB type data.
====================================================================

create table persons(name varchar2(10),image BLOB);

2. Represent image file in the form of Java File object.
==========================================================

File f = new File("katrina.jpg");

3. Create FileInputStream to read binary data represented by image file
=========================================================================

FileInputStream fis = new FileInputStream(f);

4. Create PreparedStatement with insert query.
===================================================

PreparedStatement pst = con.prepareStatement("insert into persons values(?,?)");

5. Set values to positional parameters.
=======================================

pst.setString(1,"katrina");
To set values to BLOB datatype, we can use the following method: setBinaryStream()

public void setBinaryStream(int index,InputStream is)
public void setBinaryStream(int index,InputStream is,int length)
public void setBinaryStream(int index,InputStream is,long length)

Eg:
pst.setBinaryStream(2,fis); ➔ Oracle 11g
pst.setBinaryStream(2,fis,(int)f.length()); ➔ Oracle 10g

6. execute sql query
=========================

pst.executeUpdate();


*/