//int Data Type                                                                         

/*

The most commonly used data type in java is int data type.

SIZE - 4 bytes( 32 bits)
RANGE - -2 pow 31   to ((2 pow 31)-1)
        [-21474836478 to 21474836477]
DEFAULT VALUE-> 0

[note]
Every integral number i.e. number without a decimal part in java is by default of type int.


*/
package DataTypes;


 class intDataType {
    
public static void main( String[] args)
        
{
    /*
    
    int x=21474836477; -- this is valid as the value given is in the range.
    
    
    int x=21474836478;
        
    [Error: 1.As we know that by default every number in java is of int type.
              so since this number is more than int range, then it  will  throw error
             Error : Integer number too large]
    
    int x= 21474836478l;
    
    [Error: In this case for the system to differentiate this digit as of type long
            we will suffix it with char 'l' and the system starts to treat it as of long type.
            Now if we try to store this long type number in the int variable we will get an error.
            Error: possible loss of precision. 
    
    int x= false;
    
    Error[ incompatible data types : found double Expected is int]
    
    
    */
    
}

}
