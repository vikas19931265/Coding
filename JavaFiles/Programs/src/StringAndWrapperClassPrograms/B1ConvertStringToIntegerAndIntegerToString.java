package StringAndWrapperClassPrograms;

/*

Program to convert String to integer and integer to String

 */
class Sample11 {

    public static void main(String[] args) {

        System.out.println("Converting the integer to String");

        int a = 10;

        Integer a1 = Integer.valueOf(a);

        System.out.println(a1.toString());

        System.out.println("Converting String to integer");

        String s = "10";

        int a3 = Integer.parseInt(s);

        System.out.println(a3);

    }

}

/*
run:
Converting the integer to String
10
Converting String to integer
10
BUILD SUCCESSFUL (total time: 0 seconds)

*/
