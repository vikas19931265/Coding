/*
  Java Lambda Expression example with no parameter
  ======================================================
*/

interface Draw3
{
   void draw();
}

class Driver3
{
   public static void main(String[] args)
    {
        Draw3 d = () ->
        {
            System.out.println("Drawing has started successfully!!");
        };
        d.draw();
    }
}

/*
Drawing has started successfully!!
 */
