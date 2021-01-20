/*

labelled break and continue:
--------------------------------

We can use labelled break and continue to break from specified loops.
By default we break from the inner most loop but by using labelled for
loops we can break from outside loops also.

This concept is used in nested loops.

*/


class labelledbreakandcontinue
{
    
    public static  void normalBreak()
    {
        
        System.out.println("--------normal break---------------[");
        
        l1:
            
            for(int i =0; i<3;i++)
            {
                
                for(int j=0; j<3;j++)
                {
                    if(i==j)
                        
                        break;
                
                    System.out.println(i + "......" +j);
                
                }
            }
    }
    



//---------------------------------------------
    
    
        public static void Breakl1()
    {
        
                System.out.println("-------- break l1---------------[");
        
        l1:
            
            for(int i =0; i<3;i++)
            {
                
                for(int j=0; j<3;j++)
                {
                    if(i==j)
                        
                        break l1;
                System.out.println(i + "......+" +j);
                
                }
            }
    }
    


//------------------------------------------------
        
        
            public static void normalContinue()
    {
                System.out.println("--------normal continue---------------[");
        
        l1:
            
            for(int i =0; i<3;i++)
            {
                
                for(int j=0; j<3;j++)
                {
                    if(i==j)
                        
                        continue;
                
                System.out.println(i + "......+" +j);
                
                }
            }
    }
    


 //--------------------------------------------------------
            
            
     public static void Continuel1()
    {
                System.out.println("--------continue l1---------------[");
        
        l1:
            
            for(int i =0; i<3;i++)
            {
                
                for(int j=0; j<3;j++)
                {
                    if(i==j)
                        
                        continue l1;
                
                System.out.println(i + "......+" +j);
                
                }
            }
    }
               

public static void main(String[] args)
{
    
    normalBreak();
    
    Breakl1();
    
    normalContinue();
    
    Continuel1();
}

}


/*
run:
--------normal break---------------[
1......0
2......0
2......1
-------- break l1---------------[----no output in this one

--------normal continue---------------[
0......+1
0......+2
1......+0
1......+2
2......+0
2......+1
--------continue l1---------------[
1......+0
2......+0
2......+1
BUILD SUCCESSFUL (total time: 0 seconds)

*/
