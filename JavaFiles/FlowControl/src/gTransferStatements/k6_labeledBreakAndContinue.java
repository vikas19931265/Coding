/*

labeled break and continue
-----------------------------------

/*

1. We can use labelled break and continue to break or continue a particular 
   loop in nested loops




*/

    class labellebreak
    {
        
        public static void main(String[] args)
        {
            
            l1: // label for for loop outermost
            
                for(; ; )
                {
                    
                    l2://---->label
                    
                        for(; ;)
                
                        {
                            
                            for(; ;)
                            {
                            
                            break l1; // or break l2 or break
                            /*
                            if we break l1 control will  come out  of outermost loop 
                            
                            if we break l2 control will come out of l2 for loop
                            
                            if we break without label then control will come out of current/ inner most for loop.
                            
                            */
                           
                            }
                            
                            
                            }  
                
                
                
                
                }
            
            
        }
    }

