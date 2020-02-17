//---------------------------CONCAT METHOD IN STRING CLASS--------------------

/*

1. This method is used to append specified string to the string in object.
2. The return type of the method is string.
3. The newly created string is always in the new object, illustrating concept of
   String class objects being immutable.

  SIGNATURE

        public String concat( String specifiedString)


*/



package Concepts;


public class concat {
    
    public static void main( String[] args)
    {
        String str1="vikas";
        String str2="gautam";
        
    String str3=str1.concat(str2);
    System.out.println("concated string is-->"+str3);
    
    }



}
