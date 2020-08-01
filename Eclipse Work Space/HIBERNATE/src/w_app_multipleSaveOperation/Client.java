package w_app_multipleSaveOperation;

import java.util.Scanner;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class Client {

	public static void main(String[] args) {
		
		Configuration configuration= new Configuration();
		configuration.configure("w_app_multipleSaveOperation/hibernate.cfg.xml");
		SessionFactory sessionF=configuration.buildSessionFactory();
		Session session=sessionF.openSession();
		Transaction transaction= session.beginTransaction();
		
		System.out.println("RECORDS ENTRY");
		System.out.println("=========================");

		while(true)
		{
		System.out.println("Enter name:");
		Scanner cn = new Scanner(System.in);
		String name= cn.nextLine();
		System.out.println("Enter Designation:");
		String designation= cn.nextLine();
		System.out.println("Enter Salary");
		int salary= cn.nextInt();
		Employee emp= new Employee();
		emp.setEmployeeName(name);
		emp.setEmployeeDesignation(designation);
		emp.setEmployeeSalary(salary);
		session.save(emp);
		System.out.println("Do you want to continue...press y for yes and n for no");
		Scanner cn1 = new Scanner(System.in);
		String option= cn1.nextLine();
		if(!option.equalsIgnoreCase("y"))
		{
			break;
		}
		}
		transaction.commit(); // this line is repsonsible for moving all records from session to the database.

		System.out.println("Record is successfully inserted");
		session.close();
		
				
	}
}
