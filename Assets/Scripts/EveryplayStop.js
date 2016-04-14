#pragma strict

var Top : TextMesh;
var Bot : TextMesh;

// Use this for initialization
function Start () 
{
	Top.text = ResultsLanguage.thisLanguageManager.GetTextValue ("Results.EveryTop");
	Bot.text = ResultsLanguage.thisLanguageManager.GetTextValue ("Results.EveryBot");
}

// Update is called once per frame
function Update () 
{
	var ray = Camera.main.ScreenPointToRay (AspectUtilityEnhanced.mousePosition);
	var hit : RaycastHit;

	if (GetComponent.<Collider>().Raycast (ray, hit, 100)) 
	{
		if(Input.GetButtonDown("Fire1"))
		{
			Debug.Log("Run");
			PlayerPrefs.SetInt("Diamonds", 5.0 + PlayerPrefs.GetInt("Diamonds"));
			PlayerPrefs.SetInt("TotalDiamonds", 5.0 + PlayerPrefs.GetInt("TotalDiamonds"));
			//EveryplayScript.Share();
			//Kamcord.ShowView();
		}
	}
}

