package StringAndWrapperClassPrograms;

/*

Write a java program or function to reverse a sentence word by word. Your program should take one string from the user as input and reverse that string word by word. For example,

   Input   :   Java Concept Of The Day

Output   :   Day The Of Concept Java

 */
import java.util.*;

 class Sample34 {

    public static void main(String[] args) {

        String st = new String("Java Concept of The Day");

        String[] sp = st.split(" ");

        for (int i = sp.length - 1; i >= 0; i--) {

            System.out.print(" " + sp[i]);

        }

    }

}
/*
run:
 Day The of Concept JavaBUILD SUCCESSFUL (total time: 0 seconds)

*/