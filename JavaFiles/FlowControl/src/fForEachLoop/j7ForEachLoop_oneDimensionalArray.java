/*

for-each loop ( also known as Enhanced for loop- came in 1.5 version)
===================================================================================


1. This loop was introduced in 1.5 version. 

2. This is a specially designed loop to retrieve elements of Arrays and Collections.


*/


//Example to print elements of one dimensional array

    
class Example22
{
    
    public static void main(String[] args)
    {
        
        int[] x ={10,20,30,40};
        
     // using normal for loop
        
        for( int i =0; i<x.length; i++)
        {
            System.out.println(x[i]);
        }
    
       System.out.println("---------------------------");
    
    // using enhanced for loop
    
        for(int x1: x)  // read it like for each element of int type x1 in x
        {
            System.out.println(x1);
        }
    
    
    }
}


