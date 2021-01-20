/*

1. This program talks about static flow when a static variable is present in Explicit static import,
   implicit static import and is present in our class as well.

2. In such scenario the preference is always given to the static members which is present in the class.

3. The order of precedence is as below given by compiler while resolving the static members.

      a) current class static members.
      b) Explicit static import.
      c) Implicit static import.


*/
package JavaSourceFileStructure;

import static java.lang.Integer.MAX_VALUE; // importing MAX_VALUE static variable present in Integer class. If we would have commented this also along with static member 
                                           // in our class then preference would have gone to implicit static import( java.lang.Byte.*) and then output would have been largest byte value that is 127.     

import static java.lang.Byte.*;// implicit import 
 
class Testing12
{
    static int MAX_VALUE=4000; // If we would have not written this line then the preference would have gone to the Explicit static import class that is o/p would have been largest int value.(2146483647)
    
    public static void main(String[] args)
    
    {
        System.out.println(MAX_VALUE);// o/p 4000 as class static variable given the preference.
    
    }

}

/*
[note]

We will get error "reference to MAX_VALUE is ambiguous" as MAX_VALUE can belong to Integer as well as Byte class Java.

If we are not specifying which class MAX_VALUE to be considered then we will get such type of error. But since in above example
we already have a static member in the class itself hence it has been given the priority.
*/
