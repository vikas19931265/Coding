
/*

If we declare an array like this

        int[][] x1 = new int[2][3];

        then x1 reference will point to 2d array and 2d array reference will point to 1d array.

        This is similar to saying that inside the 2d object , 1d object is available by default since its size is given during declaration(important point)

If we dont specify the size then
    
        int[][] x1 = new int[2][];

        Now x1 reference is pointing to a 2d object but 2d object does not hold reference of any 1d object .Hence 2d Array Object contains default value of null.


[note]

    If we are trying to perform any operation on null  then we will get runtime exception saying
    null pointer exception.

*/

package Arrays;

class Test7
{
   public static void main(String[] args)
   {
       
    //Scenerio 1 :    
       
       int [][] x= new int[2][3]; // x is a reference which will hold the two dimensional array.
      
       System.out.println(x[0]); //o-p[I@15db9742---x[0] is a reference which will hold one dimensional array object
       
        
       System.out.println(x[0][0]);// At the end x[0][0] does not hold any object hence its default value which is 0 gets printed.
       
       
   
   
   //Scenerio 2:
   
   
        int[][] x1 = new int[2][]; // Created an reference pointing to two dimensional array 
        
        System.out.println("value"+x1[0]); // Now x1 is pointing to  2d array but there is no size specified hence x1[0] reference is not pointing to object , hence 
                                           // hence "null" will be its value
        
        System.out.println(x1[0][0]);// Now we are trying to to print value of object held by reference null , hence we will get the null pointer exception in this case
   
  }
    
}
