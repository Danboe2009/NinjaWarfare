#pragma strict

var Ting : AudioClip;

private var Sound : int;
private var SocialBox : GameObject;
private var EraseBack : GameObject;

EraseBack = GameObject.Find("ResetBack");
SocialBox = GameObject.Find("SocialBox");

function Start () 
{
	Sound = PlayerPrefs.GetInt("Sound");
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
       		if(!Variables.SocialBo)
       		{
       			StartCoroutine("Open");   
       		}  	
       		if(Variables.SocialBo)
       		{
       			StartCoroutine("Close");
       		}	
       	}
    }
}

function Open() 
{
	yield WaitForSeconds(0.2);
	Variables.SocialBo = true;
	SocialBox.GetComponent.<Animation>().Play("SocialBoxIn");
	if(Variables.ResetOp)
	{
		Variables.ResetOp = false;
		EraseBack.GetComponent.<Animation>().Play("SocialBoxOut");
	}
}

function Close() 
{
	yield WaitForSeconds(0.2);
	Variables.SocialBo = false;
	SocialBox.GetComponent.<Animation>().Play("SocialBoxOut");
}