#pragma strict

var text : TextMesh;

function Start () 
{
	var Words = Mathf.Abs(Random.Range(1,10));
	
	if(Words <= 3)
	{
		text.text = "Always win.";
	}
	if(Words > 3 && Words < 6)
	{
		text.text = "Dan is Awesome.";
	}
	if(Words >= 6)
	{
		text.text = "Watch out for Oni.";
	}
}

function Update()
{
}