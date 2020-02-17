
package interfaces;
/*Adapter Class(Design Pattern)


What is Adapter Class?? 

• Adapter class is a simple java class that provides default implementation of an interface. 
  If we inherit the adapter class then we don’t have to provide implementation for all the 
  methods present in the interface instead we can provide implementation for just needed methods.
  
• If we implement an interface then  for each and every method of the interface we 
   have provide the implementation whether it is required or not. This will lead to lot of code 
   hence to cope up with this we can go for the concept of the Adapter class.

• Let’s take an example of a class  A that want to implement only one method of an interface B. 
  Since there is no adapter in between hence class A need to provide implementation for all the methods of the interface.

• For above scenario if there could have been an adapter class having default implementation of interface B 
  then instead of implementing all the methods of interface we can extend the adapter class inheriting the 
  mandatary methods and provide implementation only for the needed method. By this approach we can reduce the code/
   

More  about  Adapter Class??
    
•	We can develop a servlet in the following three ways:
    
        		i)  by implementing Servlet interface (interface)
       		ii) by extending  GenericServlet (abstract)
        		iii) by extending HTTPServlet (abstract)


                    	Servlet(Interface)
                                ^
                                |    
         GenericServlet(abstract class)  (acting as an adapter class)
                                ^
                                |
                   HTTPServlet(abstract Class)  



•	We can implement myServlet(our own class) by 

	Implementing Servlet interface( need to implement 5 methods)
	Extending GenericServlet( need to implement one method)
	By extending HTTP Servlet



•	If we implement the Servlet Interface then for  each and every method of 
        that interface we should provide the implementation.  This will increase 
        the length of the code and will reduce readability.

•	Instead of implementing Servlet Interface directly if we extend GenericServlet 
        then we have to provide the implementation only for the "Service Method" and for the remaining methods 
        will not need to provide implementation. Hence more or less Generic Servlet acts as adapter class for Servlet interface.


•	Marker interface and adapter classes simplifies complexity  of programming and 
        these are best utilities to the programmer making there simpler.

*/

/*Program: User Defined Adapter class*/




 	interface X  // consider an example an interface containing many methods like 1000
{
    void m1();
    void m2();
    void m3();
    void m4();
    void m5();
    void m6();
    void m7();
    void m8();
    void m9();
    void m10();
    void m111();
             }

/*

• Now let’s take for example if we want to implement only one method of the interface then we have 
  to create a class and implement all the methods in a dummy manner.


example

        	class Test1
           	 {
                	m1()
                   	 {
                       	 System.out.println("hai");
                   	 }
                m2(){}......m100(){}
            }   



• Now later if we want to implement another method  in new class then again we have to 
  replicate the dummy methods with no implementation. This will increase the code decreasing the code readability.

• The problem in this approach is that increases length of the code and reduces readability of the code

example
          	  class Test2
           	 {
              	  m2()
                    {
                        System.out.println("hai");
                    }
                m3(){}......m100(){}
            }


• Instead of doing this we can create an adapter class containing all the dummy methods 
  and then let the classes extend from this adapter class.

• Through this  class can implement the needed method from adapter class( abstract) 
  and by default by inheritance will get the rest of the methods from the adapter class.


*/


 abstract class AdapterClass implements  X  /*

1. create a dummy adapter class implementing methods of interface in a dummy manner 
2. declared the class as abstract as creating the objects of this class is meaningless.*/
{
   @Override
   public void m1(){};
   public void m2(){};
   public void m3(){};
   public void m4(){};
   public void m5(){};
   public void m6(){};
   public void m7(){};
   public void m8(){};
   public void m9(){};
   public void m10(){};
   public void m111(){};
}

/*
by Durga

We can solve the above problem by using the adapter classes. Instead of implementing interface if we extend adapter class  then we have to provide the implementation
only for the required methods and will not need to provide implementation for each and every method of the interface reducing the length of the code.*/

class Test7 extends AdapterClass
{
    public void m1()
    {
        System.out.println("hai");
    }
}


class Test81 extends AdapterClass
{
    public void m2()
    {
        System.out.println("hai");
    }
}

/*
Java Adapter classes in Java AWT and Events
•	Java adapter classes provides the default implementation for listener interface. If we inherit the java adapter class for listener interface then we don’t have to provide complete implementation for listener interface.

•	We can just extend the adapter class and provide the implementation only for the needed methods saving us from extra code and time.

•	Lets take for example we have a class A which needs to implement only one method present in the interface. If we try to implement the interface then we have to provide implementation for all the methods. Instead of doing this we can extend the adapter class having implementation for most of the interface methods and the ones which are missing can be provided by us in our class saving code and time.

•	Below are some of the example of adapter classes found in java.awt.event package

Adapter Class	Listener Interface
WindowAdapter	WindowListener
KeyAdapter	KeyListener
MouseAdapter	MouseListener

*/