/*

Strictly speaking through typecasting we are not creating any new object. For the existing Object
we are providing another type of reference variable that is we are performing type casting but not object casting.


*/



 class HowTypeCastingImplementedInternallyAndExamples
{
    
public static void main(String[] args)
{
//Example 1 
    
    String s= new String("durga");
    Object o= (Object)s;
    
    Object o1= new String("durga"); // combining line 1 and line 2 into a single line.
    
    System.out.println(s+o+o1);

//Example 2

    Integer i= new Integer(10);
    Number n=(Number)i;
    Object o2=(Object)n;
    
    Object o3= new Integer(10); // Combining above lines into single line


//Example 3 ( Consider an example where C is child of B and B is child of A.)

    C a  = new C(); // here 'a' is of type C and run time object i.e new C() is also C only.
    
    //We can type caste the above statement to B type as B is parent of C
    
    B b1=(B)a; 
    
    /*
    
    Here a is type casted to B type and reference held by b1 of type B.
    
    Important point to note here is that run time object is still C only here.
    
    Hence the above statement can also be written as   B b2= new C();  */
    
   
    
   
      A a1=(A)b1;  // Here we are trying to typecast b1 object to A type, please note that run time object here is on b1 reference is C
               
      // Hence this statement can also be written as.
      
      A a2= new C();


//Example 4    

        B b3= new B(); 
        
        b3.m1();  // calling m1 method on child class hence valid
        
        b3.m2(); // calling m2 method on child class hence valid
        
        ((A) b3).m1(); //b3 converted to parent type i.e A and on A calling m1 method which is available hence valid 
                       // this is equivalent to A a= new B() as run time object is B here.
        
       // ((A) b3).m2();  // this is invalid as typecasting done to parent and m2 method not available in parent class. 
        
      //Reason: Parent reference can be used to hold child object but by using that reference we cant call child specific method.
      // We can call only methods available in the parent class.


//Example 5 (overriding)


         C c4= new C();
         
         c4.m1();// run time object is C only . Hence C method will get called.
         
        ((B) c4).m1(); // this is equivalent to B b= new C(), so here also run time object is C only as m1 method is overridden in that
                        // hence c method will get called.
                        
                        
        ((A) ((B) c4)).m1(); // this is equivalent to A a= new C(), so here also run time object is C only and m1 method is overridden in C 
                            // hence C method will get called.


     //Reason: It is overriding and method resolution is always based on run time object type.



// Example 6( static method cant be overridden)

    /*
        If we take the same exmaple as in 5 but makes the methods as static than static method will not be overridden.
        Instead method hiding concept will come into the picture in which method resolution is decided by compiler based on reference
        and not on the run time object.

        Hence we will get the answer as  [C , B , A] not [C , C, C] as in case of overriding.

    */


// Example 7 ( primtive variables)

    C c5= new C();
    
    System.out.println(c5.x); // reference is of C type and on C calling x
   
    System.out.println(((B)c5).x); // reference of of B type and on B calling x
    
    System.out.println(((A)((B)c5)).x); // reference is of A type and on A calling x.



// Reason: Variables resolution is always based on reference types but not based on run time object.


}



}


class A
{
    
   int x=10;
    public void m1()
    {
        System.out.println("a");
    }

    public void m2()
    {
        
    }

}

class B extends A
{
    
    int x=20;
    public void m1()
    {
        System.out.println("b");
    }

}


class C extends B
{
    int x=30;
    public void m1()
    {
        System.out.println("c");
    }
}


//--------------------------------------------------------------------------********--------------------------------------------------------------