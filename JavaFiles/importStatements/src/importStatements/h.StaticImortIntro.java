// Static import.- one of the features which came in java 1.5

/*

Many new features came in java 1.5

1) for-each looop

2) var-arg method

3) autoboxing and autounboxing

4) Generics

5) covariant return types

6) Queue

7) Annotations

8) enum

9) static import. ( flop)



1. static java import was introduced in java 1.5.

2. According to SUN usage of static import reduces length of the code and improves readibility.

3. But according to world wide programming experts( like us) usage of static import creates confusion and reduces
   readibility of the code, hence if there is no specific requirement then it is not recommanded to use static import.


4. Usually we can access static members by using class name. But whenever we are writing static import we can access static members directly
   without class name.

*/
package importStatements;

import static java.lang.Math.*; // This is a static import where we have imported all static members of Math class. Hence to call the static methods of
                                // of Math Class we now dont need to use Classname.Method name , instead we can use the method directly.


class Test9
{
    
     public static void main(String[] args)
     {
         System.out.println(sqrt(4)); // If we had not done static import then need to write...Math.sqrt(4);
         
         System.out.println(max(10,20));
         
         System.out.println(random());
                 
                 
      }
 
 }

//-------------------------------------------------------------------------------------------******************---------------------------------------------