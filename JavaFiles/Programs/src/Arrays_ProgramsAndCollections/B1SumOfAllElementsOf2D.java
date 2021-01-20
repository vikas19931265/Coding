/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Programs;


class SumOfAllElementsOf2d
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