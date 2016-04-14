#pragma strict
var Temp : int;
var Black : tk2dSprite;

var Score : TextMesh;
var BonusS : TextMesh;
var TotalS : TextMesh;
var Skill : TextMesh;
var BonusK : TextMesh;
var TotalK : TextMesh;

function Start () 
{
	//EveryplayScript.StopRecording();
	//Kamcord.StopRecording();
	
	Score.text = PlayerPrefs.GetInt("Score").ToString();
	BonusS.text = PlayerPrefs.GetInt("BonusScore").ToString();
	TotalS.text = PlayerPrefs.GetInt("TotalScore").ToString();
	Skill.text = PlayerPrefs.GetInt("Skill").ToString();
	BonusK.text = PlayerPrefs.GetInt("BonusSkill").ToString();
	TotalK.text = PlayerPrefs.GetInt("TotalSkill").ToString();
	
	GPG.AddScoreHighscore(PlayerPrefs.GetInt("TotalScore"));
	GPG.AddLevelHighscore(PlayerPrefs.GetInt("Level"));
	GPG.AddKillsHighscore(PlayerPrefs.GetInt("TotalKills"));
}