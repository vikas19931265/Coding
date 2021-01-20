package Arrays_ProgramsAndCollections;

/*

Sort the elements of the Array
======================================

*/

import java.util.*;

class SortingElements
{
    
    public static void main(String[] arg)
    {
        
        
        
        System.out.println("Enter the number of elements");
        
        Scanner cn = new Scanner(System.in);
        
        int input = cn.nextInt();
        
        int input2;
        
        int temp;
       
        int[] a = new int[input];
        
        System.out.println("Enter the elements");
        
        for(int i =0; i< input ;i++)
        {
            
            input2=cn.nextInt();
            
            a[i]= input2;
            
            
        }
    
    
        System.out.println("Entered elements are");
        
        for(int a1: a)
        {
            System.out.println(a1);
        }
        
        
        System.out.println("Going for sorting");
        
        for(int i =0; i<=a.length; i++)
        {
            
            for(int j=i+1; j<a.length; j++)
            {
                
                if(a[i]> a[j])
                {
                    
                    temp=a[i];
                    
                    a[i]=a[j];
                    
                    a[j]= temp;
                    
                    
                }
                
            }
            
        }
    
    
        System.out.println("After sorting");
        
        
        for(int a1: a)
        {
            System.out.println(a1);
        }
    
    
    }
    
}

/*
run:
Enter the number of elements
10
Enter the elements
10
9
8
7
6
5
4
3
2
1
Entered elements are
10
9
8
7
6
5
4
3
2
1
Going for sorting
After sorting
1
2
3
4
5
6
7
8
9
10
BUILD SUCCESSFUL (total time: 11 seconds)


*/