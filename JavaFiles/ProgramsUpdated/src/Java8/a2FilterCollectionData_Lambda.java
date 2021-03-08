// Filter Collection Data


package Java8;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;



class Clients
{
    public static void main(String[] args) {
       
       List<Integer> numbers= new ArrayList();
       numbers.add(new Integer(1));
       numbers.add(new Integer(50));
       numbers.add(new Integer(100));
       
      Stream<Integer> values= numbers.stream().filter(number->number<200);
      values.forEach(value->
      {
          System.out.println("value is " + value);
      }
      );
    }
}