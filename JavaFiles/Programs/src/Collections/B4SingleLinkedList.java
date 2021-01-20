
package Programs;
import java.util.*;

class Node
{
	public int data;
	public Node next;
	
	public void displayNodeDate()
	{
	  System.out.println(data+ " " + next);
	}
}

class B4SingleLinkedList
{
	static Node header;
	public void addElement(int element)
	{
	   Node n = new Node();
	   n.data=element;  
           n.next=header;
	   header=n;  		

	}

        public void displayElements()
        {
            System.out.println("Traversing elements");
            Node current=header;
            while(current!=null)
            {
                current.displayNodeDate();
                current=current.next;
            }
        }

}

class Driver
{
  public static void main(String[] args)
  {
   B4SingleLinkedList l = new  B4SingleLinkedList();
   l.addElement(1);
   l.addElement(4); 
   l.addElement(7);
   
   l.displayElements();
   System.out.println(l);
  }
}

/*
run:
Traversing elements
7 Programs.Node@15db9742
4 Programs.Node@6d06d69c
1 null
Programs.SingleLinkedList@7852e922
BUILD SUCCESSFUL (total time: 0 seconds)

*/