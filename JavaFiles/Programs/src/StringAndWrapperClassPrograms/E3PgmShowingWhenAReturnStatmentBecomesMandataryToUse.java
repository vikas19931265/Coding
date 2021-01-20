package StringAndWrapperClassPrograms;

import java.util.*;

class ReturnStatement {

    public static void main(String[] args) {
        String number = new ReturnStatement().check(-20);
        System.out.println(number);
    }

    public String check(int number) {
        ArrayList l = new ArrayList();

        if (number > 0) {
            return "number is positive";
        } else if (number > 0) {
            return "number is again positive";
        }

        return null; // in case we are writing else if , the return statement becomes mandatary here as else if condition mightn not be satisfied.

    }
}

/*
run:
null
BUILD SUCCESSFUL (total time: 0 seconds)

*/