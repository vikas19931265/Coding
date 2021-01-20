/*
public void setLength(int length);

===============================================================================

   If we want to reset the length of String we can use this method. By setting the 
   the length remaining characters will be ignored.

*/
package StringBufferConstructorsAndMethods;


 class setLength {
    
     public static void main(String[] args)
     {
         
         StringBuffer sb = new StringBuffer("aishwariyaabhi");
         
         sb.setLength(8);
         
         System.out.println(sb);//aishwari
     }
 
 
 }
