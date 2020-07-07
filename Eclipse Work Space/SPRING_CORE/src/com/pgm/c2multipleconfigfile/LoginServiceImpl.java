package com.pgm.c2multipleconfigfile;

 class LoginServiceImpl implements LoginService {
	
	private LoginDAO loginDAO;
	
	public void setLoginDAO(LoginDAO loginDAO) {
		this.loginDAO = loginDAO;
	}

	@Override
	public void getLoginInfo() {
		System.out.println("Begin: getLoginInfo in service  called..");
		
		//contact dao to get login information
		//NOTE: dont write jdbc code here, we have to business logic
		
		loginDAO.getLoginDetailsFromDB();
		
		System.out.println("End: getLoginInfo in service  called..");
	}
}
