// Array Elements assignment Case 1

/*
1. In the case of primitive type arrays as array elements we can provide any type which can be
   implicitly promoted to declared type.

 conversion chart.

        byte ---> short ---->
                               int  --->long--->float--->double    
             char----------->


if we are creating int array then , byte ,short , int  and char are allowed.



2. In the case of float type arrays the allowed data types are 

    byte, short , char , int , long , float.

*/



package Arrays;


 class Testing8
{
   
    public static void main(String[] args)
    {
     int[] x= new int[5];
     
     x[0]=10;
     
     x[1]='a';
     
     byte b=20;
     
     x[2]=b;
     
     short s=30;
     
     x[3]=s;
     
    // x[4]= 10l; // possible loss of precision error found long, required int.
    
     float[] x1= new float[5];
     
     x1[0]=10;
     
     x1[1]='a';
     
     x1[2]=2.5f;
    
     x1[3]=10l; // long allowed here.
    
    }
     
}

//-----------------------------------------------------------------------------------------******************-----------------------------------------------