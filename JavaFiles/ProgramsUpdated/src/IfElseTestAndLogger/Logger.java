
package IfElseTestAndLogger;
import java.util.logging.Logger;
class LoggerTest
{
    public static void main(String[] args)
    {
        Logger log=Logger.getLogger(LoggerTest.class.getName());
        int a=10;
        if(a<20)
        {
            log.warning("number is lesser then 20");
        }
        if(a==10)
        {
            log.info("number is equivalent to 10");
        }
        
        if(a<50)
        {
            log.severe("its going wrong.");
        }
    }
}
