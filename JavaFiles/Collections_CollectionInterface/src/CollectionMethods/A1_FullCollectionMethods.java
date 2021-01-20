/* Methods present in the Collection interface.
    


     1. boolean add( Object o)
     2. boolean addAll(Collection c)
     3. boolean remove(Object o) 
     4. boolean removeAll(Collection c)
     5. boolean retainAll(Collection c)--> to remove all Objects except those present in c
     6. void clear();
     7. boolean contains(Object o)
     8. boolean containsAll(Collection c)
     9. boolean isEmpty();
     10.int Size();
     11.Object[] toArray();
     12.Iterator iterator();
     13.boolean equals( Object 0);
     14.int hashcode();


*/
package CollectionMethods;

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
                   -> {is used to insert an element in this collection.}
                    Adding Heterogenous elements to ArrayList*/
         
         arrayList.add("vikas");
         arrayList.add(10);
         arrayList.add(20);
         arrayList.add(s);
         System.out.println(arrayList);//[vikas, 10, null, ArrayList.Student@1dd46]
  
         
    
 
       //----------------------------------------------------------------------- 
 
        /* method 2:boolean addAll(Collection c)
                      ->This will add the elements at the end of ArrayList in the order they come.
       
         [note]: if we use add() here for collection addition instead of addAll method then the 
                 elements will just be appended but not added.*/
       
        
        LinkedList t = new LinkedList();
        t.add(10);
        t.add(20);
        arrayList.addAll(t);// addedd linked list collection.
        System.out.println("array"+arrayList);
        Iterator itr=arrayList.iterator();
        while(itr.hasNext())
        {
            
            System.out.print(itr.next());   }              /*gautam
                                                             vikas
                                                              10
                                                              null
                                                           ArrayList.Student@6b7920
                                                            10,20*/
            
                                            
       //----------------------------------------------------------------------- 
       /* method 3:  Object[] toArray()
                -> This will convert the arrayList into an array. This will be useful as an  
                   array always provides better performance then the arrayList.*/
      
           Object[] array1= arrayList.toArray();// converting arrayList to array
           
           for(Object a: array1)
           {    int i=0;
               
                    System.out.println(a); /*gautam
                                                        vikas
                                                        10
                                                        20
                                                        ArrayList.Student@1dd46f7
                                                        10, 20
                                                        vikas */
                       
                i++;       
           }
                
            
      /*
      doubt while working..     
           
     Object a: array1, here a reference is pointing to array. In this the first element
     to be displayed is of String type. Since toString method is overridden in String class
     we get the actual string result and not the reference.
           
     We don't need to typecast this to anything as we are just printing the values
     and reference. If we have to perform some kind of operation on the String/Student type
     of object then we have to typecast the Object type reference to String type or student type.      
      
           
     //----------------------------------------------------------------------------------------------------------
     
     
     
    /* method 4: Object clone()
                    ->It is used to return a shallow copy of an ArrayList. */
       
      Object o  =arrayList.clone();
      System.out.println(((ArrayList) o).get(0));//typecasted object to ArrayList type as Object reference cant be used 
                                                // to get the element at the specified position.
     
     
                                                
     //-------------------------------------------------------------------------------------------
     
     
                        
        
    /*method 5: boolean remove(Object o)
                ->to remove an object from the list.*/
        
       
        ArrayList arrayList2= new ArrayList();
        arrayList2.add(10);
        arrayList2.add("A");
        arrayList2.remove("A");
        System.out.println(arrayList2);
    
    
      /*method 6:boolean removeAll(Collection c)
            -> to remove all elements of Collection c*/
      
      arrayList2.removeAll(arrayList2);
      System.out.println("Full Deletion"+arrayList2);
        
      
      
      /* method 7: public boolean retainAll(Collection c)
                    is used to delete all the elements of invoking collection 
                    except the specified collection.
         This method will delete all the elements from the list except the elements which are
         also present inside the collection c.
      
      Example ArrayList1( 1, 2,3 )...ArrayList2(1)
      
      Here if we call retainAll method on ArrayList1 then all elements will be deleted except 1
      which is also present in the ArrayList2.*/
      
      
      ArrayList array3 = new ArrayList();
      array3.add(1);
      LinkedList l3= new LinkedList();
      l3.add(1);
      l3.add(2);
      l3.add(3);
      array3.add(l3);
      System.out.println(array3);//[1, [1, 2, 3]]
      array3.retainAll(l3);
      System.out.println("After retaining"+array3);//After retaining[1]
      
     /*
      method 8: public boolean contains(Object element
                ->is used to search an element.*/
      
      System.out.println(arrayList.contains(1));//true
      
     
      
     /*
     method 9: public boolean containsAll(Collection c)\
               >is used to search the specified collection in this collection.
      
      Result will be true if the list contains elements present exactly same in another
      list or else false.
      
      If we want to just compare the elements whether they are present or not then use contains() method.
      
      */
     
      
     
      ArrayList array4= new ArrayList();
      array4.add(1);
      array3.add(array4);
      System.out.println(array3);
      System.out.println(array3.containsAll(array4));//true
      
       /*
        method 10: public boolean isEmpty()
                   ->This will check if the collection is empty or not.*/
      
      
        System.out.println(array3.isEmpty());// false as the arrayList is not empty.
     
        
       /*
        
       method 11: public int size();
                   -> This will return the size of the list.*/
        
       System.out.println(array3.size());//2
       
        /*
       
       method 12: public Iterator iterator()
                   ->This will return an iterator object.  */
        
       ArrayList array6= new ArrayList();
       array6.add(new Student());
       array6.add(new Student());
       Iterator itrs= array6.iterator();
       while(itrs.hasNext())
        {
        System.out.println(itrs.next());
        }
       
       
       /*
       method 13: public boolean equals(Object element)
       */
    
        ArrayList array7= new ArrayList();
        array7.add(1);
        ArrayList array8= new ArrayList();
        array8.add(1);
     
       System.out.println(array7.equals(array8));// true.
     
     
       /*
       method: 14 int hashcode();-> return hashcode*/
       
       System.out.println(array3.hashCode());//1024
       
      
       /*method: 15
            void clear();
                >This will delete all the elements of the ArrayList.*/
       
       array3.clear();
       System.out.println(array3);
       
       
       
     
     }
}   
     
       
   class Student1
{
    String name="vikas";
}


/*
run:
[vikas, 10, 20, Collections_Class.Student@6bc7c054]
array[vikas, 10, 20, Collections_Class.Student@6bc7c054, 10, 20]
vikas1020Collections_Class.Student@6bc7c0541020vikas
10
20
Collections_Class.Student@6bc7c054
10
20
vikas
[10]
Full Deletion[]
[1, [1, 2, 3]]
After retaining[1]
false
[1, [1]]
true
false
2
Collections_Class.Student@232204a1
Collections_Class.Student@4aa298b7
true
1024
[]
BUILD SUCCESSFUL (total time: 1 second)


*/

//---------------------------------------------------------------------**************************---------------------------------