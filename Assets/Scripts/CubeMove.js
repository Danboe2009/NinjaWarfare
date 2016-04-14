#pragma strict

function Start () 
{

}

function Update () 
{
	if(Input.GetKey(KeyCode.LeftArrow))
	{
		if(this.transform.position.x > -32)
		{
			this.transform.position.x --;
		}
	}
	if(Input.GetKey(KeyCode.RightArrow))
	{
		if(this.transform.position.x < 32)
		{
			this.transform.position.x ++;
		}
	}
	if(Variables.Debugger)
	{
		if(PlayerPrefs.GetInt("StoneLevel") == 1)
		{
			if(GameObject.FindGameObjectsWithTag("Ninja").Length > 2)
			{
				var gos : GameObject[];
				gos = GameObject.FindGameObjectsWithTag("Ninja");
				if(gos[2].transform.position.x > -32 && gos[2].transform.position.x < 32)
				{
					 
					this.transform.position.x = gos[2].transform.position.x;
				}
			}
		}
		else
		{
			if(GameObject.FindGameObjectsWithTag("Ninja").Length > 1)
			{
				var Nin : GameObject[];
				Nin = GameObject.FindGameObjectsWithTag("Ninja");
				if(Nin[1].transform.position.x > -32 && Nin[1].transform.position.x < 32)
				{
					this.transform.position.x = Nin[1].transform.position.x;
				}
			}
		}
	}
}