//-----------------------STRING COMPARETO METHOD--------------------------

/*
1. compareTo method in java is used to compare 2 strings.
2. Here the return type is int.
3. The value  returned is 0, when the string objects are equal.
4. It returns positive number when first object is greater than the second object.
5. It return negative number when first object compared is smaller than the 
   object.


SIGNATURE

        public int compareTo(String anotherString);

*/


package Concepts;


public class compareTo {
    
public static void main( String[] args)
{

//STRING COMPARISON WHEN BOTH OF THE OBJECTS ARE EQUAL.
    
String str= "vikas";// here both the objects are equal
String str1="vikas";
int result= str1.compareTo(str);
System.out.println("equal objects"+ result); // result will be 0 as both of the objects are equal/



//STRING COMPARISON OF ONE OBJECT HAVING MORE CHARS THEN THE OTHER OBJECT.

String str3="mahatmagandhi";
int result1=str3.compareTo(str1);
System.out.println("dissimilar objects->"+result1); // result is number of differences in the character.

/*
NOTE
[the result is always str1-st3 that is number of chars in 
    compareTo method - no of chars in current object.
]

*/
//STRING COMPARION OF FIRST OBJECT HAVING LESS CHARS THEN THE OTHER OBJECT.

int result3=str1.compareTo(str3);
System.out.println("dissimilar objects->"+result3);// result is like str3-str1






}

}
