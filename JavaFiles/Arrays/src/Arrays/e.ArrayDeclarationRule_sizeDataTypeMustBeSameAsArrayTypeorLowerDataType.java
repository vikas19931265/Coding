/*
1. To specify array size of int type allowed data types are

        byte, short , char , int ( only allowed data types to specify size of an array of int type)

2. We can create an array of primitive type, but when giving the size of the array the type must be
   same as type of array or should be a data type lower then array type.

    Example if we are creating an array of int type , then we can give the size as of int or data types
    lower then int that is byte , short , int , char.


*/
package Arrays;


 class Test5
{
    public static void main(String[] args)
    {
        int[] x= new int[10];
        
        int[] x1= new int['a'];
        
        System.out.println(x1.length);
        
        byte b=20;
        
        int[] x2= new int[b];
        
        short s=30;
        
        int[] x4=new int[s];
        
       // int[] x= new int[10l]; This is not allowed as only data types allowed are byte , short, int , char. 
   
           /* 
                error found:long , required: int.
              */
    
       int[] x5= new int[2147483647];
            /*

                  1. This is valid as the size of array is in int range.
                  2. But we can get out of memory error as this much of memory may not be available in the system
                  3. int is represented by 4 bytes that is 32 bits.
                  4. 2147483647 will be represented in 2147483647*4 bytes which is nearly equal to 8Gb. And this much of memory may not
                     be available in the system hence we could get out of memory error.
                    error:
                        Exception in thread "main" java.lang.OutOfMemoryError: Requested array size exceeds VM limit
               */
      
            /*
    
            int[] x6= new int[2147483648]; This will give error CE: Integer number too large as size of declared array is more than int range.
           
            Even here we can get run time exception if sufficient heap memory is not available.
            
             */
    }
}


//-----------------------------------------------------------------------------------------******************-----------------------------------------------