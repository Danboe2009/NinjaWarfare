using UnityEngine;
using System;
using System.Collections;
using System.Globalization;
using SmartLocalization;

public class Language : MonoBehaviour 
{
	public TextMesh Play;
	public TextMesh Upgrades;
	public TextMesh Back;
	public TextMesh Options;
	public TextMesh Games;
	public TextMesh OptionsBut;
	public TextMesh Achievements;
	public TextMesh Leaderboards;
	public TextMesh Connected;
	public TextMesh Credits;
	public TextMesh Reset;
	public TextMesh Yes;
	public TextMesh No;
	public TextMesh LogoTop;
	public TextMesh LogoBot;

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

		Play.text = thisLanguageManager.GetTextValue ("Menu.Play");
		Upgrades.text = thisLanguageManager.GetTextValue ("Menu.Upgrades");
		Back.text = thisLanguageManager.GetTextValue ("Menu.Back");
		Options.text = thisLanguageManager.GetTextValue ("Menu.Options");
		Games.text = thisLanguageManager.GetTextValue ("Menu.Games");
		OptionsBut.text = thisLanguageManager.GetTextValue ("Menu.Options");
		Achievements.text = thisLanguageManager.GetTextValue ("Menu.Achievements");
		Leaderboards.text = thisLanguageManager.GetTextValue ("Menu.Leaderboards");
		Connected.text = thisLanguageManager.GetTextValue ("Menu.Connected");
		Credits.text = thisLanguageManager.GetTextValue ("Menu.Credits");
		Reset.text = thisLanguageManager.GetTextValue ("Menu.Reset");
		Yes.text = thisLanguageManager.GetTextValue ("Menu.Yes");
		No.text = thisLanguageManager.GetTextValue ("Menu.No");
		LogoTop.text = thisLanguageManager.GetTextValue ("Menu.LogoTop");
		LogoBot.text = thisLanguageManager.GetTextValue ("Menu.LogoBot");
	}
}