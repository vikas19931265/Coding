package StringAndWrapperClassPrograms;

/*
program to find number of 0s and 1s in String without using for loop:

 */
class Sample22 {

    public static void main(String[] args) {

        String s = "111111110000";

        System.out.println("String is " + s);

        int originalLength = s.length();

        String s2 = s.replaceAll("0", "");

        System.out.println("number of 1s" + s2.length());

        System.out.println("number of 0s " + (originalLength - (s2.length())));

    }

}
