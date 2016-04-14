#pragma strict

function Start () 
{

}

function Update () 
{
	var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
    var hit : RaycastHit;
    
	if (GetComponent.<Collider>().Raycast (ray, hit, 100)) 
    {
    	if(Input.GetButtonDown("Fire1"))
       	{
       		this.GetComponent.<Animation>().Play("MonyOut");
       		PlayerPrefs.SetInt("Slot1",1);
       		PlayerPrefs.SetInt("Slot2",1);
       		PlayerPrefs.SetInt("Slot3",1);
       		PlayerPrefs.SetInt("Slot4",1);
       		PlayerPrefs.SetInt("Slot5",1);
       		PlayerPrefs.SetInt("Slot6",1);
       		PlayerPrefs.SetInt("Slot7",1);
       		PlayerPrefs.SetInt("Slot8",1);
       		
       		PlayerPrefs.SetInt("Unit1Level",1);
       		PlayerPrefs.SetInt("Unit2Level",1);
       		PlayerPrefs.SetInt("Unit3Level",1);
       		PlayerPrefs.SetInt("Unit4Level",1);
       		PlayerPrefs.SetInt("Unit5Level",1);
       		PlayerPrefs.SetInt("Unit6Level",1);
       		PlayerPrefs.SetInt("Unit7Level",1);
       		PlayerPrefs.SetInt("Unit8Level",1);
       		
       		PlayerPrefs.SetInt("MinerLevel",20);
       	}
    }
}