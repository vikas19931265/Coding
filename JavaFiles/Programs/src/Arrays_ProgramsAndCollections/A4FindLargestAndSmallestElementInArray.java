
/*

Finding largest and smallest element in array type1
*/


package Arrays_ProgramsAndCollections;

import java.util.*;

class Array1
{
    public static void main(String[] args)
    {
        
        System.out.println("Program to find largest element inside the array");
        
        System.out.println("Enter the number of elements you wanna insert in array");
        
        Scanner cn = new Scanner(System.in);
        
        int input= cn.nextInt();
        
        int[] array= new int[input];
        
        System.out.println("Enter the elements");
        
        for(int i =0; i<input; i++)
        {
            
           array[i] = cn.nextInt();
            
            
        }
    
    
        for(int i=0 ;i< input; i++)
        {
            
            
            for(int j= i+1 ; j<input; j++)
            {
                
                if(array[i]<array[j])
                {
                   int  temp= array[j];
                   
                   array[j] = array[i];
                   
                   array[i]=  temp;
                    
                }
                
                
            }
            
            
        }
    
    System.out.println("Smallest element in array is " + array[input-1]);
    
    System.out.println("Largest element in array is "+ array[0]);
    
    
    
    
    }
    
    
}

/*
run:
Program to find largest element inside the array
Enter the number of elements you wanna insert in array
5
Enter the elements
34
56
23
56
67
Smallest element in array is 23
Largest element in array is 67
BUILD SUCCESSFUL (total time: 4 seconds)

*/