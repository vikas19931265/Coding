package Pracitse;

import java.util.ArrayList;
import java.util.List;

public class ListIterate {

	public static void main(String[] args) {
		
		Student student1= new Student("vikas");
		Student student2 = new Student("amit");
		List<Student> students = new ArrayList<>();
		students.add(student1);
		students.add(student2);
		System.out.println("testing");
		for(Student student : students)
		{
			System.out.println(student.getStudentName());
		}
	}
	
}


class Student
{
	private String studentName;

	public Student(String studentName) {
	this.studentName=studentName;
	
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	
	
	
	
}
