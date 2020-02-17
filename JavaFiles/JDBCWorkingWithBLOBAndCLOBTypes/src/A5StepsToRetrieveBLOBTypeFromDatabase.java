/*

Steps to retrieve BLOB type from the database
===============================================

Database image-------InputStream-------------------------------byte[](buffer)----------FileOutputStream------>Target file

                (InputStream is= rs.getBingaryStream());                                fos.write(byte[])
                is.read(buffer)



1. Prepare ResultSet object with BLOB type
===============================================

RS rs = st.executeQuery("select * from persons");

2. Read Normal data from ResultSet
==================================================

String name=rs.getString(1);

3. Get InputStream to read binary data from ResultSet
=======================================================

InputStream is = rs.getBinaryStream(2);

4. Prepare target resource to hold BLOB data by using FileOutputStream
=========================================================================

FOS fos = new FOS("katrina_new.jpg");


5. Read Binary Data from InputStream and write that Binary data to output Stream.
================================================================================

Without Buffer
=================

int i = is. read();
while (i != -1)
{
fos.write(i);
i = is.read();
} 

With Buffer
===============

byte[] buffer = new byte[1024];
while (is.read(buffer)>0)
{
fos.write(buffer);
}






*/
