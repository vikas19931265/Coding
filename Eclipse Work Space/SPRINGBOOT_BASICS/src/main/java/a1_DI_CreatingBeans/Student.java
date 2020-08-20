package a1_DI_CreatingBeans;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
/*
 * In order to allow bean creation of this class which can be detected by the spring
 * container it is mandatory to give it annotation @Component.
 * 
 * similary we need to give annotation in address class as well.
 */
public class Student {
	private int id;
	private String name;
	
	@Autowired
	private Address adddress;
	
	/*
	 * We want to create object of address and insert in to the student class and 
	 * therefore we are giving autowired.
	 * 
	 * since we already gave @component in address therefore new object of address is
	 * already created but to connect it to student we are going to use autowired.
	 * 
	 * Here the autowiring concept is working by type..therefore spring container is searching
	 * for any object of address and inserting it..
	 * 
	 * 
	 */

	public Address getAdddress() {
		return adddress;
	}

	public void setAdddress(Address adddress) {
		this.adddress = adddress;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
