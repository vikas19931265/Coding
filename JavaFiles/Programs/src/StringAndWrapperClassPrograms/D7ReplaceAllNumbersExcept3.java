/*
replacement program
*/
package StringAndWrapperClassPrograms;

class DemoReplacement{
    public static void main(String[] args)
    {
        int number=1234;
        String element=Integer.toString(number);

        //System.out.println(element);
        element=element.replaceAll("[^3]", "");
        System.out.println(element);
    }
}

/*
run:
3
BUILD SUCCESSFUL (total time: 0 seconds)

*/