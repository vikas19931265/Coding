package com.rest.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.hibernate.query.Query;
import org.springframework.stereotype.Repository;

import com.rest.entity.Address;
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

	@Override
	public void createStudent(Student student) {
		
	List<Address> addresses=student.getAddress();
	List<Address> updatedAddress= new ArrayList();
	student.setAddress(updatedAddress);
	for(Address address: addresses)
	{
		String addressLine1=address.getAddressLine1();
		String addressLine2= address.getAddressLine2();
		String addressLine3= address.getAddressLine3();
		String state= address.getState();
		String city=address.getCity();
		String zipcode=address.getZipCode();
		
		// hit the database and check if this combination of address exist or not.
		
		CriteriaBuilder cb= getSession().getCriteriaBuilder();
		CriteriaQuery<Address> cr= cb.createQuery(Address.class);
		Root<Address> root= cr.from(Address.class);
		CriteriaQuery<Address> select = cr.select(root);
		
		Predicate[] predicate = new Predicate[6];
		predicate[0]=cb.equal(root.get("addressLine1"),addressLine1);
		predicate[1]=cb.equal(root.get("addressLine2"),addressLine2);
		predicate[2]=cb.equal(root.get("addressLine3"),addressLine3);
		predicate[3]=cb.equal(root.get("state"),state);
		predicate[4]=cb.equal(root.get("city"),city);
		predicate[5]=cb.equal(root.get("zipCode"),zipcode);
		
		int size=getSession().createQuery(select.where(predicate)).getResultList().size();
		if(size>0)
		{
			Address address1=getSession().createQuery(select.where(predicate)).getResultList().get(0);
			updatedAddress.add(address1);
		}
		else
		{
			updatedAddress.add(address);
		}
		
		
	}
		
		getSession().save(student);
	}

	
	

}
