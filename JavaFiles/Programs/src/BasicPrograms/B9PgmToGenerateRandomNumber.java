//pgm to generate random numbers.

package BasicPrograms;

import java.util.*;

class Samples {

    public static void main(String[] args) {
        Random r = new Random();

        for (int i = 0; i <= 5; i++) {

            System.out.println(r.nextInt(50));
        }

    }

}

/*
run:
16
38
27
18
40
23
BUILD SUCCESSFUL (total time: 0 seconds)

*/