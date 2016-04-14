#pragma strict

var sprite:tk2dSprite;

private var Faded : boolean;
private var Level : int;

function Start() 
{
	Level = PlayerPrefs.GetInt("Level");
	Faded = false;
	if(Level != 1 || PlayerPrefs.GetInt("Tutorial") == 1)
	{
		sprite.color = Color(1,1,1,0);
	}
}

function Update () 
{
	var ray = Camera.main.ScreenPointToRay (AspectUtilityEnhanced.mousePosition);
    var hit : RaycastHit;
    
    if (GetComponent.<Collider>().Raycast (ray, hit, 100)) 
    {
    	if(Input.GetButton("Fire1") && !Faded && Level == 1 && !Variables.Movement && PlayerPrefs.GetInt("Tutorial") == 0)
    	{
       		FadeOut(1);
       		Faded = true;
       	}
    }
}

function FadeIn (time : float) 
{
	var originalTime :float= time;
	while (time >= 0.0)
	{
	    time -= Time.deltaTime;
	    sprite.color = Color.Lerp(Color(1,1,1,1), Color(1,1,1,0), time/originalTime);
	    print ('color' + sprite.color);
	    yield;
	}
}

function FadeOut (time : float) 
{
	var originalTime :float= time;
	while (time >= 0.0)
	{
	    time -= Time.deltaTime;
	    sprite.color = Color.Lerp(Color(1,1,1,0), Color(1,1,1,1), time/originalTime);
	    yield;
	}
}