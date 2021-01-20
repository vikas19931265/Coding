//Never compare a float type with a double

/*
1. A very important point to note is that, by default every fractional value is double.

2.So if we are trying to store a decimal value into a data type like float , then
   we will get incompatiblity error as double cannot be converted to a float value.

3.Example float a=3.9, this is not valid as 3.9 is by default double. So we 
   have to suffix 3.9 with alphablet f . float a=3.9f

4. Also never try to compare a float value with the double value , as internally both values 
   will be different.
*/


package DataTypes;


 class TypeConversion {
    
    public static void main( String args[])
    {
        float a=3.9f;
        /*1. we need to suffix 3.9 with f, so that we can force the system to treat it as float not double.
             2. By default a fractioal value is double only as higlighted many times.  
        */
        double b=3.9;
    
        System.out.println(a);
        System.out.println(b);
    
    if(a==b)
    {
        /*
     1. Never try to compare a float value with the double value as internally
        they will be stored differently.
     2. Example 3.9 could be stored as 3.963484673 float.
     3. And 3.9 could be stored as 3.96334846735879790805 double value.  
        
        */
        
        System.out.println(" true");
    }
    
    
    else
    {
        System.out.println("false");
    }
    
    }




}
