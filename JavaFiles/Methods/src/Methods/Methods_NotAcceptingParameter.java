/* Method taking no arguments.

*/
package Methods;

 class Test
{

    public void m1()  // instance method taking no parameters
    {
        System.out.println("Simple Operation");
    }
    

    static void m2() // this is static method. Static methods are class methods.
    {
        System.out.println("Static operations");
    }
    
    public static void main( String args[])
{
    Test t= new Test();
    t.m1(); // to call the instance methods we need to create the objects of the Test class.
    Test.m2();// we can call static methods just with the help of the class name.
    
}

}

