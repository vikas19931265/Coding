/*

1. At the time of array creation compulsory we should specify the size.

2. If we are not specifying the size then we will get the compile time error.

     int[] x= new int[];  // invalid

     int[] x= new int[7];  // this is valid as array size is given during time of array creation.


3. It is legal to have an array in java with size 0.

*/

package Arrays;

 class Arrays
{
    public static void main(String[] args)
    {
        /*
        
        1. It is completely legal to have an array with size 0.
        
        2. This has application in command line arguments as mostly we do not pass any command line arguments via cmd.
        
        3. main(String[] args) .. Here args will point to an array object with size 0.
        
        4. If we try to print the length that is args.length then we will get 0 as no command line argument is passed.
        
            */
        
        int[] a= new int[0];
        
        System.out.println(a.length);
        
        /*
          
         1. If we are trying to specify int size with some negative int value then we will get run time exception saying.
        
        Error: Negative Array Size Exception.
        
        Example : int[] b= new int[-5];
            
          
       */
        
        
        
    }
}

//-----------------------------------------------------------------------------------------******************-----------------------------------------------