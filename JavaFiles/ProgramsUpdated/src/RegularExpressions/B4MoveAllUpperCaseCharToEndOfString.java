
package RegularExpressions;

class MoveCharsToEndOfString
{
    public static void main(String[] args)
    {
        String input="vikaSGautam";
        input=input.replaceAll("[A-Z]", "")+input.replaceAll("[^A-Z]+","");
        /*
        input.replaceAll("[A-Z]", "")=vikaautam
        and input.replaceAll("[^A-Z]", "") =SG
        */
        System.out.println(input);
    }
}
/*
run:
vikaautamSG
BUILD SUCCESSFUL (total time: 0 seconds)
*/