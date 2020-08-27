package com.studentcrud.dao;

import com.studentcrud.entity.*;

public interface StudentDAO {

		public void addStudent(Student student);
		public void deleteStudent(Student student);
		public Student searchStudent(int studentId);
		public void updateStudent(Student student);

}
