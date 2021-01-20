package gTransferStatements;

/*

Transfer statements ( break and  continue)
------------------------------------------

break:
----------------

 We can use break statement in the following places only


i. Inside switch to stop fall through.

ii. Inside loop to break from it or come out of it.

iii. Inside label blocks to break block execution based upon some condition.



These are the only places where we can use break statement. If we are trying to use it 
anywhere else then we will get the compile time error.

saying break outside switch or loop.

        example

            class Test
            {
                public static void main(String[] args
                    
                {
                    int x =10;
                    
                    if(x==10)
                        break;

                    System.out.println("Hello");
                }   
        }

Compile error: break outside loop or switch
                

*/

class usingBreak
{
    
    public static void insideSwitch()
    {
        
       System.out.println("------------------------------");
        
        int x =0;
        
        switch(x)
        {
            case 0:
                System.out.println(0);
                
            case 1:
                 System.out.println(1);
                 break;
                 
            case 2:
                 System.out.println(2);
                 
            default:
                
                    System.out.println("default");
                    
        }
    
    /*
     o/p
      
        0
        1
        
        
     */
    }
    
 //-----------------------------------------------------------------------------   
    
    public static  void insideLoops()
    {
     
        System.out.println("------------------------------");
        
        for(int i=0;i<10;i++)
        {
            if(i==5)
            {
                break;
            }
            
            System.out.println(i);
            
            
        }
        
    }
    
    
    /*
    
    o/p
    
    0
    1
    2
    3
    4
    
    
    */
    
    
    //----------------------------------------------------------------
    
    public static void InsideLabelBlocks()
    {
        
        System.out.println("------------------------------");
        
        int x =10;
        
        l1:
        {
            System.out.println("Begin");
        
            if(x==10)
            {
                break l1;
            
            }
                System.out.println("End");
            
            
         }
        
        
        System.out.println("Hello");
    
    
    }
        
    /*
    Begin
Hello
    */
    

//---------------------------------------------------------------
    
    
    public static void main(String[] args)
{

    insideSwitch();
    
    insideLoops();
    
    InsideLabelBlocks();
    
}

}

/*
run:
------------------------------
0
1
------------------------------
0
1
2
3
4
------------------------------
Begin
Hello
BUILD SUCCESSFUL (total time: 0 seconds)

*/
