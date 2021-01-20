/*

Write a program to perform File merge operation where merging should be done line by 
line alternatively.

*/
package dPrintWriter;

import java.io.*;

 class FileMerger2 {
    
     public static void main(String[] args) throws Exception
     {
         
         PrintWriter pw = new PrintWriter("//home//vikas//Desktop//f3");
         
        BufferedReader br1 = new BufferedReader(new FileReader("//home//vikas//Desktop//f1"));
        
        BufferedReader br2 = new BufferedReader(new FileReader("//home//vikas//Desktop//f2"));
         
        String line1 = br1.readLine();
        
        String line2 = br2.readLine();
        
        while( (line1!=null) || (line2!=null))
        {
            if(line1!=null)
            {
                pw.println(line1);
                
                line1= br1.readLine();
                
            }
        
            if(line2!=null)
              {
                        
                  pw.println(line2);
                  
                  line2=br2.readLine();
              
              
              }
        
        
        }
     
      pw.close();
      
      br1.close();
      
      br2.close();
     
     }
 
 
 }

/*
AAA
222
BBB
333
CCC
444

555
666
*/