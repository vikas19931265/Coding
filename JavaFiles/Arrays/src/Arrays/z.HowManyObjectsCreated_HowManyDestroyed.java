
/*

1. How many objects Created??

2. How many Objects Destroyed??


*/

package Arrays;


 class NewClass25
{
    public static void main(String[] args)
    {
        int[][] a= new int[4][3]; 
        /*
        
       1. Firstly one object will be created pointing to 2d array ( Created: 1 Object / Garbage / 0)
        
       2. Now this main object with base size of 4 having index[0] to index[3] will point to 1d objects with size 3 all of them
          hence 4 more objects got created with default size as given of 3 ( Created : 4 Object/ Garbage/0)
        
        
        So with this line 5 Objects Created and 0 eligible for the garbage collection
        
        */
        
        
        
        
        a[0] = new int[4];
        
     /*
        
      1. Now a[0] is already pointing to 1d array object of size 3, but since here we have specified size of 4 hence
        
      2. a[0] reference will change from object pointing to size of 3 to another object pointing of size 4.
        
            hence Total (Created Object: 1 / Garbage 1)
        */
        
        
        a[1]= new int[2];
        
       /*
        
       1. Now a[1] is already pointing to 1d array object of size 3, but since here we have specified size of 2 hence
        
      2. a[1] reference will change from object pointing to size of 3 to another object pointing of size 2.
        
            hence Total (Created Object: 1 / Garbage 1)
        
        
       */
        
        
        
        a= new int[3][2];
    
    /*
        
     1. Here a is already pointing to an object , but since we are assigning new object hence full object
        to which it was pointing before will get eligible for the garbage collection.
        
     2. Total object created ( 1+3=4) 
        
        
     
        Total Objects Created =(5+1+1+4= 11 Objects)
        
        Total Objects Destroyed =(5+1+1= 7 Objects)
        
        
        
        */
    
    
    }
}

//-----------------------------------------------------------------------------------------******************-----------------------------------------------