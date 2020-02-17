package StringAndWrapperClassPrograms;


/*

Java Program to count the number of words in String

 */

import java.util.*;

class Sample3 {

    public static void main(String[] args) {

        String ch = "My name is Vikas Gautam";

        String[] ch1 = ch.split(" ");

        int count = 0;

        for (String s2 : ch1) {

            count++;

        }

        System.out.println(count);

    }

}

/*
run:
5
BUILD SUCCESSFUL (total time: 0 seconds)

*/