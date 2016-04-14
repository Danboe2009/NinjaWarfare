using UnityEngine;
using System;
using System.Collections;
using System.Globalization;
using SmartLocalization;

public class UpgradesLanguage : MonoBehaviour 
{
	public TextMesh Continue;
	public TextMesh Upgrade;
	public TextMesh Back;
	public TextMesh Upgrades;
	public TextMesh Sword;
	public TextMesh Nunchuck;
	public TextMesh Throwing;
	public TextMesh LongBow;
	public TextMesh WoodStaff;
	public TextMesh ChainSickle;
	public TextMesh Sai;
	public TextMesh HandClaws;
	public TextMesh NinjaTree;
	public TextMesh StoneWall;
	public TextMesh CoinMiner;
	public TextMesh Refining;

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
		Upgrades.text = thisLanguageManager.GetTextValue ("Menu.Upgrades");
		Sword.text = thisLanguageManager.GetTextValue ("Upgrades.Sword");
		Nunchuck.text = thisLanguageManager.GetTextValue ("Upgrades.Nunchuck");
		Throwing.text = thisLanguageManager.GetTextValue ("Upgrades.Throwing");
		LongBow.text = thisLanguageManager.GetTextValue ("Upgrades.LongBow");
		WoodStaff.text = thisLanguageManager.GetTextValue ("Upgrades.WoodStaff");
		ChainSickle.text = thisLanguageManager.GetTextValue ("Upgrades.ChainSickle");
		Sai.text = thisLanguageManager.GetTextValue ("Upgrades.Sai");
		HandClaws.text = thisLanguageManager.GetTextValue ("Upgrades.HandClaws");
		NinjaTree.text = thisLanguageManager.GetTextValue ("Upgrades.NinjaTree");
		StoneWall.text = thisLanguageManager.GetTextValue ("Upgrades.StoneWall");
		CoinMiner.text = thisLanguageManager.GetTextValue ("Upgrades.CoinMiner");
		Refining.text = thisLanguageManager.GetTextValue ("Upgrades.Refining");
	}
}