#pragma strict

var Ting : AudioClip;
var anim : tk2dSpriteAnimator;
var Type : String;
var Dia : tk2dSprite;

private var ran : int;	
private var Coins : CoinGen;
private var CoinL : int;
private var Sound : int;
private var Moving : boolean;
private var Grow : boolean;
private var CoinB : GameObject;

Coins = GameObject.Find("BTopLeft").GetComponent(CoinGen);
CoinB = GameObject.Find("LeftBox");

function Start () 
{
	Sound = PlayerPrefs.GetInt("Sound");
	CoinL = PlayerPrefs.GetInt("CoinsLevel");
	Moving = false;
	if(Type == "Coin")
	{
		ran = Random.Range(0,10);	
		if(ran == 9)
		{
			anim.Play("Coin");
		}
		if(ran < 9)
		{
			anim.Play("Coin");
			Dia.scale = Vector3(0.65,0.65,1);
		}
	}
	if(Type == "Diam")
	{
		StartCoroutine("Diamond");
	}
	if(Variables.Debugger)
	{
		Moving = true;
	}
}

function Update () 
{
	var ray = Camera.main.ScreenPointToRay (AspectUtilityEnhanced.mousePosition);
    var hit : RaycastHit;
    
    if (GetComponent.<Collider>().Raycast (ray, hit, 100)) 
    {
    	if(Input.GetButtonDown("Fire1"))
       	{
       		if(Sound)
       		{
       			AudioSource.PlayClipAtPoint(Ting, Camera.main.transform.position);
       		}
       		//Destroy(this.gameObject,0);
       		Moving = true;
       		
       		
       		PlayerPrefs.SetInt("TotalCoins",PlayerPrefs.GetInt("TotalCoins") + 1);
       		GPG.AchievementAndSoItBegans();
       		GPG.AchievementCoinCollector();
       		GPG.AchievementCoinoisseur();
       		GPG.AchievementMoneyHungry();
       		GPG.AchievementCoinVault();
       	}
    }
    if(this.transform.position.z > 13 || this.transform.position.z < -13)
	{
		Destroy(this.gameObject,0);
		if(Type == "Coin")
		{
			if(ran == 9)
			{
				Coins.AddCoin(10 * CoinL);
			}
			if(ran < 9)
			{
				Coins.AddCoin(5 * CoinL);
			}
		}
		if(Type == "Diam")
		{
			PlayerPrefs.SetInt("Diamonds", 1.0 + PlayerPrefs.GetInt("Diamonds"));
			PlayerPrefs.SetInt("TotalDiamonds", 1.0 + PlayerPrefs.GetInt("TotalDiamonds"));
			Variables.Diamo ++;
			GPG.AchievementOneCarat();
			GPG.AchievementFiveCarat();
			GPG.AchievementTenCarat();
			GPG.AchievementTwentyCarat();
		}
	}
}
function FixedUpdate()
{
    var step = 45 * Time.deltaTime;
	if(Moving)
    {
    	transform.position = Vector3.MoveTowards(transform.position, CoinB.transform.position, step);
    }
//    if(Grow && Dia.scale.x < 1.5)
//    {
//    	Dia.scale.x = Dia.scale.x + 0.01;
//    	Dia.scale.y = Dia.scale.y + 0.01;
//    }
}

function Diamond()
{
	Grow = true;
	yield WaitForSeconds(2);
	Moving = true;
}