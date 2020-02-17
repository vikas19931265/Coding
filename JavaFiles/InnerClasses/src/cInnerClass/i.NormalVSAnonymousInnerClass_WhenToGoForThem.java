package cInnerClass;

/*

Normal java class vs Anonymous inner class.
-----------------------------------------------

1.A normal java class can extend only one class at a time. Anonymous inner class can 
  also extend only one class at a time.

2. A normal java class can implement any number of interfaces simultaneously. But anonymous inner class can implement
   only one interface at a time.

3. A normal java class can extend a class and can implement any number of interfaces simultaneously. But anonymous
   inner class can extend a class or can implement an interface but cannot do both of them simultaneously


4. In normal java class , we can write any number of constructors. But in the case of the anonymous inner classes
   we cannot write any constructor explicitly( this is because the name of the class and the name of the constructor)
   must be same. But anonymous inner classes are not having any name.



When to go for anonymous and top level class??
------------------------------------------------------------------

If the requirement is standard and required several times then we should go for normal top level class.

If there requirement is temporary and require only once(instant use) then we should go for anonymous inner
class.





*/



