/*
Setting maximum and minimum fraction and integer digits 

NumberFormatClass defines the following methods for this purpose.

public void setMaximumFractionDigits(int n)
public void setMinimumFractionDigits(int n)
public void setMaximumIntegerDigits(int n)
public void setMinimumIntegerDigits(int n)


import java.text.*;

public class Test
{
    public static void main(String[] args)
    {
        NumberFormat nf =NumberFormat.getInstance();
        
        //case 1
            
            nf.setMaximumFractionDigits(2);
            System.out.println(nf.format(123.4567));//123.46
            System.out.println(nf.format(123.4));//123.4
            
        //case 2
        
            nf.setMinimumFractionDigits(2);
            System.out.println(nf.format(123.4567));//123.4567
            System.out.println(nf.format(123.4));//123.40
            
        //case 3:
        
            nf.setMaximumIntegerDigits(3);
            System.out.println(nf.format(123456.789));//456.789
            System.out.println(nf.format(1.2345));//1.2345
            
        //case 4:
        
            nf.setMinimumIntegerDigits(3);
            System.out.println(nf.format(123456.789));//123,456.780
            System.out.println(nf.format(1.2345));//001.2345
        
    }
}
*/
