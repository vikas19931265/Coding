package s4_Annotation_Inheritance_TablePerSubClass;

import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;

@Entity
@PrimaryKeyJoinColumn
public class SeniorStudent extends Student{

private String stream;

public String getStream() {
	return stream;
}

public void setStream(String stream) {
	this.stream = stream;
}


}
