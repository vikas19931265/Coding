/*

Multiple inheritance is not supported through class in java but it is possible by 
interface, why?

As we have explained in the inheritance chapter, multiple inheritance is not supported 
in case of class because of ambiguity. But it is supported in case of interface because 
there is no ambiguity as implementation is provided by the implementation class.
For example:

*/

interface Printable
{  
void print();  

}  

interface Showable{  

    void print();  
}  
  
class TestInterface3 implements Printable, Showable

{  
    public void print()
    {
        System.out.println("Hello");
    }  

    public static void main(String args[])
    {  

        TestInterface3 obj = new TestInterface3();  

        obj.print();  
 }  
}   
