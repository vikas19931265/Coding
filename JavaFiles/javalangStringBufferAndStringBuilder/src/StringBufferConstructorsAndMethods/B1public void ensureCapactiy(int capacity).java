/*

public void ensureCapactiy(int capacity)

        to increase capactiy on fly/ one demand based upon our requirement.


*/
package StringBufferConstructorsAndMethods;



class ensurecapactiy
{
    public static void main(String[] args)
    {
        
        StringBuffer sb = new StringBuffer();
        
        System.out.println(sb.capacity());//16
        
        sb.ensureCapacity(1000);
        
        System.out.println(sb.capacity());//1000
        
    }
}