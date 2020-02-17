/*

Enum declaration and usage
==============================

Every enum constant is always public static final. And hence we can access enum constant
by using Enum name.


note
========

Inside enum, toString() method is implemented to return the name of the constant.


We can declare enum either within or outside class but not within  the method. If we try
to declare inside method then will get compile time error saying "enum  types must not be local.

----------valid-------------------

enum X
{

}

class Y
{

}
---------------valid------------

class X
{
    enum Y
    {

    }
}

-------------------invalid-----------------

class  X
{
    public void m1()
    {
        enum Y
        {
            //we cannot declare enum inside a method.
        }
    }
}

CE: enum types must not be local.

*/



enum Beers
{
    KF,KO,RC,FO;
}

 class Testsss
{
    public static void main(String[] args)
    {
        Beers b =Beers.RC;
        System.out.println(b);//RC
    }
}
