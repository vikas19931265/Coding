/*

Rule to define java identifier
================================================

Rule 1:

    The only allowed characters in java are 

  i. a to z.

 ii. A to Z

 iii. dollar symbol($)

iv. Underscore symbol(_)


//---------------------------------------------------------------

Rule 2:

    If we are using any other character then immediately we will get the
    compile time error.

    Example , total_number is valid.
              Total#---->This is invalid as hash symbol(#) is not allowed.  
                


//------------------------------------------------------------------------

Rule 3:

    Identifiers are not allowed to start with digits.

   Example  ABC123----> This is valid as 123 comes at end
            123abc-----> This is invalid as identifier cannot start with digit.


//------------------------------------------------------------------------



Rule 4:


    Java identifiers are case sensitive hence upper case and lower case letters
    are treated as differently infact java itself is fully case sensitive language.

    class Test1{
    
    int number = 10;   // Here all the number identifiers are treated as differently
                       // as identifiers are case sensitive. 
    int Number=20 ;
    
    int NUMBER =30 ;
    
    int NuMbEr=40;
    
}
	

//-----------------------------------------------------------------------

Rule 5:

  There is no length limit for the java identifiers but it is not recommended to take more then
  15 digits.



//---------------------------------------------------------------------------

Rule 6:

   
 We cannot use reserved keywords as identifiers.


    example   int if =0; // this is invalid as if is reserved keyword and cannot
                         // be used as an identifier.


//---------------------------------------------------------------------------



Rule 7:

    All predefined java classes and interfaces can be used as the interface names
    but it is not recommended to use them as the identifier names.

    example
   
    public void case2()
  {
      int String =10;
      
      System.out.println(String); // op 10  We can use predefined class name as identifier
  
      int Runnable=20;
      
      System.out.println(Runnable); //20  We can use predefined interface name as identifier.
  
  
  }


*/


class Test1{
    
    
    
   public void case1() 
    
   {
           int number = 10;   // Here all the number identifiers are treated as differently
    
           int Number=20 ;

           int NUMBER =30 ;

           int NuMbEr=40;

   }
   

  public void case2()
  {
      int String =10;
      
      System.out.println(String); // op 10  We can use predefined class name as identifier
  
      int Runnable=20;
      
      System.out.println(Runnable); //20  We can use predefined interface name as identifier.
  
  
  }
}