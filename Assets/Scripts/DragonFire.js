#pragma strict
static var Dir : int;
static var Dam : int;

private var Castles : CastleGen;

Castles = GameObject.Find("CastleGenerator").GetComponent(CastleGen);

function Start () 
{
	Destroy(this.gameObject,0.5);
}

function FixedUpdate () 
{
	GetComponent.<Rigidbody>().position += (Vector3.left * 10 * Time.deltaTime);
	GetComponent.<Rigidbody>().position += (Vector3.back * 10 * Time.deltaTime);
	
	if(this.transform.position.x > 140 || this.transform.position.x < -140 || this.transform.position.z < -10 || this.transform.position.z > 6)
	{
		Destroy(this.gameObject,0);
	}
}

function OnCollisionEnter(Col : Collision)
{
	if(Col.gameObject.tag == "Ninja")
	{
		Destroy(this.gameObject,0.3);
		Physics.IgnoreCollision(GetComponent.<Collider>(),Col.collider);
	}
}