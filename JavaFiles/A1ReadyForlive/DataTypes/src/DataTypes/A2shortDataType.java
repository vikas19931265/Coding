// SHORT DATA TYPE                                                                      

/*

[by Durga]


This is the most rarely used data type in java.

Size- 2bytes( 16 bits)
Range- 2 pow 15----- (2 pow 15)-1)   [ -32768 to +32767]
DEFAULT VALUE-> 0


*/


package DataTypes;

/**
 *
 * @author VIKAS GAUTAM
 */
 class shortDataType {
    
    public static void main( String[] args)
    {
        
        
    /*
        
        short s=32768;
            [This is invalid as it Error: possible lossy conversion from int to short]
         
                
        short s=10.5;
            [This is invalid as  Error: possible lossy conversion from double to short]
        
        
        short s=true;
            [ This is invalid as Error: Incompatibility error: found boolean required s]
        
    
        
      */
    
    
    short s=32767;
    
    System.out.println(s);
    



    /* WHEN TO USE SHORT DATA TYPE
    
    1. Short data type is useful for 16 bit processors like 8085/8086.
    2. But these processors are completely outdated hence the corresponding short data type is also outdated data type.
    
    */
    
    
    
    }
    
}
