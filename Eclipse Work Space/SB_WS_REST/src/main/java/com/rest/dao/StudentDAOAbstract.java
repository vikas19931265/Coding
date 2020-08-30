package com.rest.dao;

import javax.annotation.PostConstruct;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import com.rest.entity.Student;

public abstract class StudentDAOAbstract {

	@Autowired
	SessionFactory sessionFactories;
	CriteriaBuilder cb;
	CriteriaQuery<Student> cr;
	Root<Student> root;
	CriteriaQuery<Student> select;
	

	public Session getSession() {
	   System.out.println(sessionFactories.getCurrentSession());
		return sessionFactories.getCurrentSession();
	}

	
	@PostConstruct
	@Transactional
	public  void  setStudentCriteria() {
	
		cb = getSession().getCriteriaBuilder();
		cr = cb.createQuery(Student.class);
		root = cr.from(Student.class);
		select = cr.select(root);
	
	}




}
