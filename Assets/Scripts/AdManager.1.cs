using UnityEngine;
using System.Collections;
using UnityEngine.Advertisements;

public class AdManager : MonoBehaviour 
{
	public ClearScreen Menu;

	[SerializeField] string gameID = "37275";

	void Awake()
	{
		Advertisement.Initialize (gameID, false);
	}

	public void OnMouseDown()
	{
		if (PlayerPrefs.GetInt ("FreeAds") >= 1) 
		{
			ShowAd ();
				
		} 
		else 
		{
			Menu.ClearScreen(Language.thisLanguageManager.GetTextValue("Menu.NoMoreAds"));
		}
	}
	
	public void ShowAd(string zone = "")
	{
		#if UNITY_EDITOR
		StartCoroutine(WaitForAd ());
		#endif
		
		if (string.Equals (zone, ""))
			zone = null;
		
		ShowOptions options = new ShowOptions ();
		options.resultCallback = AdCallbackhandler;
		
		if (Advertisement.isReady (zone))
			Advertisement.Show (zone, options);
	}
	
	void AdCallbackhandler (ShowResult result)
	{
		switch(result)
		{
		case ShowResult.Finished:
			Debug.Log ("Ad Finished. Rewarding player...");
			Menu.ClearScreen(Language.thisLanguageManager.GetTextValue("Menu.Awarded"));
			PlayerPrefs.SetInt("Diamonds",PlayerPrefs.GetInt("Diamonds") + 1);
			PlayerPrefs.SetInt("FreeAds",PlayerPrefs.GetInt("FreeAds") - 1);
			break;
		case ShowResult.Skipped:
			Debug.Log ("Ad skipped. Son, I am dissapointed in you");
			Menu.ClearScreen(Language.thisLanguageManager.GetTextValue("Menu.Skipped"));
			break;
		case ShowResult.Failed:
			Debug.Log("I swear this has never happened to me before");
			Menu.ClearScreen(Language.thisLanguageManager.GetTextValue("Menu.Failed"));
			break;
		}
	}
	
	IEnumerator WaitForAd()
	{
		float currentTimeScale = Time.timeScale;
		Time.timeScale = 0f;
		yield return null;
		
		while (Advertisement.isShowing)
			yield return null;
		
		Time.timeScale = currentTimeScale;
	}
}