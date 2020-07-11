package InterfaceAndAbstractClass;

interface  Vehicle
{
	String model="";
	int modelNumber=0;
	
	void behaviour();
}


class Car implements Vehicle
{
	@Override
	public void behaviour() {
		this.model="maruti800";
		
		/*
		 * Note here we cannot change the value coming from interfaces in child class.
		 * 
		 */
		
	}
}

