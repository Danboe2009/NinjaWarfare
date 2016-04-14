#pragma strict

var sprite : tk2dSprite;
var time : float;

function Start () 
{
	if(!Variables.FirstLoad)
	{
		this.transform.position.z = 0; 
		sprite.color = Color(1,1,1,1);
		StartCoroutine(FadeOut(time));
		Variables.Pause = true;
		Variables.FirstLoad = true;
	}
}

function Update () 
{

}

function FadeOut (time : float) 
{
	yield WaitForSeconds(3);
	var originalTime :float= time;
	while (time >= 0.0)
	{
	    time -= Time.deltaTime;
	    sprite.color = Color.Lerp(Color(1,1,1,0), Color(1,1,1,1), time/originalTime);
	    yield;
	}
	Variables.Pause = false;
}