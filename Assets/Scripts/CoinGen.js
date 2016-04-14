#pragma strict
var debug : boolean;

private var MLevel : int;
private var Castles : CastleGen;

Castles = GameObject.Find("CastleGenerator").GetComponent(CastleGen);

function Start () 
{
	Variables.Coins = 0;
	MLevel = PlayerPrefs.GetInt("MinerLevel");
}

function FixedUpdate () 
{
	if(debug)
	{
		Debug.Log(" Blues: " + GameObject.FindGameObjectsWithTag("Blue").Length);
	}
	if(!Variables.Intro && !Variables.Tutorial && Castles.BlueHealth > 0 && Castles.PinkHealth > 0)
	{
		Variables.Coins = Variables.Coins + (0.05f * MLevel); //0.05f;
	}
}

function AddCoin(Amo : float)
{
	Variables.Coins = Variables.Coins + Amo;
}