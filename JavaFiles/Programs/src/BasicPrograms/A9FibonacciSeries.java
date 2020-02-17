/*

Fibanocci Series till 100


*/
package BasicPrograms;

class Program1
{
    
    public static void main(String[] args)
    {
        
        int a=0;
        
        int b=1;
        
        int c;
        
        System.out.print(" " +a);
        
        System.out.print(" "+b);
        
        for(int i =1 ; i<= 10 ; i++)
        {
            
            c=a+b;
            
            a=b;
            
            b=c;
            
            //i=c;
        
            System.out.print(" "+c);
            
        }
        
        
    }
    
}

/*
run:
 0 1 1 2 3 5 8 13 21 34 55 89BUILD SUCCESSFUL (total time: 0 seconds)

*/