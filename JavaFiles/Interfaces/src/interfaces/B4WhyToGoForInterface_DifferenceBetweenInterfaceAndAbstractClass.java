/*

1. If we dont know anything about implementation, just we have requirement specification then
   we should go for Interface ex. Servlet Interface.

2. If we are talking about the implementation but not completely(partial implementation) then
   we should go for abstract class ex. Generic Servlet/Http Servlet etc.

3. If we are talking about the implementation completely and ready to provide the service then
   we should go for concrete class example myOwnServlet.



Interface---------------------> Servlet-------------------------> Plan
    ^                               ^
    |                               |
    |                               |    
    |                           GenericServlet
Abstract Class-----------------> HttpServlet --------------------->ParitallyCompletedBuilding
    ^                               ^
    |                               |    
    |                               |    
    |                               |        
Concrete Class-----------------> MyOwnServlet--------------------->FullyCompletedBuilding  



Difference between interface and abstract class
====================================================================================================

Interface                                                                               Abstract

methods

1. If we dont know about implementation and just                                   1. If we are talking about implementation but
   we have requirement specification then we should                                    not completely( partial implementation) then 
   for interface.                                                                      we should go for abstract class.

2. Inside interface every method is always public and abstract                      2. Every method present in the abstract class need not be
   whether we are declaring it or not, hence interface is considered as                public and abstract and we can take concrete methods also
   100 percent pure abstract class.    

3. As every interface method is always public and abstract and hence                3. There are no restrictions on abstract class method modifiers.
   we cannot declare with the following modifiers ( private, protected, final
   static, synchronized, strictfp, native)

variables.

1. Every variable present inside the interface is always public-static-final        1. Every variable present inside the abstract class
   whether we are declaring it or not                                                  need not be public static final.

2. As every interface variable is always public-static-final hence we cannot        2. There are no restrictions on abstract class variables modifiers.
   declare with private, protected, volatile  and transient.

3. For interface variables compulsory we should perform initialization at the        3. For abstract class variables we are not required to perform initialization at
   time of the declaration only otherwise we will get compile time error.              the time of the declaration.

4. inside interface we cant declare static(allowed in java 8) and instance blocks.  4. Inside abstract class we can declare static and instance blocks.

5. Inside interface we cannot declare constructors.                                 5. Inside abstract class we can declare constructors.



*/


