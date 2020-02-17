/*

Every case label should be compile time constant( that is constant expression).
=================================================================================


*/


class SwitchExample
{
    
    public static void main(String[] args)
    {
        
        int x=10;
        
        int y =20;
        
     final   int z =30;
        
        switch(x)
        {
            
            case 10: 
                    System.out.println(10);//10
        
           
            case y: // invalid , only constant are allowed, if we make the variable
                    // as final then this is fine. CE: constant expression required
                    System.out.println(20);
                    
            
            case z: // this is valid as z is constant.( z is declared as final)
                
                    System.out.println(z); //30
                    break;
        
        }
    }
}
