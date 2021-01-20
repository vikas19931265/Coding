
package Arrays_ProgramsAndCollections;


class SumOfAllElementsOf2d11
{
    public static void main(String[] args)
    {
        int[][] input={ {1,2,3},
            {4,5,6},
            {7,8,9} };

      int sumTotal=0;

      for(int[] inp: input)
      {
          for(int inp1: inp)
          {
              sumTotal=sumTotal+inp1;
          }
      }

      System.out.println("result is "+ sumTotal);

    }





}