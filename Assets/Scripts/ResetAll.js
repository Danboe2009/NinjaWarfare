#pragma strict

var Ting : AudioClip;
var Mode : String;
var Top : TextMesh;
var Bot : TextMesh;

private var Box : GameObject;
private var Mess : TextMesh;
private var Opened : boolean;
private var Played : boolean;
private var Back : GameObject;
private var SocialBox : GameObject;

SocialBox = GameObject.Find("SocialBox");
Back = GameObject.Find("ResetBack");

function Start () 
{

}

function Update () 
{
	var ray = Camera.main.ScreenPointToRay (AspectUtilityEnhanced.mousePosition);
    var hit : RaycastHit;
    
    if (GetComponent.<Collider>().Raycast (ray, hit, 100)) 
    {
    	if(Input.GetButton("Fire1"))
       	{
       		if(PlayerPrefs.GetInt("Sound") == 1 && !Played)
       		{
       			AudioSource.PlayClipAtPoint(Ting, Camera.main.transform.position);
       			Played = true;
       			StartCoroutine("Reset");
       		}
       		if(Mode != "Yes")
       		{
	       		if(!Variables.ResetOp)
	       		{
	       			StartCoroutine("Open");
	       		}
	       		if(Variables.ResetOp)
	       		{
	       			StartCoroutine("Close");
	       		}
       		}
       		if(Mode == "Yes")
       		{
       			if(!Variables.ResetSure)
       			{
       				StartCoroutine("Sure");
       			}
       			if(Variables.ResetSure)
       			{
       				StartCoroutine("Clear");
       			}
       		}
       	}
    }
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

function Open()
{
	yield WaitForSeconds(0.2);
	Variables.ResetOp = true;
	Back.GetComponent.<Animation>().Play("SocialBoxIn");
	Top.text = Language.thisLanguageManager.GetTextValue("Menu.EraseTop");
	Bot.text = Language.thisLanguageManager.GetTextValue("Menu.EraseBot");
	Variables.ResetSure = false;
	if(Variables.SocialBo)
	{
		Variables.SocialBo = false;
		SocialBox.GetComponent.<Animation>().Play("SocialBoxOut");
	}
}

function Close()
{
	yield WaitForSeconds(0.2);
	Variables.ResetOp = false;
	Back.GetComponent.<Animation>().Play("SocialBoxOut");
	Variables.ResetSure = false;
}
function Sure()
{
	yield WaitForSeconds(0.2);
	Variables.ResetSure = true;
	Top.text = Language.thisLanguageManager.GetTextValue("Menu.ResetTop");
	Bot.text = Language.thisLanguageManager.GetTextValue("Menu.ResetBot");
}
function Clear()
{
	PlayerPrefs.DeleteAll();
	ClearScreen(Language.thisLanguageManager.GetTextValue("Menu.Cleared"));
	Variables.Setup();
	Close();
}

function Reset()
{
	yield WaitForSeconds(0.2);
	Played = false;
}