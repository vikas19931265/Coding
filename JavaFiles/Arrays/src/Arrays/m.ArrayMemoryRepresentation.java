
package Arrays;


 class Test6
{
    
   public static void main(String[] args)
   {
         
     
       
       int[][][] x={ //start of 3d object
           
                        { //start of 2d object
                        
                            { 10 ,20 ,30} , { 40 ,50 ,60}  //1d object.
                        } ,
       
                        
                
                        { 
                        
                             { 70,80} , { 90,100,110} 
                    
                        } 
                  } ;     
 
   
 /* Memory representation.
   
                                                Array 0               Array 1 (Size is 2)
   
                 Array 0          Array 1                                  Array0                        Array1  
   
   Array 0 Array 1 Array 2        Array 0 Array 1 Array2                  Array 0  Array 1         Array 0 Array 1 Array2
   
   10      20       30              40      50     60                     70        80                 90      100     110
   
   
   */
   
   
 System.out.println(x[0][1][2]); //60
 
 System.out.println(x[1][0][1]); //80
 
 System.out.println(x[2][0][0]); //Error : Array Index out of bound exception
 
 System.out.println(x[1][2][0]); //Error : Array Index out of bound exception
 
 System.out.println(x[1][1][1]);//100
 
 System.out.println(x[2][1][0]);//Error : Array Index out of bound exception
 
 }
 
 
 
 }
         
//-----------------------------------------------------------------------------------------******************-----------------------------------------------        
         
     
 
 

