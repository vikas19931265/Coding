/*

CLOB (Character Large Objects):
==================================

A CLOB is a collection of Character data stored as a single entity in the database.

CLOB can be used to store large text documents(may plain text or xml documents)

CLOB Type can store maximum of 4GB data.
Eg: hydhistory.txt

Steps to insert CLOB type file in the database:

All steps are exactly same as BLOB, except the following differences

1. Instead of FileInputStream, we have to take FileReader.
2. Instead of setBinaryStream() method we have to use setCharacterStream() method.

public void setCharacterStream(int index,Reader r) throws SQLException
public void setCharacterStream(int index,Reader r,int length) throws SQLException
public void setCharacterStream(int index,Reader r,long length) throws SQLException



*/