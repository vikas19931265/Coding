/*
 
1. The degree of dependency between the components is called Coupling.

2. If dependency is more than it is considered as tightly coupling and if dependency is less then
   it is considered as loosely coupling.

Example

class A                     class B                             class C                     class D

{                           {                                   {                           {
    
    static int i=B.j;           static int j=  C.k;             static int k=D.m1();            public static int m1()
}
                              }                                 }                                   {
                                                                                                        return 10;
                                                                                                    }
                                                                                            }           



3. Here in this case if we see all the classes are linked to one another, hence they can be also referred to as tightly coupled.

4. The above components are said to be tightly coupled with each other because dependency between the components is more.

5. Tightly coupling is not a good programming practice because it has several serious disadvantages.

    a) Without affecting remaining components we can’t modify any component and hence enhancement will become difficult.

    b) It suppresses reusability of the code as each class is dependent on another class.

    c) It reduces maintainability of the application. 

6. Hence we have to maintain dependency between the components as less as possible that is loosely coupling is a good programming practice.


*/

//--------------------------------------------------------------------------********--------------------------------------------------------------