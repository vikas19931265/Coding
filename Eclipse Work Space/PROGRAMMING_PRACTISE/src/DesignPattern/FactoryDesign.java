package DesignPattern;

class Student
{
	
	private Student()
	{
		System.out.println("private constructor");
	}
	
	public static Student getStudentInstance() {

		return  new Student();
	}
}


class Client
{
	public static void main(String[] args) {
		
		Student s1= Student.getStudentInstance();
		System.out.println(s1.hashCode());
		
		Student s2= Student.getStudentInstance();
		System.out.println(s2.hashCode());
	}
}

/*
 * private constructor
366712642
private constructor
1829164700

 */

