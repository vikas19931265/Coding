
package Concepts;

import java.util.Scanner;

/*

1. charAt is a method which is defined in the String class.
2. This method will accept a number value and in return will give character at the index specified.
3. Here number is the index position, and return type will be the character which
   will be available at that position.
4. The index starts from 0.[NOTE IT WHILE PRGORAMMING AS LENGTH-1 TO BE USED]
5. If a negative number, or a number greater then number of characters present 
   in the  string object are passed as the input then StringIndexOutOfBoundsException
   Exception is thrown.

6. NOTE:
    charAt method takes index as the input and in return gives out the char.

   SIGNATURE.
            public char charAt( int index);
  
*/


//--------sample program to find reverse of string with reverse(),  showing usage of charAt() method.


public class charAt {
    
  
public static void main( String[] args)
{

System.out.println("Enter String");
Scanner cn=new Scanner(System.in);
String input=cn.nextLine();
String str=input; // created a string.
System.out.println("String is--->"+str);

char[] array= new char[str.length()];//create a char type array of exact length that of the string.
int j=0;

    for( int i=(str.length()-1);i>=0;i--)// for loop to iterate through every char in string.
                                     // (str.length)-1 as indexing starts from 0.
        {
            char ch= str.charAt(i);// charAt method used to find character at every postion
            array[j]=ch;//this character is found and stored in antther array in reverse order.
            j++;
        }

String string= new String(array);// the final character array is passed as parameter to string constructor.
                                 //this character array converted to string and passed to string variable.
System.out.println("After reversal-->"+string); // 

if(str.equals(string))
{
    
    System.out.println("Its a palindrome");

}

else
{
    System.out.println("non palindrome");
}

}

}
