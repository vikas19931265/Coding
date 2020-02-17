/*

Java String format
===============================================================================


The java String format() method is used for the purpose of formatting the String.
There are so many things which can be done by using this method, for example concatenation
of the String and at the same time we can format the output of the String as well.


Syntax of format() method

    public static String format(Locale 1, String format, Object... args)

and

    public static String format(String format, Object... args)


*/

package StringClassConstructorsAndMethods;


//Example1:


class Example
{
    
    public static void main(String[] args)
    {
        
        String str=" just a String";
        
        String formattedString= String.format("My string is %s" , str);
        
        String formattedString2= String.format("My string is %.6f" , 12.123);
        
                    // this will put 6 zeros ending after the decimal
                    
        System.out.println(formattedString);
        
        System.out.println(formattedString2);
         
        
    }
    
    
}

/*Example 2:

Java String format() example of concatenating arguments to the String 

We can specify the argument positions using %1$, %2$,..format specifiers. 
Here %1$ represents first argument, %2$ second argument and so on. */


class Example2
{
    
    public static void main(String[] args)
    {
        
        String s1= "cool String";
        
        String str2= "88";
        
        
        String fstr= String.format("My String is %1$s, %1$s, %2$s", s1,str2);
        
        System.out.println(fstr);////My String is cool String, cool String, 88
        
        
    }
    
}


/*
Example 3:

Left padding the string using String format()

In this example, we are left padding a number with 0s and converting the number to 
a formatted String. In the above example we have formatted the float numbers and 
Strings and in this example we are formatting an integer. The important point to 
remember is that the format specifiers for these are different.

%s for strings
%f  for floats
%d  for integers

*/


class Example4
{
    
    public static void main(String[] args)
    {
        
        int a =88;
        
        String format1= String.format("%05d", a); // This will make length of String as 5.
                                                  // 2 already present and 3 spaces will be added to right
                                                  // If its a positive number then 3 spaces will be added to the left.
        
        System.out.println(format1); //88 space space space
        
        System.out.println(format1.length());
        
    }
    
}