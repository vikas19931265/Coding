/*

Garbage Collection
========================================

In old languages like C++ programmer is responsible to create new object
and to destroy the useless objects.

Usually programmer takes very much care while creating the objects but neglects
destruction of the useless objects. 

Because of this negligence at certain point of time from creation of the new object sufficient 
memory may not be available(because total memory) and total memory may be filled 
with useless objects only and total application will be down with the memory problems.
Hence out of memory error is very common problem in old languages like C++.

But in java programmer is responsible only for the creation of the objects but the programmer
is not responsible for the destruction of the useless objects.

SUN people provided one assistant to destroy useless objects. This assistant is also always
running in the background(demon thread) and destroy the useless objects.

Just because of this assistant only the chance of failing the java program with the memory
problems is very low. This assistant is nothing but called as Garbage Collector.


Hence the main objective of the garbage collector is to destroy useless objects.


*/