package DataTypes;

/*

important notes
======================

1. float of 32 bits can hold a long value of 64 bits as internal bits representation
   of float is different from the long.
   
2. float cant hold a double value.


*/



 class Sample21
{
    public static void main(String[] args)
    {
        float f = 10l;
        
        System.out.println(f); //10.0
        
        double d =12.2;
        
        float f1= d;
        
        System.out.println(f1);
        
            /*
            Sample.java:27: error: incompatible types: possible lossy conversion from double to float
        float f1= d;
                  ^
            
            */
    }
}