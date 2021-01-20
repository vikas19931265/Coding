/*

Working with Large Objects (BLOB And CLOB)
=====================================================

Sometimes as the part of programming requirement,we have to insert and retrieve large files like
images,video files,audio files,resume etc wrt database.

Eg:

upload image in matrinomial web sites
upload resume in job related web sites

To store and retrieve large information we should go for Large Objects(LOBs).

There are 2 types of Large Objects.

1. Binary Large Object (BLOB)
2. Character Large Object (CLOB)


1) Binary Large Object (BLOB)
======================================

A BLOB is a collection of binary data stored as a single entity in the database.
BLOB type objects can be images,video files,audio files etc..

BLOB datatype can store maximum of "4GB" binary data.

2) CLOB (Character Large Objects):
=======================================

A CLOB is a collection of Character data stored as a single entity in the database.
CLOB can be used to store large text documents(may plain text or xml documents)
CLOB Type can store maximum of 4GB data.

Eg: hydhistory.txt


*/