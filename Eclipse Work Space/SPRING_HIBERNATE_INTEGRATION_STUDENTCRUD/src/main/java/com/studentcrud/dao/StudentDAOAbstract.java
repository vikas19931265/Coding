package com.studentcrud.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

abstract class StudentDAOAbstract {

	@Autowired
	SessionFactory sessionFactory;
	
	public Session getCurrentSession()
	{
		return sessionFactory.getCurrentSession();
	}


}
