
/*

do while(true)
System.out.println("hello");
while(false)


this program will be re written as below 


*/
class validorinvalid
{
    
    public static void case1()
    {
        do
            while(true)
               
                System.out.println("hello");
                /*
        
                    Between do-while here we have only one statement. Physically
                    we can see there are two lines one is while(true) and other one
                    is print line but print line is part of while(true) hence there
                    is only one statement that is while(true) between do-while
                    
                 */
       while(false);
        
            /*
                we might get confused as while(true) is returning true hence println line
                will execute infinite number of times and while(false) will become
                unreachable but that is not a case.
        
                do-while are not read separately. It is not like do is one statement and
                while is another both are single statement only. Hence compiler never throws
                unreachable statement error.
            
                o/p will be hello printed infinite times
        
                    hello
                    hello
                    hello
                    .
                    .----->infinite
                    .
        
        
        
            */
       
    }


public static void main(String[] args)
{
    case1();
}


}

