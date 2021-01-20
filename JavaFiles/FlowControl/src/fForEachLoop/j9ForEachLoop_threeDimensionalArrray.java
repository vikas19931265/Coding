/*

To print elements of 3d array
===============================================================================


trick to create 3d arrays
-------------------------
{
        first create 2d elements

        {---> 2d bracket created first

                {10,20} ,{30,40} ---> now in the first 2d bracket insert the elements

        }----> close the first 2d

        ,   place comma to separate the 2ds

        now create second 2d elements

        {----> 2nd 2d bracket created

                {50,60,70} ,{80,90}

        }

}---->3d bracket


base of 3d array is number of 2ds inside it.



diagram
----------
                        ---------
x---------------------|    |     |
                      |----------  
                      /        \ 
                    x1           \
                    /            \   
         ------------        --------------       
         |    |     |       |     |        |  
         |    |     |       |     |        |  
         ------------       ----------------
         /      |              |        \
        x2      |              |          \  
       /        |              |           \ 
----------   ---------  -------------   ------------
|   |    |   |       |  |   |   |    |  |   |       | 
|10 | 20 |   |30 |40 |  |50 |60 |70  |  |80 | 90    | 
----------   |-------   |------------   ------------    
    


*/


class Array3d
{
    public static void main(String[] args)
    {
        
      int [][][] x=  {  {  {10,20} ,{ 30,40 } } , {{50,60,70} ,{80,90 } } } ;
        
     
     for(int[][] x1:  x) // for each 2d array element in 3d array x
     {
        
         for(int[] x2 : x1) // for each 1d array in 2d array x1
         {
            
             for(int x3: x2) // for each int array element in 1d array x2
             {
               
                 System.out.println(x3);
             }
             
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
60
70
80
90
BUILD SUCCESSFUL (total time: 0 seconds)

*/
