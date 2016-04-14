#pragma strict

private var Box : GameObject;
private var Mess : TextMesh;

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
	Mess.text = MesTex;
}