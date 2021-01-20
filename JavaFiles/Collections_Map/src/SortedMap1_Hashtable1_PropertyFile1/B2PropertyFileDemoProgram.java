/*

Property File Demo Program
======================================

*/
package SortedMap1_Hashtable1_PropertyFile1;

import java.util.*;

import java.io.*;

class PropertiesDemo {
    

public static void main(String [] args) throws Exception
{
    
    Properties p = new Properties();
    
    FileInputStream fis = new FileInputStream("/home/vikas/Desktop/property");
    
    p.load(fis);
    
    System.out.println(p);//{Scott=Goodtiger}
    
    String s = p.getProperty("Scott");//Goodtiger
    
    System.out.println(s);
    
    p.setProperty("Scott", "Goodtiger");
    
    FileOutputStream fos = new FileOutputStream("/home/vikas/Desktop/property");
    
    p.store(fos, "Updated by Vikas");
    


}



}

/*
run:
{Scott=Tiger, scott=Goodtiger}
Goodtiger
BUILD SUCCESSFUL (total time: 0 seconds)

FileOutput

#Updated by Vikas
#Tue May 29 15:26:27 IST 2018
Scott=Goodtiger


*/

