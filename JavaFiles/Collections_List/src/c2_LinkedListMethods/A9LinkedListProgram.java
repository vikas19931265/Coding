
//LinkedList Program.


package c2_LinkedListMethods;

import java.util.LinkedList;

 class LinkedListDemo {
    
     public static void main(String[] args)
     {
         LinkedList l = new LinkedList();
         
         l.add("durga"); // 
         
         l.add(30);
         
         l.add(null);
         
         l.add("Durga");// [ durga, 30 , null, durga]
         
         l.set(0, "Software"); //[Software , 30 , null, Durga]
         
         l.add(0 ,"venky");// [venky , software , 30 , null, Durga]
         
         l.removeLast(); // [venky , software , 30 , null]
         
         l.addFirst("CCC");// [ CCC, venky , software , 30 , null''
         
         System.out.println(l.get(0)); // to get the  0th element ( this is not indexed based)
         
         System.out.println(l); //[CCC, venky, Software, 30, null]
     
     
     }

 
 
 }


//-----------------------------------------------------------------***************************-----------------------------------------------