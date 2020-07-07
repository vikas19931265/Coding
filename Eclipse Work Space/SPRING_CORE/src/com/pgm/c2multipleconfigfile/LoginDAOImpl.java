package com.pgm.c2multipleconfigfile;

import javax.sql.DataSource;


 class LoginDAOImpl implements LoginDAO {
	

	@Override
	public void getLoginDetailsFromDB() {
		//really we are connecting database
		//write jdbc code to connect the database
		System.out.println("getLoginDetailsFromDB");
	}
}
