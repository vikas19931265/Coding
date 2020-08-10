package t1_Pgm_Annotation_Association_1toM_B;

import javax.persistence.CascadeType;  
import javax.persistence.Entity;  
import javax.persistence.GeneratedValue;  
import javax.persistence.GenerationType;  
import javax.persistence.Id;  
import javax.persistence.ManyToOne;
import javax.persistence.Table;  
  
@Entity  
@Table(name="TB_Employee")
public class Employee  
{  
    private Long id;  
    private String employeeName;  
    private Employer employer;  
      
    @Id  
    @GeneratedValue(strategy=GenerationType.AUTO)  
    public Long getId()  
    {  
        return id;  
    }  
    public void setId(Long id)  
    {  
        this.id = id;  
    }  
    public String getEmployeeName()  
    {  
        return employeeName;  
    }  
    public void setEmployeeName(String employeeName)  
    {  
        this.employeeName = employeeName;  
    }  
    @ManyToOne(cascade=CascadeType.ALL)  
    public Employer getEmployer()  
    {  
        return employer;  
    }  
    public void setEmployer(Employer employer)  
    {  
        this.employer = employer;  
    }  
}  