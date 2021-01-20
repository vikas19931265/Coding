
package this_keyword;


/*

this Keyword
===============================

1. There can be a lot of usage of java this keyword. In java, this is a reference variable that 
   refers to the current object.


2. this is a reserved keyword in java which cannot be used as an identifier.

3. this is used to refer current class instance as **well as static members.


Usage of this keyword
=================================

Here is given the 6 usage of java this keyword.

->this can be used to refer current class instance variable.
->this can be used to invoke current class method (implicitly)
->this() can be used to invoke current class constructor.
->this can be passed as an argument in the method call.
->this can be passed as argument in the constructor call.
->this can be used to return the current class instance from the method

Call to this must be first statement in constructor


*/


// program demo on how this keyword is used to represent current instance of the object.


class Test
{
    int i;
    
    static int j; // please note that static variable can also be accessed with this keyword.
                  // but we cannot use this keyword inside  a static block.

    
    public void Check()
    {
        this.i=100;
        
        this.j=200;
    
    
        System.out.println(i+"  "+j);
    }
    

    public static void main(String[] args)
    {
        new Test().Check();  // Here we created an object , and on the object  we are calling check method.
                             // As soon as the object got created 'i' got its default value of 0 and static variable of 0 as well.
                             // on calling the check method on the object we are changing the values of i and j to 100 and 200.
                             // Please note that static variables mostly do not change, hence this does not look a good prgoram
                                
    }


}  

/*
run:
100  200
BUILD SUCCESSFUL (total time: 0 seconds)

*/
//------------------------------------------------------------------------------------------************************-------------------------