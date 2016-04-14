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
	GetComponent.<Rigidbody>().position += (Vector3.right * 10 * Time.deltaTime);
	this.tag = "Ninja";
	
	if(this.transform.position.x > 140 || this.transform.position.x < -140)
	{
		Destroy(this.gameObject,0);
	}
}

function Die()
{
	yield WaitForSeconds(0.7);
	Destroy(this.gameObject,0);
}

function OnCollisionEnter(Col : Collision)
{
	if(Col.gameObject.name == "PinkCastle")
	{
		Castles.AttackPinkCastle(Dam);
	}
	if(Col.gameObject.tag == "Ninja" || Col.gameObject.name == "BlueCastle" || Col.gameObject.name == "StoneWall")
	{
		Physics.IgnoreCollision(GetComponent.<Collider>(),Col.collider);
	}
}