/*
  Java Lambda Expression example with multiple parameter
  ======================================================
 */

interface Draw5
{

    int add(int a, int b);
}

class Driver5
{

    public static void main(String[] args)
    {
        Draw5 d = (int a, int b) ->
        {
            return (a + b);
        };
        System.out.println(d.add(10, 20));
    }

}

/*

30

 */
