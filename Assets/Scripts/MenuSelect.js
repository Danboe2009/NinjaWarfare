#pragma strict

var Level : String;
var Ting : AudioClip;

private var Box : GameObject;
private var Mess : TextMesh;
private var Sound : int;
private var Cube : GameObject;

Cube = GameObject.Find("GUI");

function Start () 
{
	Sound = PlayerPrefs.GetInt("Sound");
}

function Update () 
{
	var ray = Camera.main.ScreenPointToRay (AspectUtilityEnhanced.mousePosition);
    var hit : RaycastHit;
    
    if (GetComponent.<Collider>().Raycast (ray, hit, 100)) 
    {
    	if(Input.GetButtonDown("Fire1") && !Variables.Pause)
       	{
       		if(PlayerPrefs.GetInt("Sound") == 1)
       		{
       			AudioSource.PlayClipAtPoint(Ting, Camera.main.transform.position);
       		}
       		if(Level == "GameLevel")
	       	{
	       		if(DateTest.TestToday())
	       		{
	       		
	       		}
	       	}
       		if(Level != "Quit")
       		{
	       		StartCoroutine("LoadLevel");
       		}
       		if(Level == "Quit")
       		{	
       			Time.timeScale = 0.0;
				Application.runInBackground = false;
				Application.Quit();
       		}
   		}
	}
	if(Input.GetKeyDown("escape"))
    {
    	if(Application.loadedLevelName == "Results" || Application.loadedLevelName == "Upgrades")
    	{
    		Level = "Menu";
    		StartCoroutine("LoadLevel");
    	}
    }
}

function LoadLevel()
{
	if(Application.loadedLevelName == "Menu")
	{
		ClearScreen(Language.thisLanguageManager.GetTextValue("Menu.Loading"));
	}
	if(Application.loadedLevelName == "GameLevel")
	{
		ClearScreen(GameLanguage.thisLanguageManager.GetTextValue("Menu.Loading"));
	}
	if(Application.loadedLevelName == "Upgrades")
	{
		ClearScreen(UpgradesLanguage.thisLanguageManager.GetTextValue("Menu.Loading"));
	}
	if(Application.loadedLevelName == "Results")
	{
		ClearScreen(ResultsLanguage.thisLanguageManager.GetTextValue("Menu.Loading"));
	}
	if(PlayerPrefs.GetInt("Sound") == 1)
	{
		yield WaitForSeconds(Ting.length);
	}
	Application.LoadLevel(Level);
}

function ClearScreen(MesTex)
{	
	var Boa : GameObject[];
	Boa = GameObject.FindGameObjectsWithTag("Board");
    for(var c = 0; c < Boa.length; c++)
    {
       	Destroy(Boa[c]);
	}
	if(Cube)
	{
		Time.timeScale = 1.0;
		Box = Instantiate(Resources.Load("MessageBox"),Vector3(Cube.transform.position.x,8,0),Quaternion.Euler(90,0,0));
		Mess = Instantiate(Resources.Load("Message",TextMesh),Vector3(Cube.transform.position.x,8.2,0),Quaternion.Euler(90,0,0));
	}
	else
	{
		Box = Instantiate(Resources.Load("MessageBox"),Vector3(0,5,0),Quaternion.Euler(90,0,0));
		Mess = Instantiate(Resources.Load("Message",TextMesh),Vector3(0,5.2,0),Quaternion.Euler(90,0,0));
	}
	if(Ting.length > 2 && PlayerPrefs.GetInt("Sound") == 1)
	{
		Box.GetComponent(TimedDeath).Tim = Ting.length;
		Mess.GetComponent(TimedDeath).Tim = Ting.length;
	}
	Mess.text = MesTex;
}