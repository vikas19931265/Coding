/*

How to create our own immutable class.?? ( very important )
================================================================================


1. Once we create an object we cant perform any changes in that object. If we are trying to perform
   any change and if there is a change in the content then with those changes a new object will be 
   created. 

2. If there is no change in the content then the existing object will be reused. This behavior is nothing
   but immutability.


    String s1= new String("durga"); 

    String s2= s1.toUpperCase();

    String s3= s1.toLowerCase();


      s1------------durga(object)
                        ^
      S3----------------|


     S2------------>DURGA ( object) 


3. We can create our own immutable classes.


Once we create a test object we cannot perform any change in the existing object. If we are trying to 
perform any change to the existing object and if there is change in the content of object then with those
changes a new object will be created and if there is no change in the content then existing object 
will be reused.

*/
package StringClass;

final class Test  // class declared as final so that no one can change our code.
{
    
    private int i ; // variable is private so that instance value cannot be accessed be changed 
                    // directly from outside class
    
    Test( int i) // Constructor will be used to initialize the only , and the value will remain final and cannot be changed
                
    {
        
        this.i=i;
    }

public Test modify( int i)
{
    
    /*
    1. If we call modify method, on test object we created it will check the existing
       value of the object and the value which we are changing it taken in the parameter.
    

    
    
    */
    if(this.i==i)
    {
        return this;
    
    /*
        
    If both the values are same then we will return the current object. Hence the newly 
    created object will also start pointing to the current object.
        
    */
    
    }


    else
    {
        /*
        
        If both values are not same , then we will return  a new object.
        containing a new set of value which was received as parameter in the
        modify method.
        
        */
        
        
        return( new Test(i));
    }


}   

}



class Driver
{
    
    public static void main(String[] args)
    {
        
        Test t1 = new Test(10);
        
        Test t2= t1.modify(100);
        
        Test t3= t1.modify(10);
        
        System.out.println(t1==t2); //false
        
        System.out.println(t1==t3);// true
    }
    
}
