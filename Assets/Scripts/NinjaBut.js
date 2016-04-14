#pragma strict
var Cost : float;
var Hero : GameObject;
var Tex : tk2dSprite;
var Coo : tk2dSprite;
var Num : int;
var count : float;
var Ting : AudioClip;

var debug : boolean;

private var Unlocked : boolean;
private var Played : boolean;
private var Shown : boolean;
private var Auto : boolean;
private var Cube : GameObject;
private var Box : GameObject;
private var Mess : TextMesh;
private var Cool : float;
private var TCool : float;

private var Unit1LVL : int;
private var Unit2LVL : int;
private var Unit3LVL : int;
private var Unit4LVL : int;
private var Unit5LVL : int;
private var Unit6LVL : int;
private var Unit7LVL : int;
private var Unit8LVL : int;


Cube = GameObject.Find("GUI");

function Start () 
{
	if(PlayerPrefs.GetInt("Slot" + Num) == 0)
	{
		Tex.spriteId = Tex.GetSpriteIdByName("PlusBut");
	}
	else
	{
		Unlocked = true;
	}
	Cool = 0;
	TCool = 0;
	
	Unit1LVL = PlayerPrefs.GetInt("Unit1Level");
	Unit2LVL = PlayerPrefs.GetInt("Unit2Level");
	Unit3LVL = PlayerPrefs.GetInt("Unit3Level");
	Unit4LVL = PlayerPrefs.GetInt("Unit4Level");
	Unit5LVL = PlayerPrefs.GetInt("Unit5Level");
	Unit6LVL = PlayerPrefs.GetInt("Unit6Level");
	Unit7LVL = PlayerPrefs.GetInt("Unit7Level");
	Unit8LVL = PlayerPrefs.GetInt("Unit8Level");
}

function Update () 
{
	if(Unlocked)
	{
		if(Variables.Coins >= Cost)
		{
			if(Num == 1)
			{
				if(Unit1LVL < 7)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut1Level1");
				}
				if(Unit1LVL >= 7 && Unit1LVL < 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut1Level2");
				}
				if(Unit1LVL >= 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut1Level3");
				}
			}
			if(Num == 2)
			{
				if(Unit2LVL < 7)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut2Level1");
				}
				if(Unit2LVL >= 7 && Unit2LVL < 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut2Level2");
				}
				if(Unit2LVL >= 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut2Level3");
				}
			}
			if(Num == 3)
			{
				if(Unit3LVL < 7)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut3Level1");
				}
				if(Unit3LVL >= 7 && Unit3LVL < 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut3Level2");
				}
				if(Unit3LVL >= 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut3Level3");
				}
			}
			if(Num == 4)
			{
				if(Unit4LVL < 7)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut4Level1");
				}
				if(Unit4LVL >= 7 && Unit4LVL < 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut4Level2");
				}
				if(Unit4LVL >= 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut4Level3");
				}
			}
			if(Num == 5)
			{
				if(Unit5LVL < 7)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut5Level1");
				}
				if(Unit5LVL >= 7 && Unit5LVL < 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut5Level2");
				}
				if(Unit5LVL >= 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut5Level3");
				}
			}
			if(Num == 6)
			{
				if(Unit6LVL < 7)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut6Level1");
				}
				if(Unit6LVL >= 7 && Unit6LVL < 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut6Level2");
				}
				if(Unit6LVL >= 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut6Level3");
				}
			}
			if(Num == 7)
			{
				if(Unit7LVL < 7)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut7Level1");
				}
				if(Unit7LVL >= 7 && Unit7LVL < 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut7Level2");
				}
				if(Unit7LVL >= 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut7Level3");
				}
			}
			if(Num == 8)
			{
				if(Unit8LVL < 7)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut8Level1");
				}
				if(Unit8LVL >= 7 && Unit8LVL < 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut8Level2");
				}
				if(Unit8LVL >= 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut8Level3");
				}
			}
		}
		else
		{
			if(Num == 1)
			{
				if(Unit1LVL < 7)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut1GreyLevel1");
				}
				if(Unit1LVL >= 7 && Unit1LVL < 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut1GreyLevel2");
				}
				if(Unit1LVL >= 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut1GreyLevel3");
				}
			}
			if(Num == 2)
			{
				if(Unit2LVL < 7)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut2GreyLevel1");
				}
				if(Unit2LVL >= 7 && Unit2LVL < 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut2GreyLevel2");
				}
				if(Unit2LVL >= 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut2GreyLevel3");
				}
			}
			if(Num == 3)
			{
				if(Unit3LVL < 7)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut3GreyLevel1");
				}
				if(Unit3LVL >= 7 && Unit3LVL < 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut3GreyLevel2");
				}
				if(Unit3LVL >= 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut3GreyLevel3");
				}
			}
			if(Num == 4)
			{
				if(Unit4LVL < 7)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut4GreyLevel1");
				}
				if(Unit4LVL >= 7 && Unit4LVL < 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut4GreyLevel2");
				}
				if(Unit4LVL >= 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut4GreyLevel3");
				}
			}
			if(Num == 5)
			{
				if(Unit5LVL < 7)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut5GreyLevel1");
				}
				if(Unit5LVL >= 7 && Unit5LVL < 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut5GreyLevel2");
				}
				if(Unit5LVL >= 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut5GreyLevel3");
				}
			}
			if(Num == 6)
			{
				if(Unit6LVL < 7)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut6GreyLevel1");
				}
				if(Unit6LVL >= 7 && Unit6LVL < 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut6GreyLevel2");
				}
				if(Unit6LVL >= 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut6GreyLevel3");
				}
			}
			if(Num == 7)
			{
				if(Unit7LVL < 7)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut7GreyLevel1");
				}
				if(Unit7LVL >= 7 && Unit7LVL < 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut7GreyLevel2");
				}
				if(Unit7LVL >= 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut7GreyLevel3");
				}
			}
			if(Num == 8)
			{
				if(Unit8LVL < 7)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut8GreyLevel1");
				}
				if(Unit8LVL >= 7 && Unit8LVL < 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut8GreyLevel2");
				}
				if(Unit8LVL >= 14)
				{
					Tex.spriteId = Tex.GetSpriteIdByName("NinjaBut8GreyLevel3");
				}
			}
		}
	}
	
	if(Cool > 0)
	{
		Coo.scale.x = Cool / TCool;
		Cool = Cool - 0.05f;
	}
	if(Cool < 1)
	{
		Coo.scale.x = 0;
	}
	
	var ray = Camera.main.ScreenPointToRay (AspectUtilityEnhanced.mousePosition);
    var hit : RaycastHit;
    
    if (GetComponent.<Collider>().Raycast (ray, hit, 100)) 
    {
    	if(Input.GetButton("Fire1") && !Variables.Intro)
       	{
       		if (!Input.GetButtonDown ("Fire1"))
			{
				count -= Time.deltaTime;
				if(count < 0 && !Shown && Unlocked)
				{
					if(PlayerPrefs.GetInt("Sound") == 1 && !Played)
	    			{
	       	 			AudioSource.PlayClipAtPoint(Ting, Camera.main.transform.position);
	       	 			Played = true;
	       	 		}
	       	 		
	       	 		if(Auto == false)
					{
						StartCoroutine("AutoOn");
					}
					if(Auto == true)
					{
						StartCoroutine("AutoOff");
					}
					//StartCoroutine("Unlock");
					Shown = true;
				}
			}
			else
			{
				count = 5;
				Shown = false;
			}
		}
       	if(Input.GetButtonDown("Fire1"))
       	{
       		if(Num == 1 && Cool <= 0 && Unlocked)
			{
				if(Variables.Coins >= Cost)
				{
					Tutorial.Ninja = true;
					Cool = 10;
					TCool = 10;
					if(Variables.Tutorial)
					{
						this.tag = "Tutorial";
					}
					PlayerPrefs.SetInt("Swordsman",PlayerPrefs.GetInt("Swordsman") + 1);
					Variables.Coins = Variables.Coins - Cost;
					var Temp1 = new Instantiate(Hero,Vector3(-47,2.5,-09),Quaternion.Euler(90,0,0));
					Temp1.GetComponent(Ninja).debug = debug;
					Temp1.name = "Sword";
					Temp1.GetComponent(Ninja).Num = Num;
					GPG.AchievementSmallArmy();
					GPG.AchievementSliceDice();
					GPG.AchievementCentury();
					GPG.AchievementNinjaSlasher();
					GPG.AchievementSwordSwipes();
					GPG.AchievementNinjaGuiding();
				}
			}
			if(Num == 2 && Cool <= 0 && Unlocked)
			{
				if(Variables.Coins > Cost)
				{
					Cool = 10;
					TCool = 10;
					PlayerPrefs.SetInt("Nunchuckman",PlayerPrefs.GetInt("Nunchuckman") + 1);
					Variables.Coins = Variables.Coins - Cost;
					var Temp2 = new Instantiate(Hero,Vector3(-47,2.5,-09),Quaternion.Euler(90,0,0));
					Temp2.GetComponent(Ninja).debug = debug;
					Temp2.name = "Nunchuck";
					Temp2.GetComponent(Ninja).Num = Num;
					GPG.AchievementSpeedKills();
					GPG.AchievementCloseCombat();
					GPG.AchievementSwiftPainful();
					GPG.AchievementQuickKiller();
					GPG.AchievementFastHands();
					GPG.AchievementMach10();
				}
			}
			if(Num == 3 && Cool <= 0 && Unlocked)
			{
				if(Variables.Coins > Cost)
				{
					Cool = 10;
					TCool = 10;
					PlayerPrefs.SetInt("Throwingman",PlayerPrefs.GetInt("Throwingman") + 1);
					Variables.Coins = Variables.Coins - Cost;
					var Temp3 = new Instantiate(Hero,Vector3(-47,2.5,-09),Quaternion.Euler(90,0,0));
					Temp3.GetComponent(Ninja).debug = debug;
					Temp3.name = "ThrowingStar";
					Temp3.GetComponent(Ninja).Num = Num;
					GPG.AchievementConcealed();
					GPG.AchievementThrowEm();
					GPG.AchievementSharp();
					GPG.AchievementChucking();
					GPG.AchievementShuriken();
					GPG.Achievement6Pointed();
				}
			}
			if(Num == 4 && Cool <= 0 && Unlocked)
			{
				if(Variables.Coins > Cost)
				{
					Cool = 10;
					TCool = 10;
					PlayerPrefs.SetInt("Longbowman",PlayerPrefs.GetInt("Longbowman") + 1);
					Variables.Coins = Variables.Coins - Cost;
					var Temp4 = new Instantiate(Hero,Vector3(-47,2.5,-09),Quaternion.Euler(90,0,0));
					Temp4.GetComponent(Ninja).debug = debug;
					Temp4.name = "Longbow";
					Temp4.GetComponent(Ninja).Num = Num;
					GPG.AchievementArcher();
					GPG.AchievementLongRange();
					GPG.AchievementReadyAim();
					GPG.AchievementBowArrow();
					GPG.AchievementDistant();
					GPG.AchievementRobin();					
				}
			}
			if(Num == 5 && Cool <= 0 && Unlocked)
			{
				if(Variables.Coins > Cost)
				{
					Cool = 10;
					TCool = 10;
					PlayerPrefs.SetInt("Woodman",PlayerPrefs.GetInt("Woodman") + 1);
					Variables.Coins = Variables.Coins - Cost;
					var Temp5 = new Instantiate(Hero,Vector3(-47,2.5,-09),Quaternion.Euler(90,0,0));
					Temp5.GetComponent(Ninja).debug = debug;
					Temp5.name = "WoodStaff";
					Temp5.GetComponent(Ninja).Num = Num;
					GPG.AchievementBlunt();
					GPG.AchievementThud();
					GPG.AchievementSwatEm();
					GPG.AchievementWooden();
					GPG.AchievementSmacking();
					GPG.AchievementTree();
				}
			}
			if(Num == 6 && Cool <= 0 && Unlocked)
			{
				if(Variables.Coins > Cost)
				{
					Cool = 10;
					TCool = 10;
					PlayerPrefs.SetInt("Chainman",PlayerPrefs.GetInt("Chainman") + 1);
					Variables.Coins = Variables.Coins - Cost;
					var Temp6 = new Instantiate(Hero,Vector3(-47,2.5,-09),Quaternion.Euler(90,0,0));
					Temp6.GetComponent(Ninja).debug = debug;
					Temp6.name = "ChainSickle";
					Temp6.GetComponent(Ninja).Num = Num;
					GPG.AchievementChain();
					GPG.AchievementSickles();
					GPG.AchievementAttack();
					GPG.AchievementClose();
					GPG.AchievementChainEm();
					GPG.AchievementGrim();
				}
			}
			if(Num == 7 && Cool <= 0 && Unlocked)
			{
				if(Variables.Coins > Cost)
				{
					Cool = 10;
					TCool = 10;
					PlayerPrefs.SetInt("Saiman",PlayerPrefs.GetInt("Saiman") + 1);
					Variables.Coins = Variables.Coins - Cost;
					var Temp7 = new Instantiate(Hero,Vector3(-47,2.5,-09),Quaternion.Euler(90,0,0));
					Temp7.GetComponent(Ninja).debug = debug;
					Temp7.name = "Sai";
					Temp7.GetComponent(Ninja).Num = Num;
					GPG.AchievementStab();
					GPG.AchievementMulti();
					GPG.AchievementBlunted();
					GPG.AchievementMetal();
					GPG.AchievementSaiYou();
					GPG.AchievementMartial();
				}
			}
			if(Num == 8 && Cool <= 0 && Unlocked)
			{
				if(Variables.Coins > Cost)
				{
					Cool = 10;
					TCool = 10;
					PlayerPrefs.SetInt("Handman",PlayerPrefs.GetInt("Handman") + 1);
					Variables.Coins = Variables.Coins - Cost;
					var Temp8 = new Instantiate(Hero,Vector3(-47,2.5,-09),Quaternion.Euler(90,0,0));
					Temp8.GetComponent(Ninja).debug = debug;
					Temp8.name = "HandClaw";
					Temp8.GetComponent(Ninja).Num = Num;
					GPG.AchievementCombatant();
					GPG.AchievementFighter();
					GPG.AchievementSlicing();
					GPG.AchievementTwoTalons();
					GPG.AchievementBreaking();
					GPG.AchievementClawWarrior();
				}
			}
       	}
    }
    if(Auto && !PauseMenu.Paused)
    {
    	if(Num == 1 && Cool <= 0)
		{
			if(Variables.Coins >= Cost)
			{
				Cool = 10;
				TCool = 10;
				PlayerPrefs.SetInt("Swordsman",PlayerPrefs.GetInt("Swordsman") + 1);
				Variables.Coins = Variables.Coins - Cost;
				var ATemp1 = new Instantiate(Hero,Vector3(-47,2.5,-09),Quaternion.Euler(90,0,0));
				ATemp1.GetComponent(Ninja).debug = debug;
				ATemp1.name = "Sword";
				ATemp1.GetComponent(Ninja).Num = Num;
				GPG.AchievementSmallArmy();
				GPG.AchievementSliceDice();
				GPG.AchievementCentury();
				GPG.AchievementNinjaSlasher();
				GPG.AchievementSwordSwipes();
				GPG.AchievementNinjaGuiding();
			}
		}
		if(Num == 2 && Cool <= 0)
		{
			if(Variables.Coins >= Cost)
			{
				Cool = 10;
				TCool = 10;
				PlayerPrefs.SetInt("Nunchuckman",PlayerPrefs.GetInt("Nunchuckman") + 1);
				Variables.Coins = Variables.Coins - Cost;
				var ATemp2 = new Instantiate(Hero,Vector3(-47,2.5,-09),Quaternion.Euler(90,0,0));
				ATemp2.GetComponent(Ninja).debug = debug;
				ATemp2.name = "Nunchuck";
				ATemp2.GetComponent(Ninja).Num = Num;
				GPG.AchievementSpeedKills();
				GPG.AchievementCloseCombat();
				GPG.AchievementSwiftPainful();
				GPG.AchievementQuickKiller();
				GPG.AchievementFastHands();
				GPG.AchievementMach10();
			}
		}
		if(Num == 3 && Cool <= 0)
		{
			if(Variables.Coins >= Cost)
			{
				Cool = 10;
				TCool = 10;
				PlayerPrefs.SetInt("Throwingman",PlayerPrefs.GetInt("Throwingman") + 1);
				Variables.Coins = Variables.Coins - Cost;
				var ATemp3 = new Instantiate(Hero,Vector3(-47,2.5,-09),Quaternion.Euler(90,0,0));
				ATemp3.GetComponent(Ninja).debug = debug;
				ATemp3.name = "ThrowingStar";
				ATemp3.GetComponent(Ninja).Num = Num;
				GPG.AchievementConcealed();
				GPG.AchievementThrowEm();
				GPG.AchievementSharp();
				GPG.AchievementChucking();
				GPG.AchievementShuriken();
				GPG.Achievement6Pointed();
			}
		}
		if(Num == 4 && Cool <= 0)
		{
			if(Variables.Coins >= Cost)
			{
				Cool = 10;
				TCool = 10;
				PlayerPrefs.SetInt("Longbowman",PlayerPrefs.GetInt("Longbowman") + 1);
				Variables.Coins = Variables.Coins - Cost;
				var ATemp4 = new Instantiate(Hero,Vector3(-47,2.5,-09),Quaternion.Euler(90,0,0));
				ATemp4.GetComponent(Ninja).debug = debug;
				ATemp4.name = "Longbow";
				ATemp4.GetComponent(Ninja).Num = Num;
				GPG.AchievementArcher();
				GPG.AchievementLongRange();
				GPG.AchievementReadyAim();
				GPG.AchievementBowArrow();
				GPG.AchievementDistant();
				GPG.AchievementRobin();					
			}
		}
		if(Num == 5 && Cool <= 0)
		{
			if(Variables.Coins >= Cost)
			{
				Cool = 10;
				TCool = 10;
				PlayerPrefs.SetInt("Woodman",PlayerPrefs.GetInt("Woodman") + 1);
				Variables.Coins = Variables.Coins - Cost;
				var ATemp5 = new Instantiate(Hero,Vector3(-47,2.5,-09),Quaternion.Euler(90,0,0));
				ATemp5.GetComponent(Ninja).debug = debug;
				ATemp5.name = "WoodStaff";
				ATemp5.GetComponent(Ninja).Num = Num;
				GPG.AchievementBlunt();
				GPG.AchievementThud();
				GPG.AchievementSwatEm();
				GPG.AchievementWooden();
				GPG.AchievementSmacking();
				GPG.AchievementTree();
			}
		}
		if(Num == 6 && Cool <= 0)
		{
			if(Variables.Coins >= Cost)
			{
				Cool = 10;
				TCool = 10;
				PlayerPrefs.SetInt("Chainman",PlayerPrefs.GetInt("Chainman") + 1);
				Variables.Coins = Variables.Coins - Cost;
				var ATemp6 = new Instantiate(Hero,Vector3(-47,2.5,-09),Quaternion.Euler(90,0,0));
				ATemp6.GetComponent(Ninja).debug = debug;
				ATemp6.name = "ChainSickle";
				ATemp6.GetComponent(Ninja).Num = Num;
				GPG.AchievementChain();
				GPG.AchievementSickles();
				GPG.AchievementAttack();
				GPG.AchievementClose();
				GPG.AchievementChainEm();
				GPG.AchievementGrim();
			}
		}
		if(Num == 7 && Cool <= 0)
		{
			if(Variables.Coins >= Cost)
			{
				Cool = 10;
				TCool = 10;
				PlayerPrefs.SetInt("Saiman",PlayerPrefs.GetInt("Saiman") + 1);
				Variables.Coins = Variables.Coins - Cost;
				var ATemp7 = new Instantiate(Hero,Vector3(-47,2.5,-09),Quaternion.Euler(90,0,0));
				ATemp7.GetComponent(Ninja).debug = debug;
				ATemp7.name = "Sai";
				ATemp7.GetComponent(Ninja).Num = Num;
				GPG.AchievementStab();
				GPG.AchievementMulti();
				GPG.AchievementBlunted();
				GPG.AchievementMetal();
				GPG.AchievementSaiYou();
				GPG.AchievementMartial();
			}
		}
		if(Num == 8 && Cool <= 0)
		{
			if(Variables.Coins >= Cost)
			{
				Cool = 10;
				TCool = 10;
				PlayerPrefs.SetInt("Handman",PlayerPrefs.GetInt("Handman") + 1);
				Variables.Coins = Variables.Coins - Cost;
				var ATemp8 = new Instantiate(Hero,Vector3(-47,2.5,-09),Quaternion.Euler(90,0,0));
				ATemp8.GetComponent(Ninja).debug = debug;
				ATemp8.name = "HandClaw";
				ATemp8.GetComponent(Ninja).Num = Num;
				GPG.AchievementCombatant();
				GPG.AchievementFighter();
				GPG.AchievementSlicing();
				GPG.AchievementTwoTalons();
				GPG.AchievementBreaking();
				GPG.AchievementClawWarrior();
			}
		}
    }
}

function AutoOn()
{
	yield WaitForSeconds(0.2);
	Variables.Debugger = true;
	Auto = true;
	ClearScreen("Auto Mode On");
}

function AutoOff()
{
	yield WaitForSeconds(0.2);
	Variables.Debugger = false;
	Auto = false;
	ClearScreen("Auto Mode Off");
}

function ClearScreen(MesTex)
{	
	var Boa : GameObject[];
	Boa = GameObject.FindGameObjectsWithTag("Board");
    for(var c = 0; c < Boa.length; c++)
    {
       	Destroy(Boa[c]);
	}
	Box = Instantiate(Resources.Load("MessageBox"),Vector3(Cube.transform.position.x,8,0),Quaternion.Euler(90,0,0));
	Mess = Instantiate(Resources.Load("Message",TextMesh),Vector3(Cube.transform.position.x,8.2,0),Quaternion.Euler(90,0,0));
	Mess.text = MesTex;
}