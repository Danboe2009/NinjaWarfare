#pragma strict

var CoinText : TextMesh;
var DiamText : TextMesh;



function Start () 
{
	Variables.Diamo = PlayerPrefs.GetInt("Diamonds");
}

function Update () 
{
	CoinText.text = GameLanguage.thisLanguageManager.GetTextValue("Game.Coins") + " " + Variables.Coins.ToString("f0");
	DiamText.text = GameLanguage.thisLanguageManager.GetTextValue("Game.Diamonds") + " " + Variables.Diamo.ToString("f0");
}