package Literals;



class Test
{
    
    public static void main(String[] args)
    {
        
        int x =10; // programmer can specify integral value in decimal or integral or hexadecimal
                   // but while jvm will always print in the decimal form. 
        
        int y =010;
        
        int z =0X10;
        
        System.out.println(x+"...."+y+"....."+z);//10....8.....16
        
   
    /*
        
        (10)base8= 0*8^0+1*8^1=8; -- converting oct to decimal
        
        (10)base16=0*16^0+1*16^1 =16---converting hex to decimal
        
        
        */
        
        
    
    
    }
}