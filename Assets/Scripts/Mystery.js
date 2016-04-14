#pragma strict

function Start () 
{
	if(PlayerPrefs.GetInt("Level") == 28)
	{
		this.transform.GetComponent.<Renderer>().enabled = true;
	}
}
