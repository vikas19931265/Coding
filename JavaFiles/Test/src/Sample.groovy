// Matrix multiplication of 3*3 Matrix.

package Arrays_Programs;

import java.util.Scanner;


class Matrix
{
    
    public static void main(String[] args)
    {
        int[][] matrix1= new int[3][3];
        
        int[][] matrix2 = new int[3][3];
        
        int[][] matrix3= new int[3][3];
         
        Scanner cn= new Scanner(System.in);
        
        System.out.println("Enter the elements of the first matrix");
        
        for( int row=0; row<3 ;row++ )
            
            {
                  for ( int col=0; col<3;col++)
                  {
                      
                        matrix1[row][col] =cn.nextInt();
                      
                  }
            }
        
        System.out.println("Enter the elements of the Second matrix");
        
        for( int row=0; row<3 ;row++ )
            
            {
                  for ( int col=0; col<3;col++)
                  {
                      //Scanner cn= new Scanner(System.in); // Here dont use a scnanner inside loop instead create a scnanner object in starting.
                                                    // because this wil create a new object every time an int value is found
                        matrix2[row][col] =cn.nextInt();
                      
                  }
            }
    
    
        System.out.println("Elements of first matrix are");
        
          for( int row=0; row<3 ;row++ )
            
            {
                  for ( int col=0; col<3;col++)
                  {
                      System.out.print(matrix1[row][col]);
                      
                      System.out.print("  ");
                      
                      
                  }
            
                  System.out.println();
            
            }
    
            System.out.println("Elements of Second matrix are");
        
          for( int row=0; row<3 ;row++ )
            
            {
                  for ( int col=0; col<3;col++)
                  {
                      System.out.print(matrix2[row][col]);
                      
                      System.out.print("  ");
                      
                      
                  }
            
                  System.out.println();
            
            }  
    
          System.out.println("Product of 2 matrix");
          
           for( int i=0;i<3 ;i++) // This loop if for number or records in the first matrix. It takes values from 0 to 3.
               
           {
               for( int j=0;j<3;j++) // This loop is to move from first column to last column in second matrix
               {
                   
                   for( int k=0;k<3;k++)// This loop is to move from 1st row to last row in the second matrix.
                   {
                      
                       matrix3[i][j]= matrix3[i][j]+(matrix1[i][k]*matrix2[k][j]); // default value for matrix3[0][0] is 0 as it is an int type array.
                   
                   
                   
                   }
               
                    System.out.print(matrix3[i][j]);
                    
                    System.out.print(" ");
               }
           
            System.out.println();
           
           }
    }
    
}