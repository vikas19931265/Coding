/*

Two dimensional array creation.

1. In java 2 dimensional array is not implemented by using matrix style implementation.

2. Sun followed array of array creation approach for multidimensional array creation.

3. The main advantage of this approach is memory utilization will be improved.

        Array of Array( two dimensional)

 
Example

                                Array(2d, Size-2)

                       Array(1d,2)            Array(1d,2)

                    int[][] x= new int[2][2];

                   x[0]= new int[2];

                   x[1]=new int[2];

                   If value is to be stored inside then

                   x[0][0]=6;
                   
                   


1. Here we create a two dimensional array whose reference is held by a variable.            

                    int[][] x= new int[2][];

   So , here first we created a two dimensional array with base size of 2. Please note we have not defined
    size of array in array (1d array size). This is because the size is not fixed and can change.

2. Now after creating the two dimensional array , we will create another array object whose reference will
   be held by variable at index.

        x[0]= new int[2];

        x[1]= new int[2];

            so basically here we are storing an array object( 1d array) inside an array object(2d array).


                 */
package Arrays;


 class ArrayTest
{
    
     public static void main(String[] args)
     
     {
     
         int[][] array= new int[2][2];// Here firstly created a two dimensional array object whose reference is held by variable 'array'. Please note that here we dont
                                    // have any matrix representation. You can consider this as one array inside which another array object will be stored.
                                    //Thisis like a 2d array having references inside it which points to 1d array object.
         int[] x= {12,21}; // Created one dimensional array with values 12 and 21 stored inside it which will be stored inside the array.
         
         System.out.println(x.getClass().getName());
         
         array[0]= new int[2];// We created a new array object and assigned reference held by index array[0] variable of our main array.
         
         array[1]= new int[2];// We created a new array object and assigned reference held by index array[1] variable
     
         System.out.println(array);
         
         System.out.println(array[0]);
     
         array[0]=x; // to array[0] index we are making the reference point to x reference which is holding elements {12,21}. Hence array[0] starts pointing to the 
                    // object which contains element 12 and 21.
         
         System.out.println(array[0][0]); // for array[0]( reference)  pointing to array object we are printing the 0th index value.
         
     }
 }

//-----------------------------------------------------------------------------------------******************-----------------------------------------------