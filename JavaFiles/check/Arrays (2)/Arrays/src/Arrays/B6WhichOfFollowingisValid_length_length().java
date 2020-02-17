/*

Which of the following is valid usage of length() / length with respect to the arrays

*/
package Arrays;


 class Testing
{
    
     public static void main(String[] args)
     {
         String[] s ={"A","AA","AAA"};
         
         System.out.println(s.length);  // This is valid answer will be 3
         
       //  System.out.println(s.length()); // This is invalid as length() method cannot be used with respect to arrays
        /*
       error: cannot find symbol 
       symbol: method length()
       location : class String[]
           */ 
        
       //  System.out.println(s[0].length);//This is invalid as length variable only applicable to the array and s[0] is String
       
       /*
       error: cannot find symbol 
       symbol: method length
       location : class java.lang.String
       
        */
       
       
    System.out.println(s[0].length());// This is valid as s[0] is string and we are trying to find length of the string using length() method.
    
     
    int[][] x= new int[6][3]; // This is a 2d array , here calling length variable will result in base size array.
        
    System.out.println(x.length); // x is pointing to 2d array and size of 2d array is 6
        
    System.out.println(x[0].length); //x[0] is pointing to 1d array and size of 1d array is 3.
     
       /*
                [note]
                    In multidimensional arrays, length variable represents only the base size but not the total size.
         
                   There is no direct way to find total length of multidimensional array but indirectly
                   we can find as follows.
        
                   x[0].length+x[1].length+x[2].length+...................
        
        */
        
        
     }
     
}

//-----------------------------------------------------------------------------------------******************-----------------------------------------------