package StringClassConstructorsAndMethods;

 /*

Constructor in String class
================================================================================

1. String  s  new String();

        This will create an empty String object.


2. String s = new String(String literal);

      This will create a String object on the heap for the given String literal.



3. String s = new String(StringBuffer sb);

    This will create an equivalent string object for the given StringBuffer.


4. String s = new String(char[] ch);

     This will create an equivalent String object for the given char array.

     example
                char[] ch={'a','b','c','d'};
                Strings s = new String(ch);
                System.out.println(s);  // abcd


5. String s = new String(byte[] b);

   This will create an equivalent string object for the given byte array.

    example
            byte[] b ={100,101,102,103};
            String s = new String(b);
            System.out.println(s);  // defg.
            
            
*/
