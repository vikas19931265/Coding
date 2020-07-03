package StringAndWrapperClassPrograms;

/*
Java program which finds the string in sentence whose first character
begins withs the capital letter.
After finding that it prints only those strings in lowercase and
then also finds out how many times the string is repeated.
 */
import java.util.*;

class Sample
{

    public static void main(String[] args)
    {
        String s = "There is Vikas And Bhajji in Bhajji and Vikas And Bhajji"; // Take input string
        String s1[] = s.split(" "); // Convert the string in array based upon the space in the string.
        ArrayList<String> l = new ArrayList();// created an arrayList
        for (String s2 : s1)//Now we are iterating over the elements of the string
        {
            if ((int) s2.charAt(0) >= 65 && (int) s2.charAt(0) <= 90) // Now for every string in array we are checking if the first character begins with the capital
            // letter or not. The range of capital letters in int format is from 65 to 90.
            {
                l.add(s2); // If the first character is capital , then i am storing it inside the arrayList.
                System.out.println(s2);
            }
        }
        Collections.sort(l); // I am sorting the arrayList so that later i can compare the elements.
        System.out.println("----------Iterating over the elements-------------");
        Iterator itr = l.iterator();
        while (itr.hasNext())
        {
            System.out.println(itr.next());
        }
        System.out.println("---------finding duplicate occurences in the arraylist-------------");
        int cursor = 0; // this i1 value wil act as cursor, if the duplicate values are found then i1 value will change to the next value
        // to be tested in the list.
        for (int i = 0; i < l.size(); i++) // In the arrayList i am starting a for loop till the end of the arrayList
        {
            int count = 1; // setting counter variable to find count of occurence of every String in the array.
            System.out.println(l.get(i));// I am getting the string
            for (int j = i + 1; j < l.size(); j++)// started a loop to compare every elements from first loop with all the elements of the second loop.
            {
                if (l.get(i).equals(l.get(j))) // If the strings are same
                {
                    count++; // then increment the counter value
                    cursor = i; //we are setting value of i to cursor. This is because in case there are no duplicates then else part wil be executed
                    // so we have to get the vlue of i from there and set it to cursor.
                    cursor++; // when duplicate is found we are incrementing the cursor
                    i = cursor;// setting i value to the cursor value.
                } else
                {
                    break; // incase no duplicates exist then we are coming out of the loop.
                }
            }
            System.out.println("count is " + count);
        }
    }
}
/*
run:
There
Vikas
And
Bhajji
Bhajji
Vikas
And
Bhajji
----------Iterating over the elements-------------
And
And
Bhajji
Bhajji
Bhajji
There
Vikas
Vikas
---------finding duplicate occurences in the arraylist-------------
And
count is 2
Bhajji
count is 3
There
count is 1
Vikas
count is 2
BUILD SUCCESSFUL (total time: 0 seconds)
*/
