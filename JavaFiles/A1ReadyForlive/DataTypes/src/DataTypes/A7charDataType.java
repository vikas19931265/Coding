// char data types.                                                                                                                                          


package DataTypes;


 class charDataType {
    
public static void main( String[] args)
        
{
    /*
    
   Why char size is of 2 bytes in java compared to 1 byte in C/C++??
    
    
    1. In old languages like ( C or C++) are ASCII code based and the number of different allowed ASCII code characters are less than or equal to 256.
    2. To represent these 256 characters, 8 bits are enough.
    3. Hence the size of char in old languages is 1 byte ( 8 bits) , but JAVA IS UNICODE based and the 
       different unicode characters are greater than 256 and less than or equal to 65,536.
    4. To represent these many characters 8 bits may not be enough, compulsory we should go for 16 bits hence the size of the char in java is 2 bytes.
    
    SIZE: 2 bytes
    RANGE: 0 to 65, 535
    Default Value: 0 and 0 represents the space character.
    
    
     char ch=null; //invalid as null value cannot be applied to the primitive data types as null cannot be converted to char
    
    
   
    
    */
   
    char ch=97;
    
    System.out.println(ch);  //a


}






}