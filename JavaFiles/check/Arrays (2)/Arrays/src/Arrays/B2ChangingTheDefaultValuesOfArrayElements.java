/*

1. Once we creates an array element , every array element by default is initialized with default values.

2. If we are not satisfied with default values then we can override these values with our customized values.

3. If we are trying to access array element with out of range index( either positive value or negative int value)
   then we will get run time exception saying array index out of bound exception.    

*/



package Arrays;


class Test8
{
    int i;
    public static void main(String[] args)
    {
         int[] x = new int[6];
         
         x[0]=10;
         x[1]=20;
         x[2]=30;
         x[3]=40;
         x[4]=50;
         x[5]=60;
        /*
         x[6]=70
         
         x[-6]=80;
         
          [jvm issues error here at run time]  If we do this then we are going out of array range hence we will get array index out of range exception
         
          x[2.5]
         
            Compiler will check valid value for int. Since 2.5 is not int value  hence we will get error.
         
             possible loss of precision
             
                found double, required int.
          */
         
         for( int x1 : x)
         {
             System.out.println(x1);
         }
    
    }

}

//-----------------------------------------------------------------------------------------******************-----------------------------------------------