package GenericClass;

/*
Bounded types and Unbounded "T" type
================================================================================

We can bound the type parameter for a particular range by using extends Keyword. Such types 
are called as Bounded Types.


Example

        class Test<T>
        {

        
        }

In this case as the type parameter , we can pass any type and there are no restrictions and hence it 
is Unbounded type.


Test<Integer> t1= new Test<Integer>();  // this is valid.

Test<String> t2= new Test<String>();  // this is also valid.



Syntax of Bounded Type
----------------------------

    class Test<T extends X>

    "X" can be either class or interface.

    If "X" is a class , then as the type parameter we can pass either X type or its 
    child classes.

    If "X" is an interface, then as the type parameter we can pass either X type 
    or its implementation classes.





*/

//Example 1

import java.util.*;

class Test0<T extends Number>
{
    

// As the type Parameter we can pass either Number or child classes of Number

}


class Demo
{
    public static void main(String[] args)
    {
        Test0<Integer> t1= new Test0<Integer>();
        
        // Test0<String> t2 = new Test0<String>();
    
        /*
        
        CE: Type parameter java.lang.String is not within its bound.
        */
    
    
    }
}


//--------------------------------------------------------------------------------------------------------------------------------

//Example 2:--

class Test00<T extends Runnable>
{
    
}


class Demo2
{
    public static void main(String[] args)
    {
        
        Test00<Runnable> t1 = new Test00<Runnable>();// valid
        
        Test00<Thread> t2 = new Test00<Thread>(); // Thread is implementation class of Runnable interface.
   
        /*
         
         Test00<Integer> t3= new Test00t<Integer>();// Integer is not implementation class of Runnable
    
         Compile error: type parameter , java.lang.Integer is not within its bound

         */

}
}

//-------------------------------------------------------------------------------------------------------------------------------


//Example 3a: We can define bounded types even in combination also


class Test000< T extends Number & Runnable>
{

    /*
    
    As the type parameter we can take anything which should be child class of number and should 
    implement the Runnable interface.
    
    */
    
    
}


//-------------------------------------------------------------------------------------------------------------------------------


//Example 3b: A class implementing more then one interface is valid .


class Test01< T extends Runnable & Comparator>
{

    /*
    
    As the type parameter we can take anything which implements Runnable and Comparator.
    
    */
    
    
}

//--------------------------------------------------------------------------------------------------------------------------------


//Example 3c: A class extending and implementing more then one interface is valid.


class Test02< T extends Number & Runnable & Comparator>
{

    /*
    
    As the type parameter we can take anything which should be child class of Number and 
    should implement Runnable and Comparator.
    
    */
    
    
}


//----------------------------------------------------------------------------------------------------------------------------



//Example 3d: We cannot take interface first and then class.


/*
class Test03< T extends Runnable & Number>
{

CE: We havet to take class first and then interface.
    
    
}


//--------------------------------------------------------------------------------------------------------------------------------


//Example 3e: A class cannot implement more then one classes

/*
class Test03< T extends Number & Thread>
{

    We cannot extend more then one class simultaneously.
    
    
}


//----------------------------------------------------------------------------------------------------------------------------------


*/