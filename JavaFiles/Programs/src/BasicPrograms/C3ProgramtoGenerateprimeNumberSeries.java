
package BasicPrograms;

class PrimeSeries
{
    static int number=100;
    
    public static void main(String[] args)
    {
        
        for(int i=2; i<=100;i++)
        {
               
            boolean status=true;
               
               
                for(int j=2;j<(i-1);j++)
               {
                   if(i==2)
               
                   {
                       status=true;
                       break;
               
                   }
                   
                   if(i%j==0)
                   {
                       status=false;
                       break;
                   }
               }
              
            if(status==true)
            {
                System.out.println(" "+i);
            }
        
        }
    }
    
}

/*run:
 2
 3
 5
 7
 11
 13
 17
 19
 23
 29
 31
 37
 41
 43
 47
 53
 59
 61
 67
 71
 73
 79
 83
 89
 97
BUILD SUCCESSFUL (total time: 0 seconds)


*/