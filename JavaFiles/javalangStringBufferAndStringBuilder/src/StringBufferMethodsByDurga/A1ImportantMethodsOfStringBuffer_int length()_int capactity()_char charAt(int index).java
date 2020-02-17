/*

important methods of StringBuffer.


public int length();

public int capacity();


public char charAt(int index);




*/
package StringBufferMethodsByDurga;

 class StringBuffer1 {


 public static void main(String[] args)
 {

     StringBuffer sb= new StringBuffer("durga");

     System.out.println(sb.charAt(3));

     System.out.println(sb.charAt(30)); //RE: StringIndexOutOfBoundsException

 }

 }