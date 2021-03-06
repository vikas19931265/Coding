package thisVssuperMixed;


/*

Programmer vs compiler code

Here left side denotes code written by the compiler and right
shows if any addition in the code is done by the compiler.


case 1

    Programmer Code                                      Compiler generated Code

   class Test                                       class Test
    {                                               {
                                                        Test  {
                                                           super();
    }                                               }     }


   
    
    

case 2


   public class Test                                public class Test

    {                                                   {
                                                           public Test()
     }                                                      {
                                                                super();
                                                            }   
                                                        }       




case 3

public class Test                                   public class Test{
{
    void Test()                                         public Test(){
        {                                                   super();
                                                        }           
        }
                                                       void Test()
}                                                         {  
                                                           }
                                                        }     




case 4:

class Test                                          class Test        
{                                                   {

    Test()                                             Test()     
    {                                                       {
    }                                                          super(); 
                                                         }
}                                                   }





case 5:

class Test                                             same (no extra code generated by compiler) 

{

    Test(int i)

        {
            super();
        }

}




case 6:

class Test                                              class Test
{                                                       {

    Test()                                                  Test()
    {                                                        {   
        this(10);                                                this(10);   

    }                                                         }  

    Test(int i)                                             Test(int i)

    {                                                         {  
                                                                    super();
    }                                                         } 
}








*/


//--------------------------------------------------------------------------*********--------------------------------------------------------------------------
