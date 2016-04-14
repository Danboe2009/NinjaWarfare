#pragma strict

var Ting : AudioClip;

private var Box : GameObject;
private var Mess : TextMesh;
private var Num : int;

function Start () 
{
	Num = 0;
}

function Update () 
{
	if(Input.GetKeyDown("escape"))
    {
    	if(Num == 0)
    	{
    		ClearScreen(Language.thisLanguageManager.GetTextValue("Menu.QuitTop") + "\n" + Language.thisLanguageManager.GetTextValue("Menu.QuitBot")); 
    	}
    	if(Num == 1)
    	{
    		Application.Quit();
    	}
    	Num ++;
	}
}

function ClearScreen(MesTex)
{	
	var Boa : GameObject[];
	Boa = GameObject.FindGameObjectsWithTag("Board");
    for(var c = 0; c < Boa.length; c++)
    {
       	Destroy(Boa[c]);
	}
	
	Box = Instantiate(Resources.Load("MessageBox"),Vector3(0,5,0),Quaternion.Euler(90,0,0));
	Mess = Instantiate(Resources.Load("Message",TextMesh),Vector3(0,5.2,0),Quaternion.Euler(90,0,0));
	
	if(Ting.length > 2 && PlayerPrefs.GetInt("Sound") == 1)
	{
		Box.GetComponent(TimedDeath).Tim = Ting.length;
		Mess.GetComponent(TimedDeath).Tim = Ting.length;
	}
	Mess.text = MesTex;
}