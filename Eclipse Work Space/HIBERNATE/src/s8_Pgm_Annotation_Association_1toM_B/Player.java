package s8_Pgm_Annotation_Association_1toM_B;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="TB_PLAYER")
public class Player {

	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE , generator = "playergen")
	@SequenceGenerator(name = "playergen", sequenceName = "playergen", allocationSize = 1)
	private int playerId;
	private String playerName;
	
	@ManyToOne(cascade = CascadeType.ALL )
	
	/*
	 * many to one will cause creation of foreign key column in the parent table ( here parent is player)
	 * 
	 * 
	 */
	private Team team;

	public Team getTeam() {
		return team;
	}

	public void setTeam(Team team) {
		this.team = team;
	}

	public int getPlayerId() {
		return playerId;
	}

	public void setPlayerId(int playerId) {
		this.playerId = playerId;
	}

	public String getPlayerName() {
		return playerName;
	}

	public void setPlayerName(String playerName) {
		this.playerName = playerName;
	}

}
