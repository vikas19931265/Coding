// Creating Arrays in java( Array is object in java as we use new keyword to create it)

/*

1. Every array in java is an object only hence we can create arrays by using "new" operator.

        example
        
                int[] a  = new int[3]; // array is an object here

                'a' is a reference variable for the array object.



2. For every array Type corresponding classes are available and these classes are part of java language
   and not available to the programmer level.


*/
package Arrays;


 class Array
{
   
    
    public static void main(String[] args)
    {
         int[] a= new int[5];  //[note] array is an object created using new operator
         
         int[][] b= new int[5][5]; 
         
         double[] [] d= new double[4][4];
        
         short[] [] s= new short[4][4];
         
         byte[] by= new byte[6];
         
         boolean[] bo= new boolean[6];
         
         System.out.println(a.getClass().getName()); //op [I
    
         System.out.println(b.getClass().getName()); // [[I
         
         System.out.println(d.getClass().getName()); //  [[D
         
         System.out.println(s.getClass().getName()); //  [[S
         
         System.out.println(by.getClass().getName());//  [B
         
         System.out.println(bo.getClass().getName());//   [Z
    
    
    }
}

//-----------------------------------------------------------------------------------------******************-----------------------------------------------