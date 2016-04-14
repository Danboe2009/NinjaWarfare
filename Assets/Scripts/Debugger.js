#pragma strict

private var Counts : int;
private var Mony : GameObject;

Mony = GameObject.Find("MonyButton");

function Start () 
{
	Counts = 7;
}

function Update () 
{
	var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
    var hit : RaycastHit;
    
	if (GetComponent.<Collider>().Raycast (ray, hit, 100)) 
    {
    	if(Input.GetButtonDown("Fire1"))
       	{
       		if(Counts > 0)
       		{
       			Counts --;
       		}
       		else
       		{
       			StartCoroutine("Unlocked");
       		}
       	}
    }
}

function Unlocked()
{
	yield WaitForSeconds(0.1);
	Mony.GetComponent.<Animation>().Play("MonyIn");
}