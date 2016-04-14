#pragma strict
var Music : AudioSource;

function Start () 
{
	if(PlayerPrefs.GetInt("Sound") == 1)
	{
		Music.Play();
	}
}

function Update () {

}