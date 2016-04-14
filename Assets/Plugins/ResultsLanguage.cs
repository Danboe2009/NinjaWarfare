using UnityEngine;
using System;
using System.Collections;
using System.Globalization;
using SmartLocalization;

public class ResultsLanguage : MonoBehaviour 
{
	public TextMesh Continue;
	public TextMesh Upgrade;
	public TextMesh Back;
	public TextMesh RateUs;
	public TextMesh Skill;
	public TextMesh Score;
	public TextMesh BonusScore;
	public TextMesh BonusSkill;
	public TextMesh TotalScore;
	public TextMesh TotalSkill;

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
		Upgrade.text = thisLanguageManager.GetTextValue ("Game.Upgrade");
		Back.text = thisLanguageManager.GetTextValue ("Menu.Back");
		RateUs.text = thisLanguageManager.GetTextValue ("Results.RateUs");
		Skill.text = thisLanguageManager.GetTextValue ("Game.Skill");
		Score.text = thisLanguageManager.GetTextValue ("Game.Score");
		BonusScore.text = thisLanguageManager.GetTextValue ("Results.BonusScore");
		BonusSkill.text = thisLanguageManager.GetTextValue ("Results.BonusSkill");
		TotalScore.text = thisLanguageManager.GetTextValue ("Results.TotalScore");
		TotalSkill.text = thisLanguageManager.GetTextValue ("Results.TotalSkill");
	}
}