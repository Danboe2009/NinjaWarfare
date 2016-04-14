#pragma strict


var Num : int;
var Tex : tk2dSprite;
var anim : tk2dSpriteAnimator;
var HBar : LineRenderer;
var Gre : Material;
var Yel : Material;
var Red : Material;
var Part : ParticleSystem;
var Bull : GameObject;
var NSBull : GameObject;
var NABull : GameObject;
var Sword : AudioClip[];
var Nun : AudioClip[];
var Star : AudioClip[];
var Long : AudioClip[];
var Wood : AudioClip[];
var Chain : AudioClip[];
var Sai : AudioClip[];
var Hand : AudioClip[];

var debug : boolean;

private var Closest : GameObject;
private var Enem : Oni;
private var Dist : float;

static var colteam : Oni;
var Health : float;

private var Castles : CastleGen;
private var Sound : int;
private var Pink : GameObject;
private var Blue : GameObject;
private var MinAtt : int;
private var MaxAtt : int;
private var SpeAtt : float;
private var Speed : float;
private var Stopped : boolean;
private var Attacking : boolean;
private var Playing : boolean;
private var SPlaying : boolean;
private var Swipe : boolean;
private var Died : boolean;
private var CurHealth : int;
private var TotHealth : int;
private var Offset : float;

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
	Sound = PlayerPrefs.GetInt("Sound");
	Offset = Random.Range(-1.5,1);
	this.transform.position = Vector3(-47,2.5 - (Offset/10),-09 + Offset);
	
	Unit1LVL = PlayerPrefs.GetInt("Unit1Level");
	Unit2LVL = PlayerPrefs.GetInt("Unit2Level");
	Unit3LVL = PlayerPrefs.GetInt("Unit3Level");
	Unit4LVL = PlayerPrefs.GetInt("Unit4Level");
	Unit5LVL = PlayerPrefs.GetInt("Unit5Level");
	Unit6LVL = PlayerPrefs.GetInt("Unit6Level");
	Unit7LVL = PlayerPrefs.GetInt("Unit7Level");
	Unit8LVL = PlayerPrefs.GetInt("Unit8Level");
		
	if(Num == 1)
	{
		if(Unit1LVL < 7)
		{
			anim.Play("SwordWalkOne");
		}
		if(Unit1LVL >= 7 && Unit1LVL < 14)
		{
			anim.Play("SwordWalkTwo");
		}
		if(Unit1LVL >= 14)
		{
			anim.Play("SwordWalkThree");
		}
		Health = 50 + ((Unit1LVL - 1) * 15);
		TotHealth = 50 + ((Unit1LVL - 1) * 15);
		MinAtt = 1 + ((Unit1LVL - 1) * 3);
		MaxAtt = 2 + ((Unit1LVL - 1) * 3);
		SpeAtt = 0.5;
		Speed = 7;
	}
	if(Num == 2)
	{
		if(Unit2LVL < 7)
		{
			anim.Play("NunchuckWalkOne");
		}
		if(Unit2LVL >= 7 && Unit2LVL < 14)
		{
			anim.Play("NunchuckWalkTwo");
		}
		if(Unit2LVL >= 14)
		{
			anim.Play("NunchuckWalkThree");
		}
		Health = 200 + ((Unit2LVL - 1) * 20);
		TotHealth = 200 + ((Unit2LVL - 1) * 20);
		MinAtt = 20 + ((Unit2LVL - 1) * 4);
		MaxAtt = 22 + ((Unit2LVL - 1) * 4);
		SpeAtt = 0.5;
		Speed = 7;
	}
	if(Num == 3)
	{
		if(Unit3LVL < 7)
		{
			anim.Play("NinjaStarWalkOne");
		}
		if(Unit3LVL >= 7 && Unit3LVL < 14)
		{
			anim.Play("NinjaStarWalkTwo");
		}
		if(Unit3LVL >= 14)
		{
			anim.Play("NinjaStarWalkThree");
		}
		Health = 430 + ((Unit3LVL - 1) * 25);
		TotHealth = 430 + ((Unit3LVL - 1) * 25);
		MinAtt = 45 + ((Unit3LVL - 1) * 6);
		MaxAtt = 48 + ((Unit3LVL - 1) * 6);
		SpeAtt = 1;
		Speed = 7;
	}
	if(Num == 4)
	{
		if(Unit4LVL < 7)
		{
			anim.Play("LongBowWalkOne");
		}
		if(Unit4LVL >= 7 && Unit4LVL < 14)
		{
			anim.Play("LongBowWalkTwo");
		}
		if(Unit4LVL >= 14)
		{
			anim.Play("LongBowWalkThree");
		}
		Health = 612 + ((Unit4LVL - 1) * 30);
		TotHealth = 612 + ((Unit4LVL - 1) * 30);
		MinAtt = 158 + ((Unit4LVL - 1) * 8);
		MaxAtt = 168 + ((Unit4LVL - 1) * 8);
		SpeAtt = 1;
		Speed = 7;
	}
	if(Num == 5)
	{
		if(Unit5LVL < 7)
		{
			anim.Play("StaffNinjaWalkOne");
		}
		if(Unit5LVL >= 7 && Unit5LVL < 14)
		{
			anim.Play("StaffNinjaWalkTwo");
		}
		if(Unit5LVL >= 14)
		{
			anim.Play("StaffNinjaWalkThree");
		}
		Health = 825 + ((Unit5LVL - 1) * 35);
		TotHealth = 825 + ((Unit5LVL - 1) * 35);
		MinAtt = 300 + ((Unit5LVL - 1) * 10);
		MaxAtt = 310 + ((Unit5LVL - 1) * 10);
		SpeAtt = 1;
		Speed = 7;
	}
	if(Num == 6)
	{
		if(Unit6LVL < 7)
		{
			anim.Play("ChainWalkOne");
		}
		if(Unit6LVL >= 7 && Unit6LVL < 14)
		{
			anim.Play("ChainWalkTwo");
		}
		if(Unit6LVL >= 14)
		{
			anim.Play("ChainWalkThree");
		}
		Health = 1037 + ((Unit6LVL - 1) * 40);
		TotHealth = 1037 + ((Unit6LVL - 1) * 40);
		MinAtt = 465 + ((Unit6LVL - 1) * 12);
		MaxAtt = 475 + ((Unit6LVL - 1) * 12);
		SpeAtt = 1;
		Speed = 7;
	}
	if(Num == 7)
	{
		if(Unit7LVL < 7)
		{
			anim.Play("SaiWalkOne");
		}
		if(Unit7LVL >= 7 && Unit7LVL < 14)
		{
			anim.Play("SaiWalkTwo");
		}
		if(Unit7LVL >= 14)
		{
			anim.Play("SaiWalkThree");
		}
		Health = 1377 + ((Unit7LVL - 1) * 45);
		TotHealth = 1377 + ((Unit7LVL - 1) * 45);
		MinAtt = 671 + ((Unit7LVL - 1) * 14);
		MaxAtt = 680 + ((Unit7LVL - 1) * 14);
		SpeAtt = 0.5;
		Speed = 7;
	}
	if(Num == 8)
	{
		if(Unit8LVL < 7)
		{
			anim.Play("HandClawWalkOne");
		}
		if(Unit8LVL >= 7 && Unit8LVL < 14)
		{
			anim.Play("HandClawWalkTwo");
		}
		if(Unit8LVL >= 14)
		{
			anim.Play("HandClawWalkThree");
		}
		Health = 1795 + ((Unit8LVL - 1) * 50);
		TotHealth = 1795 + ((Unit8LVL - 1) * 50);
		MinAtt = 910 + ((Unit8LVL - 1) * 16);
		MaxAtt = 920 + ((Unit8LVL - 1) * 16);
		SpeAtt = 0.5;
		Speed = 7;
	}
	Stopped = false;
	Attacking = false;
	Died = false;
	//Debug.Log(Speed);
}

function FixedUpdate () 
{
//	Debug.Log(Stopped);
//	Debug.Log("Stopped: " + Stopped);
//	Debug.Log("Attack: " + Attacking);
//	Debug.Log(Tex.CurrentSprite.name);

	CurHealth = ((Health/TotHealth) * 100);	
	HBar.SetPosition(1,Vector3(((0.14 * CurHealth) - 7),-21,1));
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
		Enem = Closest.GetComponent(Oni);
		Dist = Vector2.Distance(transform.position, Closest.transform.position);
	}
	
	if(debug)
	{
		//Debug.Log("Stopped: " + Stopped);
		//Debug.Log("Attacking: " + Attacking);
		//Debug.Log("Dist: " + Dist);
		//Debug.Log("CurHealth: " + Health);
		//Debug.Log("Speed: " + Speed);
		//Debug.Log(rigidbody.velocity.x);
		//Debug.Log("Level: " + OLevel);
		//Debug.Log("Oni: " + Dist);
		Debug.Log("TotHealth: " + TotHealth);
		Debug.Log("MinAtt: " + MinAtt);
		Debug.Log("MaxAtt: " + MaxAtt);
		Debug.Log("SpeAtt: " + SpeAtt);
		//Debug.Log("SkillP: " + SkillP);
	}
	
	if(this.transform.position.x > 140 || this.transform.position.x < -140)
	{
		Destroy(this.gameObject,0);
	}
	
	if(this.transform.position.z != (-09 + Offset))
	{
		this.transform.position.z = (-09 + Offset);
	}
	
	if(GetComponent.<Rigidbody>().velocity.x < 0)
	{
		GetComponent.<Rigidbody>().velocity.x = 0;
		//rigidbody.AddForce(Vector3.right * 400);
	}
	
	CheckHealth();
	
	if(Dist < 12 && Dist != 0 && Castles.PinkHealth > 0) 
	{
		GetComponent.<Rigidbody>().isKinematic = true;
		if(!Playing)
		{
			Playing = true;
			SPlaying = false;
			if(Num == 1)
			{
				if(Unit1LVL < 7)
				{
					anim.Play("SwordAttOne");
				}
				if(Unit1LVL >= 7 && Unit1LVL < 14)
				{
					anim.Play("SwordAttTwo");
				}
				if(Unit1LVL >= 14)
				{
					anim.Play("SwordAttThree");
				}
			}
			if(Num == 2)
			{
				if(Unit2LVL < 7)
				{
					anim.Play("NunchuckAttOne");
				}
				if(Unit2LVL >= 7 && Unit2LVL < 14)
				{
					anim.Play("NunchuckAttTwo");
				}
				if(Unit2LVL >= 14)
				{
					anim.Play("NunchuckAttThree");
				}
			}
			if(Num == 3)
			{
				if(Unit3LVL < 7)
				{
					anim.Play("NinjaStarAttOne");
				}
				if(Unit3LVL >= 7 && Unit3LVL < 14)
				{
					anim.Play("NinjaStarAttTwo");
				}
				if(Unit3LVL >= 14)
				{
					anim.Play("NinjaStarAttThree");
				}
			}
			if(Num == 4)
			{
				if(Unit4LVL < 7)
				{
					anim.Play("LongBowAttOne");
				}
				if(Unit4LVL >= 7 && Unit4LVL < 14)
				{
					anim.Play("LongBowAttTwo");
				}
				if(Unit4LVL >= 14)
				{
					anim.Play("LongBowAttThree");
				}
			}
			if(Num == 5)
			{
				if(Unit5LVL < 7)
				{
					anim.Play("StaffNinjaAttOne");
				}
				if(Unit5LVL >= 7 && Unit5LVL < 14)
				{
					anim.Play("StaffNinjaAttTwo");
				}
				if(Unit5LVL >= 14)
				{
					anim.Play("StaffNinjaAttThree");
				}
			}
			if(Num == 6)
			{
				if(Unit6LVL < 7)
				{
					anim.Play("ChainAttOne");
				}
				if(Unit6LVL >= 7 && Unit6LVL < 14)
				{
					anim.Play("ChainAttTwo");
				}
				if(Unit6LVL >= 14)
				{
					anim.Play("ChainAttThree");
				}
			}
			if(Num == 7)
			{
				if(Unit7LVL < 7)
				{
					anim.Play("SaiAttOne");
				}
				if(Unit7LVL >= 7 && Unit7LVL < 14)
				{
					anim.Play("SaiAttTwo");
				}
				if(Unit7LVL >= 14)
				{
					anim.Play("SaiAttThree");
				}
			}
			if(Num == 8)
			{
				if(Unit8LVL < 7)
				{
					anim.Play("HandClawAttOne");
				}
				if(Unit8LVL >= 7 && Unit8LVL < 14)
				{
					anim.Play("HandClawAttTwo");
				}
				if(Unit8LVL >= 14)
				{
					anim.Play("HandClawAttThree");
				}
			}
		}
	}
	if(Dist > 11 && Castles.PinkHealth > 0)
	{
		if(!SPlaying)
		{
			SPlaying = true;
			Playing = false;
			if(Num == 1)
			{
				if(Unit1LVL < 7)
				{
					anim.Play("SwordWalkOne");
				}
				if(Unit1LVL >= 7 && Unit1LVL < 14)
				{
					anim.Play("SwordWalkTwo");
				}
				if(Unit1LVL >= 14)
				{
					anim.Play("SwordWalkThree");
				}
			}
			if(Num == 2)
			{
				if(Unit2LVL < 7)
				{
					anim.Play("NunchuckWalkOne");
				}
				if(Unit2LVL >= 7 && Unit2LVL < 14)
				{
					anim.Play("NunchuckWalkTwo");
				}
				if(Unit2LVL >= 14)
				{
					anim.Play("NunchuckWalkThree");
				}
			}
			if(Num == 3)
			{
				if(Unit3LVL < 7)
				{
					anim.Play("NinjaStarWalkOne");
				}
				if(Unit3LVL >= 7 && Unit3LVL < 14)
				{
					anim.Play("NinjaStarWalkTwo");
				}
				if(Unit3LVL >= 14)
				{
					anim.Play("NinjaStarWalkThree");
				}
			}
			if(Num == 4)
			{
				if(Unit4LVL < 7)
				{
					anim.Play("LongBowWalkOne");
				}
				if(Unit4LVL >= 7 && Unit4LVL < 14)
				{
					anim.Play("LongBowWalkTwo");
				}
				if(Unit4LVL >= 14)
				{
					anim.Play("LongBowWalkThree");
				}
			}
			if(Num == 5)
			{
				if(Unit5LVL < 7)
				{
					anim.Play("StaffNinjaWalkOne");
				}
				if(Unit5LVL >= 7 && Unit5LVL < 14)
				{
					anim.Play("StaffNinjaWalkTwo");
				}
				if(Unit5LVL >= 14)
				{
					anim.Play("StaffNinjaWalkThree");
				}
			}
			if(Num == 6)
			{
				if(Unit6LVL < 7)
				{
					anim.Play("ChainWalkOne");
				}
				if(Unit6LVL >= 7 && Unit6LVL < 14)
				{
					anim.Play("ChainWalkTwo");
				}
				if(Unit6LVL >= 14)
				{
					anim.Play("ChainWalkThree");
				}
			}
			if(Num == 7)
			{
				if(Unit7LVL < 7)
				{
					anim.Play("SaiWalkOne");
				}
				if(Unit7LVL >= 7 && Unit7LVL < 14)
				{
					anim.Play("SaiWalkTwo");
				}
				if(Unit7LVL >= 14)
				{
					anim.Play("SaiWalkThree");
				}
			}
			if(Num == 8)
			{
				if(Unit8LVL < 7)
				{
					anim.Play("HandClawWalkOne");
				}
				if(Unit8LVL >= 7 && Unit8LVL < 14)
				{
					anim.Play("HandClawWalkTwo");
				}
				if(Unit8LVL >= 14)
				{
					anim.Play("HandClawWalkThree");
				}
			}
		}
		GetComponent.<Rigidbody>().position += (Vector3.right * Speed * Time.deltaTime);
		Attacking = false;
	}
	if(Tex.CurrentSprite.name == "SwordLevelOneAtt3" || Tex.CurrentSprite.name == "SwordLevelTwoAtt3" || Tex.CurrentSprite.name == "SwordLevelThreeAtt3")
	{
		if(!Swipe)
		{
			Swipe = true;
			if(Sound)
			{
				var snum = Random.Range(0,Sword.Length);
				AudioSource.PlayClipAtPoint(Sword[snum], Camera.main.transform.position);
			}
			Attack();
			StartCoroutine("Reset");	
		}	
	}
	if(Tex.CurrentSprite.name == "NunchuckAttackLevelOne1" || Tex.CurrentSprite.name == "NunchuckAttackLevelTwo1" || Tex.CurrentSprite.name == "NunchuckAttackLevelThree1")
	{
		if(!Swipe)
		{
			Swipe = true;
			if(Sound)
			{
				var nnum = Random.Range(0,Nun.Length);
				AudioSource.PlayClipAtPoint(Nun[nnum], Camera.main.transform.position);
			}
			Attack();
			StartCoroutine("Reset");	
		}	
	}
	if(Tex.CurrentSprite.name == "NinjaStarLevelOneAtt5" || Tex.CurrentSprite.name == "NinjaStarLevelTwoAtt5" || Tex.CurrentSprite.name == "NinjaStarLevelThreeAtt5")
	{
		if(!Swipe)
		{
			Swipe = true;
			if(Sound)
			{
				var tnum = Random.Range(0,Star.Length);
				AudioSource.PlayClipAtPoint(Star[tnum], Camera.main.transform.position);
			}
			Attack();
			var NSBul = new Instantiate(NSBull,Vector3(this.transform.position.x + 6,3,this.transform.position.z + 5),Quaternion.Euler(90,0,0));
			StartCoroutine("Reset");	
		}	
	}
	if(Tex.CurrentSprite.name == "LongBowLevelOneAtt5" || Tex.CurrentSprite.name == "LongBowLevelTwoAtt5" || Tex.CurrentSprite.name == "LongBowLevelThreeAtt5")
	{
		if(!Swipe)
		{
			Swipe = true;
			if(Sound)
			{
				var lnum = Random.Range(0,Long.Length);
				AudioSource.PlayClipAtPoint(Long[lnum], Camera.main.transform.position);
			}
			Attack();
			var NABul = new Instantiate(NABull,Vector3(this.transform.position.x + 3,3,this.transform.position.z + 5),Quaternion.Euler(90,0,0));
			StartCoroutine("Reset");	
		}	
	}
	if(Tex.CurrentSprite.name == "StaffNinjaLevelOneAtt2" || Tex.CurrentSprite.name == "StaffNinjaLevelTwoAtt2" || Tex.CurrentSprite.name == "StaffNinjaLevelThreeAtt2")
	{
		if(!Swipe)
		{
			Swipe = true;
			if(Sound)
			{
				var wnum = Random.Range(0,Wood.Length);
				AudioSource.PlayClipAtPoint(Wood[wnum], Camera.main.transform.position);
			}
			Attack();
			StartCoroutine("Reset");	
		}	
	}
	if(Tex.CurrentSprite.name == "ChainAttackLevelOne1" || Tex.CurrentSprite.name == "ChainAttackLevelTwo1" || Tex.CurrentSprite.name == "ChainAttackLevelThree1")
	{
		if(!Swipe)
		{
			Swipe = true;
			if(Sound)
			{
				var cnum = Random.Range(0,Chain.Length);
				AudioSource.PlayClipAtPoint(Chain[cnum], Camera.main.transform.position);
			}
			Attack();
			StartCoroutine("Reset");	
		}	
	}
	if(Tex.CurrentSprite.name == "SiaAttackLevelOne1" || Tex.CurrentSprite.name == "SiaAttackLevelTwo1" || Tex.CurrentSprite.name == "SiaAttackLevelThree1")
	{
		if(!Swipe)
		{
			Swipe = true;
			if(Sound)
			{
				var inum = Random.Range(0,Sai.Length);
				AudioSource.PlayClipAtPoint(Sai[inum], Camera.main.transform.position);
			}
			Attack();
			StartCoroutine("Reset");	
		}	
	}
	if(Tex.CurrentSprite.name == "HandClawAttackLevelOne2" || Tex.CurrentSprite.name == "HandClawAttackLevelTwo2" || Tex.CurrentSprite.name == "HandClawAttackLevelThree2")
	{
		if(!Swipe)
		{
			Swipe = true;
			if(Sound)
			{
				var hnum = Random.Range(0,Hand.Length);
				AudioSource.PlayClipAtPoint(Hand[hnum], Camera.main.transform.position);
			}
			Attack();
			StartCoroutine("Reset");	
		}	
	}
}

function OnCollisionEnter(Col : Collision)
{
	if(Col.gameObject.name == "OniBullet")
	{
		SubHealth(Col.gameObject.GetComponent(OniBullet).Dam);
		Destroy(Col.gameObject,0);
	}
	if(Col.gameObject.tag == "Ninja" || Col.gameObject.name == "BlueCastle" || Col.gameObject.name == "StoneWall" || Col.gameObject.name == "NinjaBullet")
	{
		Physics.IgnoreCollision(GetComponent.<Collider>(),Col.collider);
	}
}

function Attack ()
{
	var Bul = new Instantiate(Bull,Vector3(this.transform.position.x + 6,2,-4),Quaternion.Euler(90,0,0));
	Bul.GetComponent(NinBullet).Dir = 1;
	Bul.GetComponent(NinBullet).Dam = Random.Range(MinAtt,(MaxAtt+1));
	Bul.name = "NinjaBullet";
}

function SubHealth(Amo : float)
{
	Health = Health - Amo;
	if(Health < 0)
	{
		Health = 0;
	}
}
function CheckHealth()
{
	if(Health < 1)
	{
		if(!Died)
		{
			Died = true;
			Instantiate(Part,Vector3(this.transform.position.x + 6,2,this.transform.position.z + 6),Quaternion.Euler(90,0,0));
			WaitForSeconds(1);
			Destroy(this.gameObject,0);
		}
	}
}

function FindClosestEnemy () : GameObject 
{
	var gos : GameObject[];
	gos = GameObject.FindGameObjectsWithTag("Oni"); 
	var closest : GameObject; 
	var distance = Mathf.Infinity; 
	var position = this.transform.position; 
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