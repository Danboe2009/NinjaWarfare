using UnityEngine;
using System.Collections;

public class EveryplayScript : MonoBehaviour 
{
	void Start()
	{
		if(Everyplay.IsSupported())
		{
			Everyplay.StartRecording();
		}
	}

	public static void StartRecording()
	{
		if(Everyplay.IsSupported())
		{
			if(!Everyplay.IsRecording())
			{
				Everyplay.StartRecording();
				Debug.Log("Start Recording");
			}
		}
	}

	public static void StopRecording()
	{
		if(Everyplay.IsSupported())
		{
			Everyplay.StopRecording();
			Everyplay.SetMetadata("Level" , PlayerPrefs.GetInt("Level"));
			Everyplay.SetMetadata("Total Score" , PlayerPrefs.GetInt("TotalScore"));
			Debug.Log("Stop Recording");
		}
	}

	public static void Share()
	{
		if(Everyplay.IsSupported())
		{
			Everyplay.ShowSharingModal();
		}
	}
}