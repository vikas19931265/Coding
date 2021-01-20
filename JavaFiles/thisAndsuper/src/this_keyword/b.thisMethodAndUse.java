/*
1. In constructor overloading if we want to call one constructor from another 
   Constructor then we can use this() method.


*/
package this_keyword;

 class Test3 {
    
     Test3()
     {
         this(10);// Here we are calling another constructor from this constructor.
         
         System.out.println("no Arg Constructor");
     }
 
     Test3(int i)
     {
         this(10,20); // calling another constructor. 
         
         System.out.println("one Arg Constructor");
     }
     
 
     Test3(int i, int j)
     {
         System.out.println("two Arg Constructor");
     }
 
     public static void main(String[] args)
     {
         Test3 t1= new Test3();
         
         Test3 t2= new Test3(10);
         
         Test3 t3= new Test3(10,20);
     }
 
 }


/*

Steps of Execution.

1. Test3 t1= new Test3();

    Firstly we created an object t1. Once object is created constructor will also
    be called.

    Here in this case we are calling no argument constructor.

2. Since no argument constructor is called the control goes to no parameter constructor.

3. As soon as control goes to no parameter constructor. It encounters a method , this(10).

     Test3()
     {
         this(10);
         
         System.out.println("no Arg Constructor");
     }
 

4. this(10) will mean that on the current object call the constructor with single parameter.

5. Now the control goes to single parameter constructor.

     Test3(int i)
     {
         this(10,20);
         
         System.out.println("one Arg Constructor");
     }

6. In the single parameter constructor this(10,20) is present.

7. Hence the control now goes to double parameter constructor.

     Test3(int i, int j)
     {
         System.out.println("two Arg Constructor");
     }

8. In the double parameter constructor there is no call to any other constructor

     Test3(int i, int j)
     {
         System.out.println("two Arg Constructor");
     }

     Hence o/p 

     two Arg Constructor

9. Now the control goes to the calling constructor.

     Test3(int i)
     {
         this(10,20);
         
         System.out.println("one Arg Constructor");
     }

   o/p two Arg Constructor/one Arg Constructor


10. Now the control again goes to the calling constructor.

    Test3()
     {
         this(10);
         
         System.out.println("no Arg Constructor");
     }

     o/p  two Arg Constructor/one Arg Constructor / no Arg Constructor


11. Next we are creating another object.

    Test3 t2= new Test3(10);


12. This will call one parameter constructor  , inside which we are calling 2 parameter constructor.

    Test3(int i)
     {
         this(10,20);
         
         System.out.println("one Arg Constructor");
     }
     
 
     Test3(int i, int j)
     {
         System.out.println("two Arg Constructor");
     }


     hence o/p

two Arg Constructor/one Arg Constructor / no Arg Constructor/ two Arg Constructor

After this control goes to the calling constructor


o/p

two Arg Constructor/one Arg Constructor / no Arg Constructor/ two Arg Constructor
/one ARg Constructor.


13. Now at last we are creating another object by passing two argument parameter.

    Hence
        
         Test3(int i, int j)
     {
         System.out.println("two Arg Constructor");
     }


     this will be called 

     o/p

     two Arg Constructor/one Arg Constructor / no Arg Constructor/ two Arg Constructor
/one ARg Constructor/two Arg Constructor

*/ 


//------------------------------------------------------------------------------------------************************-------------------------