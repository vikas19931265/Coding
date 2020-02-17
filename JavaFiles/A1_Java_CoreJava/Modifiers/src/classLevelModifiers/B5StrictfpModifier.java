/* strictfp (strict floating point)
=======================================

1. Introduced in 1.2 version.

2. We can declare strictfp for classes and methods but not for variables.

3. Usually the result of floating point arithmetic is varied from platform to platform. If we want platform
   independent results for floating point arithmetic then we should go for strictfp modifier.


strictfp  methods
=====================

1. If a method is declared as strictfp then all the floating point calculations in that method has to follow IEEE 754 standard.
   so that we will get platform independent results.


2. Abstract modifier never talks about implementation whereas strictfp method always talks about the implementation. 
   Hence abstract-strictfp combination is illegal for methods.


strictfp classes.
==========================

1. If a class is declared as strictfp then every floating point calculation present in every CONCRETE METHOD has to follow IEEE 754 standard
   so that we will get platform independent results.


    We can declare abstract-strictfp combination for the classes that is abstract-strictfp combination is legal for classes but illegal for 
    methods.


*/


/*
1. We can declare our class with the combination of strictfp and abstract.

2. Here strictfp talk about the concrete classes. Here m1() is concrete method implementing floating point calculation hence the calculation here will be treated
   based on IEEE 754 guidelines.

3. Here in below example m1() method will be dealed by strictfp modifier and m2() method by abstract modifier hence both are independent and does  not contradict making
   this combination as legal.


4. However we cannot use this combination at the method level as then abstract modifier will talk about non implementation and strictfp about implementation
   of methods with floating point calculations. This will start to contradict and give us the compile time error.
*/

package classLevelModifiers;

strictfp abstract class Test5
{
    
    public void m1()
    {
        System.out.println(10/3);
    }

    abstract public void m2();
    
  // abstract strictfp public void m3(); //Compile Error- Illegal combination of modifier abstract and strictfp at the method level.
    
}

//---------------------------------------------------------------------------------*******************--------------------------------------