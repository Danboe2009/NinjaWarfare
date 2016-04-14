#pragma strict

function Start () 
{
	Destroy(this.gameObject,0.5);
}

function FixedUpdate () 
{
	GetComponent.<Rigidbody>().position += (Vector3.right * 11 * Time.deltaTime);
	
	if(this.transform.position.x > 140 || this.transform.position.x < -140 || this.transform.position.z < -10 || this.transform.position.z > 6)
	{
		Destroy(this.gameObject,0);
	}
	
	if(GetComponent.<Rigidbody>().velocity.x < 0)
	{
		Destroy(this.gameObject,0);
	}
}

//function OnCollisionEnter(Col : Collision)
//{
//	if(Col.gameObject.tag == "Oni" || Col.gameObject.tag == "BadCastle" || Col.gameObject.tag == "OniBullet")
//	{
//		Physics.IgnoreCollision(this.collider,Col.collider);
//	}
//}