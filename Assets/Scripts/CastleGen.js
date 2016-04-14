#pragma strict

var PinkBar : LineRenderer;
var BlueBar : LineRenderer;
var Gre : Material;
var Yel : Material;
var Red : Material;
var Hero : GameObject;
var Music : AudioSource;
var debug : boolean;

static var PinkHealth : float;
static var BlueHealth : float;
private var PCurHealth : int;
private var PTotHealth : int;
private var BCurHealth : int;
private var BTotHealth : int;

private var Level : int;
private var Choice : int;
private var Pink : GameObject;
private var POut : tk2dSprite;
private var Blue : GameObject;
private var BOut : tk2dSprite;
private var Cube : GameObject;
private var Box : GameObject;
private var Mess : TextMesh;
private var Won : boolean;
private var Intr : boolean;
private var Sound : int;

static var Score : int;
static var Skill : int;
private var ScoreB : TextMesh;
private var SkillB : TextMesh;

ScoreB = GameObject.Find("ScoreText").GetComponent(TextMesh);
SkillB = GameObject.Find("SkillText").GetComponent(TextMesh);

Pink = GameObject.Find("PinkCastle");
POut = GameObject.Find("POutline").GetComponent(tk2dSprite);
Blue = GameObject.Find("BlueCastle");
BOut = GameObject.Find("BOutline").GetComponent(tk2dSprite);
Cube = GameObject.Find("GUI");

function Start () 
{
	//Kamcord.StartRecording();
	//EveryplayScript.StartRecording();
	Variables.Intro = true;
	Variables.Debugger = false;
	
	Level = PlayerPrefs.GetInt("Level");
	Sound = PlayerPrefs.GetInt("Sound");
	
	if(Sound)
	{
		Music.Play();
	}
	if(Level == 1)
	{
		GPG.AchievementBattle();
	}
	if(Level == 5)
	{
		GPG.AchievementQuestStarter();
	}
	if(Level == 10)
	{
		GPG.AchievementStickingWithIt();
	}
	if(Level == 25)
	{
		GPG.AchievementAdventurer();
	}
	if(Level == 50)
	{
		GPG.AchievementJourneyMan();
	}
	if(Level == 100)
	{
		GPG.AchievementRelentless();
	}
	Score = 0;
	Skill = 0;
	
	if(!debug)
	{
		PinkHealth = (100 * Level);
		PTotHealth = (100 * Level);
	}
	if(debug)
	{
		PinkHealth = 100;
		PTotHealth = 100;
	}
	BlueHealth = (75 * Level);
	BTotHealth = (75 * Level);
	Variables.Done = false; 
}

function Update () 
{
	if(!Variables.Tutorial && !Intr)
	{
		StartCoroutine("Intro");
		Intr = true;
	}
	//Debug.Log(BCurHealth);
	ScoreB.text = GameLanguage.thisLanguageManager.GetTextValue("Game.Score") + " " + Score;
	SkillB.text = GameLanguage.thisLanguageManager.GetTextValue("Game.Skill") + " " + Skill;

	if (PCurHealth > 75)
	{
		if(PinkBar)
		{
			PinkBar.material = Gre;
		}
	}
	if (PCurHealth > 25 && PCurHealth < 75)
	{
		if(PinkBar)
		{
			PinkBar.material = Yel;
		}
	}
	if (PCurHealth < 25)
	{
		if(PinkBar)
		{
			PinkBar.material = Red;
		}
	}
	
//	if (PCurHealth > 75)
//	{
//		Pink.GetComponent(tk2dSprite).spriteId = Pink.GetComponent(tk2dSprite).GetSpriteIdByName("PagodaRed");
//	}
//	if (PCurHealth > 50 && PCurHealth < 75)
//	{
//		Pink.GetComponent(tk2dSprite).spriteId = Pink.GetComponent(tk2dSprite).GetSpriteIdByName("PagodaRed2");
//	}
//	if (PCurHealth > 25 && PCurHealth < 50)
//	{
//		Pink.GetComponent(tk2dSprite).spriteId = Pink.GetComponent(tk2dSprite).GetSpriteIdByName("PagodaRed3");
//	}
//	if (PCurHealth < 25)
//	{
//		Pink.GetComponent(tk2dSprite).spriteId = Pink.GetComponent(tk2dSprite).GetSpriteIdByName("PagodaRed4");
//	}
	
	if (BCurHealth > 75)
	{
		if(BlueBar)
		{
			BlueBar.material = Gre;
		}
	}
	if (BCurHealth > 25 && BCurHealth < 75)
	{
		if(BlueBar)
		{
			BlueBar.material = Yel;
		}
	}
	if (BCurHealth < 25)
	{
		if(BlueBar)
		{
			BlueBar.material = Red;
		}
	}
	
//	if (BCurHealth > 75)
//	{
//		Blue.GetComponent(tk2dSprite).spriteId = Blue.GetComponent(tk2dSprite).GetSpriteIdByName("PagodaBlue");
//	}
//	if (BCurHealth > 50 && BCurHealth < 75)
//	{
//		Blue.GetComponent(tk2dSprite).spriteId = Blue.GetComponent(tk2dSprite).GetSpriteIdByName("PagodaBlue2");
//	}
//	if (BCurHealth > 25 && BCurHealth < 50)
//	{
//		Blue.GetComponent(tk2dSprite).spriteId = Blue.GetComponent(tk2dSprite).GetSpriteIdByName("PagodaBlue3");
//	}
//	if (BCurHealth < 25)
//	{
//		Blue.GetComponent(tk2dSprite).spriteId = Blue.GetComponent(tk2dSprite).GetSpriteIdByName("PagodaBlue4");
//	}
	
	if(PCurHealth > -1)
	{
		PCurHealth = ((PinkHealth/PTotHealth) * 100);
		if(PinkBar)
		{
			PinkBar.SetPosition(0,Vector3(((-0.1 * PCurHealth) + 5),20,0));
		}
	}
	if(BCurHealth > -1)
	{
		BCurHealth = ((BlueHealth/BTotHealth) * 100);
		if(BlueBar)
		{
			BlueBar.SetPosition(1,Vector3(((-0.1 * BCurHealth) + 3.5),23,0));
		}
	}
	
	if (PCurHealth < 1)
	{
		PCurHealth = 0;
		if(Pink)
		{
			Pink.GetComponent(tk2dSprite).color = Color(1,1,1,0);
		}
		StartCoroutine("Win");
	}
	if (BCurHealth < 1)
	{
		BCurHealth = 0;
		if(Blue)
		{
			Blue.GetComponent(tk2dSprite).color = Color(1,1,1,0);
		}
		StartCoroutine("Lose");
	}
}

function Intro()
{
	
	Variables.TPause = true;
	Cube.transform.position.x = 32;
	//Pink.GetComponent(tk2dSpriteAnimator).Play("OniGrowing");
	yield WaitForSeconds(3);
	Cube.transform.position.x = -32;
	//Pink.GetComponent(tk2dSpriteAnimator).Play("OniRunning");
	//Blue.GetComponent(tk2dSpriteAnimator).Play("NinjaGrowing");
	Variables.TPause = false;
	yield WaitForSeconds(2);
	//Blue.GetComponent(tk2dSpriteAnimator).Play("NinjaWind");
	while(Variables.Tutorial)
	{
		yield WaitForSeconds(0.1);
	}
	yield WaitForSeconds(0.5);
	ClearScreen(GameLanguage.thisLanguageManager.GetTextValue("Game.Level") + " " + Level);
	yield WaitForSeconds(1);
	Variables.Intro = false;
}

function AttackPinkCastle(Dam : int)
{
	PinkHealth = (PinkHealth - Dam);
	
	if(PinkHealth < 0)
	{
		PinkHealth = 0;
	}
}

function AttackBlueCastle(Dam : int)
{
	BlueHealth = (BlueHealth - Dam);
	
	if(BlueHealth < 0)
	{
		BlueHealth = 0;
	}
}

function Win()
{
	if(!Won)
	{
		SetScore();
		Won = true;
		Variables.Done = true; 
		PinkHealth = 0;
		var Dias = (((PlayerPrefs.GetInt("Level") * 10)/ 100) + 1);
		while (Dias != 0)
		{
			Instantiate(Resources.Load("Diamond"),Vector3(Mathf.Abs(Random.Range(50,60)),2,-3),Quaternion.Euler(90,0,0));
			Dias --;
		}
		PlayerPrefs.SetInt("Level", (Level + 1));
		POut.color = Color(1,1,1,0);
		ClearBoard();
		ClearScreen(GameLanguage.thisLanguageManager.GetTextValue("Game.Win")); 
		var Pin = GameObject.FindGameObjectsWithTag("Pink");
		for(var p = 0; p < Pin.length; p++)
	    {
	       	Destroy(Pin[p]);
		}
		while(GameObject.FindGameObjectsWithTag("Diamond").Length > 0)
		{
			yield WaitForSeconds(0.2);
		}
		Variables.InsCount++;
		yield WaitForSeconds(1);
		if(PlayerPrefs.GetInt("UTutorial") == 0)
		{
			Application.LoadLevel("Upgrades");
		}
		if(PlayerPrefs.GetInt("UTutorial") == 1 || PlayerPrefs.GetInt("Level") != 2)
		{
			Application.LoadLevel("Results");
		}
	}
}

function Lose()
{
	if(!Won)
	{
		SetScore();
		Won = true;
		Variables.Done = true; 
		BlueHealth = 0;
		BOut.color = Color(1,1,1,0);
		ClearBoard();
		ClearScreen(GameLanguage.thisLanguageManager.GetTextValue("Game.Lose")); 
		var Blu = GameObject.FindGameObjectsWithTag("Blue");
	    for(var b = 0; b < Blu.length; b++)
	    {
	       	Destroy(Blu[b]);
		}
		Variables.InsCount++;
		yield WaitForSeconds(2);
		if(PlayerPrefs.GetInt("UTutorial") == 0)
		{
			Application.LoadLevel("Upgrades");
		}
		if(PlayerPrefs.GetInt("UTutorial") == 1 || PlayerPrefs.GetInt("Level") != 2)
		{
			Application.LoadLevel("Results");
		}
	}
}

function SetScore()
{
	PlayerPrefs.SetInt("Score", Score);
	PlayerPrefs.SetInt("Skill", Skill);
	
	if (BCurHealth > 1)
	{
		PlayerPrefs.SetInt("BonusScore", (100 * Level) + 1000);
		PlayerPrefs.SetInt("BonusSkill", (100 * Level) + 1000);
	}
	if (BCurHealth < 1)
	{
		PlayerPrefs.SetInt("BonusScore", 0);
		PlayerPrefs.SetInt("BonusSkill", 0);
	}
	
	PlayerPrefs.SetInt("TotalScore", ((PlayerPrefs.GetInt("TotalScore") + (PlayerPrefs.GetInt("Score") + PlayerPrefs.GetInt("BonusScore")))));
	PlayerPrefs.SetInt("TotalSkill", ((PlayerPrefs.GetInt("TotalSkill") + (PlayerPrefs.GetInt("Skill") + PlayerPrefs.GetInt("BonusSkill")))));
}

function ClearScreen(MesTex)
{	
	var Boa : GameObject[];
	Boa = GameObject.FindGameObjectsWithTag("Board");
    for(var c = 0; c < Boa.length; c++)
    {
       	Destroy(Boa[c]);
	}
	Box = Instantiate(Resources.Load("MessageBox"),Vector3(Cube.transform.position.x,6,0),Quaternion.Euler(90,0,0));
	Mess = Instantiate(Resources.Load("Message",TextMesh),Vector3(Cube.transform.position.x,6.2,0),Quaternion.Euler(90,0,0));
	Mess.text = MesTex;
}

function ClearBoard()
{
	var Nin : GameObject[];
	Nin = GameObject.FindGameObjectsWithTag("Ninja");
    for(var n = 0; n < Nin.length; n++)
    {
       	Destroy(Nin[n]);
	}
	
	var Oni : GameObject[];
	Oni = GameObject.FindGameObjectsWithTag("Oni");
    for(var o = 0; o < Oni.length; o++)
    {
       	Destroy(Oni[o]);
	}
}