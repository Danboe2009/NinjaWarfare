#pragma strict

var Top : TextMesh;
var Bottom : TextMesh;
var One : TextMesh;
var Two : TextMesh;
var Three : TextMesh;
var Four : TextMesh;
var Five : TextMesh;

static var dt = Date();
static var day = dt.Now.Day.ToString();
static var month = dt.Now.Month.ToString();
static var year = dt.Now.Year.ToString();
static var yday = dt.Now.AddDays(-1).Day.ToString();
static var ymonth = dt.Now.AddDays(-1).Month.ToString();
static var yyear = dt.Now.AddDays(-1).Year.ToString();

	
function Start () 
{
	Top.text = Language.thisLanguageManager.GetTextValue("Menu.Daily6");
	One.text = Language.thisLanguageManager.GetTextValue("Menu.Daily1");
	Two.text = Language.thisLanguageManager.GetTextValue("Menu.Daily2");
	Three.text = Language.thisLanguageManager.GetTextValue("Menu.Daily3");
	Four.text = Language.thisLanguageManager.GetTextValue("Menu.Daily4");
	Five.text = Language.thisLanguageManager.GetTextValue("Menu.Daily5");
//	dt = Date();
//	day = dt.Now.Day.ToString();
//	month = dt.Now.Month.ToString();
//	year = dt.Now.Year.ToString();
//	yday = dt.Now.AddDays(-1).Day.ToString();
//	ymonth = dt.Now.AddDays(-1).Month.ToString();
//	yyear = dt.Now.AddDays(-1).Year.ToString();
	
	Variables.Pause = true;
	
	if(PlayerPrefs.GetString("LastPlayed") == ""+ymonth+yday+yyear && PlayerPrefs.GetInt("Bonus") == 0)
	{
		PlayerPrefs.SetInt("Streak",PlayerPrefs.GetInt("Streak") + 1);
		PlayerPrefs.SetInt("Bonus",1);
		if(PlayerPrefs.GetInt("Streak") < 5)
		{
			PlayerPrefs.SetInt("FreeAds",PlayerPrefs.GetInt("Streak") + 1);
		}
		else
		{
			PlayerPrefs.SetInt("FreeAds",5);
		}
	}
	else if(PlayerPrefs.GetString("LastPlayed") == ""+month+day+year)
	{
		PlayerPrefs.SetInt("Streak",PlayerPrefs.GetInt("Streak"));
		Variables.Pause = false;
		Destroy(this.gameObject,0);
	}
	else if(PlayerPrefs.GetString("LastPlayed") == ""+ymonth+yday+yyear && PlayerPrefs.GetInt("Bonus") == 1)
	{
		PlayerPrefs.SetInt("Streak",PlayerPrefs.GetInt("Streak"));
	}
	else
	{
		PlayerPrefs.SetInt("Streak",0);
		PlayerPrefs.SetInt("FreeAds",1);
	}
	
	switch(PlayerPrefs.GetInt("Streak"))
	{
		case 0:
		Bottom.text = Language.thisLanguageManager.GetTextValue("Menu.Daily1");
		break;
		case 1:
		Bottom.text = Language.thisLanguageManager.GetTextValue("Menu.Daily2");
		break;
		case 2:
		Bottom.text = Language.thisLanguageManager.GetTextValue("Menu.Daily3");
		break;
		case 3:
		Bottom.text = Language.thisLanguageManager.GetTextValue("Menu.Daily4");
		break;
		default:
		Bottom.text = Language.thisLanguageManager.GetTextValue("Menu.Daily5");
		break;
	}
}

function Update () 
{
	Variables.Pause = true;
	var ray = Camera.main.ScreenPointToRay (AspectUtilityEnhanced.mousePosition);
    var hit : RaycastHit;
    
    if (GetComponent.<Collider>().Raycast (ray, hit, 100)) 
    {
    	if(Input.GetButtonDown("Fire1"))
       	{
       		Variables.Pause = false;
       		Destroy(this.gameObject,0);
       	}
    }
}

static function TestToday()
{
	if(PlayerPrefs.GetString("LastPlayed") == ""+month+day+year)
	{
		Debug.Log("False");
		return false;
	}
	else
	{
		PlayerPrefs.SetString("LastPlayed",""+month+day+year);
		PlayerPrefs.SetInt("Bonus",0);
		Debug.Log("True");
		return true;
	}
}