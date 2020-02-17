// Overriding static method.(Method Hiding)

/*

1. All rules of method hiding are exactly same as overriding.

2. except the following differences.

    Method Hiding                           Overriding

    Both parent and child class            Both parent and child class
    Method should be static                method should be non static.

    Method resolution taken care           Method resolution taken 
    by compiler based on reference         care by JVM based on run time object.
    type.
    
    Also known as compile time poly.        Also knows as run time polymorphism,
    static poly, or early binding.         Dynamic polymorphism, late binding.
*/



package cMethodOverriding;

class Test9 {
    
    public static void main( String[] args)
    {
        Parent9 p = new Child9();
        p.m1();  // static method can be access with help of Objects reference.
        
        /*
        In this example if we see we are trying to perform polymorphism that is 
        a method overriding but since both the methods are static hence at  
        compile time only method resolution is done and since p is reference of
        Parent therefore parent method will get executed.
        
        */
        
        Parent9 p1= new Parent9();
        p1.m1();
        
        Child9 ch1= new Child9();
        ch1.m1();
      
        Child10 ch10= new Child10();
        ch10.m1();
    
    }


}


     class Parent9
    {
    
      public static void m1()
      {
         
      System.out.println("Parent");
         
    
      }
    }

class Child9 extends Parent9
{
    
    public static  void m1()
    {
        
        System.out.println("child"); // this is just method hiding where parent class method
                                    // is hidden but not overridden.
    }
}


/*

1. Consider for example you write something on board and then delete it.

2. After deleting it you write some new content on the board.

3. Then this is like overriding.

4. Here the old data will not be available.

5. But method hiding is different, here for example if i take a chart on board
   and then put a new chart on top of it then old chart gets hidden by the new chart
   
6. Now in this case both old and new charts are available but the only thing is that 
   the new chart will be visible and the old one will be hidden.

7. In Hiding both the method will be available to the child. That is parent as well
   as child method but parent method will be hidden and only child method will be shown.

8. If we try to perform polymorphism on method hiding we will see that overriding 
   will not get implemented.






*/


class Child10 extends Child9
{
    
}


/*
run:
parent
child
parent
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//-----------------------------------------------------------------------------*********-------------------------------------------------------------