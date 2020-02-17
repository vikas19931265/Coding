
package WaysOfCreatingObject;

import java.text.DateFormat;

 class Factory {
    
 public static void main(String[] args)
 {
    Runtime r= Runtime.getRuntime();
 
    System.out.println(r); // created object whose reference is hel by r usig the factory method.
 
    DateFormat df=DateFormat.getInstance();

    System.out.println(df);
 }


}

class Student21
{
    
}

//--------------------------------------------------------------------------*******------------------------------------------