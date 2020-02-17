package collections_utilityclass;

import java.util.Arrays;
import java.util.Collections;
import java.util.*;

class ArraysSorting
{
    public static void main(String[] args)
    {
        
        Integer [] a = {56,87,12,98,0,4}; // Created integer array
        
        
        Arrays.sort(a);// Sorted the elements of Array based upon default sorting
        
        for(Integer a1 : a)
        {
            System.out.println(a1); //Printing elements after doing sorting
        }
    
       
        List l=Arrays.asList(a); // Converting Array to List.
        
        
        System.out.println("After converting Arrays to List"+ l);// printing elements after converting array to arrayList.
        
        
        Collections.reverse(l);// Printing elements of ArrayList after reversing
     
        
        System.out.println("Reversting " + l);// Printing elements of ArrayList after reversing
        
        
    
    
    }
}

/*
run:
0
4
12
56
87
98
After converting Arrays to List[0, 4, 12, 56, 87, 98]
Reversting [98, 87, 56, 12, 4, 0]
BUILD SUCCESSFUL (total time: 0 seconds)

*/