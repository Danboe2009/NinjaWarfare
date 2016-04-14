#pragma strict
static var Dir : int;
static var Dam : int;

private var Castles : CastleGen;

Castles = GameObject.Find("CastleGenerator").GetComponent(CastleGen);

function Start () 
{
	StartCoroutine("Die");
}

function FixedUpdate () 
{
	GetComponent.<Rigidbody>().position += (Vector3.left * 10 * Time.deltaTime);
	this.tag = "Oni";
	
	if(this.transform.position.x > 140 || this.transform.position.x < -140)
	{
		Destroy(this.gameObject,0);
	}
}

function Die()
{
	yield WaitForSeconds(0.5);
	Destroy(this.gameObject,0);
}

function OnCollisionEnter(Col : Collision)
{
	if(Col.gameObject.name == "BlueCastle")
	{
		Castles.AttackBlueCastle(Dam);
		//Debug.Log("Bang");
	}
	if(Col.gameObject.name == "StoneWall")
	{
		var Stone = GameObject.Find("StoneWall").GetComponent(Stonewall);
		Stone.Health = (Stone.Health - Dam);
		Destroy(this.gameObject,0);
	}
}