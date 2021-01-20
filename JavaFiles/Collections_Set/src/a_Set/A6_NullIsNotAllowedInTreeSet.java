/*
null Acceptance.
=========================================================================

1. For non empty TreeSet if we are trying to insert null then we will get nullPointerException.

2. For empty TreeSet as the first element "null" is allowed but after inserting null, if we are trying
   to insert any other object then we will get run time exception saying NullPointerException.


[note]*


Until 1.6 version null is allowed as a first element to the empty treeset. But from 1.7 version onwards
null is not allowed even as the first element that is "null" such type of story not applicable for 
TreeSet from 1.7 version onwards.


*/
package a_Set;

import java.util.*;

class Null
  {
      public static void main(String[] args)
      {
          TreeSet t = new TreeSet();
          
          t.add(null);
          
          System.out.println(t); // Null is not allowed any more in TreeSet.
          
      /*
      run:
Exception in thread "main" java.lang.NullPointerException
	at java.util.TreeMap.compare(TreeMap.java:1294)
	at java.util.TreeMap.put(TreeMap.java:538)
	at java.util.TreeSet.add(TreeSet.java:255)
	at session8.Null.main(NewClass1.java:29)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 0 seconds)
    
      */
      
      
      }
      
  }
//----------------------------------------------------------**************************************--------------------------------------------