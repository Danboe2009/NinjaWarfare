#pragma strict

var LifeBar : LineRenderer;
var Gre : Material;
var Yel : Material;
var Red : Material;
var SeeHealth : float;

static var Health : float;
private var CurHealth : int;
private var TotHealth : int;

function Start () 
{
	if(PlayerPrefs.GetInt("StoneLevel") >= 1)
	{
		Health = (50 * PlayerPrefs.GetInt("Level"));
		TotHealth = (50 * PlayerPrefs.GetInt("Level"));
	}
	if(PlayerPrefs.GetInt("StoneLevel") == 0)
	{
		Destroy(this.gameObject,0);
	}
}

function Update () 
{
//	if (CurHealth > 75)
//	{
//		LifeBar.material = Gre;
//		this.GetComponent(tk2dSprite).spriteId = this.GetComponent(tk2dSprite).GetSpriteIdByName("StoneWall");
//	}
//	if (CurHealth > 25 && CurHealth < 75)
//	{
//		LifeBar.material = Yel;
//		this.GetComponent(tk2dSprite).spriteId = this.GetComponent(tk2dSprite).GetSpriteIdByName("StoneWall2");
//	}
//	if (CurHealth < 25)
//	{
//		LifeBar.material = Red;
//		this.GetComponent(tk2dSprite).spriteId = this.GetComponent(tk2dSprite).GetSpriteIdByName("StoneWall3");
//	}
	SeeHealth = Health;
	
	if(Health > -1)
	{
		CurHealth = ((Health/TotHealth) * 100);
		LifeBar.SetPosition(1,Vector3(((0.04 * CurHealth) - 2),-2,0));
	}
	
	if(Health < 0)
	{
		Destroy(this.gameObject,0);
	} 
}