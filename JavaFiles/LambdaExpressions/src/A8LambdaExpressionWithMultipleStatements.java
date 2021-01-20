/*
Java Lambda Expression Example with multiple statements

 */

interface Say
{

    public String say(String message);
}

class Driver8
{

    public static void main(String[] args)
    {
        Say s = (String message) ->
        {
            String str = message + "  time is precious";
            return str;
        };
        System.out.println(s.say("i would like to say"));
    }
}

/*

i would like to say  time is precious

*/
