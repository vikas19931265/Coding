package com.studentcrud.dao;


import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.query.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.studentcrud.entity.Student;

@Repository
@Transactional
public class StudentDAOImpl extends StudentDAOAbstract implements StudentDAO{

	
	@Override
	public void addStudent(Student student) {
		System.out.println("session value is " + getCurrentSession());
		getCurrentSession().save(student);
		
	}

	@Override
	public void deleteStudent(Student student) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Student searchStudent(int studentId) {
		
		CriteriaBuilder cb= getCurrentSession().getCriteriaBuilder();
		CriteriaQuery<Student> cr=	cb.createQuery(Student.class);
		Root<Student> root	=	cr.from(Student.class);
		CriteriaQuery<Student> select=	cr.select(root);
		
		/*Query<Student>  query=getCurrentSession().createQuery(cr);
		List<Student> students	=query.getResultList();*/
		
		CriteriaQuery<Student> crt=select.where(cb.equal(root.get("studentId"), studentId));
		Student student=getCurrentSession().createQuery(crt).getResultList().get(0);
								
		return student;
	}

	@Override
	public void updateStudent(Student student) {
		// TODO Auto-generated method stub
		
	}

}
