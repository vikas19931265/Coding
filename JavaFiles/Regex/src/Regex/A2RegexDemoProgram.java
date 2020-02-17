
package Regex;

/*

abbabbba is there as String. We need to check whether the given pattern is present
in target string or not. Then we need to check where its present???

ab----> pattern
abbabbba----> target string



*/

import java.util.regex.*;

 class RegexDemo
{
    public static void main(String[] args)
    {
        int count=0;
        
        Pattern p = Pattern.compile("ab"); // create java pattern object
        
        //Create matcher object which will match pattern
        
        Matcher m =p.matcher("abbabbba");
        
        while(m.find())
        {
            count++;
            
            System.out.println(m.start()+"..."+m.end()+"....."+m.group());
        }

    
        System.out.println("The total number of occuerences is "+ count);
        
        
        
    }
}

/*
$javac RegexDemo.java
$java -Xmx128M -Xms16M RegexDemo
0...2.....ab
3...5.....ab
The total number of occuerences is 2
*/