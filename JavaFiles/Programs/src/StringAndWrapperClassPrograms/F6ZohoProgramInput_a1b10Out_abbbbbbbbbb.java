/*
1. Write a program to give the following output for the given input
Eg 1: Input: a1b10
       Output: abbbbbbbbbb
Eg: 2: Input: b3c6d15
          Output: bbbccccccddddddddddddddd
The number varies from 1 to 99.
 */
package StringAndWrapperClassPrograms;
import java.util.*;
class ZohoPgm1 {
    public static void main(String[] args) {
        String input = "b3c6d15";
        HashMap<String, Integer> m1 = new LinkedHashMap();
        String inputDigits = input.replaceAll("[a-z]", " ").trim();
        String inputChars = input.replaceAll("[\\d]", " ").trim();
        String[] inputCharArray = inputChars.split(" ");
        String[] inputDigitsArray = inputDigits.split(" ");
        for (int i = 0; i < inputCharArray.length; i++) {
            int value = Integer.parseInt(inputDigitsArray[i]);
            m1.put(inputCharArray[i], value);
        }
        Set s = m1.entrySet();
        Iterator itr = s.iterator();
        while (itr.hasNext()) {
            Map.Entry m2 = (Map.Entry) itr.next();
            String key = (String) m2.getKey();
            int value = (int) m2.getValue();
            for (int j = 0; j < value; j++) {
                System.out.print(key);
            }
        }
    }
}

/*
run:
bbbccccccdddddddddddddddBUILD SUCCESSFUL (total time: 0 seconds)

*/