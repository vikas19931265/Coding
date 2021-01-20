package PatternProgramming;

/*Pattern program diamond pattern */

class DiamondPattern {

    static int line = 10;

    static int space = 40;

    static int space4;

    public static void main(String[] args) {

        int i;
        for (i = 1; i < line; i++, space = space - 2) {

            for (int space2 = space; space2 >= 1; space2--) {

                System.out.print(" ");

            }
            for (int j = 1; j <= i; j++) {

                System.out.print("  * ");

            }

            System.out.println();

        }

        if (i == line) {

            space = space + 3;

            for (int k = i - 2; k >= 1; k--, space = space + 2) {

                for (int space4 = space; space4 >= 1; space4--) {

                    System.out.print(" ");

                }

                for (int l = 1; l <= k; l++) {

                    System.out.print("  * ");

                }

                System.out.println();

            }

        }

    }

}

/*
run:
                                          *
                                        *   *
                                      *   *   *
                                    *   *   *   *
                                  *   *   *   *   *
                                *   *   *   *   *   *
                              *   *   *   *   *   *   *
                            *   *   *   *   *   *   *   *
                          *   *   *   *   *   *   *   *   *
                           *   *   *   *   *   *   *   *
                             *   *   *   *   *   *   *
                               *   *   *   *   *   *
                                 *   *   *   *   *
                                   *   *   *   *
                                     *   *   *
                                       *   *
                                         *
BUILD SUCCESSFUL (total time: 0 seconds)

*/
