#pragma strict

var Tim : float;

function Start () 
{
	
}

function Update () 
{
	//if (!Pause.isPaused && !ZenPause.isPaused && !Variables.CountDown)
   	//{
		StartCoroutine("Die");
	//}
}

function Die()
{
	yield WaitForSeconds(Tim);
	Destroy(this.gameObject,0);
}
