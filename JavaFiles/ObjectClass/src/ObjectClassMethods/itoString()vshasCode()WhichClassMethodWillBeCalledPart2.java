/*


Our class(Test)--->toString() method is called.

*/
package javalanggpackage;



class Test3
{
    int i;
    
    Test3(int i)
    {
        this.i=i;
    }

    public String toString() //toString() method is not calling hashCode() method here.
    {
        return i+ " ";
    }

    
    public int hashCode()
    {
        return i;
    }


    public static void main(String[] args)
    {
        
        Test3 t1= new Test3(10);
        
        Test3 t2= new Test3(100);
        
        System.out.println(t1); //10...we are not calling hashCode method from toString() method
        
        System.out.println(t2);//100
    }

}