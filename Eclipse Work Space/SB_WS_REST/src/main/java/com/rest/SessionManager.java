package com.rest;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.rest.entity.Address;
import com.rest.entity.Student;

@Component

public class SessionManager {

	@Autowired
	SessionFactory sessionFactory;

	/*
	 * sessionFactory will produce a session object. we can get the seesion object using getCurrentSession().
	 * Once the session is closed its removed and another session object can be fetched.
	 * 
	 */
	
	@Transactional
	
	/*
	 * Transaction applied at method level or class level. In whichever method trasanction annotation is applied we will be using
	 * session. Here due to the annotation session management is done by the spring boot. We have just autowired
	 * the sessionFactory object using which we will get the session object.
	 * 
	 * Here spring boot will automatically open the session and then also close the session. we dont have to do 
	 * that explicitly however once the session is closed automatically by the spring boot if we are trying to
	 * perform any operations on top of it then we will be getting the exception.
	 * 
	 * 
	 * 
	 */
	public Session operate() {

		System.out.println("sessionFactory object is " + sessionFactory); 

		System.out.println("current session is " + sessionFactory.getCurrentSession());
		
		// current session in work
		System.out.println("I am currently using session " + sessionFactory.getCurrentSession());
		//I am currently using session SessionImpl(2145834652<open>)

		Student student = new Student();
		student.setName("Ram Kewal");
		student.setPhoneNumber("7092198142");
		student.setDepartment("Army");

		List<Address> addresses = new ArrayList();

		Address address = new Address();
		address.setAddressLine1("Bahadur Nagar");
		address.setAddressLine2("Mahrajganj");
		address.setAddressLine3("Raebareli");
		address.setCity("RaeBareli");
		address.setState("Uttar Pradesh");
		address.setZipCode("229306");

		// lets open another session from the session factory
		
		Session newSession=sessionFactory.getCurrentSession();
		System.out.println("new session is " + newSession); //new session is SessionImpl(1105489863<open>)
		
		/*
		 * Please note that this session is still open until we are manually closing the session.
		 * 
		 */
		addresses.add(address);
		student.setAddress(addresses);
		sessionFactory.getCurrentSession().save(student);
		
		/*
		 * The current session automatically gets closed at the end of the function call. We dont have to
		 * explicitly close the session. But all the other sessions created within the function will not be
		 * closed automatically. 
		 * 
		 * 
		 * 
		 */
		
		
		System.out.println("Student is added successfully");
		return newSession;
	}
	
	

}