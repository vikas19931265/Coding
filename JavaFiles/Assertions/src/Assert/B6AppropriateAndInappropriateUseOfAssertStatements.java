/*

class Test
{
    int  z =5;
    
    public void m1(int x)
    {
        assert(x>10); ---------->inappropriate use as assert statement should not be
                                 used in public statement as the caller is not aware
                                 whether the assert statement is active or not.
        
        switch(x)
        {
            case 10:
                System.out.prinltn(10);
                break;
            case 11:
                System.out.println(11);
                break;
            default:
                assert(false);---->appropriate use of assert statement where we are not 
                                    expecting the control to flow.
        }
    }

    
    
    private void m2(int x )
    {
        assert(x<10);------------>appropriate use of assert statement
    }
    
    

    private void m3()
    {
        asssert(m4());------->assert statement is leading to programming logic update 
                              hence this is not a suitable place to declare the assert statement.
    }
    
    private boolean m4()
    {
        z=6;
        
        return true;
    }
    
    
}

*/







 
