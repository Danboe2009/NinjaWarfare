using UnityEngine;
using System.Collections;

public class SwipeControls : MonoBehaviour {
	
	Vector2 initTouchPos;
	public TextMesh Debug;

	void Start ()
	{
	}
	
	// Update is called once per frame
	void Update ()
	{
		int fingerCount = 0;
		
		foreach (Touch touch in Input.touches)
		{
			Debug.text = touch.position.ToString();

			if(touch.phase == TouchPhase.Began)
			{
				initTouchPos = touch.position;
			}
			
			if (touch.phase != TouchPhase.Ended && touch.phase != TouchPhase.Canceled)
			{
				fingerCount++;
				
				if(fingerCount == 1 && touch.phase == TouchPhase.Moved || touch.phase == TouchPhase.Ended)
				{
					Vector2 touchFacing = (initTouchPos - touch.position).normalized;
					
					if(Vector2.Dot(touchFacing, Vector2.up) > 0.8 && Vector2.Distance(initTouchPos, touch.position) > 10)
					{
						Debug.text = ("SwipeDown");
					}
					if(Vector2.Dot(touchFacing, -Vector2.up) > 0.8 && Vector2.Distance(initTouchPos, touch.position) > 10)
					{
						Debug.text = ("SwipeUp");
					}
					if(Vector2.Dot(touchFacing, Vector2.right) > 0.8 && Vector2.Distance(initTouchPos, touch.position) > 10)
					{
						Debug.text = ("SwipeLeft");
					}
					if(Vector2.Dot(touchFacing, -Vector2.right) > 0.8 && Vector2.Distance(initTouchPos, touch.position) > 10)
					{
						Debug.text = ("SwipeRight");
					}
				}
			}
		}
	}
}