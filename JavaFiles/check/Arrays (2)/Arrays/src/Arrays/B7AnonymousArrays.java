/* Anonymous arrays.

1. Sometimes we can declare an array without name. Such type of nameless arrays are called Anonymous arrays.

2. The main purpose of anonymous arrays is just for instant use ( one time usage ).

3. We can create anonymous array follows

         new int[] { 10, 20, 30, 40}

4. While creating anonymous array we dont have to specify the size of the array , if we do it then we will 
   get compile time error.


        new int[] { 10 ,20 ,30} // This is illegal


5. We can create multi-dimensional anonymous arrays also

    example

            new int[][]{{ 10,20},{30,40,50}} 


In the below program just to call sum() method we needed an array , but after completing sum() method call
we are not using that array anymore.

Hence for this one time requirement anonymous array is the best choice and this same concept is also applicable for 
the anonymous objects.


*/

package Arrays;


  class Testing5
{
    
        public static void main(String[] args)
        {
            sum( new int[] { 10 ,20 ,30 ,40 }); // anonymous array object.
        }
        /*
        Based on our requirement we can give the name for anonymous array then it is no longer anonymous.
        
        example
        
           int[] x= new int[] { 10 ,20 ,30 ,40 };
         
        
            */
  
        public static void sum( int[] x)
        {
            int total =0 ;
            
            for(int x1: x)
            {
                total=total+x1;
            }
        
            System.out.println("Total is "+total);
        }
  
  
  }
