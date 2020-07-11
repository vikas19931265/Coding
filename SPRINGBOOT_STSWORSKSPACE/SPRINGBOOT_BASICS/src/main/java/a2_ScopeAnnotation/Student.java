package a2_ScopeAnnotation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("prototype")
public class Student {
	private int id;
	private String name;
	
	@Autowired
	private Address adddress;
	
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
