package varArgsMethods;
/*
[note mostly on SCJP point of view]

1. m1(int...x)----> This will be converted to one dimensional array i.e int[] x

2. m1(String...x)----> This will be converted t one dimensional array of String  i.e String[] x

3. m1( int[]... x)----> This will be converted to 2 dimensional arrray, int[][]x

4. m1(int[][]... x)----> This will be converted to 3 dimensional array, int[][][] x


m1(int...x)

        We can call this method by passing a group of int values and x will become
        one dimensional array.


m1(int[]...x)

        We can call this method by passing a group of one dimensioal int arrays and
        x will become 2 dimensional int array.



*/




 class MethodAccepting_1D_2D_3dVarArgParameter
{
    
     public static void m1( int[]...x) // VarArgs parameter acceping a 2 dimensional array
     {
         
         
         
         for(int[] a: x)
         {
             System.out.println(a[0]);
         }
     }
 
    
    /*
     
     note
        
        Here in case of int...x if we start for loop for(int a:x) and do system.println(a)
        we will get all the values printed contained in one dimensioal array as the reference is
        directly pointing to an object in which array elements are there.
     
        However in case of 2 dimensional array , reference will point to an object inside
        which there are two more objects which are noting but one dimensional arrays hence we will
        get the hashcode.
     
        like System.out.println(a);
     
     
     */ 
     
    public static void main(String[] args)
    {
        int[] a={10,20,30};
        
        int[] b={20,40,50};
    
        m1(a,b); // Here we are passing a two dimensional array
    }
 
 
}
