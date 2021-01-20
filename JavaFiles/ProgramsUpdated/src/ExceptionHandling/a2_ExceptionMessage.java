/*
Scenario
===========

Exception occurs in one try block but there is no catch block for that. And same is surrounded
by another try block.

Will the exception be caught by outside try block???...Answer is yes.

*/



package ExceptionHandling;

import java.util.concurrent.TimeoutException;

public class a2_ExceptionMessage {

    public static void main(String[] args) {
        try {
            try {
                String s = null;
                System.out.println(s.length());
                System.out.println("call is completed");
            } catch (ArithmeticException e) {
                System.out.println(e.toString());
            }
        } catch (Exception e) {
            System.out.println("control came");
        }
    }
}
