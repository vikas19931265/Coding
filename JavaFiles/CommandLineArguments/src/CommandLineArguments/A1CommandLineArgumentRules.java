package CommandLineArguments;


/*

Scenerio 1:

Input passed via cmd

        java Test3 A B C    O/P x, y , z
        Java Test3 A B      O/P x, y , z
        Java Test3          O/P x , y ,z



 */
class Test3

{

    public static void main(String[] args)
    {
        String[] argh =
        {
            "x", "y", "z"
        };
        args = argh; // In this scenario since command line argument reference args is always getting changed to argh 
        //hence o/p will always be x , y , z.

        for (String s : args)
        {
            System.out.println(s);
        }
    }
}

/*

Scenario 2

1. Input passed via command prompt is always in the String format.

2. Within main method command line arguments are available in String form.

input
    Java Test4 10 20    op/ 1020 



 */
class Test4
{

    public static void main(String[] args)
    {
        System.out.println(args[0] + args[1]); // Here since args are of String format therefore instead of concat arithmetic operation will happen.
    }
}

/*

Scenerio 3

1. Usually space is the separator between command line arguments.

2. If our command line argument itself contains space then we have to enclose that command line argument with double quotes.


input : Java "note Book"


 */
class Test5
{

    public static void main(String[] args)
    {
        System.out.println(args[0]);
    }
}


//--------------------------------------------------------------------------********--------------------------------------------------------------