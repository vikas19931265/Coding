/*

Importance of Buffer
=============================================

Situation 1: not preferred
==============================

We can use either simple Statement or PreparedStatement.


sourceFile(10kb)        ------>     destinationFile(10kb)


Without buffering 10 * 1024 read & write Operations are required



Situation 2: preferred
==========================


sourceFile(10kb) -------> buffer(1kb)--------->destinationFile(10kb)

Without buffer only 10 read and write operations are required improving the performance.



*/



