/*

1. In all the wrapper classes, and in all the collection classes, String class , StringBuffer and
   StringBuilder classes, toString() method is overridden for meaningful string representation hence it
   is highly recommended to override toString() method in our class also.

*/
package javalanggpackage;

import java.util.*;

class Test
{
    public String toString()
    {
        return "Test";
    }
    
    public static void main(String[] args)
    {
        String s = new String("durga");
        
        System.out.println(s);//Durga
       
        Integer i = new Integer(10);//10
        
        System.out.println(i);
        
        ArrayList l = new ArrayList();
        
        l.add("A");
        
        l.add("B");
        
        System.out.println(l);//[A, B]
        
        Test t = new Test();
        
        System.out.println(t); //Test
    }



}

/*
run:
durga
10
[A, B]
Test
BUILD SUCCESSFUL (total time: 0 seconds)

*/
