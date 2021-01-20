/*
Without using the Lambda Expression
*/

interface Draw1
{
     void draw();
}

 class Drivers
{
    public static void main(String[] args)
    {
        Draw1 d =new Draw1()
        {
          public void draw()
           {
               System.out.println("Drawing has started successfully");
           }
        };
        d.draw();
    }
}

/*
Drawing has started successfully
*/