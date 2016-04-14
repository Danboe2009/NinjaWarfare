using UnityEngine;
using System;
using System.Collections;
using System.Globalization;
using SmartLocalization;

public class GameLanguage : MonoBehaviour 
{
	public TextMesh Continue;
	public TextMesh Menu;
	public TextMesh Pause;

	public static LanguageManager thisLanguageManager;

	void Start () 
	{
		thisLanguageManager = LanguageManager.Instance;
		
		SmartCultureInfo systemLanguage = thisLanguageManager.GetSupportedSystemLanguage();
		if(thisLanguageManager.IsLanguageSupported(systemLanguage))
		{
			thisLanguageManager.ChangeLanguage(systemLanguage);
			//thisLanguageManager.ChangeLanguage("ko-KR");
		}
		thisLanguageManager = LanguageManager.Instance;

		Continue.text = thisLanguageManager.GetTextValue ("Game.Continue");
		Menu.text = thisLanguageManager.GetTextValue ("Game.Menu");
		Pause.text = thisLanguageManager.GetTextValue ("Game.Pause");
	}
}