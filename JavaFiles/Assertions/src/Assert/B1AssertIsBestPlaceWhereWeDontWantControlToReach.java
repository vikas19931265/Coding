/*

while performing debugging in our program if there is any place where the control
is not required to reach that is the best place to use the assertions.


switch(x)
{
    case 1:
        System.out.println("JAN");
        break;
    
    case 2:
        System.out.println("FEB");
        break;
    
    case 3:
        System.out.println("DEC");
        break;
    
    default:
        assert(false); // WE DONT WANT CONTROL TO REACH HERE.
            
}

RE: AssertionError.

*/ 
