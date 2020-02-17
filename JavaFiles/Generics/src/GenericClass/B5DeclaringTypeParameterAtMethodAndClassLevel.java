package GenericClass;

/*

Declaring Type parameters
==============================================================================

We can declare type parameter , either at class level or at the method level.

Declaring type parameter at the class Level.
-------------------------------------------------

class Test<T>
{

    We can use "T" within this class based upon our requirement

}


Declaring type parameter at the method level.
----------------------------------------------------

We have to declare type parameter , just before the return type

class Test
{

    public <T> void m1(T ob)

        {

            We can use 'T" anywhere inside the method based upon our
            requirement.

        }
}


We can define , bounded types even at the method level also.

public <T> void m1(); valid

public <T extends Number>(); valid

public <T extends Runnable>(); valid

public<T extends Number & Runnable>(); valid

public <T extends Comparable & Runnable>(); valid

public <T extends Number & Comparable & Runnable>();  valid

public< T extends Runnable & Number>(); // invalid , first we have to take class and then interface.

public <T extends Number & Thread>();// invalid, a class cannot extend more then one class



*/