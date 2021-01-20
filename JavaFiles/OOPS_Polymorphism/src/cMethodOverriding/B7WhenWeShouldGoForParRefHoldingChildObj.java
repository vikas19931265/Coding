package cMethodOverriding;

/*

1. If we dont know exact run time type of Object then we should go for parent reference.

    For example

      The first element present in the arrayList can be any type , it may be student Object
      or customer Object or String Object or String Buffer Object. Hence the return type   
      of the get method is object, which can hold any Object.


       Example Object o= l.get(0);


    Another Example : If a method returns an ArrayList reference or Vector or Stack reference
                       then we can hold the object using the parent reference that is List.


      public List m1()

            {
                return Arraylist/Stack/Vector;

            }

2. Usage of parent reference to hold child object is advantage.


3. Difference between C c= new C()  and P p= new C() or ArrayList l= new ArrayList() vs List l= new ArrayList();


    C c= new C()                                    P p= new C();


a) We can use this approach if we know exact       We can use this approach when we don’t know exact run time
   run time type of Object                         type Object.


b) By using child reference we can call both       By using parent reference we can call only methods available in the        
   parent and child class methods. This is         parent class , and we can’t call child specific methods. This is the disadvantage
   advantage of this approach.                    of this approach. 

c) We can use child reference to hold only         We can use parent reference to hold any child class Object 
   particular child class object. This is the      This is the advantage of this approach. 
   disadvantage of this approach.

*/

//--------------------------------------------------------------------------*********-------------------------------------------------------------
