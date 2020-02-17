/*

Types of Class Loaders
=============================

Class loaders system contains the following three types of the class loaders.

1.BootStrap class Loader/primordial class loader.

2.Extension class loader

3.Application class loader/System class loader.


BootStrap class loader
==============================

BootStrap class loader is responsible to load core java API classes that is the classes
which are present in rt.jar.


    jdk
        jre
            lib
                rt.jar


This location or path is also called as Bootstrap class path that is BootStrap class
loader is responsible to load the classes from bootstrap class path

BootStrap class loader is by default available with every JVM. It is implemented in 
native languages like C or C++ and implemented in java.


Extension class loader
================================

Extension class loader is the child class of BootStrap class loader.

Extension class loader is responsible to load the classes from the extension class
path jdk\jre\lib\ext\*.jar


 jdk
        jre
            lib
                ext
                        *.jar


Extension class loader is implemented in java and the corresponding .class flie is

sun.misc.Launcher$ExtClassLoader.class

Application class loader/System class loader
===========================================

Application class loader is the child class of Extension class loader. This class loader is
responsible in order to load the classes of application class path(path set using env variables)

It internally uses enviornment variable class path

This points to code stored in the current working directory. Our codes are present
in current working directory and application class loader is responsible to load 
the .class file from it.


applicaton class loader is implemented in java and the corresponding .class file is

sun.misc.Launcher$AppClassLoader.class


                        BootStrap class loader---> main parent
                                ^
                                |
                                
                         Extension class loader
                                ^
                                |

                          Application class loader      





*/
