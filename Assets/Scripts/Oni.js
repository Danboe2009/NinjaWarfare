#pragma strict
var Speed : float;
var Num : int;
var Tex : tk2dSprite;
var anim : tk2dSpriteAnimator;
var HBar : LineRenderer;
var Gre : Material;
var Yel : Material;
var Red : Material;
var Part : ParticleSystem;
var Coin : GameObject;
var Bull : GameObject;
var DBull : GameObject;
var OArr : GameObject;
var Outline : GameObject;
var OutlineB : GameObject;

var debug : boolean;

private var Closest : GameObject;
private var Enem : Ninja;
private var Dist : float;
private var OLevel : int;

static var colteam : Ninja;
var Health : float;
static var Team : String;

private var Castles : CastleGen;
private var Stone : Stonewall;
private var Pink : GameObject;
private var Blue : GameObject;
private var MinAtt : int;
private var MaxAtt : int;
private var SpeAtt : float;
private var SkillP : float;
private var Stopped : boolean;
private var Attacking : boolean;
private var Playing : boolean;
private var SPlaying : boolean;
private var Died : boolean;
private var CurHealth : int;
private var TotHealth : int;
private var z0 : float;
private var Offset : float;
private var LOffset : float;
private var Swipe : boolean;

private var Unit1LVL : int;
private var Unit2LVL : int;
private var Unit3LVL : int;
private var Unit4LVL : int;
private var Unit5LVL : int;
private var Unit6LVL : int;
private var Unit7LVL : int;
private var Unit8LVL : int;

Castles = GameObject.Find("CastleGenerator").GetComponent(CastleGen);
Pink = GameObject.Find("PinkCastle");
Blue = GameObject.Find("BlueCastle");

function Start () 
{
	z0 = transform.position.z;
	Offset = Random.Range(-30,30);
	
	Unit1LVL = PlayerPrefs.GetInt("OniUnit1Level");
	Unit2LVL = PlayerPrefs.GetInt("OniUnit2Level");
	Unit3LVL = PlayerPrefs.GetInt("OniUnit3Level");
	Unit4LVL = PlayerPrefs.GetInt("OniUnit4Level");
	Unit5LVL = PlayerPrefs.GetInt("OniUnit5Level");
	Unit6LVL = PlayerPrefs.GetInt("OniUnit6Level");
	Unit7LVL = PlayerPrefs.GetInt("OniUnit7Level");
	Unit8LVL = PlayerPrefs.GetInt("OniUnit8Level");
	
	Team = "Pink";
//	Damage.text = "";
//	var data : tk2dSpriteCollectionData;
//	data = Resources.Load("BaddiesAni", typeof(tk2dSpriteCollectionData)) as tk2dSpriteCollectionData;
//	Tex.SetSprite(data,"OniSwordAni");
	if(Num == 1)
	{
		if(Unit1LVL < 7)
		{
			anim.Play("EyeWalkOne");
		}
		if(Unit1LVL >= 7 && Unit1LVL < 14)
		{
			anim.Play("EyeWalkTwo");
		}
		if(Unit1LVL >= 14)
		{
			anim.Play("EyeWalkThree");
		}
		Health = 22 + ((Unit1LVL - 1) * 20);
		TotHealth = 22 + ((Unit1LVL - 1) * 20);
		MinAtt = 1 + ((Unit1LVL - 1) * 4);
		MaxAtt = 2 + ((Unit1LVL - 1) * 4);
		SpeAtt = 0.5;
		SkillP = 10;
		OLevel = Unit1LVL;
		
		this.transform.position.y = 2.3;
	}
	if(Num == 99)
	{
		anim.Play("EyeWalkOne");
		Health = 10;
		TotHealth = 10;
		MinAtt = 0;
		MaxAtt = 0;
		SpeAtt = 0.5;
		SkillP = 10;
		OLevel = 1;
	}
	if(Num == 2)
	{
		if(Unit2LVL < 7)
		{
			anim.Play("DragonWalkOne");
		}
		if(Unit2LVL >= 7 && Unit2LVL < 14)
		{
			anim.Play("DragonWalkTwo");
		}
		if(Unit2LVL >= 14)
		{
			anim.Play("DragonWalkThree");
		}
		//Outline.transform.position.z = 12.45;
		//OutlineB.transform.position.z = 12.45;
		Health = 60 + ((Unit2LVL - 1) * 30);
		TotHealth = 60 + ((Unit2LVL - 1) * 30);
		MinAtt = 5 + ((Unit2LVL - 1) * 6);
		MaxAtt = 7 + ((Unit2LVL - 1) * 6);
		SpeAtt = 0.5;
		SkillP = 25;
		OLevel = Unit2LVL;
		//transform.position = Vector3(32,2,-9);
	}
	if(Num == 3)
	{
		if(Unit3LVL < 7)
		{
			anim.Play("ClawWalkOne");
		}
		if(Unit3LVL >= 7 && Unit3LVL < 14)
		{
			anim.Play("ClawWalkTwo");
		}
		if(Unit3LVL >= 14)
		{
			anim.Play("ClawWalkThree");
		}
		Health = 450 + ((Unit3LVL - 1) * 25);
		TotHealth = 450 + ((Unit3LVL - 1) * 25);
		MinAtt = 65 + ((Unit3LVL - 1) * 12);
		MaxAtt = 70 + ((Unit3LVL - 1) * 12);
		SpeAtt = 1;
		SkillP = 50;
		OLevel = Unit3LVL;
	}
	if(Num == 4)
	{
		if(Unit4LVL < 7)
		{
			anim.Play("BowWalkOne");
		}
		if(Unit4LVL >= 7 && Unit4LVL < 14)
		{
			anim.Play("BowWalkTwo");
		}
		if(Unit4LVL >= 14)
		{
			anim.Play("BowWalkThree");
		}
		Health = 720 + ((Unit4LVL - 1) * 25);
		TotHealth = 720 + ((Unit4LVL - 1) * 25);
		MinAtt = 185 + ((Unit4LVL - 1) * 16);
		MaxAtt = 195 + ((Unit4LVL - 1) * 16);
		SpeAtt = 1;
		SkillP = 100;
		OLevel = Unit4LVL;
	}
	if(Num == 5)
	{
		if(Unit5LVL < 7)
		{
			anim.Play("ClubWalkOne");
		}
		if(Unit5LVL >= 7 && Unit5LVL < 14)
		{
			anim.Play("ClubWalkTwo");
		}
		if(Unit5LVL >= 14)
		{
			anim.Play("ClubWalkThree");
		}
		Health = 970 + ((Unit5LVL - 1) * 25);
		TotHealth = 970 + ((Unit5LVL - 1) * 25);
		MinAtt = 350 + ((Unit5LVL - 1) * 20);
		MaxAtt = 360 + ((Unit5LVL - 1) * 20);
		SpeAtt = 1;
		SkillP = 200;
		OLevel = Unit5LVL;
	}
	if(Num == 6)
	{
		if(Unit6LVL < 7)
		{
			anim.Play("SpearWalkOne");
		}
		if(Unit6LVL >= 7 && Unit6LVL < 14)
		{
			anim.Play("SpearWalkTwo");
		}
		if(Unit6LVL >= 14)
		{
			anim.Play("SpearWalkThree");
		}
		Health = 1220 + ((Unit6LVL - 1) * 40);
		TotHealth = 1220 + ((Unit6LVL - 1) * 40);
		MinAtt = 550 + ((Unit6LVL - 1) * 24);
		MaxAtt = 560 + ((Unit6LVL - 1) * 24);
		SpeAtt = 1;
		SkillP = 400;
		OLevel = Unit6LVL;
	}
	if(Num == 7)
	{
		if(Unit7LVL < 7)
		{
			anim.Play("SwordWalkOne");
		}
		if(Unit7LVL >= 7 && Unit7LVL < 14)
		{
			anim.Play("SwordWalkTwo");
		}
		if(Unit7LVL >= 14)
		{
			anim.Play("SwordWalkThree");
		}
		Health = 1620 + ((Unit7LVL - 1) * 45);
		TotHealth = 1620 + ((Unit7LVL - 1) * 45);
		MinAtt = 790 + ((Unit7LVL - 1) * 28);
		MaxAtt = 800 + ((Unit7LVL - 1) * 28);
		SpeAtt = 0.5;
		SkillP = 800;
		OLevel = Unit7LVL;
	}
	if(Num == 8)
	{
		if(Unit8LVL < 7)
		{
			anim.Play("SpiderWalkOne");
		}
		if(Unit8LVL >= 7 && Unit8LVL < 14)
		{
			anim.Play("SpiderWalkTwo");
		}
		if(Unit8LVL >= 14)
		{
			anim.Play("SpiderWalkThree");
		}
		Health = 2100 + ((Unit8LVL - 1) * 50);
		TotHealth = 2100 + ((Unit8LVL - 1) * 50);
		MinAtt = 1070 + ((Unit8LVL - 1) * 32);
		MaxAtt = 1080 + ((Unit8LVL - 1) * 32);
		SpeAtt = 0.5;
		SkillP = 1600;
		OLevel = Unit8LVL;
	}
	Stopped = false;
	Died = false;
	
//	if(Num != 1 && Num != 2 && Num != 99)
//	{
//		LOffset = Random.Range(-0.5,2);
//		this.transform.position = Vector3(52,2 - (LOffset/10),-09 + LOffset);
//	}
}

function FixedUpdate () 
{
//	Debug.Log(Castles.BlueHealth);
//	Debug.Log("Stopped: " + Stopped);
//	Debug.Log("This: " + this.collider);
//	Debug.Log("Blue: " + Blue.collider);

	//Debug.Log(CurHealth);

	if(debug)
	{
		Debug.Log("Level: " + OLevel);
		Debug.Log("Oni: " + Dist);
		Debug.Log("TotHealth: " + TotHealth);
		Debug.Log("MinAtt: " + MinAtt);
		Debug.Log("MaxAtt: " + MaxAtt);
		Debug.Log("SpeAtt: " + SpeAtt);
		Debug.Log("SkillP: " + SkillP);
	}
	
	this.CurHealth = ((this.Health/this.TotHealth) * 100);	
//	if(Num != 2 || Num != 4 || Num != 6 || Num != 8)
//	{
		HBar.SetPosition(0,Vector3((7 - (0.14 * CurHealth)),-21,0));
		HBar.SetPosition(1,Vector3(7,-21,0));
//	}
//	if(Num == 2 || Num == 4 || Num == 6 || Num == 8)
//	{
//		HBar.SetPosition(0,Vector3((7 - (0.14 * CurHealth)),68,0));
//		HBar.SetPosition(1,Vector3(7,68,0));
//	}
	if(CurHealth < 33)
	{
		HBar.material = Red;
	}
	if(CurHealth < 66 && CurHealth > 33)
	{
		HBar.material = Yel;
	}
	if(CurHealth > 66)
	{
		HBar.material = Gre;
	}	
	
	Closest = FindClosestEnemy();
	
	if(Closest)
	{
		Enem = Closest.GetComponent(Ninja);
		Dist = Vector2.Distance(this.transform.position, Closest.transform.position);
	}
	
	if(this.transform.position.x > 140 || this.transform.position.x < -140)
	{
		Destroy(this.gameObject,0);
	}
	if(this.transform.position.z != (-09 + LOffset))
	{
		this.transform.position.z = (-09 + LOffset);
//		if(Num == 1 || Num == 2 || Num == 99)
//		{
//			this.transform.position.z = z0*Mathf.Sin(Speed*Time.time);
//		}
	}
//	if(Num == 1 || Num == 2 || Num == 99 || Num == 3 || Num == 4 || Num == 5 || Num == 6 || Num == 7 || Num == 8)
//	{
//		this.transform.position.z = (z0*(Mathf.Sin(Speed*Time.time + Offset)/6)-09);
//	}
	if(GetComponent.<Rigidbody>().velocity.x > 0)
	{
		GetComponent.<Rigidbody>().AddForce(Vector3.left * 30);
	}
	
	CheckHealth();
	if(!Variables.Done)
	{
		//Debug.Log("Oni: " + Dist);
		if(Dist <= 13 && Dist != 0) 
		{
			GetComponent.<Rigidbody>().isKinematic = true;
			if(!Playing)
			{
				Playing = true;
				SPlaying = false;
				if(Num == 1 || Num == 99)
				{
					if(Unit1LVL < 7)
					{
						anim.Play("EyeAttOne");
					}
					if(Unit1LVL >= 7 && Unit1LVL < 14)
					{
						anim.Play("EyeAttTwo");
					}
					if(Unit1LVL >= 14)
					{
						anim.Play("EyeAttThree");
					}
				}
				if(Num == 2)
				{
					if(Unit2LVL < 7)
					{
						anim.Play("DragonAttOne");
					}
					if(Unit2LVL >= 7 && Unit2LVL < 14)
					{
						anim.Play("DragonAttTwo");
					}
					if(Unit2LVL >= 14)
					{
						anim.Play("DragonAttThree");
					}
				}
				if(Num == 3)
				{
					if(Unit3LVL < 7)
					{
						anim.Play("ClawAttOne");
					}
					if(Unit3LVL >= 7 && Unit3LVL < 14)
					{
						anim.Play("ClawAttTwo");
					}
					if(Unit3LVL >= 14)
					{
						anim.Play("ClawAttThree");
					}
				}
				if(Num == 4)
				{
					if(Unit4LVL < 7)
					{
						anim.Play("BowAttOne");
					}
					if(Unit4LVL >= 7 && Unit4LVL < 14)
					{
						anim.Play("BowAttTwo");
					}
					if(Unit4LVL >= 14)
					{
						anim.Play("BowAttThree");
					}
				}
				if(Num == 5)
				{
					if(Unit5LVL < 7)
					{
						anim.Play("ClubAttOne");
					}
					if(Unit5LVL >= 7 && Unit5LVL < 14)
					{
						anim.Play("ClubAttTwo");
					}
					if(Unit5LVL >= 14)
					{
						anim.Play("ClubAttThree");
					}
				}
				if(Num == 6)
				{
					if(Unit6LVL < 7)
					{
						anim.Play("SpearAttOne");
					}
					if(Unit6LVL >= 7 && Unit6LVL < 14)
					{
						anim.Play("SpearAttTwo");
					}
					if(Unit6LVL >= 14)
					{
						anim.Play("SpearAttThree");
					}
				}
				if(Num == 7)
				{
					if(Unit7LVL < 7)
					{
						anim.Play("SwordAttOne");
					}
					if(Unit7LVL >= 7 && Unit7LVL < 14)
					{
						anim.Play("SwordAttTwo");
					}
					if(Unit7LVL >= 14)
					{
						anim.Play("SwordAttThree");
					}
				}
				if(Num == 8)
				{
					if(Unit8LVL < 7)
					{
						anim.Play("SpiderAttOne");
					}
					if(Unit8LVL >= 7 && Unit8LVL < 14)
					{
						anim.Play("SpiderAttTwo");
					}
					if(Unit8LVL >= 14)
					{
						anim.Play("SpiderAttThree");
					}
				}
			}
		}
		if(Dist > 13)
		{
			if(!SPlaying)
			{
				SPlaying = true;
				Playing = false;
				if(Num == 1 || Num == 99)
				{
					if(Unit1LVL < 7)
					{
						anim.Play("EyeWalkOne");
					}
					if(Unit1LVL >= 7 && Unit1LVL < 14)
					{
						anim.Play("EyeWalkTwo");
					}
					if(Unit1LVL >= 14)
					{
						anim.Play("EyeWalkThree");
					}
				}
				if(Num == 2)
				{
					if(Unit2LVL < 7)
					{
						anim.Play("DragonWalkOne");
					}
					if(Unit2LVL >= 7 && Unit2LVL < 14)
					{
						anim.Play("DragonWalkTwo");
					}
					if(Unit2LVL >= 14)
					{
						anim.Play("DragonWalkThree");
					}
				}
				if(Num == 3)
				{
					if(Unit3LVL < 7)
					{
						anim.Play("ClawWalkOne");
					}
					if(Unit3LVL >= 7 && Unit3LVL < 14)
					{
						anim.Play("ClawWalkTwo");
					}
					if(Unit3LVL >= 14)
					{
						anim.Play("ClawWalkThree");
					}
				}
				if(Num == 4)
				{
					if(Unit4LVL < 7)
					{
						anim.Play("BowWalkOne");
					}
					if(Unit4LVL >= 7 && Unit4LVL < 14)
					{
						anim.Play("BowWalkTwo");
					}
					if(Unit4LVL >= 14)
					{
						anim.Play("BowWalkThree");
					}
				}
				if(Num == 5)
				{
					if(Unit5LVL < 7)
					{
						anim.Play("ClubWalkOne");
					}
					if(Unit5LVL >= 7 && Unit5LVL < 14)
					{
						anim.Play("ClubWalkTwo");
					}
					if(Unit5LVL >= 14)
					{
						anim.Play("ClubWalkThree");
					}
				}
				if(Num == 6)
				{
					if(Unit6LVL < 7)
					{
						anim.Play("SpearWalkOne");
					}
					if(Unit6LVL >= 7 && Unit6LVL < 14)
					{
						anim.Play("SpearWalkTwo");
					}
					if(Unit6LVL >= 14)
					{
						anim.Play("SpearWalkThree");
					}
				}
				if(Num == 7)
				{
					if(Unit7LVL < 7)
					{
						anim.Play("SwordWalkOne");
					}
					if(Unit7LVL >= 7 && Unit7LVL < 14)
					{
						anim.Play("SwordWalkTwo");
					}
					if(Unit7LVL >= 14)
					{
						anim.Play("SwordWalkThree");
					}
				}
				if(Num == 8)
				{
					if(Unit8LVL < 7)
					{
						anim.Play("SpiderWalkOne");
					}
					if(Unit8LVL >= 7 && Unit8LVL < 14)
					{
						anim.Play("SpiderWalkTwo");
					}
					if(Unit8LVL >= 14)
					{
						anim.Play("SpiderWalkThree");
					}
				}
			}
			this.GetComponent.<Rigidbody>().position += (Vector3.left * Speed * Time.deltaTime);
			Attacking = false;
		}
	}
	if(Tex.CurrentSprite.name == "EyeAttackLevelOne6" || Tex.CurrentSprite.name == "EyeAttackLevelTwo6" || Tex.CurrentSprite.name == "EyeAttackLevelThree6")
	{
		if(!Swipe)
		{
			Swipe = true;
//			if(Sound)
//			{
//				var tnum = Random.Range(0,4);
//				AudioSource.PlayClipAtPoint(Star[tnum], Camera.main.transform.position);
//			}
			Attack();
			StartCoroutine("Reset");	
		}	
	}
	if(Tex.CurrentSprite.name == "DragonAttackLevelOne6" || Tex.CurrentSprite.name == "DragonAttackLevelTwo6" || Tex.CurrentSprite.name == "DragonAttackLevelThree6")
	{
		if(!Swipe)
		{
			Swipe = true;
//			if(Sound)
//			{
//				var tnum = Random.Range(0,4);
//				AudioSource.PlayClipAtPoint(Star[tnum], Camera.main.transform.position);
//			}
			Attack();
			var DBul = new Instantiate(DBull,Vector3(this.transform.position.x,5,0),Quaternion.Euler(90,0,0));
			StartCoroutine("Reset");	
		}	
	}
	if(Tex.CurrentSprite.name == "ClawAttackLevelOne5" || Tex.CurrentSprite.name == "ClawAttackLevelTwo5" || Tex.CurrentSprite.name == "ClawAttackLevelThree5")
	{
		if(!Swipe)
		{
			Swipe = true;
//			if(Sound)
//			{
//				var tnum = Random.Range(0,4);
//				AudioSource.PlayClipAtPoint(Star[tnum], Camera.main.transform.position);
//			}
			Attack();
			StartCoroutine("Reset");	
		}	
	}
	if(Tex.CurrentSprite.name == "BowAttackLevelOne6" || Tex.CurrentSprite.name == "BowAttackLevelTwo6" || Tex.CurrentSprite.name == "BowAttackLevelThree6")
	{
		if(!Swipe)
		{
			Swipe = true;
//			if(Sound)
//			{
//				var tnum = Random.Range(0,4);
//				AudioSource.PlayClipAtPoint(Star[tnum], Camera.main.transform.position);
//			}
			Attack();
			var ABul = new Instantiate(OArr,Vector3(this.transform.position.x+7,5,-2),Quaternion.Euler(90,0,0));
			StartCoroutine("Reset");	
		}	
	}
	if(Tex.CurrentSprite.name == "ClubAttackLevelOne5" || Tex.CurrentSprite.name == "ClubAttackLevelTwo5" || Tex.CurrentSprite.name == "ClubAttackLevelThree5")
	{
		if(!Swipe)
		{
			Swipe = true;
//			if(Sound)
//			{
//				var tnum = Random.Range(0,4);
//				AudioSource.PlayClipAtPoint(Star[tnum], Camera.main.transform.position);
//			}
			Attack();
			StartCoroutine("Reset");	
		}	
	}
	if(Tex.CurrentSprite.name == "SpearAttackLevelOne5" || Tex.CurrentSprite.name == "SpearAttackLevelTwo5" || Tex.CurrentSprite.name == "SpearAttackLevelThree5")
	{
		if(!Swipe)
		{
			Swipe = true;
//			if(Sound)
//			{
//				var tnum = Random.Range(0,4);
//				AudioSource.PlayClipAtPoint(Star[tnum], Camera.main.transform.position);
//			}
			Attack();
			StartCoroutine("Reset");	
		}	
	}
	if(Tex.CurrentSprite.name == "SwordAttackLevelOne5" || Tex.CurrentSprite.name == "SwordAttackLevelTwo5" || Tex.CurrentSprite.name == "SwordAttackLevelThree5")
	{
		if(!Swipe)
		{
			Swipe = true;
//			if(Sound)
//			{
//				var tnum = Random.Range(0,4);
//				AudioSource.PlayClipAtPoint(Star[tnum], Camera.main.transform.position);
//			}
			Attack();
			StartCoroutine("Reset");	
		}	
	}
	if(Tex.CurrentSprite.name == "SpiderAttackLevelOne4" || Tex.CurrentSprite.name == "SpiderAttackLevelTwo4" || Tex.CurrentSprite.name == "SpiderAttackLevelThree4")
	{
		if(!Swipe)
		{
			Swipe = true;
//			if(Sound)
//			{
//				var tnum = Random.Range(0,4);
//				AudioSource.PlayClipAtPoint(Star[tnum], Camera.main.transform.position);
//			}
			Attack();
			StartCoroutine("Reset");	
		}	
	}
}

function OnCollisionEnter(Col : Collision)
{
	//Debug.Log(Col);
	
	if(Col.gameObject.name == "NinjaBullet")
	{
		SubHealth(Col.gameObject.GetComponent(NinBullet).Dam);
		Destroy(Col.gameObject,0);
	}
	if(Col.gameObject.tag == "Oni" || Col.gameObject.tag == "BadCastle" || Col.gameObject.tag == "OniBullet")
	{
		Physics.IgnoreCollision(this.GetComponent.<Collider>(),Col.collider);
	}
}

function Attack ()
{
	var OBul = new Instantiate(Bull,Vector3(this.transform.position.x,2.1,-4),Quaternion.Euler(90,0,0));
	OBul.GetComponent(OniBullet).Dir = 2;
	OBul.GetComponent(OniBullet).Dam = Random.Range(MinAtt,(MaxAtt+1));
	OBul.name = "OniBullet";
}

function SubHealth(Amo : float)
{
	//Debug.Log(Amo);
	//Damage.text = "-" + Amo.ToString();
	Health = Health - Amo;
	if(Health < 0)
	{
		Health = 0;
	}
}
function CheckHealth()
{
//	if(Team == "Pink")
//	{
//		Debug.Log("Pink: " + Health);
//	}
//	if(Team == "Blue")
//	{
//		Debug.Log("Blue: " + Health);
//	}
	if(this.Health < 1)
	{
		if(this.gameObject)
		{
			if(!Died)
			{
				Died = true;
				Instantiate(Part,Vector3(this.transform.position.x + 2,2,this.transform.position.z + 6),Quaternion.Euler(90,0,0));
				Instantiate(Coin,Vector3(this.transform.position.x + 2,6,this.transform.position.z + 6),Quaternion.Euler(90,0,0));
				CastleGen.Score = CastleGen.Score + (SkillP * OLevel);
				CastleGen.Skill = CastleGen.Skill + (SkillP * OLevel);
				PlayerPrefs.SetInt("TotalKills", PlayerPrefs.GetInt("TotalKills") + 1);
				WaitForSeconds(0.5);
				Destroy(this.gameObject,0);
				if(!Variables.Tutorial)
				{
					GPG.AchievementCzar();
					GPG.AchievementKing();
					GPG.AchievementDictator();
					GPG.AchievementSulton();
					GPG.AchievementMonarch();
					GPG.AchievementSoverign();
				}
			}
		}
	}
}

function FindClosestEnemy () : GameObject 
{
	var gos : GameObject[];
	gos = GameObject.FindGameObjectsWithTag("Ninja"); 
	var closest : GameObject; 
	var distance = Mathf.Infinity; 
	var position = transform.position; 
	for (var go : GameObject in gos)  
	{ 
		var diff = (go.transform.position - position);
		var curDistance = diff.sqrMagnitude; 
		if (curDistance < distance) 
		{ 
			closest = go; 
			distance = curDistance; 
		} 
	} 
	return closest;	
}

function Reset()
{
	yield WaitForSeconds(0.2);
	Swipe = false;
}