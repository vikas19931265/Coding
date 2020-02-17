
package PatternProgramming;


class Sample
{
    
    public static void main(String[] args)
    {
        int space =100;
        
        int sp=space;
        
        for(int i =1;  ;i++)
        {
             if(i==6)
                {
                    int k=i-2;

                        
                    
                    
                    for(int i1 =k; i1>=1; i1--)
                    {
                 
                       
                        
                        for(int m =i1; m>=1; m--)
                        {
                         
                         
                            
                            System.out.print("  " +i1);
                        
                        
                        }

                    System.out.println();

                    
                  
                    
                    }

                break;
        
        }
        
            
            
            for(int j=1;j<=i;j++)
            {
                System.out.print("  " +i);
            }
            
            System.out.println();
        
        
       
        
        }
    }
    
}

/*
run:
  1
  2  2
  3  3  3
  4  4  4  4
  5  5  5  5  5
  4  4  4  4
  3  3  3
  2  2
  1
BUILD SUCCESSFUL (total time: 0 seconds)

*/