package s8_Pgm_Annotation_Association_1toM_B;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="TB_TEAM")
public class Team {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE , generator = "teamgen")
	@SequenceGenerator(name = "teamgen", sequenceName = "teamgen", allocationSize = 1)
	private int teamId;
	private String teamName;

	@OneToMany(cascade = CascadeType.ALL , mappedBy = "team"  )
	/*
	 * The mappedBy property is what we use to tell Hibernate which variable we are using
	 * to represent the parent class in our child class. Otherwise it may create a reference
	 * both side in parent as well as child. We want to basically have the reference in child class only.
	 * 
	 * In one to many (U) additional table will be created maintaining relationship. And @ManyToOne also 
	 * causes relationship to build. So in order to keep only one relationship maintained by the parent reference
	 * in the child table we go for the mapped by.
	 * 
	 */
	private Set<Player> players;
	public Set<Player> getPlayers() {
		return players;
	}

	public void setPlayers(Set<Player> players) {
		this.players = players;
	}

	public int getTeamId() {
		return teamId;
	}

	public void setTeamId(int teamId) {
		this.teamId = teamId;
	}

	public String getTeamName() {
		return teamName;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}

}
