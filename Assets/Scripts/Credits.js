#pragma strict

var Ting : AudioClip;

private var Credits : GameObject;
private var Facebook : SocialPages;
private var Twitter : SocialPages;
private var Website : SocialPages;
private var Music : MusicBut;
private var CSprite : tk2dSprite;

Credits = GameObject.Find("Credits");
Facebook = GameObject.Find("Facebook").GetComponent(SocialPages);
Twitter = GameObject.Find("Twitter").GetComponent(SocialPages);
Website = GameObject.Find("Website").GetComponent(SocialPages);
Music = GameObject.Find("Music").GetComponent(MusicBut);
CSprite = GameObject.Find("Credits").GetComponent(tk2dSprite);

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
       		if(PlayerPrefs.GetInt("Sound") == 1)
       		{
       			AudioSource.PlayClipAtPoint(Ting, Camera.main.transform.position);
       		}
       		StartCoroutine("Open");
       	}
    }
}

function Open ()
{
	FadeIn(1);
	Credits.transform.position = Vector3(0,6,0);
	Facebook.enabled = false;
	Twitter.enabled = false;
	Website.enabled = false;
	Music.enabled = false;
	yield WaitForSeconds(5);
	FadeOut(1);
	yield WaitForSeconds(1);
	Credits.transform.position = Vector3(0,6,-37);
	Facebook.enabled = true;
	Twitter.enabled = true;
	Website.enabled = true;
	Music.enabled = true;
}

function FadeIn (time : float) 
{
	var originalTime :float= time;
	while (time >= 0.0)
	{
	    time -= Time.deltaTime;
	    CSprite.color = Color.Lerp(Color(1,1,1,1), Color(1,1,1,0), time/originalTime);
	    yield;
	}
}

function FadeOut (time : float) 
{
	var originalTime :float= time;
	while (time >= 0.0)
	{
	    time -= Time.deltaTime;
	    CSprite.color = Color.Lerp(Color(1,1,1,0), Color(1,1,1,1), time/originalTime);
	    yield;
	}
}