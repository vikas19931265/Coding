/*


There is no direct way to specify byte and short literals explicitly. But indirectly
we can specify. Whenever we are assigning integral literal to the byte variable  and
if the value is within the range of byte then compiler treats it automatically as 
byte literal only.

Similarly short literal also



*/
package Literals;


class ex2
{
    byte b =10; // 10 is in range of byte hence 10 is treated as byte type only
    
    byte b1=127; //127 is in the byte range hence 10 is treated as byte
    
    
    byte b2=128; // 128 is not in byte range , hence it is treated as int and
                 // int to byte conversion is not possible implicitly but can
                 // be done explicitly using typecasting but that can lead to 
                 // loss of data. CE: possible loss of precision , found : int
                 // required byte

    
    short s =32767; // 32767 is in short range hence treated as short
    
    
    short s1= 32768; // 32768 is not in short range hence treated as int type
                    // CE: possible loss of precision , found : int required : short
    


}
