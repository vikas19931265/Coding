package Operators;

/*

Sample program
===========================================

*/

class SamplePgm
{
    
    public static void main(String[] args)
    {
        
        int a , b, c , d;
        
        a=b=c=d=20;
        
        a+=b-=c*=d/=2; // operation will always be performed from right to left
    
        System.out.println(a+"..."+b+"..."+c+"...."+d);
    }
}

/*
run:
-160...-180...200....10
BUILD SUCCESSFUL (total time: 0 seconds)

*/

