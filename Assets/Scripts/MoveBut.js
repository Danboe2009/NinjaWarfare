#pragma strict
var Cube : GameObject;
var Dir : String;
var MoveTop : TextMesh;
var MoveBot : TextMesh;

private var Show : boolean;

function Start () 
{
	if(PlayerPrefs.GetInt("Tutorial") == 0)
	{
		Show = true;
	}
	else
	{
		Show = false;
	}
}	

function FixedUpdate () 
{
	if(Show)
	{
		MoveTop.text = GameLanguage.thisLanguageManager.GetTextValue("Game.MoveTop");
		MoveBot.text = GameLanguage.thisLanguageManager.GetTextValue("Game.MoveBot");
	}
	else
	{
		MoveTop.text = "";
		MoveBot.text = "";
	}
		
	var ray = Camera.main.ScreenPointToRay (AspectUtilityEnhanced.mousePosition);
    var hit : RaycastHit;
    
    if (GetComponent.<Collider>().Raycast (ray, hit, 100)) 
    {
    	if(Input.GetButton("Fire1") && !Variables.Movement)
       	{
	       	if(Dir == "Left")
	       	{
	       		Tutorial.Left = true;
				if(Cube.transform.position.x > -32)
				{
					Cube.transform.position.x --;
				}
			}
			if(Dir == "Right")
	       	{
	       		Tutorial.Right = true;
				if(Cube.transform.position.x < 32)
				{
					Cube.transform.position.x ++;
				}
			}
			Show = false;
		}
	}
}