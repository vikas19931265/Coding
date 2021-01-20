/*

Case 2 :
------------------------------------------String------------------------------

String s1= new String("Durga");

String s2= new String("Durga");

System.out.println(s1==s2);// false

System.out.println(s1.equals(s2));// true


s1--------points to ------> durga Object

s2-------points to --------> durga Object


In string class .equals() method is overridden for content comparison , hence even though the 
objects are different if content is same .equals() method will returns true.






---------------------------------StringBuffer------------------------------------------


StringBuffer sb1= new StringBuffer("Durga");

StringBuffer sb2= new StringBuffer("Durga");

System.out.println(sb1==sb2);// false

System.out.println(sb1.equals(sb2));// false



sb1--------points to ------> durga Object

sb2-------points to --------> durga Object


In StringBuffer class .equals() method is not overridden for the purpose of content comparison
hence object class .equals() method got executed which is meant for the purpose of reference
comparison (address comparison). 

Due to this if objects are different then .equals() method will
return false even though content is the same.



*/

