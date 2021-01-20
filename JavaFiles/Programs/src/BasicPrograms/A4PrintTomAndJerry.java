/*

for number divisible by 3 and 5 print tom

for number divisible by only 3 print jerry

for number divisible by only 5 print tom and jerry.

*/
package BasicPrograms;

class Sample
{
    
    public static void main(String[] args)
    {
        
        for(int i =1 ; i <=100 ;i++)
        {
            
            if(i%3==0 && i%5==0)
            {
                
                System.out.println("tom");
                
                continue;
                
            }
            
        
            if(i%3==0)
            {
                
                System.out.println("jerry");
                
                continue;
            
            }
            
            
            if(i%5==0)
            {
                
                System.out.println("Tom and Jerry");
                
                continue;
            
            }
        
        
            else
            {
                System.out.println(i);
            }
            
        }
        
    }
    
}


/*
run:
1
2
jerry
4
Tom and Jerry
jerry
7
8
jerry
Tom and Jerry
11
jerry
13
14
tom
16
17
jerry
19
Tom and Jerry
jerry
22
23
jerry
Tom and Jerry
26
jerry
28
29
tom
31
32
jerry
34
Tom and Jerry
jerry
37
38
jerry
Tom and Jerry
41
jerry
43
44
tom
46
47
jerry
49
Tom and Jerry
jerry
52
53
jerry
Tom and Jerry
56
jerry
58
59
tom
61
62
jerry
64
Tom and Jerry
jerry
67
68
jerry
Tom and Jerry
71
jerry
73
74
tom
76
77
jerry
79
Tom and Jerry
jerry
82
83
jerry
Tom and Jerry
86
jerry
88
89
tom
91
92
jerry
94
Tom and Jerry
jerry
97
98
jerry
Tom and Jerry
BUILD SUCCESSFUL (total time: 0 seconds)

*/