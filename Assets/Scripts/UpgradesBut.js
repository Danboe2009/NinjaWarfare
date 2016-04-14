#pragma strict

var Num : int;
var Ting : AudioClip;
var No : AudioClip;
var Level : AudioClip;
var Tex : tk2dSprite;
var TextM : TextMesh;

private var Skill : int;
private var Diamo : int;
private var Sound : int;
private var Ready : boolean;
private var Box : GameObject;
private var Mess : TextMesh;

private var Unit1LVL : int;
private var Unit2LVL : int;
private var Unit3LVL : int;
private var Unit4LVL : int;
private var Unit5LVL : int;
private var Unit6LVL : int;
private var Unit7LVL : int;
private var Unit8LVL : int;

function Start () 
{
	Diamo = PlayerPrefs.GetInt("Diamonds");
	Sound = PlayerPrefs.GetInt("Sound");
	Skill = PlayerPrefs.GetInt("TotalSkill");
	
	Ready = true;
}

function Update () 
{
	Unit1LVL = PlayerPrefs.GetInt("Unit1Level");
	Unit2LVL = PlayerPrefs.GetInt("Unit2Level");
	Unit3LVL = PlayerPrefs.GetInt("Unit3Level");
	Unit4LVL = PlayerPrefs.GetInt("Unit4Level");
	Unit5LVL = PlayerPrefs.GetInt("Unit5Level");
	Unit6LVL = PlayerPrefs.GetInt("Unit6Level");
	Unit7LVL = PlayerPrefs.GetInt("Unit7Level");
	Unit8LVL = PlayerPrefs.GetInt("Unit8Level");
	
	var ray = Camera.main.ScreenPointToRay (AspectUtilityEnhanced.mousePosition);
    var hit : RaycastHit;
    
    if (GetComponent.<Collider>().Raycast (ray, hit, 100)) 
    {
    	if(Input.GetButton("Fire1") && Ready)
       	{
       		Ready = false;
       		if(Sound)
       		{
       			AudioSource.PlayClipAtPoint(Ting, Camera.main.transform.position);
       		}
       		switch(Num)
       		{
       			case 1:
       				Upgrades.Selected = 1;     				
       				break;
       				
       			case 2:
       				Upgrades.Selected = 2;
       				break;
       				
       			case 3:
       				Upgrades.Selected = 3;
       				break;
       				
       			case 4:
       				Upgrades.Selected = 4;
       				break;
       				
       			case 5:
       				Upgrades.Selected = 5;
       				break;
       				
       			case 6:
       				Upgrades.Selected = 6;
       				break;
       				
       			case 7:
       				Upgrades.Selected = 7;
       				break;
       				
       			case 8:
       				Upgrades.Selected = 8;
       				break;
       				
       			case 9:
       				Upgrades.Selected = 9;     				
       				break;
       				
   				case 10:
       				Upgrades.Selected = 10;     				
       				break;
       				
       			case 11:
       				Upgrades.Selected = 11;     				
       				break;
       				
       			case 12:
       				Upgrades.Selected = 12;     				
       				break;
       				
       			case 99:
       				if(Upgrades.Selected == 0)
       				{
       					ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.PickSomething"));
       				}
       				if(Upgrades.Selected == 1)
       				{
       					var Cost1 = (-725+(725 * (PlayerPrefs.GetInt("Unit1Level") + 1)));
	       				if(Skill < Cost1)
	       				{
	       					if(Sound)
				       		{
				       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
				       		}
				       		ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.NotEnoughSkill"));
	       				}
	       				if(Skill >= Cost1 && PlayerPrefs.GetInt("Unit1Level") < 20)
	       				{
	       					Buy(Cost1);
	       					Skill = Skill - Cost1;
	       					PlayerPrefs.SetInt("Unit1Level",PlayerPrefs.GetInt("Unit1Level")+1);
	       					GPG.AchievementSharpening();
	       					GPG.AchievementEdgeOfTheBlade();
	       					GPG.AchievementSwordsMaster();
	       					if(PlayerPrefs.GetInt("Unit1Level") == 7)
	       					{
	       						if(Sound)
					       		{
					       			AudioSource.PlayClipAtPoint(Level, Camera.main.transform.position);
					       		}
	       						ClearScreen("Sword ninja has\ngained armor\nlevel 2");
	       					}
	       					if(PlayerPrefs.GetInt("Unit1Level") == 14)
	       					{
	       						if(Sound)
					       		{
					       			AudioSource.PlayClipAtPoint(Level, Camera.main.transform.position);
					       		}
	       						ClearScreen("Sword ninja has\ngained armor\nlevel 3");
	       					}
	       				}
	       				if(PlayerPrefs.GetInt("Unit1Level") > 19)
	       				{
	       					if(Sound)
				       		{
				       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
				       		}
				       		ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.MaxLevel"));
	       				}
       				}
       				if(Upgrades.Selected == 2)
       				{
       					if(PlayerPrefs.GetInt("Slot2") == 1)
						{
	       					var Cost2 = (-725+(725 * (PlayerPrefs.GetInt("Unit2Level") + 1)));
	       					if(Skill < Cost2)
		       				{
		       					if(Sound)
					       		{
					       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
					       		}
					       		ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.NotEnoughSkill"));
		       				}
		       				if(Skill >= Cost2 && PlayerPrefs.GetInt("Unit2Level") < 20)
		       				{
		       					Buy(Cost2);
		       					Skill = Skill - Cost2;
		       					PlayerPrefs.SetInt("Unit2Level",PlayerPrefs.GetInt("Unit2Level")+1);
		       					GPG.AchievementSpeedItUp();
		       					GPG.AchievementGettingQuicker();
		       					GPG.AchievementNunchuckMaster();
		       					if(PlayerPrefs.GetInt("Unit2Level") == 7)
		       					{
		       						if(Sound)
						       		{
						       			AudioSource.PlayClipAtPoint(Level, Camera.main.transform.position);
						       		}
		       						ClearScreen("Nunchuck ninja has\ngained armor\nlevel 2");
		       					}
		       					if(PlayerPrefs.GetInt("Unit2Level") == 14)
		       					{
		       						if(Sound)
						       		{
						       			AudioSource.PlayClipAtPoint(Level, Camera.main.transform.position);
						       		}
		       						ClearScreen("Nunchuck ninja has\ngained armor\nlevel 3");
		       					}
		       				}
		       				if(PlayerPrefs.GetInt("Unit2Level") > 19)
		       				{
		       					if(Sound)
					       		{
					       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
					       		}
					       		ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.MaxLevel"));
		       				}
	       				}
	       				if(PlayerPrefs.GetInt("Slot2") == 0)
       					{
       						var DCost2 = 10;
       						if(Diamo < DCost2)
       						{
       							if(Sound)
					       		{
					       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
					       		}
					       		ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.NotEnoughDiamonds"));
       						}
       						if(Diamo >= DCost2)
       						{
       							Diamo = Diamo - DCost2;
       							Upgrades.Slot2 = 1;
       							PlayerPrefs.SetInt("Diamonds", (PlayerPrefs.GetInt("Diamonds") - DCost2));
       							PlayerPrefs.SetInt("Slot2",1); 
       							PlayerPrefs.SetInt("Unit2Level",1);
       							PlayerPrefs.SetInt("TotalUnlocks",PlayerPrefs.GetInt("TotalUnlocks")+1);
       						}
       					}
       				}
       				if(Upgrades.Selected == 3)
       				{
       					if(PlayerPrefs.GetInt("Slot3") == 1)
						{
	       					var Cost3 = (-725+(725 * (PlayerPrefs.GetInt("Unit3Level") + 1)));
	       					if(Skill < Cost3)
		       				{
		       					if(Sound)
					       		{
					       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
					       		}
					       		ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.NotEnoughSkill"));
		       				}
		       				if(Skill >= Cost3 && PlayerPrefs.GetInt("Unit3Level") < 20)
		       				{
		       					Buy(Cost3);
		       					Skill = Skill - Cost3;
		       					PlayerPrefs.SetInt("Unit3Level",PlayerPrefs.GetInt("Unit3Level")+1);
		       					GPG.AchievementPointy();
		       					GPG.AchievementPowerfulRage();
		       					GPG.AchievementThrowingStarMaster();
		       					if(PlayerPrefs.GetInt("Unit3Level") == 7)
		       					{
		       						if(Sound)
						       		{
						       			AudioSource.PlayClipAtPoint(Level, Camera.main.transform.position);
						       		}
		       						ClearScreen("Throwing Star ninja\nhas gained armor\nlevel 2");
		       					}
		       					if(PlayerPrefs.GetInt("Unit3Level") == 14)
		       					{
		       						if(Sound)
						       		{
						       			AudioSource.PlayClipAtPoint(Level, Camera.main.transform.position);
						       		}
		       						ClearScreen("Throwing Star ninja\nhas gained armor\nlevel 3");
		       					}
		       				}
		       				if(PlayerPrefs.GetInt("Unit3Level") > 19)
		       				{
		       					if(Sound)
					       		{
					       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
					       		}
					       		ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.MaxLevel"));
		       				}
	       				}
	       				if(PlayerPrefs.GetInt("Slot3") == 0)
       					{
       						var DCost3 = 20;
       						if(Diamo < DCost3)
       						{
       							if(Sound)
					       		{
					       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
					       		}
					       		ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.NotEnoughDiamonds"));
       						}
       						if(Diamo >= DCost3)
       						{
       							Diamo = Diamo - DCost3;
       							Upgrades.Slot3 = 1;
       							PlayerPrefs.SetInt("Diamonds", (PlayerPrefs.GetInt("Diamonds") - DCost3));
       							PlayerPrefs.SetInt("Slot3",1); 
       							PlayerPrefs.SetInt("Unit3Level",1);
       							PlayerPrefs.SetInt("TotalUnlocks",PlayerPrefs.GetInt("TotalUnlocks")+1);
       						}
       					}
       				}
       				if(Upgrades.Selected == 4)
       				{
       					if(PlayerPrefs.GetInt("Slot4") == 1)
						{
	       					var Cost4 = (-725+(725 * (PlayerPrefs.GetInt("Unit4Level") + 1)));
	       					if(Skill < Cost4)
		       				{
		       					if(Sound)
					       		{
					       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
					       		}
					       		ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.NotEnoughSkill"));
		       				}
		       				if(Skill >= Cost4 && PlayerPrefs.GetInt("Unit4Level") < 20)
		       				{
		       					Buy(Cost4);
		       					Skill = Skill - Cost4;
		       					PlayerPrefs.SetInt("Unit4Level",PlayerPrefs.GetInt("Unit4Level")+1);
		       					GPG.AchievementTestingFlight();
		       					GPG.AchievementIntermediateArcher();
		       					GPG.AchievementLongbowMaster();
		       					if(PlayerPrefs.GetInt("Unit4Level") == 7)
		       					{
		       						if(Sound)
						       		{
						       			AudioSource.PlayClipAtPoint(Level, Camera.main.transform.position);
						       		}
		       						ClearScreen("Long Bow ninja\nhas gained armor\nlevel 2");
		       					}
		       					if(PlayerPrefs.GetInt("Unit4Level") == 14)
		       					{
		       						if(Sound)
						       		{
						       			AudioSource.PlayClipAtPoint(Level, Camera.main.transform.position);
						       		}
		       						ClearScreen("Long Bow ninja\nhas gained armor\nlevel 3");
		       					}
		       				}
		       				if(PlayerPrefs.GetInt("Unit4Level") > 19)
		       				{
		       					if(Sound)
					       		{
					       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
					       		}
					       		ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.MaxLevel"));
		       				}
	       				}
	       				if(PlayerPrefs.GetInt("Slot4") == 0)
       					{
       						var DCost4 = 70;
       						if(Diamo < DCost4)
       						{
       							if(Sound)
					       		{
					       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
					       		}
					       		ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.NotEnoughDiamonds"));
       						}
       						if(Diamo >= DCost4)
       						{
       							Diamo = Diamo - DCost4;
       							Upgrades.Slot4 = 1;
       							PlayerPrefs.SetInt("Diamonds", (PlayerPrefs.GetInt("Diamonds") - DCost4));
       							PlayerPrefs.SetInt("Slot4",1);
       							PlayerPrefs.SetInt("Unit4Level",1);
       							PlayerPrefs.SetInt("TotalUnlocks",PlayerPrefs.GetInt("TotalUnlocks")+1); 
       						}
       					}
       				}
       				if(Upgrades.Selected == 5)
       				{
       					if(PlayerPrefs.GetInt("Slot5") == 1)
						{
	       					var Cost5 = (-725+(725 * (PlayerPrefs.GetInt("Unit5Level") + 1)));
		       				if(Skill < Cost5)
		       				{
		       					if(Sound)
					       		{
					       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
					       		}
					       		ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.NotEnoughSkill"));
		       				}
		       				if(Skill >= Cost5 && PlayerPrefs.GetInt("Unit5Level") < 20)
		       				{
		       					Buy(Cost5);
		       					Skill = Skill - Cost5;
		       					PlayerPrefs.SetInt("Unit5Level",PlayerPrefs.GetInt("Unit5Level")+1);
		       					GPG.AchievementKnockOnWood();
		       					GPG.AchievementJankaTest();
		       					GPG.AchievementWoodStaffMaster();
		       					if(PlayerPrefs.GetInt("Unit5Level") == 7)
		       					{
		       						if(Sound)
						       		{
						       			AudioSource.PlayClipAtPoint(Level, Camera.main.transform.position);
						       		}
		       						ClearScreen("Wood Staff ninja\nhas gained armor\nlevel 2");
		       					}
		       					if(PlayerPrefs.GetInt("Unit5Level") == 14)
		       					{
		       						if(Sound)
						       		{
						       			AudioSource.PlayClipAtPoint(Level, Camera.main.transform.position);
						       		}
		       						ClearScreen("Wood Staff ninja\nhas gained armor\nlevel 3");
		       					}
		       				}
		       				if(PlayerPrefs.GetInt("Unit5Level") > 19)
		       				{
		       					if(Sound)
					       		{
					       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
					       		}
					       		ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.MaxLevel"));
		       				}
	       				}
	       				if(PlayerPrefs.GetInt("Slot5") == 0)
       					{
       						var DCost5 = 110;
       						if(Diamo < DCost5)
       						{
       							if(Sound)
					       		{
					       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
					       		}
					       		ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.NotEnoughDiamonds"));
       						}
       						if(Diamo >= DCost5)
       						{
       							Diamo = Diamo - DCost5;
       							Upgrades.Slot5 = 1;
       							PlayerPrefs.SetInt("Diamonds", (PlayerPrefs.GetInt("Diamonds") - DCost5));
       							PlayerPrefs.SetInt("Slot5",1); 
       							PlayerPrefs.SetInt("Unit5Level",1);
       							PlayerPrefs.SetInt("TotalUnlocks",PlayerPrefs.GetInt("TotalUnlocks")+1);
       						}
       					}
       				}
       				if(Upgrades.Selected == 6)
       				{
       					if(PlayerPrefs.GetInt("Slot6") == 1)
						{
	       					var Cost6 = (-725+(725 * (PlayerPrefs.GetInt("Unit6Level") + 1)));
	       					if(Skill < Cost6)
		       				{
		       					if(Sound)
					       		{
					       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
					       		}
					       		ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.NotEnoughSkill"));
		       				}
		       				if(Skill >= Cost6 && PlayerPrefs.GetInt("Unit6Level") < 20)
		       				{
		       					Buy(Cost6);
		       					Skill = Skill - Cost6;
		       					PlayerPrefs.SetInt("Unit6Level",PlayerPrefs.GetInt("Unit6Level")+1);
		       					GPG.AchievementChainGang();
		       					GPG.AchievementSickleWithIt();
		       					GPG.AchievementChainSickleMaster();
		       					if(PlayerPrefs.GetInt("Unit6Level") == 7)
		       					{
		       						if(Sound)
						       		{
						       			AudioSource.PlayClipAtPoint(Level, Camera.main.transform.position);
						       		}
		       						ClearScreen("Chain ninja\nhas gained armor\nlevel 2");
		       					}
		       					if(PlayerPrefs.GetInt("Unit6Level") == 14)
		       					{
		       						if(Sound)
						       		{
						       			AudioSource.PlayClipAtPoint(Level, Camera.main.transform.position);
						       		}
		       						ClearScreen("Chain ninja\nhas gained armor\nlevel 3");
		       					}
		       				}
		       				if(PlayerPrefs.GetInt("Unit6Level") > 19)
		       				{
		       					if(Sound)
					       		{
					       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
					       		}
					       		ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.MaxLevel"));
		       				}
	       				}
	       				if(PlayerPrefs.GetInt("Slot6") == 0)
       					{
       						var DCost6 = 150;
       						if(Diamo < DCost6)
       						{
       							if(Sound)
					       		{
					       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
					       		}
					       		ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.NotEnoughDiamonds"));
       						}
       						if(Diamo >= DCost6)
       						{
       							Diamo = Diamo - DCost6;
       							Upgrades.Slot6 = 1;
       							PlayerPrefs.SetInt("Diamonds", (PlayerPrefs.GetInt("Diamonds") - DCost6));
       							PlayerPrefs.SetInt("Slot6",1); 
       							PlayerPrefs.SetInt("Unit6Level",1);
       							PlayerPrefs.SetInt("TotalUnlocks",PlayerPrefs.GetInt("TotalUnlocks")+1);
       						}
       					}
       				}
       				if(Upgrades.Selected == 7)
       				{
       					if(PlayerPrefs.GetInt("Slot7") == 1)
						{
	       					var Cost7 = (-725+(725 * (PlayerPrefs.GetInt("Unit7Level") + 1)));
		       				if(Skill < Cost7)
		       				{
		       					if(Sound)
					       		{
					       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
					       		}
					       		ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.NotEnoughSkill"));
		       				}
		       				if(Skill >= Cost7 && PlayerPrefs.GetInt("Unit7Level") < 20)
		       				{
		       					Buy(Cost7);
		       					Skill = Skill - Cost7;
		       					PlayerPrefs.SetInt("Unit7Level",PlayerPrefs.GetInt("Unit7Level")+1);
		       					GPG.AchievementBonSai();
		       					GPG.AchievementSaiAnora();
		       					GPG.AchievementSaiMaster();
		       					if(PlayerPrefs.GetInt("Unit7Level") == 7)
		       					{
		       						if(Sound)
						       		{
						       			AudioSource.PlayClipAtPoint(Level, Camera.main.transform.position);
						       		}
		       						ClearScreen("Sai ninja\nhas gained armor\nlevel 2");
		       					}
		       					if(PlayerPrefs.GetInt("Unit7Level") == 14)
		       					{
		       						if(Sound)
						       		{
						       			AudioSource.PlayClipAtPoint(Level, Camera.main.transform.position);
						       		}
		       						ClearScreen("Sai ninja\nhas gained armor\nlevel 3");
		       					}
		       				}
		       				if(PlayerPrefs.GetInt("Unit7Level") > 19)
		       				{
		       					if(Sound)
					       		{
					       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
					       		}
					       		ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.MaxLevel"));
		       				}
	       				}
	       				if(PlayerPrefs.GetInt("Slot7") == 0)
       					{
       						var DCost7 = 190;
       						if(Diamo < DCost7)
       						{
       							if(Sound)
					       		{
					       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
					       		}
					       		ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.NotEnoughDiamonds"));
       						}
       						if(Diamo >= DCost7)
       						{
       							Diamo = Diamo - DCost7;
       							Upgrades.Slot7 = 1;
       							PlayerPrefs.SetInt("Diamonds", (PlayerPrefs.GetInt("Diamonds") - DCost7));
       							PlayerPrefs.SetInt("Slot7",1); 
       							PlayerPrefs.SetInt("Unit7Level",1);
       							PlayerPrefs.SetInt("TotalUnlocks",PlayerPrefs.GetInt("TotalUnlocks")+1);
       						}
       					}
       				}
       				if(Upgrades.Selected == 8)
       				{
       					if(PlayerPrefs.GetInt("Slot8") == 1)
						{
	       					var Cost8 = (-725+(725 * (PlayerPrefs.GetInt("Unit8Level") + 1)));
		       				if(Skill < Cost8)
		       				{
		       					if(Sound)
					       		{
					       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
					       		}
					       		ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.NotEnoughSkill"));
		       				}
		       				if(Skill >= Cost8 && PlayerPrefs.GetInt("Unit8Level") < 20)
		       				{
		       					Buy(Cost8);
		       					Skill = Skill - Cost8;
		       					PlayerPrefs.SetInt("Unit8Level",PlayerPrefs.GetInt("Unit8Level")+1);
		       					GPG.AchievementSharpeningMyClaws();
		       					GPG.AchievementDualWield();
		       					GPG.AchievementHandClawMaster();
		       					if(PlayerPrefs.GetInt("Unit8Level") == 7)
		       					{
		       						if(Sound)
						       		{
						       			AudioSource.PlayClipAtPoint(Level, Camera.main.transform.position);
						       		}
		       						ClearScreen("Hand Claw ninja\nhas gained armor\nlevel 2");
		       					}
		       					if(PlayerPrefs.GetInt("Unit8Level") == 14)
		       					{
		       						if(Sound)
						       		{
						       			AudioSource.PlayClipAtPoint(Level, Camera.main.transform.position);
						       		}
		       						ClearScreen("Hand Claw ninja\nhas gained armor\nlevel 3");
		       					}
		       				}
		       				if(PlayerPrefs.GetInt("Unit8Level") > 19)
		       				{
		       					if(Sound)
					       		{
					       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
					       		}
					       		ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.MaxLevel"));
		       				}
	       				}
	       				if(PlayerPrefs.GetInt("Slot8") == 0)
       					{
       						var DCost8 = 230;
       						if(Diamo < DCost8)
       						{
       							if(Sound)
					       		{
					       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
					       		}
					       		ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.NotEnoughDiamonds"));
       						}
       						if(Diamo >= DCost8)
       						{
       							Diamo = Diamo - DCost8;
       							Upgrades.Slot8 = 1;
       							PlayerPrefs.SetInt("Diamonds", (PlayerPrefs.GetInt("Diamonds") - DCost8));
       							PlayerPrefs.SetInt("Slot8",1); 
       							PlayerPrefs.SetInt("Unit8Level",1);
       							PlayerPrefs.SetInt("TotalUnlocks",PlayerPrefs.GetInt("TotalUnlocks")+1);
       						}
       					}
       				}
       				if(Upgrades.Selected == 9)
       				{
       					ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.OutOf"));
//       					var Cost9 = (1000 * (PlayerPrefs.GetInt("PagodaLevel") + 1));
//	       				if(Skill < Cost9)
//	       				{
//	       					if(Sound)
//				       		{
//				       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
//				       		}
//				       		ClearScreen("Not enough Skill");
//	       				}
//	       				if(Skill >= Cost9 && PlayerPrefs.GetInt("PagodaLevel") < 20)
//	       				{
//	       					Buy(Cost9);
//	       					Skill = Skill - Cost9;
//	       					PlayerPrefs.SetInt("PagodaLevel",PlayerPrefs.GetInt("PagodaLevel")+1);
//	       				}
//	       				if(PlayerPrefs.GetInt("PagodaLevel") > 19)
//	       				{
//	       					if(Sound)
//				       		{
//				       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
//				       		}
//				       		ClearScreen("Max Level");
//	       				}
       				}
       				if(Upgrades.Selected == 10)
       				{
//       					if(PlayerPrefs.GetInt("StoneLevel") >= 1)
//						{
//	       					var Cost10 = (-725+(725 * (PlayerPrefs.GetInt("StoneLevel") + 1)));
//		       				if(Skill < Cost10)
//		       				{
//		       					if(Sound)
//					       		{
//					       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
//					       		}
//					       		ClearScreen("Not enough Skill");
//		       				}
//		       				if(Skill >= Cost10 && PlayerPrefs.GetInt("StoneLevel") < 20)
//		       				{
//		       					Buy(Cost10);
//		       					Skill = Skill - Cost10;
//		       					PlayerPrefs.SetInt("StoneLevel",PlayerPrefs.GetInt("StoneLevel")+1);
//		       				}
//		       				if(PlayerPrefs.GetInt("StoneLevel") > 19)
//		       				{
//		       					if(Sound)
//					       		{
//					       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
//					       		}
//					       		ClearScreen("Max Level");
//		       				}
//	       				}
	
						if(PlayerPrefs.GetInt("StoneLevel") == 1)
						{
							ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.Unlocked"));
						}
	       				
	       				if(PlayerPrefs.GetInt("StoneLevel") == 0)
						{
	       					var DCost10 = 5;
		       				if(Diamo < DCost10)
		       				{
		       					if(Sound)
					       		{
					       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
					       		}
					       		ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.NotEnoughDiamonds"));
		       				}
		       				if(Diamo >= DCost10)
		       				{
		       					Diamo = Diamo - DCost10;
		       					Upgrades.Stone = 1;
		       					PlayerPrefs.SetInt("Diamonds", (PlayerPrefs.GetInt("Diamonds") - DCost10));
		       					PlayerPrefs.SetInt("StoneLevel",PlayerPrefs.GetInt("StoneLevel")+1);
		       				}
	       				}
       				}
       				if(Upgrades.Selected == 11)
       				{
       					var Cost11 = (10000 * (PlayerPrefs.GetInt("MinerLevel")));
		       			if(Skill < Cost11)
		       			{
		       				if(Sound)
					    	{
					    		AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
					    	}
					    	ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.NotEnoughSkill"));
		       			}
		       			if(Skill >= Cost11 && PlayerPrefs.GetInt("MinerLevel") < 40)
		       			{
		       				Buy(Cost11);
		       				Skill = Skill - Cost11;
		       				PlayerPrefs.SetInt("MinerLevel",PlayerPrefs.GetInt("MinerLevel")+1);
		       			}
		       			if(PlayerPrefs.GetInt("MinerLevel") > 39)
	       				{
	       					if(Sound)
				       		{
				       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
				       		}
				       		ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.MaxLevel"));
	       				}
       				}
       				if(Upgrades.Selected == 12)
       				{
       					var Cost12 = (10000 * (PlayerPrefs.GetInt("CoinsLevel")));
	       				if(Skill < Cost12)
	       				{
	       					if(Sound)
				       		{
				       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
				       		}
				       		ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.NotEnoughSkill"));
	       				}
	       				if(Skill >= Cost12 && PlayerPrefs.GetInt("CoinsLevel") < 40)
		       			{
		       				Buy(Cost12);
		       				Skill = Skill - Cost12;
		       				PlayerPrefs.SetInt("CoinsLevel",PlayerPrefs.GetInt("CoinsLevel")+1);
		       			}
		       			if(PlayerPrefs.GetInt("CoinsLevel") > 39)
	       				{
	       					if(Sound)
				       		{
				       			AudioSource.PlayClipAtPoint(No, Camera.main.transform.position);
				       		}
				       		ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.MaxLevel"));
	       				}
	       				
       				}
       				GPG.AchievementRecruiter();
       				GPG.AchievementArmyBuilder();
       				GPG.AchievementWarLord();
       				GPG.AchievementFullPotential();
       				break;
       		}
       		StartCoroutine("Reset");
       	}
    }
    if(Num == 1)
    {
    	if(Upgrades.Selected == 1)
    	{
    		if(Unit1LVL < 7)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja1OnLevel1");
			}
			if(Unit1LVL >= 7 && Unit1LVL < 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja1OnLevel2");
			}
			if(Unit1LVL >= 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja1OnLevel3");
			}
    		
    	}
    	if(Upgrades.Selected != 1)
    	{
    		if(Unit1LVL < 7)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja1Level1");
			}
			if(Unit1LVL >= 7 && Unit1LVL < 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja1Level2");
			}
			if(Unit1LVL >= 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja1Level3");
			}
    	}
    }
    if(Num == 2)
    {
    	if(Upgrades.Selected == 2)
    	{
    		if(Unit2LVL < 7)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja2OnLevel1");
			}
			if(Unit2LVL >= 7 && Unit2LVL < 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja2OnLevel2");
			}
			if(Unit2LVL >= 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja2OnLevel3");
			}
    	}
    	if(Upgrades.Selected != 2)
    	{
    		if(Unit2LVL < 7)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja2Level1");
			}
			if(Unit2LVL >= 7 && Unit2LVL < 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja2Level2");
			}
			if(Unit2LVL >= 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja2Level3");
			}
    	}   
    }
    if(Num == 3)
    {
    	if(Upgrades.Selected == 3)
    	{
    		if(Unit3LVL < 7)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja3OnLevel1");
			}
			if(Unit3LVL >= 7 && Unit3LVL < 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja3OnLevel2");
			}
			if(Unit3LVL >= 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja3OnLevel3");
			}
    	}
    	if(Upgrades.Selected != 3)
    	{
    		if(Unit3LVL < 7)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja3Level1");
			}
			if(Unit3LVL >= 7 && Unit3LVL < 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja3Level2");
			}
			if(Unit3LVL >= 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja3Level3");
			}
    	}
    }
    if(Num == 4)
    {
    	if(Upgrades.Selected == 4)
    	{
    		if(Unit4LVL < 7)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja4OnLevel1");
			}
			if(Unit4LVL >= 7 && Unit4LVL < 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja4OnLevel2");
			}
			if(Unit4LVL >= 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja4OnLevel3");
			}
    	}
    	if(Upgrades.Selected != 4)
    	{
    		if(Unit4LVL < 7)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja4Level1");
			}
			if(Unit4LVL >= 7 && Unit4LVL < 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja4Level2");
			}
			if(Unit4LVL >= 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja4Level3");
			}
    	}
    }
    if(Num == 5)
    {
    	if(Upgrades.Selected == 5)
    	{
    		if(Unit5LVL < 7)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja5OnLevel1");
			}
			if(Unit5LVL >= 7 && Unit5LVL < 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja5OnLevel2");
			}
			if(Unit5LVL >= 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja5OnLevel3");
			}
    	}
    	if(Upgrades.Selected != 5)
    	{
    		if(Unit5LVL < 7)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja5Level1");
			}
			if(Unit5LVL >= 7 && Unit5LVL < 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja5Level2");
			}
			if(Unit5LVL >= 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja5Level3");
			}
    	}
    }
    if(Num == 6)
    {
    	if(Upgrades.Selected == 6)
    	{
    		if(Unit6LVL < 7)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja6OnLevel1");
			}
			if(Unit6LVL >= 7 && Unit6LVL < 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja6OnLevel2");
			}
			if(Unit6LVL >= 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja6OnLevel3");
			}
    	}
    	if(Upgrades.Selected != 6)
    	{
    		if(Unit6LVL < 7)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja6Level1");
			}
			if(Unit6LVL >= 7 && Unit6LVL < 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja6Level2");
			}
			if(Unit6LVL >= 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja6Level3");
			}
    	}
    }
    if(Num == 7)
    {
    	if(Upgrades.Selected == 7)
    	{
    		if(Unit7LVL < 7)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja7OnLevel1");
			}
			if(Unit7LVL >= 7 && Unit7LVL < 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja7OnLevel2");
			}
			if(Unit7LVL >= 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja7OnLevel3");
			}
    	}
    	if(Upgrades.Selected != 7)
    	{
    		if(Unit7LVL < 7)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja7Level1");
			}
			if(Unit7LVL >= 7 && Unit7LVL < 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja7Level2");
			}
			if(Unit7LVL >= 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja7Level3");
			}
    	}
    }
    if(Num == 8)
    {
    	if(Upgrades.Selected == 8)
    	{
    		if(Unit8LVL < 7)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja8OnLevel1");
			}
			if(Unit8LVL >= 7 && Unit8LVL < 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja8OnLevel2");
			}
			if(Unit8LVL >= 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja8OnLevel3");
			}
    	}
    	if(Upgrades.Selected != 8)
    	{
    		if(Unit8LVL < 7)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja8Level1");
			}
			if(Unit8LVL >= 7 && Unit8LVL < 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja8Level2");
			}
			if(Unit8LVL >= 14)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("Ninja8Level3");
			}
    	}
    }
    if(Num == 9)
    {
    	if(Upgrades.Selected == 9)
    	{
    		Tex.spriteId = Tex.GetSpriteIdByName("HPOn");
    	}
    	if(Upgrades.Selected != 9)
    	{
    		Tex.spriteId = Tex.GetSpriteIdByName("HP");
    	}
    }
    if(Num == 10)
    {
    	if(Upgrades.Selected == 10)
    	{
    		Tex.spriteId = Tex.GetSpriteIdByName("StoneOn");
    	}
    	if(Upgrades.Selected != 10)
    	{
    		Tex.spriteId = Tex.GetSpriteIdByName("Stone");
    	}
    }
    if(Num == 11)
    {
    	if(Upgrades.Selected == 11)
    	{
    		Tex.spriteId = Tex.GetSpriteIdByName("MinerOn");
    	}
    	if(Upgrades.Selected != 11)
    	{
    		Tex.spriteId = Tex.GetSpriteIdByName("Miner");
    	}
    }
    if(Num == 12)
    {
    	if(Upgrades.Selected == 12)
    	{
    		Tex.spriteId = Tex.GetSpriteIdByName("CoinsOn");
    	}
    	if(Upgrades.Selected != 12)
    	{
    		Tex.spriteId = Tex.GetSpriteIdByName("Coins");
    	}
    }
    if(Num == 99)
    {
    	if(Upgrades.Selected == 1)
    	{
    		if(PlayerPrefs.GetInt("Unit1Level") < 20)
			{
    			Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
    			TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Upgrade");
    		}
    		if(PlayerPrefs.GetInt("Unit1Level") > 19)
			{
    			Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
    			TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Upgrade");
    		}
    	}
	    if(Upgrades.Selected == 2)
		{
			if(PlayerPrefs.GetInt("Slot2") == 0)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
				TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.Buy");
			}
			if(PlayerPrefs.GetInt("Slot2") == 1)
			{
				if(PlayerPrefs.GetInt("Unit2Level") < 20)
				{
	    			Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
	    			TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Upgrade");
	    		}
	    		if(PlayerPrefs.GetInt("Unit2Level") > 19)
				{
	    			Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
	    			TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Upgrade");
	    		}
			}
		}
		if(Upgrades.Selected == 3)
		{
			if(PlayerPrefs.GetInt("Slot3") == 0)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
				TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.Buy");
			}
			if(PlayerPrefs.GetInt("Slot3") == 1)
			{
				if(PlayerPrefs.GetInt("Unit3Level") < 20)
				{
	    			Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
	    			TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Upgrade");
	    		}
	    		if(PlayerPrefs.GetInt("Unit3Level") > 19)
				{
	    			Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
	    			TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Upgrade");
	    		}
			}
		}
		if(Upgrades.Selected == 4)
		{
			if(PlayerPrefs.GetInt("Slot4") == 0)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
				TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.Buy");
			}
			if(PlayerPrefs.GetInt("Slot4") == 1)
			{
				if(PlayerPrefs.GetInt("Unit4Level") < 20)
				{
	    			Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
	    			TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Upgrade");
	    		}
	    		if(PlayerPrefs.GetInt("Unit4Level") > 19)
				{
	    			Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
	    			TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Upgrade");
	    		}
			}
		}
		if(Upgrades.Selected == 5)
		{
			if(PlayerPrefs.GetInt("Slot5") == 0)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
				TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.Buy");
			}
			if(PlayerPrefs.GetInt("Slot5") == 1)
			{
				if(PlayerPrefs.GetInt("Unit5Level") < 20)
				{
	    			Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
	    			TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Upgrade");
	    		}
	    		if(PlayerPrefs.GetInt("Unit5Level") > 19)
				{
	    			Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
	    			TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Upgrade");
	    		}
			}
		}
		if(Upgrades.Selected == 6)
		{
			if(PlayerPrefs.GetInt("Slot6") == 0)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
				TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.Buy");
			}
			if(PlayerPrefs.GetInt("Slot6") == 1)
			{
				if(PlayerPrefs.GetInt("Unit6Level") < 20)
				{
	    			Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
	    			TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Upgrade");
	    		}
	    		if(PlayerPrefs.GetInt("Unit6Level") > 19)
				{
	    			Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
	    			TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Upgrade");
	    		}
			}
		}
		if(Upgrades.Selected == 7)
		{
			if(PlayerPrefs.GetInt("Slot7") == 0)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
				TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.Buy");
			}
			if(PlayerPrefs.GetInt("Slot7") == 1)
			{
				if(PlayerPrefs.GetInt("Unit7Level") < 20)
				{
	    			Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
	    			TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Upgrade");
	    		}
	    		if(PlayerPrefs.GetInt("Unit7Level") > 19)
				{
	    			Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
	    			TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Upgrade");
	    		}
			}
		}
		if(Upgrades.Selected == 8)
		{
			if(PlayerPrefs.GetInt("Slot8") == 0)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
				TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.Buy");
			}
			if(PlayerPrefs.GetInt("Slot8") == 1)
			{
				if(PlayerPrefs.GetInt("Unit8Level") < 20)
				{
	    			Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
	    			TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Upgrade");
	    		}
	    		if(PlayerPrefs.GetInt("Unit8Level") > 19)
				{
	    			Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
	    			TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Upgrade");
	    		}
			}
		}
		if(Upgrades.Selected == 9)
		{
//			if(PlayerPrefs.GetInt("PagodaLevel") < 20)
//			{
//    			Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
//				TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Upgrade");
//    		}
//    		if(PlayerPrefs.GetInt("PagodaLevel") > 19)
//			{
    			Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
    			TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Upgrade");
//    		}
		}
		if(Upgrades.Selected == 10)
		{
			if(PlayerPrefs.GetInt("StoneLevel") == 0)
			{
				Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
				TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Upgrade");
			}
			if(PlayerPrefs.GetInt("StoneLevel") >= 1)
			{
//				if(PlayerPrefs.GetInt("StoneLevel") < 20)
//				{
//	    			Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
//	    		}
//	    		if(PlayerPrefs.GetInt("StoneLevel") > 19)
//				{
	    			Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
	    			TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Upgrade");
//	    		}
			}
		}
		if(Upgrades.Selected == 11)
		{
			if(PlayerPrefs.GetInt("MinerLevel") < 40)
			{
    			Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
    			TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Upgrade");
    		}
    		if(PlayerPrefs.GetInt("MinerLevel") > 39)
			{
    			Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
    			TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Upgrade");
    		}
		}
		if(Upgrades.Selected == 12)
		{
			if(PlayerPrefs.GetInt("CoinsLevel") < 40)
			{
    			Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
    			TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Upgrade");
    		}
    		if(PlayerPrefs.GetInt("CoinsLevel") > 39)
			{
    			Tex.spriteId = Tex.GetSpriteIdByName("MenuBack");
    			TextM.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Upgrade");
    		}
		}
	}
}

function Buy(Cost : int)
{
	PlayerPrefs.SetInt("TotalSkill", (PlayerPrefs.GetInt("TotalSkill") - Cost));
}

function Reset()
{
	yield WaitForSeconds(1);
	Ready = true;
}

function ClearScreen(MesTex)
{	
	var Boa : GameObject[];
	Boa = GameObject.FindGameObjectsWithTag("Board");
    for(var c = 0; c < Boa.length; c++)
    {
       	Destroy(Boa[c]);
	}
	Box = Instantiate(Resources.Load("MessageBox"),Vector3(0,5,0),Quaternion.Euler(90,0,0));
	Mess = Instantiate(Resources.Load("Message",TextMesh),Vector3(0,5.2,0),Quaternion.Euler(90,0,0));
	Mess.text = MesTex;
}