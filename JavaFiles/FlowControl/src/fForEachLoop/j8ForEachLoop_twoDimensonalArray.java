/*

To print the elements of two dimensional arrays
=================================================================================

                
                      -----------  
x---------------------|    |     |
                      |----------  
                      /        \ 
                    x1          \
                    /            \   
 ------- ------------        --------------       
 |        |    |     |       |     |        |  
 |10      |20  |30   |       |40   | 50     |  
 |------- ------------       ----------------



*/

class print2darray {

    public static void main(String[] args) {

        int[][] x = {
            {10, 20, 30}, {40, 50}

        };

        //   System.out.println(x.length);
        for (int i = 0; i < x.length; i++) {

            for (int j = 0; j < x[i].length; j++) {

                System.out.println(x[i][j]);
            }

        }

        System.out.println("Using enhanced for loop-----------");

        for (int[] x1 : x) { // for each one dimensional array  inside two dimensional array x                                       
            
            for (int x2 : x1) { // for each int value present in one dimensional array x1
            
                System.out.println(x2);
            
            }

        }

    }
}

/*
run:
10
20
30
40
50
Using enhanced for loop-----------
10
20
30
40
50
BUILD SUCCESSFUL (total time: 0 seconds)

*/
