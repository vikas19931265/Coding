/*
JVM
========================

JVM is the part of JRE and it is responsible to load and run java class files.


Basic Architecture diagram of JVM
======================================

------.CLASS FILE-------------CLASS LOADER SUBSYSTEMS--------------------------------
                                    |
        VARIOUS MEMORY AREAS OF JVM(METHOD,HEAP,STACK,PCREGISTER,NATIVEMETHODSTACKS)      
                                    |
                                    |
         -------------------------------------------------------------------                           
EXECUTION ENGINE  <--->         JAVA NATIVE INTERFACE    <----->            NATIVE METHOD LIBRARY
                                    (JNI)


CLASS LOADER SUBSYSTEM
=========================

class loader subsystem is responsible for the following three activities.

1. Loading
2. Linking
3. Initialization


LOADING
=======================

Loading means reading the .class files and store the corresponding binary data into
the METHOD AREA.

For each class file JVM will store the corresponding information in the METHOD AREA.

 a.Fully qualified name of class.
 b.Fully qualified name of immediate parent class.
 c.Methods information
 d.Variables information
 e.Constructors information
 f.Modifiers information
 g.Constant pool information.

 etc

After loading the .class file immediately JVM will create an object for that loaded
class on the heap memory of type java.lang.Class.



student.class-----------student class information---->class Class object to represent---->it is not student object and
                                                       student class information.          but class Class object 



customer.class----------customer class information---->class Class object to represent----->it is not customer object but 
                                                       customer information.                class Class object.
--------                  ---------------               -----------------      
hard disk                 method area (JVM)              Heap area(JVM)
----------                ----------------              ------------------      

The class Class object can be used by the programmer to get class level information
like methods information or variables information or constructors information etc.



*/