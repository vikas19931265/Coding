/*
  Java Lambda Expression example with Single parameter
  ======================================================
 */

interface Draw4
{

    void draw(int a);
}

class Driver4
{

    public static void main(String[] args)
    {
        Draw4 d = (a) ->
        {
            System.out.println("printing successfull" + a);
        };
        d.draw(10);
    }

}

/*
    printing successfull10
*/
