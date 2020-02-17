
package Arrays;

class Testing1
{
    public static void main(String[] args)
    {
        int[] a= {10,20,30};
        
        int[][] b= {{10,20}};
        
        int[][][] c={{{20,30,40}}};
        
        for( int a1: a)
        {
            System.out.println(a1); // Here a is pointing to 1d array object  , and we are printing array values.
        }
    
        for(int b1[] : b) // Here b is pointing to the 2d array object , and b1[] is 1d array object held inside it.
        {
            System.out.println(b1[0]);
        }
    
    
        for( int[][] c1: c) // Here c is pointing to 3d array object , and int[][] is 2d array object held inside it.
        {
            System.out.println(c1[0][0]);
        }
    
    }
    
}