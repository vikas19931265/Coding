package com.rest.dao;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.query.Query;
import org.springframework.context.annotation.DependsOn;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.rest.entity.Student;

@Repository
public class StudentDAOImpl extends StudentDAOAbstract implements StudentDAO {
	public StudentDAOImpl() {

		/*
		 * Note
		 * ======
		 * 
		 * Autowiring of the objects will happen after the constructor call only.
		 * 
		 */
		
		System.out.println("session factory value is " + sessionFactories);

	}

	@Override
	public List<Student> displayStudents() {

		System.out.println("display students session is " + getSession());
		CriteriaBuilder cb = getSession().getCriteriaBuilder();
		CriteriaQuery<Student> cr = cb.createQuery(Student.class);
		Root<Student> root = cr.from(Student.class);
		CriteriaQuery<Student> select = cr.select(root);

		Query<Student> studentsList = getSession().createQuery(select);
		List<Student> students = studentsList.getResultList();
		
		return students;

	}

	@Override
	public Student getStudent(int studentId) {
		System.out.println("display students session is " + getSession());
		CriteriaBuilder cb = getSession().getCriteriaBuilder();
		CriteriaQuery<Student> cr = cb.createQuery(Student.class);
		Root<Student> root = cr.from(Student.class);
		CriteriaQuery<Student> select = cr.select(root);
		return getSession().createQuery(select.where(cb.equal(root.get("studentId"), studentId))).getResultList().get(0);

	}

}
