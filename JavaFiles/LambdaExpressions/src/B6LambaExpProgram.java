
import java.util.ArrayList;

class B6LambaExpProgram
{

    public static void main(String[] args)
    {
        ArrayList l = new ArrayList();
        l.add(1);
        l.add(2);
        l.add(3);
        l.forEach(value ->
        {
            System.out.println(value);
        });
    }
}
