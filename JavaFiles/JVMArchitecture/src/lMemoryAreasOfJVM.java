/*

Various memory areas present inside the JVM
=============================================

Whenever JVM loads and runs a java program , it needs memory to store several things like
bytecode, objects , variables and etc. Total JVM memory is organized into the 5 following
categories.

1. Method Area
2. Heap Area
3. Stack Area
4. PC Registers
5. Native method stacks.


Method Area
===================

For every JVM, one method area will be available.

Method area will be created at the time of the JVM startup.

Inside the method area class level binary data including the static variables will
be stored.

Constant pools of the class will be stored inside the method area.

Method area can be accessed by multiple threads simultaneously and hence it is not
thread safe also the memory may not be continuous.



*/