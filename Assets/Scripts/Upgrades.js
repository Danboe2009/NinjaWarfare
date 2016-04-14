#pragma strict

var BSprite : tk2dSprite;
var SSprite : tk2dSprite;
//var WSprite : tk2dSprite;
//var GSprite : tk2dSprite;
var WWords : TextMesh;

static var Selected : int;
static var BuyDiam : boolean;

static var Slot2 : int;
static var Slot3 : int;
static var Slot4 : int;
static var Slot5 : int;
static var Slot6 : int;
static var Slot7 : int;
static var Slot8 : int;
static var Stone : int;

private var Skil : TextMesh;
private var SkilN : TextMesh;
private var Line1 : TextMesh;
private var Line2 : TextMesh;
private var Line3 : TextMesh;
private var Line4 : TextMesh; 
private var DGree : Color; 

private var LVL1 : TextMesh;
private var LVL2 : TextMesh;
private var LVL3 : TextMesh;
private var LVL4 : TextMesh;
private var LVL5 : TextMesh;
private var LVL6 : TextMesh;
private var LVL7 : TextMesh;
private var LVL8 : TextMesh;
private var Pago : TextMesh;
private var Ston : TextMesh;
private var Mine : TextMesh;
private var Coin : TextMesh;
private var Back : GameObject;
private var NAro : tk2dSprite;
private var UAro : tk2dSprite;

Back = GameObject.Find("Back");
NAro = GameObject.Find("NBlueArrow").GetComponent(tk2dSprite);
UAro = GameObject.Find("UBlueArrow").GetComponent(tk2dSprite);
Line1 = GameObject.Find("Line1").GetComponent(TextMesh);
Line2 = GameObject.Find("Line2").GetComponent(TextMesh);
Line3 = GameObject.Find("Line3").GetComponent(TextMesh);
Line4 = GameObject.Find("Line4").GetComponent(TextMesh);
Skil = GameObject.Find("Skill").GetComponent(TextMesh);
SkilN = GameObject.Find("SkillNeeded").GetComponent(TextMesh);

LVL1 = GameObject.Find("Ninja1LVL").GetComponent(TextMesh);
LVL2 = GameObject.Find("Ninja2LVL").GetComponent(TextMesh);
LVL3 = GameObject.Find("Ninja3LVL").GetComponent(TextMesh);
LVL4 = GameObject.Find("Ninja4LVL").GetComponent(TextMesh);
LVL5 = GameObject.Find("Ninja5LVL").GetComponent(TextMesh);
LVL6 = GameObject.Find("Ninja6LVL").GetComponent(TextMesh);
LVL7 = GameObject.Find("Ninja7LVL").GetComponent(TextMesh);
LVL8 = GameObject.Find("Ninja8LVL").GetComponent(TextMesh);
Pago = GameObject.Find("HPLVL").GetComponent(TextMesh);
Ston = GameObject.Find("StoneLVL").GetComponent(TextMesh);
Mine = GameObject.Find("MinerLVL").GetComponent(TextMesh);
Coin = GameObject.Find("CoinsLVL").GetComponent(TextMesh);

function Start () 
{
	DGree = Color(0.0, 0.75, 0.1);
	
	if(PlayerPrefs.GetInt("UTutorial") == 0 && PlayerPrefs.GetInt("Level") == 2)
	{
		NAro.color = Color(1,1,1,0);
		UAro.color = Color(1,1,1,0);
		Back.transform.position = Vector3(0,6,0);
		Tutorial();
	}
	if(PlayerPrefs.GetInt("UTutorial") == 1 || PlayerPrefs.GetInt("Level") != 2)
	{
		NAro.color = Color(1,1,1,0);
		UAro.color = Color(1,1,1,0);
		BSprite.color = Color(1,1,1,0);
		SSprite.color = Color(1,1,1,0);
		//WSprite.color = Color(1,1,1,0);
		//GSprite.color = Color(1,1,1,0);
		WWords.text = "";
	}
	
	BuyDiam = false;
	
	Line1.text = "";
	Line2.text = "";
	Line3.text = "";
	Line4.text = "";
	Skil.text = "";
	Skil.color = Color.black;
	SkilN.text = "";
	Selected = 0;
	
	Slot2 = PlayerPrefs.GetInt("Slot2");
	Slot3 = PlayerPrefs.GetInt("Slot3");
	Slot4 = PlayerPrefs.GetInt("Slot4");
	Slot5 = PlayerPrefs.GetInt("Slot5");
	Slot6 = PlayerPrefs.GetInt("Slot6");
	Slot7 = PlayerPrefs.GetInt("Slot7");
	Slot8 = PlayerPrefs.GetInt("Slot8");
	Stone = PlayerPrefs.GetInt("StoneLevel");
}

function Update () 
{
	if(Selected == 1)
	{
		if(PlayerPrefs.GetInt("Slot1") == 1 && PlayerPrefs.GetInt("Unit1Level") < 20)
		{
			Line1.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.HP") + " " + (50 + ((PlayerPrefs.GetInt("Unit1Level") - 1) * 15)) + " -> " +  (50 + ((PlayerPrefs.GetInt("Unit1Level")) * 15));
			Line2.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.Attack") + " " + (2 + ((PlayerPrefs.GetInt("Unit1Level") - 1) * 2)) + " -> " + (2 + ((PlayerPrefs.GetInt("Unit1Level")) * 2));
			Line3.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Skill");
			Line4.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.SkillNeeded");
			Skil.text = PlayerPrefs.GetInt("TotalSkill").ToString();
			SkilN.text = (-725+(725 * (PlayerPrefs.GetInt("Unit1Level") + 1))).ToString();
			if(PlayerPrefs.GetInt("TotalSkill") > (-725+(725 * (PlayerPrefs.GetInt("Unit1Level") + 1))))
			{
				Skil.color = DGree;
			}
			else
			{
				Skil.color = Color.red;
			}
		}
		if(PlayerPrefs.GetInt("Unit1Level") >= 20)
		{
			Line1.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.HP") + " " + (50 + ((PlayerPrefs.GetInt("Unit1Level") - 1) * 15));
			Line2.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.Attack") + " " + (2 + ((PlayerPrefs.GetInt("Unit1Level") - 1) * 2));
			Line3.text = "";
			Line4.text = "";
			Skil.text = "";
			Skil.color = Color.black;
			SkilN.text = "";
		}
	}
	if(Selected == 2)
	{
		if(PlayerPrefs.GetInt("Slot2") == 1 && PlayerPrefs.GetInt("Unit2Level") < 20)
		{
			Line1.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.HP") + " " + (200 + ((PlayerPrefs.GetInt("Unit2Level") - 1) * 20)) + " -> " +  (200 + ((PlayerPrefs.GetInt("Unit2Level")) * 20));
			Line2.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.Attack") + " " + (22 + ((PlayerPrefs.GetInt("Unit2Level") - 1) * 4)) + " -> " + (22 + ((PlayerPrefs.GetInt("Unit2Level")) * 4));
			Line3.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Skill");
			Line4.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.SkillNeeded");
			Skil.text = PlayerPrefs.GetInt("TotalSkill").ToString();
			SkilN.text = (-725+(725 * (PlayerPrefs.GetInt("Unit2Level") + 1))).ToString();
			if(PlayerPrefs.GetInt("TotalSkill") >= (-725+(725 * (PlayerPrefs.GetInt("Unit2Level") + 1))))
			{
				Skil.color = DGree;
			}
			else
			{
				Skil.color = Color.red;
			}
		}
		if(PlayerPrefs.GetInt("Unit2Level") >= 20)
		{
			Line1.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.HP") + " " + (200 + ((PlayerPrefs.GetInt("Unit2Level") - 1) * 20));
			Line2.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.Attack") + " " + (22 + ((PlayerPrefs.GetInt("Unit2Level") - 1) * 4));
			Line3.text = "";
			Line4.text = "";
			Skil.text = "";
			Skil.color = Color.black;
			SkilN.text = "";
		}
		if(PlayerPrefs.GetInt("Slot2") == 0)
		{
			Line1.text = UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.Locked");
			Line2.text = "10 " + UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.DiamondsNeeded");
			Line3.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Diamonds");
			Line4.text = "";
			Skil.text = PlayerPrefs.GetInt("Diamonds").ToString();
			SkilN.text = "";
			if(PlayerPrefs.GetInt("Diamonds") >= 10)
			{
				Skil.color = DGree;
			}
			else
			{
				Skil.color = Color.red;
			}
		}
	}
	if(Selected == 3)
	{
		if(PlayerPrefs.GetInt("Slot3") == 1 && PlayerPrefs.GetInt("Unit3Level") < 20)
		{
			Line1.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.HP") + " " + (430 + ((PlayerPrefs.GetInt("Unit3Level") - 1) * 25)) + " -> " +  (430 + ((PlayerPrefs.GetInt("Unit3Level")) * 25));
			Line2.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.Attack") + " " + (48 + ((PlayerPrefs.GetInt("Unit3Level") - 1) * 6)) + " -> " + (48 + ((PlayerPrefs.GetInt("Unit3Level")) * 6));
			Line3.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Skill");
			Line4.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.SkillNeeded");
			Skil.text = PlayerPrefs.GetInt("TotalSkill").ToString();
			SkilN.text = (-725+(725 * (PlayerPrefs.GetInt("Unit3Level") + 1))).ToString();
			if(PlayerPrefs.GetInt("TotalSkill") >= (-725+(725 * (PlayerPrefs.GetInt("Unit3Level") + 1))))
			{
				Skil.color = DGree;
			}
			else
			{
				Skil.color = Color.red;
			}
		}
		if(PlayerPrefs.GetInt("Unit3Level") >= 20)
		{
			Line1.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.HP") + " " + (430 + ((PlayerPrefs.GetInt("Unit3Level") - 1) * 25));
			Line2.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.Attack") + " " + (48 + ((PlayerPrefs.GetInt("Unit3Level") - 1) * 6));
			Line3.text = "";
			Line4.text = "";
			Skil.text = "";
			Skil.color = Color.black;
			SkilN.text = "";
		}
		if(PlayerPrefs.GetInt("Slot3") == 0)
		{
			Line1.text = UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.Locked");
			Line2.text = "20 " + UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.DiamondsNeeded");
			Line3.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Diamonds");
			Line4.text = "";
			Skil.text = PlayerPrefs.GetInt("Diamonds").ToString();
			SkilN.text = "";
			if(PlayerPrefs.GetInt("Diamonds") >= 20)
			{
				Skil.color = DGree;
			}
			else
			{
				Skil.color = Color.red;
			}
		}
	}
	if(Selected == 4)
	{
		if(PlayerPrefs.GetInt("Slot4") == 1 && PlayerPrefs.GetInt("Unit4Level") < 20)
		{
			Line1.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.HP") + " " + (612 + ((PlayerPrefs.GetInt("Unit4Level") - 1) * 30)) + " -> " +  (612 + ((PlayerPrefs.GetInt("Unit4Level")) * 30));
			Line2.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.Attack") + " " + (168 + ((PlayerPrefs.GetInt("Unit4Level") - 1) * 8)) + " -> " + (168 + ((PlayerPrefs.GetInt("Unit4Level")) * 8));
			Line3.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Skill");
			Line4.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.SkillNeeded");
			Skil.text = PlayerPrefs.GetInt("TotalSkill").ToString();
			SkilN.text = (-725+(725 * (PlayerPrefs.GetInt("Unit4Level") + 1))).ToString();
			if(PlayerPrefs.GetInt("TotalSkill") >= (-725+(725 * (PlayerPrefs.GetInt("Unit4Level") + 1))))
			{
				Skil.color = DGree;
			}
			else
			{
				Skil.color = Color.red;
			}
		}
		if(PlayerPrefs.GetInt("Unit4Level") >= 20)
		{
			Line1.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.HP") + " " + (612 + ((PlayerPrefs.GetInt("Unit4Level") - 1) * 30));
			Line2.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.Attack") + " " + (168 + ((PlayerPrefs.GetInt("Unit4Level") - 1) * 8));
			Line3.text = "";
			Line4.text = "";
			Skil.text = "";
			Skil.color = Color.black;
			SkilN.text = "";
		}
		if(PlayerPrefs.GetInt("Slot4") == 0)
		{
			Line1.text = UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.Locked");
			Line2.text = "70 " + UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.DiamondsNeeded");
			Line3.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Diamonds");
			Line4.text = "";
			Skil.text = PlayerPrefs.GetInt("Diamonds").ToString();
			SkilN.text = "";
			if(PlayerPrefs.GetInt("Diamonds") >= 70)
			{
				Skil.color = DGree;
			}
			else
			{
				Skil.color = Color.red;
			}
		}
	}
	if(Selected == 5)
	{
		if(PlayerPrefs.GetInt("Slot5") == 1 && PlayerPrefs.GetInt("Unit5Level") < 20)
		{
			Line1.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.HP") + " " + (825 + ((PlayerPrefs.GetInt("Unit5Level") - 1) * 35)) + " -> " +  (825 + ((PlayerPrefs.GetInt("Unit5Level")) * 35));
			Line2.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.Attack") + " " + (310 + ((PlayerPrefs.GetInt("Unit5Level") - 1) * 10)) + " -> " + (310 + ((PlayerPrefs.GetInt("Unit5Level")) * 10));
			Line3.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Skill");
			Line4.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.SkillNeeded");
			Skil.text = PlayerPrefs.GetInt("TotalSkill").ToString();
			SkilN.text = (-725+(725 * (PlayerPrefs.GetInt("Unit5Level") + 1))).ToString();
			if(PlayerPrefs.GetInt("TotalSkill") >= (-725+(725 * (PlayerPrefs.GetInt("Unit5Level") + 1))))
			{
				Skil.color = DGree;
			}
			else
			{
				Skil.color = Color.red;
			}
		}
		if(PlayerPrefs.GetInt("Unit5Level") >= 20)
		{
			Line1.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.HP") + " " + (825 + ((PlayerPrefs.GetInt("Unit5Level") - 1) * 35));
			Line2.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.Attack") + " " + (310 + ((PlayerPrefs.GetInt("Unit5Level") - 1) * 10));
			Line3.text = "";
			Line4.text = "";
			Skil.text = "";
			Skil.color = Color.black;
			SkilN.text = "";
		}
		if(PlayerPrefs.GetInt("Slot5") == 0)
		{
			Line1.text = UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.Locked");
			Line2.text = "110 " + UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.DiamondsNeeded");
			Line3.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Diamonds");
			Line4.text = "";
			Skil.text = PlayerPrefs.GetInt("Diamonds").ToString();
			SkilN.text = "";
			if(PlayerPrefs.GetInt("Diamonds") >= 110)
			{
				Skil.color = DGree;
			}
			else
			{
				Skil.color = Color.red;
			}
		}
	}
	if(Selected == 6)
	{
		if(PlayerPrefs.GetInt("Slot6") == 1 && PlayerPrefs.GetInt("Unit6Level") < 20)
		{
			Line1.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.HP") + " " + (1037 + ((PlayerPrefs.GetInt("Unit6Level") - 1) * 40)) + " -> " +  (1037 + ((PlayerPrefs.GetInt("Unit6Level")) * 40));
			Line2.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.Attack") + " " + (475 + ((PlayerPrefs.GetInt("Unit6Level") - 1) * 12)) + " -> " + (475 + ((PlayerPrefs.GetInt("Unit6Level")) * 12));
			Line3.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Skill");
			Line4.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.SkillNeeded");
			Skil.text = PlayerPrefs.GetInt("TotalSkill").ToString();
			SkilN.text = (-725+(725 * (PlayerPrefs.GetInt("Unit6Level") + 1))).ToString();
			if(PlayerPrefs.GetInt("TotalSkill") >= (-725+(725 * (PlayerPrefs.GetInt("Unit6Level") + 1))))
			{
				Skil.color = DGree;
			}
			else
			{
				Skil.color = Color.red;
			}
		}
		if(PlayerPrefs.GetInt("Unit6Level") >= 20)
		{
			Line1.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.HP") + " " + (1037 + ((PlayerPrefs.GetInt("Unit6Level") - 1) * 40));
			Line2.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.Attack") + " " + (475 + ((PlayerPrefs.GetInt("Unit6Level") - 1) * 12));
			Line3.text = "";
			Line4.text = "";
			Skil.text = "";
			Skil.color = Color.black;
			SkilN.text = "";
		}
		if(PlayerPrefs.GetInt("Slot6") == 0)
		{
			Line1.text = UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.Locked");
			Line2.text = "150 " + UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.DiamondsNeeded");
			Line3.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Diamonds");
			Line4.text = "";
			Skil.text = PlayerPrefs.GetInt("Diamonds").ToString();
			SkilN.text = "";
			if(PlayerPrefs.GetInt("Diamonds") >= 150)
			{
				Skil.color = DGree;
			}
			else
			{
				Skil.color = Color.red;
			}
		}
	}
	if(Selected == 7)
	{
		if(PlayerPrefs.GetInt("Slot7") == 1 && PlayerPrefs.GetInt("Unit7Level") < 20)
		{
			Line1.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.HP") + " " + (1377 + ((PlayerPrefs.GetInt("Unit7Level") - 1) * 45)) + " -> " +  (1377 + ((PlayerPrefs.GetInt("Unit7Level")) * 45));
			Line2.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.Attack") + " " + (680 + ((PlayerPrefs.GetInt("Unit7Level") - 1) * 14)) + " -> " + (680 + ((PlayerPrefs.GetInt("Unit7Level")) * 14));
			Line3.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Skill");
			Line4.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.SkillNeeded");
			Skil.text = PlayerPrefs.GetInt("TotalSkill").ToString();
			SkilN.text = (-725+(725 * (PlayerPrefs.GetInt("Unit7Level") + 1))).ToString();
			if(PlayerPrefs.GetInt("TotalSkill") >= (-725+(725 * (PlayerPrefs.GetInt("Unit7Level") + 1))))
			{
				Skil.color = DGree;
			}
			else
			{
				Skil.color = Color.red;
			}
		}
		if(PlayerPrefs.GetInt("Unit7Level") >= 20)
		{
			Line1.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.HP") + " " + (1377 + ((PlayerPrefs.GetInt("Unit7Level") - 1) * 45));
			Line2.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.Attack") + " " + (680 + ((PlayerPrefs.GetInt("Unit7Level") - 1) * 14));
			Line3.text = "";
			Line4.text = "";
			Skil.text = "";
			Skil.color = Color.black;
			SkilN.text = "";
		}
		if(PlayerPrefs.GetInt("Slot7") == 0)
		{
			Line1.text = UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.Locked");
			Line2.text = "190 " + UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.DiamondsNeeded");
			Line3.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Diamonds");
			Line4.text = "";
			Skil.text = PlayerPrefs.GetInt("Diamonds").ToString();
			SkilN.text = "";
			if(PlayerPrefs.GetInt("Diamonds") >= 190)
			{
				Skil.color = DGree;
			}
			else
			{
				Skil.color = Color.red;
			}
		}
	}
	if(Selected == 8)
	{
		if(PlayerPrefs.GetInt("Slot8") == 1 && PlayerPrefs.GetInt("Unit8Level") < 20)
		{
			Line1.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.HP") + " " + (1785 + ((PlayerPrefs.GetInt("Unit8Level") - 1) * 50)) + " -> " +  (1785 + ((PlayerPrefs.GetInt("Unit8Level")) * 50));
			Line2.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.Attack") + " " + (920 + ((PlayerPrefs.GetInt("Unit8Level") - 1) * 16)) + " -> " + (920 + ((PlayerPrefs.GetInt("Unit8Level")) * 16));
			Line3.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Skill");
			Line4.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.SkillNeeded");
			Skil.text = PlayerPrefs.GetInt("TotalSkill").ToString();
			SkilN.text = (-725+(725 * (PlayerPrefs.GetInt("Unit8Level") + 1))).ToString();
			if(PlayerPrefs.GetInt("TotalSkill") >= (-725+(725 * (PlayerPrefs.GetInt("Unit8Level") + 1))))
			{
				Skil.color = DGree;
			}
			else
			{
				Skil.color = Color.red;
			}
		}
		if(PlayerPrefs.GetInt("Unit8Level") >= 20)
		{
			Line1.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.HP") + " " + (1785 + ((PlayerPrefs.GetInt("Unit8Level") - 1) * 50));
			Line2.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.Attack") + " " + (920 + ((PlayerPrefs.GetInt("Unit8Level") - 1) * 16));
			Line3.text = "";
			Line4.text = "";
			Skil.text = "";
			Skil.color = Color.black;
			SkilN.text = "";
		}
		if(PlayerPrefs.GetInt("Slot8") == 0)
		{
			Line1.text = UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.Locked");
			Line2.text = "230 " + UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.DiamondsNeeded");
			Line3.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Diamonds");
			Line4.text = "";
			Skil.text = PlayerPrefs.GetInt("Diamonds").ToString();
			SkilN.text = "";
			if(PlayerPrefs.GetInt("Diamonds") >= 230)
			{
				Skil.color = DGree;
			}
			else
			{
				Skil.color = Color.red;
			}
		}
	}
	if(Selected == 9)
	{
//		if(PlayerPrefs.GetInt("PagodaLevel") < 20)
//		{
//			Line1.text = "Hp: " + (100 + ((PlayerPrefs.GetInt("PagodaLevel") - 1) * 100)) + " -> " +  (100 + ((PlayerPrefs.GetInt("PagodaLevel")) * 100));
//			Line2.text = "Hp Upgrade";
//			Line3.text = "Skill: ";
//			Line4.text = "Skill Needed: ";
//			Skil.text = PlayerPrefs.GetInt("TotalSkill").ToString();
//			SkilN.text = (1000 * (PlayerPrefs.GetInt("PagodaLevel") + 1)).ToString();
//			if(PlayerPrefs.GetInt("TotalSkill") >= (1000 * (PlayerPrefs.GetInt("PagodaLevel") + 1)))
//			{
//				Skil.color = DGree;
//			}
//			else
//			{
//				Skil.color = Color.red;
//			}
//		}
//		if(PlayerPrefs.GetInt("PagodaLevel") >= 20)
//		{
			Line1.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.OutOf");
			Line2.text = "";
			Line3.text = "";
			Line4.text = "";
			Skil.text = "";
			Skil.color = Color.black;
			SkilN.text = "";
//  	}
	}
	if(Selected == 10)
	{
//		if(PlayerPrefs.GetInt("StoneLevel") >= 1 && PlayerPrefs.GetInt("StoneLevel") < 20)
//		{
//			Line1.text = "Hp: " + (100 + ((PlayerPrefs.GetInt("StoneLevel") - 1) * 100)) + " -> " +  (100 + ((PlayerPrefs.GetInt("StoneLevel")) * 100));
//			Line2.text = "Hp Upgrade";
//			Line3.text = "Skill: ";
//			Line4.text = "Skill Needed: ";
//			Skil.text = PlayerPrefs.GetInt("TotalSkill").ToString();
//			SkilN.text = (-725+(725 * (PlayerPrefs.GetInt("StoneLevel") + 1))).ToString();
//			if(PlayerPrefs.GetInt("TotalSkill") >= (-725+(725 * (PlayerPrefs.GetInt("StoneLevel") + 1))))
//			{
//				Skil.color = DGree;
//			}
//			else
//			{
//				Skil.color = Color.red;
//			}
//		}
		if(PlayerPrefs.GetInt("StoneLevel") == 1)
		{
			Line1.text = UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.Unlocked");
			Line2.text = "";
			Line3.text = "";
			Line4.text = "";
			Skil.text = "";
			Skil.color = Color.black;
			SkilN.text = "";
		}
		if(PlayerPrefs.GetInt("StoneLevel") == 0)
		{
			Line1.text = UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.Locked");
			Line2.text = "5  " + UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.DiamondsNeeded");
			Line3.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Diamonds");
			Line4.text = "";
			Skil.text = PlayerPrefs.GetInt("Diamonds").ToString();
			SkilN.text = "";
			if(PlayerPrefs.GetInt("Diamonds") >= 5)
			{
				Skil.color = DGree;
			}
			else
			{
				Skil.color = Color.red;
			}
		}
	}
	if(Selected == 11)
	{
		if(PlayerPrefs.GetInt("MinerLevel") < 40)
		{
			Line1.text = ""; //"Speed: " + (10+ ((PlayerPrefs.GetInt("StoneLevel") - 1) * 10)) + " -> " +  (10 + ((PlayerPrefs.GetInt("StoneLevel")) * 10));
			Line2.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.SpeedUpgrade");
			Line3.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Skill");
			Line4.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.SkillNeeded");
			Skil.text = PlayerPrefs.GetInt("TotalSkill").ToString();
			SkilN.text = (10000 * (PlayerPrefs.GetInt("MinerLevel"))).ToString();
			if(PlayerPrefs.GetInt("TotalSkill") >= (10000 * (PlayerPrefs.GetInt("MinerLevel"))))
			{
				Skil.color = DGree;
			}
			else
			{
				Skil.color = Color.red;
			}
		}
		if(PlayerPrefs.GetInt("MinerLevel") >= 40)
		{
			Line1.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.MaxLevel");
			Line2.text = "";
			Line3.text = "";
			Line4.text = "";
			Skil.text = "";
			Skil.color = Color.black;
			SkilN.text = "";
		}
	}
	if(Selected == 12)
	{
		if(PlayerPrefs.GetInt("CoinsLevel") < 40)
		{
			Line1.text = ""; //"Speed: " + (10+ ((PlayerPrefs.GetInt("StoneLevel") - 1) * 10)) + " -> " +  (10 + ((PlayerPrefs.GetInt("StoneLevel")) * 10));
			Line2.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.Refinement");
			Line3.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Game.Skill");
			Line4.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.SkillNeeded");
			Skil.text = PlayerPrefs.GetInt("TotalSkill").ToString();
			SkilN.text = (10000 * (PlayerPrefs.GetInt("CoinsLevel"))).ToString();
			if(PlayerPrefs.GetInt("TotalSkill") >= (10000 * (PlayerPrefs.GetInt("CoinsLevel"))))
			{
				Skil.color = DGree;
			}
			else
			{
				Skil.color = Color.red;
			}
		}
		if(PlayerPrefs.GetInt("CoinsLevel") >= 40)
		{
			Line1.text = UpgradesLanguage.thisLanguageManager.GetTextValue ("Upgrades.MaxLevel");
			Line2.text = "";
			Line3.text = "";
			Line4.text = "";
			Skil.text = "";
			Skil.color = Color.black;
			SkilN.text = "";
		}
	}
	Levels();
}

function Levels()
{
	LVL1.text = UpgradesLanguage.thisLanguageManager.GetTextValue("Game.Level") + " " + PlayerPrefs.GetInt("Unit1Level").ToString() + "/20";
	LVL2.text = UpgradesLanguage.thisLanguageManager.GetTextValue("Game.Level") + " " + PlayerPrefs.GetInt("Unit2Level").ToString() + "/20";
	LVL3.text = UpgradesLanguage.thisLanguageManager.GetTextValue("Game.Level") + " " + PlayerPrefs.GetInt("Unit3Level").ToString() + "/20";
	LVL4.text = UpgradesLanguage.thisLanguageManager.GetTextValue("Game.Level") + " " + PlayerPrefs.GetInt("Unit4Level").ToString() + "/20";
	LVL5.text = UpgradesLanguage.thisLanguageManager.GetTextValue("Game.Level") + " " + PlayerPrefs.GetInt("Unit5Level").ToString() + "/20";
	LVL6.text = UpgradesLanguage.thisLanguageManager.GetTextValue("Game.Level") + " " + PlayerPrefs.GetInt("Unit6Level").ToString() + "/20";
	LVL7.text = UpgradesLanguage.thisLanguageManager.GetTextValue("Game.Level") + " " + PlayerPrefs.GetInt("Unit7Level").ToString() + "/20";
	LVL8.text = UpgradesLanguage.thisLanguageManager.GetTextValue("Game.Level") + " " + PlayerPrefs.GetInt("Unit8Level").ToString() + "/20";
	Pago.text = "";
	if(PlayerPrefs.GetInt("StoneLevel") == 0)
	{
		Ston.text = UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.Locked");
	}
	if(PlayerPrefs.GetInt("StoneLevel") == 1)
	{
		Ston.text = UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.Unlocked");
	}
//	Pago.text = "Level: " + PlayerPrefs.GetInt("PagodaLevel").ToString() + "/20";
//	Ston.text = "Level: " + PlayerPrefs.GetInt("StoneLevel").ToString() + "/20";
	Mine.text = UpgradesLanguage.thisLanguageManager.GetTextValue("Game.Level") + " " + PlayerPrefs.GetInt("MinerLevel").ToString() + "/40";
	Coin.text = UpgradesLanguage.thisLanguageManager.GetTextValue("Game.Level") + " " + PlayerPrefs.GetInt("CoinsLevel").ToString() + "/40"; 
}

function Tutorial()
{
	yield WaitForSeconds(0.1);
	Variables.Pause = true;
	//GSprite.color = Color(1,1,1,0);
	WWords.text = UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.Tutorial11") + "\n" + UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.Tutorial12");
	yield WaitForSeconds(5);
	WWords.text = UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.Tutorial21") + "\n" + UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.Tutorial22") + "\n" + UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.Tutorial23") + "\n" + UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.Tutorial24");
	Back.transform.position = Vector3(12,6,9);
	NAro.color = Color(1,1,1,1);
	UAro.color = Color(1,1,1,1);
	while(PlayerPrefs.GetInt("Unit1Level") != 2)
	{
		yield WaitForSeconds(0.1);
	}
	NAro.color = Color(1,1,1,0);
	UAro.color = Color(1,1,1,0);
	//GSprite.color = Color(1,1,1,1);
	yield WaitForSeconds(3);
	Back.transform.position = Vector3(0,6,0);
	//GSprite.color = Color(1,1,1,0);
	WWords.text = UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.Tutorial31") + "\n" + UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.Tutorial32") + "\n" + UpgradesLanguage.thisLanguageManager.GetTextValue("Upgrades.Tutorial33");
	yield WaitForSeconds(5);
	Variables.Pause = false;
	StartCoroutine("FadeOut");
	PlayerPrefs.SetInt("UTutorial",1);
}
function FadeOut () 
{
	var time : float = 0;
	var originalTime :float= time;
	while (time >= 0.0)
	{
	    time -= Time.deltaTime;
	    BSprite.color = Color.Lerp(Color(1,1,1,0), Color(1,1,1,1), time/originalTime);
	    SSprite.color = Color.Lerp(Color(1,1,1,0), Color(1,1,1,1), time/originalTime);
	    //WSprite.color = Color.Lerp(Color(1,1,1,0), Color(1,1,1,1), time/originalTime);
	    //GSprite.color = Color.Lerp(Color(1,1,1,0), Color(1,1,1,1), time/originalTime);
	    WWords.text = "";
	    yield;
	}
	Variables.Pause = false;
}
