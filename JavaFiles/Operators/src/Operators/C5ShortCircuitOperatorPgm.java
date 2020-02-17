package Operators;

/*

Example 1

        x           y
&      11          17  

&&     11          16  

|      12          16  

||     12          16  



*/


class DemoProgram
{
    
    public static void main(String[] args)
    {
        
        int x=10, y=15;
        
        if(x++<10 & ++y>15)

        {
            x++;
        }
    
        else
        {
            y++;
            
        }
    
        System.out.println(x+"...."+y);//11....17
        
    
    }
}