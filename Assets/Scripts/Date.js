#pragma strict

//var date : TextMesh;

function Start () 
{

	var dt = Date();
	var day = dt.Now.Day.ToString();
	var month = dt.Now.Month.ToString();
	var year = dt.Now.Year.ToString();
	
	if(PlayerPrefs.GetString("LastPlayed") == ""+month+day+year)
	{
		Debug.Log("You Played Today.");
	}
	else
	{
		PlayerPrefs.SetString("LastPlayed",""+month+day+year);
		Debug.Log("You Have Not Played Today.");
		PlayerPrefs.SetInt("FreeAds",5);
	}

}

function Update () 
{

}