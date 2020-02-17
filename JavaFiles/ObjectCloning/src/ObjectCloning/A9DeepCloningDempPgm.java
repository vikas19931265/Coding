package ObjectCloning;

// An Example Of Deep Cloning.


class Cat
{

	int i;
	
	Cat(int i)
	{
	   this.i=i;
	}

	
}


class Dog implements Cloneable
{
	Cat c;
		
	int j;

	Dog( Cat c , int j )
	{
		this.c=c;
		this.j=j;
	
	}


	public Object clone() throws CloneNotSupportedException
	{

		Cat c1= new Cat(c.i);

		Dog d2= new Dog(c1,j);

		return d2;
	

	}



}	



class ObjectCloning
{

  public static void main(String[] args) throws CloneNotSupportedException
	{

		Cat c = new Cat(	10);
		Dog d= new Dog(c,20);

		Dog d1= (Dog)d.clone();
	
	System.out.println("Before making any change in the cloned object");

		System.out.println("Original Object----->  " + d.j+ "  "+ d.c.i);

	System.out.println("Cloned Object------->   " + d1.j + "  "+ d1.c.i);

	/* I am now changing the content of the cloned object. This should not cause any change in the cat object which is held inside the Dog object of the original object.  */


System.out.println("After making a change in the cloned object");

	  d1.c.i=50;


		System.out.println("Original Object---->" + d.j+ "  "+ 		d.c.i);

		System.out.println("Cloned Object----->" + d1.j + "  "+ d1.c.i);



}


}	


/*

Output:

C:\Users\714049\JavaPrograms>java ObjectCloning
Before making any change in the cloned object
Original Object----->  20  10
Cloned Object------->   20  10
After making a change in the cloned object
Original Object---->20  10
Cloned Object----->20  50



*/