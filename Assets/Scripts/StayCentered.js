#pragma strict
private var Cube : GameObject;

Cube = GameObject.Find("GUI");

function Start () 
{

}

function FixedUpdate () 
{
	if(Cube)
	{
		if(this.transform.position.x != Cube.transform.position.x)
		{
			this.transform.position.x = Cube.transform.position.x;
		}
	}
}