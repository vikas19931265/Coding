/*

Internal implementation of Hashtable.
=================================================


1. Elements are stored in Hashtable from top to bottom and from left to right.

|------|
|      |     10
|------|
|      |     9
|----- |
|      |     8
|----- |
|      |     7
|----- |
|      |     6
|6=C   | 
|----- |
|
|5=A,16=F    5    16%11=5
|------| 
|      |
|15=D  |     4    15%11=4
|      | 
-------
|      |
|      |     3
|      | 
|------
|      | 
|      |     2
|------
|      |
|      | 
|23=E  |     1   23%11=1
|      | 
|------
|      | 
|      |     0
|------



2. If we change hashCode method of temp class as 

        public int hashCode()
        {
                return i%9;

        }

|------|
|      |     10
|------|
|      |     9
|----- |
|      |     8
|----- |
| 16=F |     7
|----- |
|      |     6
|6=C ,15=d   
|----- |
|
|5=A,23=E    5    16%11=5
|------| 
|      |
|      |     4    15%11=4
|      | 
-------
|      |
|      |     3
|      | 
|------
|      | 
|2=b   |     2
|------
|      |
|      | 
|23=E  |     1   23%11=1
|      | 
|------
|      | 
|      |     0
|------

run:
{16=F, 15=D, 6=C, 23=E, 5=A, 2=B}
BUILD SUCCESSFUL (total time: 0 seconds)



3. If we change the size of our Hashtable then again our output will change.

   If we configure the initial capacity of Hashtable as 25 that is 

    Consider the size of Hashtable is now 25.

    Hashtable h = new Hashtable(25);


|------|
|      |     24
|------|
| 23=E |     23
|----- |
|      |     
|----- |
| 16=F |     16
|----- |
|      |     15
|15=d  | 
|----- |
|      | 
|6=C   |     6    
|------| 
|      |
|5=A   |     5    
|      | 
-------
|      |
|      |     3
|      | 
|------
|      | 
|2=b   |     2
|------
|      |
|      | 
|23=E  |     1   
|      | 
|------
|      | 
|      |     0
|------

run:
{23=E, 16=F, 15=D, 6=C, 5=A, 2=B}
BUILD SUCCESSFUL (total time: 0 seconds)




*/


package SortedMap1_Hashtable1_PropertyFile1;


import java.util.*;



class HashtablesDemo 

{
    
    public static void main(String[] args)
    {
        
        Hashtable h = new Hashtable();
        
        h.put(new Temp(5), "A");
        h.put(new Temp(2), "B");
        h.put(new Temp(6), "C");
        h.put(new Temp(15), "D");
        h.put(new Temp(23), "E");
        h.put(new Temp(16), "F");
    
        //h.put("durga", null) // NullPointerException
        
        System.out.println(h);
        
    }
}
class Temp
{
    int i;
    
    Temp(int i)
    {
        this.i=i;
    }
    
    @Override
    public int hashCode()
    {
        
        /*
        
      hasCode() method will be called during objects creation. By default it is present
      in object class and taken to all other classes through inheritance.
        
      Here we have overridden the hashCode method to generate our own hashCode values.
        */
        
        return i;
        /*
        return i%9;
        
        if we do this our output will change to 
        
                run:
        {16=F, 15=D, 6=C, 23=E, 5=A, 2=B}
        BUILD SUCCESSFUL (total time: 0 seconds)

        
        if we change the size of the hashtable then  our output will also change
        
        Hashtable h = new Hashtable(25);
        
                run:
        {23=E, 16=F, 15=D, 6=C, 5=A, 2=B}
        BUILD SUCCESSFUL (total time: 0 seconds)

        
       */
        
    }   
        
    public String toString()
    {
        return i +"";


}
}
    
    
/*
run:
{6=C, 16=F, 5=A, 15=D, 2=B, 23=E}
BUILD SUCCESSFUL (total time: 0 seconds)

*/
//----------------------------------------------------------------*************************----------------------------------------------------