#pragma strict

private var PauseBox : PauseMenu;

PauseBox = GameObject.Find("PauseBox").GetComponent(PauseMenu);

function Start () 
{

}

function Update () 
{
	var ray = Camera.main.ScreenPointToRay (AspectUtilityEnhanced.mousePosition);
    var hit : RaycastHit;
    
    if (GetComponent.<Collider>().Raycast (ray, hit, 100)) 
    {
    	if(Input.GetKeyDown("escape") || Input.GetKeyDown(KeyCode.Menu) || Input.GetButtonDown("Fire1"))
    	{
    		if(!PauseBox.Paused)
	       	{
	       		
	       		StartCoroutine(PauseBox.Pause());
	       	}
	       	
	       	if(PauseBox.Paused)
	       	{
	       		
	       		StartCoroutine(PauseBox.UnPause());
	       	}
	    }
    }
}