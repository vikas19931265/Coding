
import java.text.*;
import java.util.Locale;

class Testings
{
    public static void main(String[] args)
    {
       Locale l  = Locale.getDefault();
        
       Locale l1 = new Locale("pa","IND");
       
       Locale.setDefault(l1);
    
       System.out.println(Locale.getDefault().getCountry());
    
    
    }
}
