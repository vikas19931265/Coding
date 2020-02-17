/*
  Program using the lambda expression
  ============================================

*/

interface Draw2
{
     void draw();
}

 class Driver2
{
    public static void main(String[] args)
    {
        Draw2 d=()->
                    {

                        System.out.println("Drawing has started successfully!!");
                    };

        d.draw();
    }
}

/*
Drawing has started successfully!!
*/