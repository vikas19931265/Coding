package RegularExpressions;

/*
match function checking
*/

class A4MatchFunctionCheckingRegex
{
    public static void main(String[] args)
    {
        String input="ddasdfasdf";
        String regex="[a-zA-Z]+";
        System.out.println(input.matches(regex));
    }
}

/*
run:
true
BUILD SUCCESSFUL (total time: 0 seconds)

*/