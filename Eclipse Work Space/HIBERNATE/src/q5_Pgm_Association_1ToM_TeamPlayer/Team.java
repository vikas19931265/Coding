package q5_Pgm_Association_1ToM_TeamPlayer;

import java.util.Set;

public class Team {

	private int teamId;
	private String teamName;
	private Set<Players> players;

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

	public Set<Players> getPlayers() {
		return players;
	}

	public void setPlayers(Set<Players> players) {
		this.players = players;
	}

}
