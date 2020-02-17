
package Concepts;

public class StringBasic {
    
public static void main( String[] args)
{

    
//CREATING CHAR ARRAY AND USING IT TO INITILIZE THE STRING OBJECT IN RANGE.
char ch[]={'a','b','c','d','e','f'};
String str= new String(ch,2,3); // intilized string object with a range.
System.out.println(str);


/*
 -NOTE CONTENT OF STRING ARRAY ARE ALWAYS COPIED INTO THE OBJECT, HENCE ANY CHANGE
  IN THE ARRAY WILL NOT CAUSE ANY EFFECT TO TAKE PLACE IN THE STRING OBJECT.
*/


// CREATING A REFERENCE ST1 POINTING TO THE OBJECT STR
String st1=str;   // st1 pointing to the same object str.
System.out.println(st1);



// AN OBJECT S2 ACCEPTING CHAR ARRAY AND PRINTING THE VALUES
String s2= new String(ch);
System.out.println(s2);


//c//CREATING ANOTHER STRING OJBECT ACCEPING SAME SEQUENCE OF CHARACTERS AS ANOTHER 

String str5= new String(str);
System.out.println(str5);


//TAKING BYTE OF ARRAY AND CONVERTING IT INTO STRING
//HERE BYTE CONTENTS IN ARRAY FORM CAN BE ACCEPTED BY THE STRING CONSTRUCTOR.
byte b[]={21,66,67,68}; // byte is only of 8 bits and used mainly for ASCII conversion
String bytestorage= new String(b);// this line will take an array of bytes and store it in object string
System.out.println(bytestorage);

int a[]={1,2,3};

//String integers= new String(a); // this will throw an error as String constructor cannot accept an array of integers and convert to string.

//FINDING OUT THE LENGTH OF THE STRING.

int length= bytestorage.length();
System.out.println(length);


// USING STRING LITERAL TO CREATE A STRING OBJECT.

String strinliteral="newString";

System.out.println("newString".length()); // we can call a method on String literal.
}






}
