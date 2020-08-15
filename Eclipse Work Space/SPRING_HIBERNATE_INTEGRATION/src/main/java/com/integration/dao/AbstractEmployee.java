package com.integration.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

abstract class AbstractEmployee {

	@Autowired
	private SessionFactory sessionFactory;

	protected Session getSession()
	{
		return sessionFactory.getCurrentSession();
	}

}
