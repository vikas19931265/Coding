/*
Steps to work with criteria approach
========================================

1.get the session object
Session session = sf.openSession();


2.Create org.hibernate.Criteria object from the session object.

Criteria ct = session.createCriteria(Student.class);

3. Create org.hibernate.criterion.Criterion object per each condition.
	Criterion criterion = Restrictions.gt("sno", 1);//NO>1
	
NOTE: To create Criterion object we will go for Restrictions class methods.

4. Add the condition(criterion) to the Criteria object using add(-) method.
ct.add(criterion);//added the condition


NOTE:
We can't perform non select operations by using this approach.



*/



