package LambdaExpressions;

import java.util.ArrayList;

class ArrayListElements
{
    public static void main(String[] args)
    {
       ArrayList l = new ArrayList();
       l.add(1);
       l.add(2);
       l.add(3);
       
       l.forEach(element-> System.out.println(element));
    }
}
    