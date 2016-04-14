#pragma strict

var Mode : String;
var Ting : AudioClip;

function Start () 
{

}

function Update () 
{
	var ray = Camera.main.ScreenPointToRay (AspectUtilityEnhanced.mousePosition);
    var hit : RaycastHit;
    
    if (GetComponent.<Collider>().Raycast (ray, hit, 100)) 
    {
    	if(Input.GetButtonDown("Fire1") && !Variables.Pause)
       	{
       		if(PlayerPrefs.GetInt("Sound") == 1)
       		{
       			AudioSource.PlayClipAtPoint(Ting, Camera.main.transform.position);
       		}
       		if(Mode == "Achievements")
       		{
       			GPG.LoadAchievements();
       		}
       		if(Mode == "Highscores")
       		{
       			GPG.LoadHighscores();
       		}
       	}
    }

}