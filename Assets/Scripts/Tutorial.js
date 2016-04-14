#pragma strict

var Cube : GameObject;
var BSprite : tk2dSprite;
var SSprite : tk2dSprite;
var WSprite : tk2dSprite;
var PBASprite : tk2dSprite;
var NBASprite : tk2dSprite;
var WWords : TextMesh;
var OniG : GameObject;
var time : float;

static var Left : boolean;
static var Right : boolean;
static var Ninja : boolean;

private var Level : int;
private var Played : boolean;
private var TLeft : boolean;
private var TRight : boolean;
private var TNinja : boolean;
private var NArrow : GameObject;
private var PArrow : GameObject;
private var Coin : GameObject;
private var Back : GameObject;

Back = GameObject.Find("Back");
NArrow = GameObject.Find("NBlueArrow");
PArrow = GameObject.Find("PBlueArrow");

function Start () 
{
	Level = PlayerPrefs.GetInt("Level");
	if(PlayerPrefs.GetInt("Tutorial") == 0)
	{
		if(Level != 1)
		{
			BSprite.color = Color(1,1,1,0);
			SSprite.color = Color(1,1,1,0);
			WSprite.color = Color(1,1,1,0);
			PBASprite.color = Color(1,1,1,0);
			NBASprite.color = Color(1,1,1,0);
			WWords.text = "";
			Variables.Movement = false;
			//Variables.Pause = true;
		}
	}
	if(PlayerPrefs.GetInt("Tutorial") == 1)
	{
		BSprite.color = Color(1,1,1,0);
		SSprite.color = Color(1,1,1,0);
		WSprite.color = Color(1,1,1,0);
		PBASprite.color = Color(1,1,1,0);
		NBASprite.color = Color(1,1,1,0);
		WWords.text = "";
		Variables.Movement = false;
		Variables.Tutorial = false;
	}
}

function Update () 
{
	if(Level == 1)
	{
		if(Variables.TPause && !Played && PlayerPrefs.GetInt("Tutorial") == 0)
		{
			TutorialLevel();
			Played = true;
		}
	}
	if(!TLeft || !TRight)
	{
		TLeft = Left;
		TRight = Right;
	}
	if(!TNinja)
	{
		TNinja = Ninja;
	}
}

function FadeOut (time : float) 
{
	var originalTime :float= time;
	while (time >= 0.0)
	{
	    time -= Time.deltaTime;
	    BSprite.color = Color.Lerp(Color(1,1,1,0), Color(1,1,1,1), time/originalTime);
	    SSprite.color = Color.Lerp(Color(1,1,1,0), Color(1,1,1,1), time/originalTime);
	    WSprite.color = Color.Lerp(Color(1,1,1,0), Color(1,1,1,1), time/originalTime);
	    WWords.text = "";
	    yield;
	}
	Variables.Pause = false;
}

function TutorialLevel()
{
	Variables.Tutorial = true;
	Variables.Movement = true;
	PBASprite.color = Color(1,1,1,0);
	NBASprite.color = Color(1,1,1,0);
	Back.transform.position = Vector3(Cube.transform.position.x,Cube.transform.position.y + 7,Cube.transform.position.z + 40);
	WWords.text = GameLanguage.thisLanguageManager.GetTextValue("Game.Tutorial11") + "\n" + GameLanguage.thisLanguageManager.GetTextValue("Game.Tutorial12") + "\n" + GameLanguage.thisLanguageManager.GetTextValue("Game.Tutorial13");
	yield WaitForSeconds(5);
	yield WaitForSeconds(1);
	WWords.text = GameLanguage.thisLanguageManager.GetTextValue("Game.Tutorial21") + "\n" + GameLanguage.thisLanguageManager.GetTextValue("Game.Tutorial22") + "\n" + GameLanguage.thisLanguageManager.GetTextValue("Game.Tutorial23");
	Variables.Movement = false;
	while(!TLeft || !TRight)
	{
		yield WaitForSeconds(0.1);
	}
	yield WaitForSeconds(1);
	Cube.transform.position.x = -32;
	Back.transform.position = Vector3(Cube.transform.position.x + 12,Cube.transform.position.y + 7,Cube.transform.position.z + 40);
	Variables.Movement = true;
	PBASprite.color = Color(1,1,1,1);
	WWords.text = GameLanguage.thisLanguageManager.GetTextValue("Game.Tutorial31") + "\n" + GameLanguage.thisLanguageManager.GetTextValue("Game.Tutorial32") + "\n" + GameLanguage.thisLanguageManager.GetTextValue("Game.Tutorial33");
	yield WaitForSeconds(5);
	PBASprite.color = Color(1,1,1,0);
	yield WaitForSeconds(1);
	NBASprite.color = Color(1,1,1,1);
	WWords.text = GameLanguage.thisLanguageManager.GetTextValue("Game.Tutorial41") + "\n" + GameLanguage.thisLanguageManager.GetTextValue("Game.Tutorial42") + "\n" + GameLanguage.thisLanguageManager.GetTextValue("Game.Tutorial43");
	Variables.Coins = 25;
	while(!TNinja)
	{
		yield WaitForSeconds(0.1);
	}
	Back.transform.position = Vector3(Cube.transform.position.x,Cube.transform.position.y + 7,Cube.transform.position.z + 50);
	var Temp1 = new Instantiate(OniG,Vector3(6,2,-4),Quaternion.Euler(90,0,0));
	Temp1.name = "OniT"; 
	Temp1.GetComponent(Oni).Num = 99;
	NBASprite.color = Color(1,1,1,0);
	
	while(GameObject.Find("OniT"))
	{
		yield WaitForSeconds(0.1);
	}
	
	var Swo = GameObject.Find("Sword");
	Destroy(Swo,0);
	Coin = GameObject.FindGameObjectWithTag("Coin");
	NBASprite.color = Color(1,1,1,1);
	NArrow.transform.position.x = Coin.transform.position.x;
	NArrow.transform.position.z = Coin.transform.position.z + 5;
	WWords.text = GameLanguage.thisLanguageManager.GetTextValue("Game.Tutorial51") + "\n" + GameLanguage.thisLanguageManager.GetTextValue("Game.Tutorial52") + "\n" + GameLanguage.thisLanguageManager.GetTextValue("Game.Tutorial53");
	
	while(Coin)
	{
		yield WaitForSeconds(0.1);
	}
	NBASprite.color = Color(1,1,1,0);
	yield WaitForSeconds(2);
	WWords.text = GameLanguage.thisLanguageManager.GetTextValue("Game.Tutorial61") + "\n" + GameLanguage.thisLanguageManager.GetTextValue("Game.Tutorial62");
	Cube.transform.position.x = 32;
	PBASprite.color = Color(1,1,1,1);
	PArrow.transform.position.x = 40;
	yield WaitForSeconds(5);
	PBASprite.color = Color(1,1,1,0);
	WWords.text = GameLanguage.thisLanguageManager.GetTextValue("Game.Tutorial71") + "\n" + GameLanguage.thisLanguageManager.GetTextValue("Game.Tutorial72") + "\n" + GameLanguage.thisLanguageManager.GetTextValue("Game.Tutorial73");
	NBASprite.color = Color(1,1,1,1);
	NBASprite.scale = Vector3(-1.0,1.0,1.0);
	NArrow.transform.position = Vector3(5.0,6.0,11.0);
	yield WaitForSeconds(5);
	Cube.transform.position.x = -32;
	WWords.text = GameLanguage.thisLanguageManager.GetTextValue("Game.Tutorial81") + "\n" + GameLanguage.thisLanguageManager.GetTextValue("Game.Tutorial82") + "\n" + GameLanguage.thisLanguageManager.GetTextValue("Game.Tutorial83");
	NBASprite.scale = Vector3(1.0,1.0,1.0);
	NArrow.transform.position = Vector3(-51.5,6.0,-7.0);
	yield WaitForSeconds(5);
	NBASprite.color = Color(1,1,1,0);
	WWords.text = GameLanguage.thisLanguageManager.GetTextValue("Game.Tutorial91") + "\n" + GameLanguage.thisLanguageManager.GetTextValue("Game.Tutorial92");
	Variables.Diamo = Variables.Diamo + 1;
	PlayerPrefs.SetInt("Diamonds",PlayerPrefs.GetInt("Diamonds") + 1);
	PlayerPrefs.SetInt("Tutorial",1);
	yield WaitForSeconds(5);
	Variables.Tutorial = false;
	Variables.Movement = false;
	StartCoroutine(FadeOut(time));
}
