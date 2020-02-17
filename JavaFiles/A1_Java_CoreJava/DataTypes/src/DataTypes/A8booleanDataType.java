// boolean Data Types                                                                                                                                          

package DataTypes;


 class booleanDataType {
    
public static void main( String[] args)
        
{
    
    /*
    
        SIZE--> not applicable [virtual machine dependent]
        RANGE-> not applicable (allowed values are only true and false)
        DEFAULT VALUE--> false.
    
        boolean b= true;   // this is legal
    
        boolean b=True;   
            [Error: True will be treated as a variable by the compiler hence
              cannot find symbol true in a class error]
    
        boolean b=0;
            [Error: 0 is by default of type int here and b cannot store this value,
             hence error will be  incompatible type , found int required boolean]
    
        boolean b="vikas"
    
            [Error  : "vikas" is of string type and trying  to store it in b
             hence error will be incompatible type, found java.lang.String , required boolean]
    
    
  
    Scenario
    
      while(1)
           {
                System.out.println("hai");
           }    
            
   1. Here while is always expecting either true or false.
   2. Or we can say that boolean type is expected.
   3. but we are passing 1 hence , expected was boolean but provided is int.
   4. So we will get the compatibility error saying that found int but expected was boolean.
    
    
    Scenario
    
    int x=0;
    
    if(x)
    {
            System.out.prinln("hello");
    }
    
    else
    {
            System.out.println("hai");
    }
    
    1. Here if is always expecting either true or false.
    2. but provided value is x variable which is storing 0 of type int.
    3. Hence again we will get the error of incompatibility that is found int but expected was boolean.
        
    
    
   */
}


}
