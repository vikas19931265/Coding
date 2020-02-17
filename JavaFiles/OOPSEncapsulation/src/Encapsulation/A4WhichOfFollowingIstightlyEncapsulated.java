/*

Which of the following classes are tightly encapsulated?
==========================================================

Valid
==========
    
        class A
    {
        private int x =10;

    }


invalid
========

    class B extends A
    {
        int y=20;

    }    

valid
==========

    class C extends A
    {
        private int x=30;
    }




Which of the following classes are tightly encapsulated?
==========================================================


invalid
=========

    class A
    {
        int x =10;
    }


invalid
=========

    class B extends A
    {
        private int y=20;
    }

invalid
=========

    class C extends B
    {
        private int z =30;
    }


Note
=======

If the parent class is not tightly encapsulated then no child class is tightly
encapsulated.
*/