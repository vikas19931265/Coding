/*

Initialization section
---------------------------

1. This part will be executed only once in the loop lifecycle.

2. Here we can declare and initialize local variables of the for loop.

3. Here we can declare any number of variables but should be of same type only.
   By mistake if we are trying to declare different data type variables then we will get
   compile time error.


  int i =0 , j=0;  // valid

  int i=0, String s ="Durga"; // invalid

  int i=0 , int j=0 ; "Durga"; // Invalid


4. In the initialization we can take any valid java statement including SOP statements.



*/


class initilisation
{
    
    
    static int i=0;
    
    public static void main(String[] args)
    {
        for(System.out.println("Hello boss are you sleeping");  i<3;i++)
        {
           /*
             Inside initilisation section we can take any valid java code
            */
            
            
            System.out.println("No Boss you are only sleeping");
            
        }
    }
}


/*

run:
Hello boss are you sleeping
No Boss you are only sleeping
No Boss you are only sleeping
No Boss you are only sleeping
BUILD SUCCESSFUL (total time: 0 seconds)

*/
