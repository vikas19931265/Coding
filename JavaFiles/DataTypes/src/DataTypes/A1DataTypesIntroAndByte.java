/* DATA TYPES IN JAVA [strongly type java language]                                                                                                  

[by Durga]

1. In Java every variable and every expression has some type.
2. Each and every data type is clearly defined.
3. Every assignment should be checked by compiler for Type compatibility.
4. Because of above reasons we can conclude, java language is strongly typed programming language.

is java a pure Object Oriented Programming language or not????

[Recommended Answer]

1. Java is not considered as pure object oriented programming language.
2. Because several OOPS features are not supported by java.
3. Features like operator overloading, multiple inheritance etc. are missing in java.
4. Moreover java is depending on primitive data types which are non-objects.


Primitive data types are of 2 types.

        1. Numeric Type.
        2. Non Numeric Type


Numeric Type data type can be divided into 2 categories.
        1. Integral Type (Numbers without decimals]
        2. Floating Type (Numbers with decimals].

                    Following are different types of integral data types
                        1. byte
                        2. short
                        3. int 
                        4. long

                     Following are different types of floating data types
                        1. float
                        2. double.

Non Numeric data types are of two types.

        1. char
        2. boolean

Hence there are a total of 8 primitive data types in java.


5. Except boolean and char remaining data types are considered as SIGNED DATA types
   because we can represent both positive and negative numbers.


6. byte, short , int , long is used for representing integral values. If you want to represent floating point values then
   please go for floating point data types.


7. [Note]
        ***We cannot apply null value to a primitive data type. Null value is only applicable to the Objects References.

        

*/



package DataTypes;


 class DataTypesIntroAndByte {
    
public static void main(String[] args)
        
{
    
    /*
                       BYTE
    
       SIZE----> 1 byte(8 bits)
       MAX_VALUE-----> +127
       MIN_VALUE-----> -128
       RANGE    ------>-128 TO 127
       DEFAULT VALUE-> 0
       
    
    
                    REPRESENTATION OF BYTE IN MEMORY.
    
                      0 1 1 1 1 1 1 1  (8 bits) 
    
    1. Here the first bit represent the sign of the digit, so 0 means its a
       positive number and 1 means its negative number.
    
    2. So the first bit is just for the sign, which can take 0 or 1.
    
    3. Maximum number which can be taken by 7 digits is all 1's. 
    
    4. So if all the bits are 1 , then  max number formed will be 127 and 0 sign indicates its a positive number.
    
    5. The most significant bit acts as sign bit , where 0 means positive number and 1 means negative number.
    
    6. Positive numbers will be represented directly in the memory whereas negative numbers will be represented in 2's complement form.
    
    
     
    byte b=128;  // invalid
    
    We will get error here. By default every integral number is of type int in java
    Hence error will be found int but expected byte.
    
   
    byte b= 10.5;
    
    Here by default all floating numbers are of type double.
    Hence error will be found double expected byte.
    [error: incompatible types: possible lossy conversion from double to byte]
    
    
    
    byte b= true;
    
    Here true and b both are of different data types hence new error will come i.e datatype compatibility error.
    found : boolean , required byte.
    
   
    byte b ="vikas";
    
    found: java.lang.String, required byte.
    
    */
    
    
   
    
    byte b=127;  //valid

    System.out.println(b);

    
    /*
    
    WHEN SHOULD WE USE BYTE??
    
   1.  byte is the best choice when we wants to handle data in terms of streams either from the file or the network.
   2. File Supported form or network supported form is byte.
   
    
    example in file IO
    
    fos.write(byte[] a)
    
   1. If we want to write anything to the file using method write of class fileoutputstream then the parameters which can be passed must be of byte type
   2. ***Any other data type argument will not be supported as the file can handle only byte form of data type. 
    
    
   */



}

}

