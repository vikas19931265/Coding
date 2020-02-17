/* Interface methods..


1. Every method present inside the interface is always public-abstract whether we are declaring or not does not matter.

2. As every interface method is always public and abstract , we cannot declare interface methods with the following modifiers.

    public --> private
    public--->protected


    abstract--->static
    abstract--->final
    abstract--->synchronized
    abstract--->strictfp
    abstract--->native
    
3. Which of the following method declarations are allowed inside the interface

    i) public void m1(){}   ( invalid as method should not have implementation)
    ii) private void m1();  ( invalid as by default methods of interface are public)
    iii)protected void m1();( invalid as by default methods of interface are public)
    iv) static void m1();   ( invalid as by default methods of interface are abstract and abstract-static combination is illegal)
    v) public abstract native void m1();( invalid as abstract-native combination is illegal)
    vi) abstract public void m1(); (valid)


*/
package interfaces;


 interface Interface
{
    public abstract void m1();
  
    /*
    
    Why interface class methods are always public and abstract??
    
    public: to make this method available to every implementation class.
    
    abstract : we declare method as abstract because child  class is responsible to provide the implementation.
    
    */
 
    
    
    /*Inside the interface the following method declarations are equal*/
    
    public abstract void m2();
    
    void m3(); // abstract-void will be placed by default here.
    
    abstract void m4();
    
}

//---------------------------------------------------------------------------------*******************--------------------------------------