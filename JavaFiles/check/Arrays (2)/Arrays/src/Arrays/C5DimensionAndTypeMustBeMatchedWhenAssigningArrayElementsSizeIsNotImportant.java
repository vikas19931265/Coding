//case_3
/*

Whenever we are assigning one array to another array the dimensions must be matched.

For example in the place of one dimensional int array we should provide one dimensional 
array only. If we are trying to provide any other dimension then we will get compile time
error.

[note]

    Whenever we are assigning one array to one another array both dimensions and type must be matched.
    But size is not required to match.


*/


package Arrays;


 class NewClass22
{
    
     public static void main(String[] args)
     {
         int[][] a= new int[3][];
         
     
         /*
         a[0]= new int[4][3];// This is invalid as inside a two dimensional array we must store only one dimensional array object only. But
                             // here we are trying to make it point to 2 dimensional array hence we will get the error
                             
         
         a[0]=10; // Here also a[0] is supposed to point to 1 dimensional array only , but since we are making it point to int value hence we 
                  // will get the error.
     
         error: incompatible types, found : int
                required int[]
         
         
         */
     
     a[0]= new int[2]; // This is valid as inside 2d array we are making it to point to 1d array with size of 2. Inside  this one dimensional array
                       // we can store the elements.
                       
     a[0][0]=4; // Storing elements inside the 1d array
     
        /*
                [note]
                    Elements are always stored in 1d array only , rest 3d and 2d arrays just contains the references.
          */
     
     }
 
 
}
