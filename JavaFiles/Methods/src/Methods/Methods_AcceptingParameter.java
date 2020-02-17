/* Method taking no arguments.

*/
package Methods;

 class Test1
{

    public void m1( int i, int j)  // these are local variables here, and the scope of these variables is only inside the method.
    {
        System.out.println(""+i+" "+j);// number added with number and string, gives the string output
    }
    

    static void m2() // this is static method. Static methods are class methods.
    {
        System.out.println("Static operations");
    }
    
    public static void main( String args[])
{
    Test1 t= new Test1();
    t.m1(20,30); 
   
}

}
