/*
1. method 1:boolean add(Object o)

2. method 2:void add(int index, Object element) 

3. method 3:boolean addAll(Collection c)

4. method 4:  Object[] toArray()


*/
package ArrayList;

import java.util.*;

 class P2ArrayListMethods {
    
     public static void main(String[] args)
     
     {
         ArrayList arrayList= new ArrayList();
         Student s = new Student();
         LinkedList m = new LinkedList();
         m.add(60);
         m.add("linkedList");
        
        /* method 1:boolean add(Object o)
                   -> {this will append the object to the end of the list.}
                    Adding Heterogenous elements to ArrayList*/
         
         arrayList.add("vikas");
         arrayList.add(10);
         arrayList.add(20);
         arrayList.add(s);
         System.out.println(arrayList);//[vikas, 10, null, ArrayList.Student@1dd46
     
        //----------------------------------------------------------------------
        
         /* method 2:void add(int index, Object element) 
                    -> Adding element at the specified position 
                     Adding at postion where element already exists will make the element to shift to the next place.*/
              
         arrayList.add(0,"gautam");
         System.out.println(arrayList);//[gautam, vikas, 10, null, ArrayList.Student@1dd46f7]
         
    
 
       //----------------------------------------------------------------------- 
 
        /* method 3:boolean addAll(Collection c)
                      ->This will append the elements at the end of ArrayList in the order they come.*/
        
        LinkedList t = new LinkedList();
        t.add(10);
        t.add(20);
        arrayList.add(t);
        System.out.println(arrayList);
        Iterator itr=arrayList.iterator();
        while(itr.hasNext())
        {
            System.out.println(itr.next());/*gautam
                                                             vikas
                                                              10
                                                              null
                                                           ArrayList.Student@6b7920
                                                            [10, 20]*/
            
                                            
        }
     
        //----------------------------------------------------------------------
     
       /* method : 4 int lastIndexOf(Object o)
                ->It is used to return the index in this list of the last occurrence of the specified element, 
                   or -1 if the list does not contain this element.*/
        
       
      
        
      arrayList.add("vikas");
      System.out.println(arrayList.lastIndexOf("vikas"));//6--> vikas comes last at the 6th place.
     
     
       //----------------------------------------------------------------------- 
       /* method 5:  Object[] toArray()
                -> This will convert the arrayList into an array. This will be useful as an  
                   array always provides better performance then the arrayList.*/
      
           Object[] array1= arrayList.toArray();
           
           for(Object a: array1)
           {    int i=0;
               
                    System.out.println(a); /*gautam
                                                        vikas
                                                        10
                                                        20
                                                        ArrayList.Student@1dd46f7
                                                        [10, 20]
                                                        vikas */
                       
                i++;       
           }
                
            
      /*
      doubt while working..     
           
     Object a: array1, here a referene is poiting to array. In this the first element
     to be displayed is of String type. Since toString method is overrideen in String class
     we get the actual string result and not the reference.
           
     We dont need to typecast this to anything as we are just printing the values
     and reference. If we have to perfrom some kind of operation on the String/Student type
     of object then we have to typecast the Object type reference to String type or student type.      
      
           
     //----------------------------------------------------------------------------------------------------------
     
     /*
       method: 6  int indexOf(Object o)
               ->It is used to return the index in this list of the first occurrence of the specified element, or 
               -1 if the List does not contain this element.*/
      
       int index=arrayList.indexOf("vikas");
       System.out.println(index);//[1]
      
     
     
    /* method 7: Object clone()
                    ->It is used to return a shallow copy of an ArrayList. */
       
      Object o  =arrayList.clone();
      System.out.println(((ArrayList) o).get(0));//typecasted object to ArrayList type as Object reference cant be used 
                                                // to get the element at the specified position.
     
     
                                                
     //-------------------------------------------------------------------------------------------
     
     /* method 8:boolean addAll(int index, Collection c)
                    ->It is used to insert all of the elements in the specified collection into this list, 
                    starting at the specified position.
     
                    ->Please note this is different from addAll(Collection c) which will just "append" the elements 
                      at the end of the ArrayList object.*/  
     
     
        LinkedList n = new LinkedList();
        n.add("LinkedList");
        n.add(1);
        System.out.println(arrayList.addAll(1, n));
        System.out.println(arrayList);//[gautam, LinkedList, 1, vikas, 10, 20, ArrayList.Student@15db9742, [10, 20], vikas]
     
     //---------------------------------------------------------------------------------------------
     /*
       method 9:  Object set(int index, Object new);
                    ->To replace the leement present in te spcified index with provided Objecct
                    amd returns old object.*/
     
        arrayList.set(0, "item replaced");
        System.out.println(arrayList);
        
     
    //---------------------------------------------------------------------------------------------

   /*
       method 10: ListIterator listIterator();
                        -> To return List iterator Cursor.*/
   
        ListIterator itr1=arrayList.listIterator();
        while(itr1.hasNext())
        {
            System.out.println(itr1.next());
        }
                        
    //-------------------------------------------------------------------------------------------- 
        
    /*method 11: boolean remove(Object o)
                ->to remove an object from the list.*/
        
       
        ArrayList arrayList2= new ArrayList();
        arrayList2.add(10);
        arrayList2.add("A");
        arrayList2.remove("A");
        System.out.println(arrayList2);
    
    
      /*method 12:boolean removeAll(Collection c)
            -> to remove all elements of Collection c*/
      
      arrayList2.removeAll(arrayList2);
      System.out.println("Full Deletion"+arrayList2);
        
        
     
     }
 
     
        
     
        
 
 
 
 }



class Student
{
    String name="vikas";
}