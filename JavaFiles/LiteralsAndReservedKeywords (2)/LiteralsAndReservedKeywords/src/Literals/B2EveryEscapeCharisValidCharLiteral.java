/*

Every escape character is a valid char literal.

char ch='\n';

char ch='\t';

char ch='\m';---->This is illegal escape characters.


Escape characters                               Description


\n                                              New line

\t                                              Horizontal tab

\r                                              carriage return
    
\b                                              backspace

\f                                              form feed

\'                                              single quote

\"                                              double quote

\\                                              backslash




*/
package Literals;


 class Demo {
    
     public static void main(String[] args)
     {
         
         System.out.print("Hi");
         
         System.out.print("This is " symbol");
                    /*
         Here we are getting unclosed string literal error as the
         compiler is treating " as closing string hence symbol becomes 
         orphaned.
         
         If we do want to represent double quotes as symbol of closing 
         string instead want to represent it as value then we have 
         to do like "\" 
         
         putting \" will put a double quote.
         
         */
         
         
         System.out.println("This is \" symbol");
         
         
         System.out.println("\n hi i am good");           
         /*
            Here "\n will write hi i am good in a new line.
         
          
         */
         
         
         System.out.println("This is \' symbol");
         
         System.out.println("This is \\ character");
         
                    /*
         
                  Compiler will interpret this line and see "\\" which is responsible
             to print backslash character.
         
         If we dont put double slash we can error of improper escape literal.
         
    We use this mostly in file handling. Where if we have to put file destination
    then we cannot do like "C\x\b" . This will result in invalid escape character 
    as compiler treats '\' as escape character hence to print backslash we have 
    to write like this "C:\\x\\b";
         
      */
         
       }
 
 
 }
 
