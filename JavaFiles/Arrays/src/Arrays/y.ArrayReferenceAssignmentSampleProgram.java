package Arrays;

/*
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

//-----------------------------------------------------------------------------------------******************-----------------------------------------------