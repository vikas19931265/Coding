/*
Enum
==========

If we want to represent a group of named constants, then we should go for enum.

example
============

    enum Month
    {
        JAN,FEB,MAR.....DEC; //semicolon is optional here.
    }


    enum Beer
    {
        KF,KO,RC,FO;
    }


The main objective of Enum is to define our own datatypes(Enumerated data types).

Enum concept was introduced in 1.5 version. When compared with old language Enum ,
java enum is more powerful.

Internal implementation of Enum
------------------------------------

1. Every enum is internally implemented by using class concept.

2. Every enum constant is always public static final**

3. Every enum constant represents an object of the type Enum.


enum Beer                           class Beer
{                               {
    KF,RC;-------------->           public static final Beer KF= new Beer();
}                                   public static final Beer RC= new Beer();
                                }
                                
                                




*/
