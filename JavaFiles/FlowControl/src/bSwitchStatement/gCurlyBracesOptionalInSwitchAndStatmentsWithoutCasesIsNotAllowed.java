/*

Switch curly braces is Optional and Statements cannot be written without the cases.
====================================================================================



1.Curly braces are mandatary for switch() statement. Except switch() statement everywhere
  else curly braces are optional.


2. Both case and default statements are optional that is an empty switch statement is a 
   valid java switch.


3. Inside switch() statement every statement under some case or default that is independent
   statements are not allowed inside the switch statement otherwise we will get compile time
   error.


        example

                int x =10;

                switch(x)
                {
                    System.out.println("Hello");
                }    

        CE: case, default or } expected.
          


*/


class EmptySwitch
{
    
    public static void main(String[] args)
    {
        
        int x =10;
        
        switch(x)
        {
            
           // empty switch statement is valid in java.
            
        
        }
    }
}

