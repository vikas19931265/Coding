package com.integration.dao;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.integration.model.Employee;

@Repository
@Transactional
public class EmployeeDAO  extends AbstractEmployee implements Employees {


	@Override
	public void saveEmployee(Employee employee) {

		getSession().save(employee);

	}

	@Override
	public List<Employee> findEmployees() {

		CriteriaBuilder cb= getSession().getCriteriaBuilder();
		CriteriaQuery<Employee> cr=cb.createQuery(Employee.class);
		Root<Employee> root=cr.from(Employee.class);
		CriteriaQuery<Employee> select =cr.select(root);
		
		List<Employee> employees=getSession().createQuery(select).getResultList();
		
		return employees;
		
	}

	@Override
	public Employee findEmployeeBySSN(String ssn) {

		CriteriaBuilder cb= getSession().getCriteriaBuilder();
		CriteriaQuery<Employee> cr=cb.createQuery(Employee.class);
		Root<Employee> root=cr.from(Employee.class);
		CriteriaQuery<Employee> select =cr.select(root);
		
		Employee employee=getSession().createQuery(select.where(cb.equal(root.get("ssn"), ssn))).getSingleResult();
		return employee;
	}

	@Override
	public void deleteEmployeeBySSN(String ssn) {

		CriteriaBuilder cb= getSession().getCriteriaBuilder();
		CriteriaQuery<Employee> cr=cb.createQuery(Employee.class);
		Root<Employee> root=cr.from(Employee.class);
		CriteriaQuery<Employee> select =cr.select(root);
		
		Employee employee=getSession().createQuery(select.where(cb.equal(root.get("ssn"), ssn))).getSingleResult();
		getSession().delete(employee);
				 
	
	}

	@Override
	public void updateEmployee(Employee employee) {
		getSession().update(employee);

	}

}
