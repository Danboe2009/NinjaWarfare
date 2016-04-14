#pragma strict

function Start () 
{
	if(Application.loadedLevelName == "Results")
	{
		StartCoroutine("ShowAd");
	}
}

function Update () 
{
//	var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
//	var hit : RaycastHit;
//    
//    if (collider.Raycast (ray, hit, 100)) 
//    {
//    	if(Input.GetButtonDown("Fire1"))
//       	{
//       		ChartBoost.Inter();
//       	}
//    }
}

//function ShowAd()
//{
//	ChartBoost.Inter();
//}