#pragma strict

static var Paused : boolean;

static var PauseBox : GameObject;
private var Cube : GameObject;

Cube = GameObject.Find("GUI");
PauseBox = GameObject.Find("PauseBox");

function Start () 
{
	PauseBox.SetActive(false);
	PauseBox.transform.position = Vector3(-32,8.6,1);
}
function OnApplicationFocus(pauseStatus : boolean) 
{
	if(pauseStatus && !Paused)
	{
    	StartCoroutine(Pause());
    }
}

function Update () 
{
	var ray = Camera.main.ScreenPointToRay (AspectUtilityEnhanced.mousePosition);
    var hit : RaycastHit;
    
    if (GetComponent.<Collider>().Raycast (ray, hit, 100)) 
    {
    	if(Input.GetKeyDown("escape") || Input.GetKeyDown(KeyCode.Menu) || Input.GetButtonDown("Fire1") && !Variables.Intro)
    	{
    		if(!Paused)
	       	{
	       		
	       		StartCoroutine(Pause());
	       	}
	       	
	       	if(Paused)
	       	{
	       		
	       		StartCoroutine(UnPause());
	       	}
	    }
    }
//    if(Variables.Tutorial)
//    {
//    	this.transform.position.x = Cube.transform.position.x + 17;
//    }
//    if(!Variables.Tutorial)
//    {
//    	this.transform.position.x = Cube.transform.position.x;
//    }
}

static function Pause()
{
	yield WaitForSeconds(0.2);
	Time.timeScale = 0.0;
	//Debug.Log("Pause");
	Paused = true;
    PauseBox.SetActive(true);
}

static function UnPause()
{
	Time.timeScale = 1.0;
	//Debug.Log("UnPause");
	yield WaitForSeconds(0.2);
	Paused = false;
    PauseBox.SetActive(false);
}