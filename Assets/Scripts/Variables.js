#pragma strict

static var Coins : float;
static var Diamo : float;

static var Done : boolean;
static var Intro : boolean;
static var Pause : boolean;
static var FirstLoad : boolean;
static var Tutorial : boolean;
static var OptionO : boolean;
static var SocialBo : boolean;
static var ResetOp : boolean;
static var ResetSure : boolean;
static var TPause : boolean;
static var Movement : boolean;
static var Debugger : boolean;
static var InsCount : int;

function Start () 
{
	DontDestroyOnLoad(this);
	Setup();
	FirstLoad = true;
	Tutorial = false;
	Screen.sleepTimeout = SleepTimeout.NeverSleep;
	InsCount = 0;
}

function Update () 
{

}

static function Setup()
{
	if(!PlayerPrefs.HasKey("NoAds"))
	{
		PlayerPrefs.SetInt("NoAds",0);
	}
	if(!PlayerPrefs.HasKey("FreeAds"))
	{
		PlayerPrefs.SetInt("FreeAds",1);
	}
	if(!PlayerPrefs.HasKey("Sound"))
	{
		PlayerPrefs.SetInt("Sound",1);
	}
	if(!PlayerPrefs.HasKey("Tutorial"))
	{
		PlayerPrefs.SetInt("Tutorial",0);
	}
	if(!PlayerPrefs.HasKey("UTutorial"))
	{
		PlayerPrefs.SetInt("UTutorial",0);
	}
	if(!PlayerPrefs.HasKey("Slot1"))
	{
		PlayerPrefs.SetInt("Slot1",1);
	}
	if(!PlayerPrefs.HasKey("Slot2"))
	{
		PlayerPrefs.SetInt("Slot2",0);
	}
	if(!PlayerPrefs.HasKey("Slot3"))
	{
		PlayerPrefs.SetInt("Slot3",0);
	}
	if(!PlayerPrefs.HasKey("Slot4"))
	{
		PlayerPrefs.SetInt("Slot4",0);
	}
	if(!PlayerPrefs.HasKey("Slot5"))
	{
		PlayerPrefs.SetInt("Slot5",0);
	}
	if(!PlayerPrefs.HasKey("Slot6"))
	{
		PlayerPrefs.SetInt("Slot6",0);
	}
	if(!PlayerPrefs.HasKey("Slot7"))
	{
		PlayerPrefs.SetInt("Slot7",0);
	}
	if(!PlayerPrefs.HasKey("Slot8"))
	{
		PlayerPrefs.SetInt("Slot8",0);
	}
	if(!PlayerPrefs.HasKey("TotalUnlocks"))
	{
		PlayerPrefs.SetInt("TotalUnlocks",1);
	}
	if(!PlayerPrefs.HasKey("Level"))
	{
		PlayerPrefs.SetInt("Level",1);
	}
	if(!PlayerPrefs.HasKey("VisitedFacebook"))
	{
		PlayerPrefs.SetInt("VisitedFacebook",0);
	}
	if(!PlayerPrefs.HasKey("VisitedTwitter"))
	{
		PlayerPrefs.SetInt("VisitedTwitter",0);
	}
	if(!PlayerPrefs.HasKey("VisitedWebsite"))
	{
		PlayerPrefs.SetInt("VisitedWebsite",0);
	}
	if(!PlayerPrefs.HasKey("VisitedRate"))
	{
		PlayerPrefs.SetInt("VisitedRate",0);
	}
	if(!PlayerPrefs.HasKey("Bonus"))
	{
		PlayerPrefs.SetInt("Bonus",0);
	}
	if(!PlayerPrefs.HasKey("Streak"))
	{
		PlayerPrefs.SetInt("Streak",0);
	}
	NinjaUnits();
	OniUnits();
	Currency();
}

static function Currency()
{
	if(!PlayerPrefs.HasKey("Diamonds"))
	{
		PlayerPrefs.SetInt("Diamonds",0);
	}
	if(!PlayerPrefs.HasKey("TotalDiamonds"))
	{
		PlayerPrefs.SetInt("TotalDiamonds",0);
	}
	if(!PlayerPrefs.HasKey("TotalCoins"))
	{
		PlayerPrefs.SetInt("TotalCoins",0);
	}
	if(!PlayerPrefs.HasKey("Score"))
	{
		PlayerPrefs.SetInt("Score",0);
	}
	if(!PlayerPrefs.HasKey("BonusScore"))
	{
		PlayerPrefs.SetInt("BonusScore",0);
	}
	if(!PlayerPrefs.HasKey("TotalScore"))
	{
		PlayerPrefs.SetInt("TotalScore",0);
	}
	if(!PlayerPrefs.HasKey("Skill"))
	{
		PlayerPrefs.SetInt("Skill",0);
	}
	if(!PlayerPrefs.HasKey("BonusSkill"))
	{
		PlayerPrefs.SetInt("BonusSkill",0);
	}
	if(!PlayerPrefs.HasKey("TotalSkill"))
	{
		PlayerPrefs.SetInt("TotalSkill",0);
	}
	if(!PlayerPrefs.HasKey("TotalKills"))
	{
		PlayerPrefs.SetInt("TotalKills",0);
	}
}

static function NinjaUnits()
{
	if(!PlayerPrefs.HasKey("Swordsman"))
	{
		PlayerPrefs.SetInt("Swordsman",0);
	}
	if(!PlayerPrefs.HasKey("Nunchuckman"))
	{
		PlayerPrefs.SetInt("Nunchuckman",0);
	}
	if(!PlayerPrefs.HasKey("Throwingman"))
	{
		PlayerPrefs.SetInt("Throwingman",0);
	}
	if(!PlayerPrefs.HasKey("Longbowman"))
	{
		PlayerPrefs.SetInt("Longbowman",0);
	}
	if(!PlayerPrefs.HasKey("Woodman"))
	{
		PlayerPrefs.SetInt("Woodman",0);
	}
	if(!PlayerPrefs.HasKey("Chainman"))
	{
		PlayerPrefs.SetInt("Chainman",0);
	}
	if(!PlayerPrefs.HasKey("Saiman"))
	{
		PlayerPrefs.SetInt("Saiman",0);
	}
	if(!PlayerPrefs.HasKey("Clawman"))
	{
		PlayerPrefs.SetInt("Clawman",0);
	}
	if(!PlayerPrefs.HasKey("Unit1Level"))
	{
		PlayerPrefs.SetInt("Unit1Level",1);
	}
	if(!PlayerPrefs.HasKey("Unit2Level"))
	{
		PlayerPrefs.SetInt("Unit2Level",0);
	}
	if(!PlayerPrefs.HasKey("Unit3Level"))
	{
		PlayerPrefs.SetInt("Unit3Level",0);
	}
	if(!PlayerPrefs.HasKey("Unit4Level"))
	{
		PlayerPrefs.SetInt("Unit4Level",0);
	}
	if(!PlayerPrefs.HasKey("Unit5Level"))
	{
		PlayerPrefs.SetInt("Unit5Level",0);
	}
	if(!PlayerPrefs.HasKey("Unit6Level"))
	{
		PlayerPrefs.SetInt("Unit6Level",0);
	}
	if(!PlayerPrefs.HasKey("Unit7Level"))
	{
		PlayerPrefs.SetInt("Unit7Level",0);
	}
	if(!PlayerPrefs.HasKey("Unit8Level"))
	{
		PlayerPrefs.SetInt("Unit8Level",0);
	}
	if(!PlayerPrefs.HasKey("MinerLevel"))
	{
		PlayerPrefs.SetInt("MinerLevel",1);
	}
	if(!PlayerPrefs.HasKey("PagodaLevel"))
	{
		PlayerPrefs.SetInt("PagodaLevel",1);
	}
	if(!PlayerPrefs.HasKey("StoneLevel"))
	{
		PlayerPrefs.SetInt("StoneLevel",0);
	}
	if(PlayerPrefs.GetInt("StoneLevel") > 1)
	{
		PlayerPrefs.SetInt("StoneLevel",1);
	}
	if(!PlayerPrefs.HasKey("CoinsLevel"))
	{
		PlayerPrefs.SetInt("CoinsLevel",1);
	}
}

static function OniUnits()
{
	if(!PlayerPrefs.HasKey("OniUnit1Level"))
	{
		PlayerPrefs.SetInt("OniUnit1Level",1);
	}
	if(!PlayerPrefs.HasKey("OniUnit2Level"))
	{
		PlayerPrefs.SetInt("OniUnit2Level",1);
	}
	if(!PlayerPrefs.HasKey("OniUnit3Level"))
	{
		PlayerPrefs.SetInt("OniUnit3Level",1);
	}
	if(!PlayerPrefs.HasKey("OniUnit4Level"))
	{
		PlayerPrefs.SetInt("OniUnit4Level",1);
	}
	if(!PlayerPrefs.HasKey("OniUnit5Level"))
	{
		PlayerPrefs.SetInt("OniUnit5Level",1);
	}
	if(!PlayerPrefs.HasKey("OniUnit6Level"))
	{
		PlayerPrefs.SetInt("OniUnit6Level",1);
	}
	if(!PlayerPrefs.HasKey("OniUnit7Level"))
	{
		PlayerPrefs.SetInt("OniUnit7Level",1);
	}
	if(!PlayerPrefs.HasKey("OniUnit8Level"))
	{
		PlayerPrefs.SetInt("OniUnit8Level",1);
	}
}