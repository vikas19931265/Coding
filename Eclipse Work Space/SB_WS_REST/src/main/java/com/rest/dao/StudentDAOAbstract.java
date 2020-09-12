package com.rest.dao;

import javax.annotation.PostConstruct;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import com.rest.entity.Student;

public abstract class StudentDAOAbstract {

	@Autowired
	SessionFactory sessionFactories;
	/*CriteriaBuilder cb;
	CriteriaQuery<Student> cr;
	Root<Student> root;
	CriteriaQuery<Student> select;*/
	

	public Session getSession() {
		return sessionFactories.getCurrentSession();
	}

	
	/*@PostConstruct
	public  void  setStudentCriteria() {  
	
		cb = getSession().getCriteriaBuilder();
		cr = cb.createQuery(Student.class);
		root = cr.from(Student.class);
		select = cr.select(root);
	
	}
	
	
	NOTE
	
	Do not open a session inside the post construct as by hibernate behaviour a session must be attached to
	a transaction to obtain a transaction synchronized session object.otherwise we will face this exception.
	
	i was trying to set the criteria details inside this abstract class to use it in my child class. But for that
	i needed to get the session object. Now note that this session is not attached to any transaction since its immediately
	called after the constructor and doesnot belong to any of trasaction functions and hence we will get the error.
	
	/*
	Could not obtain transaction-synchronized Session for current thread
	 
	*/


}
