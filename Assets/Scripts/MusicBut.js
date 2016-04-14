#pragma strict

var Ting : AudioClip;
var Tex : TextMesh;

function Start () 
{

}

function Update () 
{
	var ray = Camera.main.ScreenPointToRay (AspectUtilityEnhanced.mousePosition);
    var hit : RaycastHit;
    
    if (GetComponent.<Collider>().Raycast (ray, hit, 100)) 
    {
    	if(Input.GetButtonDown("Fire1"))
       	{         
       		if(PlayerPrefs.GetInt("Sound") == 0)
			{
				StartCoroutine("SoundOn");
			}
			if(PlayerPrefs.GetInt("Sound") == 1)
			{
				StartCoroutine("SoundOff");
			}
			if(PlayerPrefs.GetInt("Sound") == 0)
    		{	
    			AudioSource.PlayClipAtPoint(Ting, Camera.main.transform.position);
       		} 
       	}
    }
    
    if(PlayerPrefs.GetInt("Sound") == 1)
    {
    	Tex.text = Language.thisLanguageManager.GetTextValue("Menu.SoundOn");
    }
    else
    {
    	Tex.text = Language.thisLanguageManager.GetTextValue("Menu.SoundOff");
    }
}

function SoundOn()
{
	yield WaitForSeconds(0.2);
	GetComponent.<Animation>().Play("SoundOut");
	yield WaitForSeconds(1);
	PlayerPrefs.SetInt("Sound",1);
	GetComponent.<Animation>().Play("SoundIn");
}

function SoundOff()
{
	yield WaitForSeconds(0.2);
	GetComponent.<Animation>().Play("SoundOut");
	yield WaitForSeconds(1);
	PlayerPrefs.SetInt("Sound",0);
	GetComponent.<Animation>().Play("SoundIn");
}