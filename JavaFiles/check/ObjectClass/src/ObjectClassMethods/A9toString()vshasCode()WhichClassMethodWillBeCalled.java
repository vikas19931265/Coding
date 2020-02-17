/*

Object---> toString() method is called

and

Test----->hashCode() method is called.

*/
package ObjectClassMethods;



 class Test2
{
    int i;
    
    Test2(int i)
    {
        this.i=i;
    }

    public int hashCode()
    {
        return i;  // In this case Test2 class hashCode() method will be called as we have
                   // overidden the object class toString() method.
    }

    public static void main(String[] args)
    {
        Test2 t1= new Test2(100);
        
        Test2 t2= new Test2(100);
        
        System.out.println(t1);  //Test2@a
        
        System.out.println(t2);//Test2@64---> 64 is hexadecmial representation of int value 
        
        
    }


}
