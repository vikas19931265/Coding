/*

1. Which of the following array declarations are valid and which are invalid.


*/


package Arrays;

class Test{
    
        public static void main(String[] args)
        {
            
           // int[] a= new int[]; This is invalid as array size is not declared.
            
            int[] a = new int[3]; // This is valid as proper syntax is maintained and size is declared as well.
            
           // int[][] a= new int[][]; This is invalid as at least base size must be declared.
           
           int[][] a1= new int[3][]; // This is valid as the base size is declared.
           
           // int[][] a2= new int[][3]; This is invalid as the base size must be declared. 
            
           int[][] a2= new int[3][4]; // This is valid as it creates a 2d array with base size 3 and its child object sizes of 4.
           
           int[][][] a3= new int[3][4][5];// This is valid as it creates a 3d array with base size 3 , 2d size 4 and 1d size of 5.
           
           int[][][] a4= new int[4][3][]; // This is valid as it creates a 3d array with size of 4, 2d size of 3 and 1d size inside is not fixed.
        
           //int[][][] a5= new int[3][][4];// This is invalid as 2d size is empty, it is like a 1d array object not pointing to anything hence this is not valid.
            
          // int[][][] a6= new int[][5][6]; // This is also invalid as the base size of the array is empty
        }
    
}
