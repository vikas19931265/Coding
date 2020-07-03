package Arrays_ProgramsAndCollections;

import java.util.*;

class Array3 {

    public static void main(String[] args) {

        System.out.println("Enter number of elements to insert");

        Scanner cn = new Scanner(System.in);

        int input = cn.nextInt();

        System.out.println("Enter the elements");

        int[] array = new int[input];

        int[] newArray = new int[input];

        for (int i = 0; i < input; i++) {

            array[i] = cn.nextInt();

        }

        System.out.println("Sorting the elements of the array");

        for (int i = 0; i < input; i++) {

            for (int j = i + 1; j < input; j++) {

                if (array[i] < array[j]) {

                    int temp = array[i];

                    array[i] = array[j];

                    array[j] = temp;
                }

            }

        }

        System.out.println("Elements After sorting");

        for (int i = 0; i < array.length; i++) {

            System.out.println(array[i]);

        }

        System.out.println("Removing the duplicate elements from the array");

        int cursor = 0;

        int k = 0;

        for (int i = 0; i < input; i++) {

            int count = 1;

            for (int j = i + 1; j < input; j++) {

                if (array[i] == array[j]) {

                    count++;

                    cursor = i;

                    cursor++;

                    i = cursor;

                }

            }

            if (count == 1) {
                newArray[k] = array[i];

                k++;

            }

            if (count > 1) {

                newArray[k] = array[i];

                k++;
            }

        }

        System.out.println("Elements in New Array Now");

        for (int i = 0; i < newArray.length; i++) {

            System.out.println(newArray[i]);

        }

    }

}

/*
run:
Enter number of elements to insert
5
Enter the elements
56
56
56
78
78
Sorting the elements of the array
Elements After sorting
78
78
56
56
56
Removing the duplicate elements from the array
Checkpoint
Checkpoint
Checkpoint
Elements in New Array Now
78
56
0
0
0
BUILD SUCCESSFUL (total time: 9 seconds)

*/