#pragma strict

static var NinList : Ninja[];
var Ninja : GameObject;

static var OniList : Oni[];
var Oni : GameObject;
 
function Start()
{
}	

function Update()
{
	var objects = FindObjectsOfType(GameObject);
    var Ninjas = new Array();
    for (var obj : GameObject in objects) 
    {
	    if (obj.name.Contains("BlueNinja")) 
	    {
	    	Ninjas.Add(obj);
	    }
    }
    for(var i = 0; i < Ninjas.length; i++)
    {
    	Debug.Log(i + " = " + Ninjas[i].ToString());
    }
}