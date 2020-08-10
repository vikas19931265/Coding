package s9_Pgm_Annotation_Association_1toM_U;

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
