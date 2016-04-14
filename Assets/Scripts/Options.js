#pragma strict

var Ting : AudioClip;

private var Sound : int;
private var SocialB : GameObject;
private var LeaderB : GameObject;
private var SoundB : GameObject;
private var AchievB : GameObject;
private var OptionB : GameObject;
private var CreditB : GameObject;
private var ResetB : GameObject;
private var FreeDia : GameObject;
private var UpgradB : GameObject;
private var BackB : GameObject;
private var SocialBox : GameObject;
private var EraseBack : GameObject;
private var Logo : GameObject;
private var OLogo : GameObject;
private var BlueN : GameObject;
private var GreyN : GameObject;
private var Games : GameObject;

SocialB = GameObject.Find("SocialButton");
LeaderB = GameObject.Find("Leaderboard");
SoundB = GameObject.Find("Music");
AchievB = GameObject.Find("Achievements");
OptionB = GameObject.Find("Options");
CreditB = GameObject.Find("CreditsBut");
ResetB = GameObject.Find("ResetBut");
FreeDia = GameObject.Find("FreeDiamond");
UpgradB = GameObject.Find("Upgrades");
BackB = GameObject.Find("OptionsBack");
SocialBox = GameObject.Find("SocialBox");
EraseBack = GameObject.Find("ResetBack");
Logo = GameObject.Find("Logo");
OLogo = GameObject.Find("OptionLogo");
BlueN = GameObject.Find("NinjaBlue");
GreyN = GameObject.Find("NinjaGrey");
Games = GameObject.Find("MoreGames"); 

function Start()
{
	Sound = PlayerPrefs.GetInt("Sound");
}

function Update()
{
	var ray = Camera.main.ScreenPointToRay (AspectUtilityEnhanced.mousePosition);
    var hit : RaycastHit;
    
    if (GetComponent.<Collider>().Raycast (ray, hit, 100)) 
    {
    	if(Input.GetButtonDown("Fire1") || Input.GetKeyDown("escape") || Input.GetKeyDown(KeyCode.Menu))
       	{
       		if(!Variables.Pause)
       		{
	       		if(Sound)
	       		{
	       			AudioSource.PlayClipAtPoint(Ting, Camera.main.transform.position);
	       		}  
	       		if(!Variables.OptionO)
	       		{
	       			StartCoroutine("Open");   
	       		}  	
	       		if(Variables.OptionO)
	       		{
	       			StartCoroutine("Close");
	       		}
       		}	
       	}
    }
}

function Open() 
{
	yield WaitForSeconds(0.2);
	Variables.OptionO = true;
	OLogo.GetComponent.<Animation>().Play("OptionLogoIn");
	Logo.GetComponent.<Animation>().Play("LogoOut");
	
	SocialB.GetComponent.<Animation>().Play("SocialIn");
	LeaderB.GetComponent.<Animation>().Play("LeaderOut");
	
	SoundB.GetComponent.<Animation>().Play("SoundIn");
	AchievB.GetComponent.<Animation>().Play("AchieveOut");
	
	CreditB.GetComponent.<Animation>().Play("CreditsIn");
	OptionB.GetComponent.<Animation>().Play("OptionsOut");
	
	ResetB.GetComponent.<Animation>().Play("ResetIn");
	if(FreeDia)
	{
		FreeDia.GetComponent.<Animation>().Play("ResetOut");
	}
	Games.GetComponent.<Animation>().Play("GamesOut");
	
	BlueN.GetComponent.<Animation>().Play("BlueUp");
	GreyN.GetComponent.<Animation>().Play("GreyDown");
	
	BackB.GetComponent.<Animation>().Play("BackIn");
	UpgradB.GetComponent.<Animation>().Play("UpgradesOut");
}

function Close() 
{
	yield WaitForSeconds(0.2);
	Variables.OptionO = false;
	OLogo.GetComponent.<Animation>().Play("OptionLogoOut");
	Logo.GetComponent.<Animation>().Play("LogoIn");
	
	SocialB.GetComponent.<Animation>().Play("SocialOut");
	LeaderB.GetComponent.<Animation>().Play("LeaderIn");
	
	SoundB.GetComponent.<Animation>().Play("SoundOut");
	AchievB.GetComponent.<Animation>().Play("AchieveIn");
	
	CreditB.GetComponent.<Animation>().Play("CreditsOut");
	OptionB.GetComponent.<Animation>().Play("OptionsIn");
	
	ResetB.GetComponent.<Animation>().Play("ResetOut");
	if(FreeDia)
	{
		FreeDia.GetComponent.<Animation>().Play("ResetIn");
	}
	Games.GetComponent.<Animation>().Play("GamesIn");
	
	BlueN.GetComponent.<Animation>().Play("BlueDown");
	GreyN.GetComponent.<Animation>().Play("GreyUp");
	
	BackB.GetComponent.<Animation>().Play("BackOut");
	UpgradB.GetComponent.<Animation>().Play("UpgradesIn");
	if(Variables.SocialBo)
	{
		Variables.SocialBo = false;
		SocialBox.GetComponent.<Animation>().Play("SocialBoxOut");
	}
	if(Variables.ResetOp)
	{
		Variables.ResetOp = false;
		EraseBack.GetComponent.<Animation>().Play("SocialBoxOut");
	}
	
}