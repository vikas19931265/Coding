/*

final vs immutability
================================================================================

final is applicable for variables but not for objects whereas immutability is applicable for Objects
but not for variables.


By declaring a reference variable as final we will not get any immutability nature even though
reference is the final we can perform any type of change in the corresponding object. But we cannot
perform reassignment for that variable

hence final and immutable both of them are different concepts.



Which of the following is meaningful?


final variable--valid

immutable variable-->invalid

final object--->invalid

immutable object--->valid


*/
package StringClass;



 class Smple

{

    public static void main(String[] args)
    {

      final  StringBuffer sb = new StringBuffer("durga"); // declared sb variable as final

        sb.append("software"); //even though the variable is declared as final we can make changes
                              // to the content of the object hence making a variable as final
                             //  has nothing to do with the immutability of the object.

        System.out.println(sb); // durgasoftware---> declaring a variable as final will not stop us
                                // from making any change in the object
    /*

       final  will just stop reassignment of the variable.

            sb= new StringBuffer("Solutions");--> invalid

         CE: cannot assign a value to the final variable

       */




    }
}


/*
$javac StringClass/Smple.java
$java -Xmx128M -Xms16M StringClass/Smple
durgasoftware



*/