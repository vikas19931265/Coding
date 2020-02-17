
package Arrays_ProgramsAndCollections;

class MatMultiplication
{

    public static void main(String[] args)
    {
        int[][] matrix1 =
        {
            {
                2, 3, 4
            },
            {
                5, 7, 8
            },
            {
                1, 2, 4
            }
        };

        int[][] matrix2 =
        {
            {
                4, 5, 7
            },
            {
                2, 6, 8
            },
            {
                8, 9, 1
            }
        };
        int m;
        int result;
        int count;
        int status;
        int j;
        int k;

        for (int[] mat1 : matrix1)
        {
            m = 0;
            for (int l = 0; l < 3; l++)
            {

                result = 0;
                count = 0;
                l1:
                for (int i = 0; i < mat1.length; i++)
                {
                    j = 0;
                    status = 1;

                    l2:
                    for (int[] mat2 : matrix2)
                    {
                        while (j < count)
                        {
                            j++;
                            status = 0;
                            continue l2;
                        }

                        for (k = 0; k < mat2.length; k++)
                        {
                            result = result + (mat1[i] * mat2[m]);

                            count++;
                            continue l1;
                        }

                    }
                }
                System.out.print(result + "\t");
                m++;

            }

            System.out.println();
        }

    }
}

/*
run:
46	64	42
98	139	99
40	53	27
BUILD SUCCESSFUL (total time: 0 seconds)

*/