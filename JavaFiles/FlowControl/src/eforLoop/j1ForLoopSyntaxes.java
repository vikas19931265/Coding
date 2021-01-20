
/*

curly braces are optional and without the curly braces we can take only one statement under 
the for loop, which should not be declarative statement


*/

class Sample
{
    
    public void ex1()
    {
        for(int i =0 ; true ;i++)
    
                System.out.println("Hello");  // valid program
    }
    

//--------------------------------------------------

  public void ex2()
  {
      for(int i =0 ;i<10;i++);   // valid for loop program.
 
  }
    


//---------------------------------------------------------
  
  public void ex3()
  {
      
      for(int i =0;i<10;i++)
          int x =10;  // Invalid as we cannot take declarative statement inside for loop 
                      // with no braces.  CE: Variable declaration is not allowed here.
      
  }





}
