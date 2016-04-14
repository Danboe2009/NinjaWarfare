using UnityEngine;
using System.Collections;
using System.Runtime.InteropServices;
using UnityEngine.SocialPlatforms;
	
public class GPG : MonoBehaviour 
{
	private enum GPLoginState {loggedout, loggedin};
	private GPLoginState m_loginState = GPLoginState.loggedout;
	static double onReportACPercent = 0;

	static double currACPercent = 2;
	static double BattlePercent = 2;

	// Use this for initialization
	void Start () 
	{
		Social.Active = new UnityEngine.SocialPlatforms.GPGSocial();
		StartCoroutine(Setup());
	}

	IEnumerator Setup()
	{
		yield return new WaitForSeconds(1);
		Debug.Log("Setup");
		Social.localUser.Authenticate(OnAuthCB);
		yield return new WaitForSeconds(1);
		Social.LoadAchievements(OnLoadAC);
		yield return new WaitForSeconds(1);
//		if(Social.localUser.authenticated)
//		{
//			foreach (IAchievement ac in NerdGPG.Instance().acList) 
//			{
//				//				if (ac.id == "CgkI7PWMhvoCEAIQDw") 
//				//				{
//				//currACPercent = ac.percentCompleted;
//
//				//				}
//			}
//		}
		if (NerdGPG.Instance().acList == null)
		{
			Debug.Log("Nothing");
		}
		else 
		{
			// Check if the achievement we are trying to increment is in the ac list
			foreach (IAchievement ac in NerdGPG.Instance().acList) 
			{
				//Debug.Log(ac.id.ToString() + " is " + ac.percentCompleted + " Completed.");
				if (ac.id == "CgkI7PWMhvoCEAIQZQ") 
				{
					//BattlePercent = ac.percentCompleted;
					//Debug.Log(BattlePercent);
					Debug.Log(ac.id.ToString() + " is " + ac.completed + " Completed.");
				}
			}
		}
	}
	
	// Update is called once per frame
	void Update () 
	{

	}

	public static void AchievementGameOn()
	{
		if(Social.localUser.authenticated)
		{
			Social.ReportProgress("CgkI7PWMhvoCEAIQEQ",100.0,OnSubmitAC);
		}
	}

	public static void AchievementBattle()
	{
		if(Social.localUser.authenticated)
		{
			Social.ReportProgress("CgkI7PWMhvoCEAIQDw",100.0,OnSubmitAC);
		}
	}

	//Swordsman
	public static void AchievementSmallArmy()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Swordsman") / 15.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQEA",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementSliceDice()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Swordsman") / 50.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQEg",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementCentury()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Swordsman") / 100.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQEw",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementNinjaSlasher()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Swordsman") / 250.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQFA",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementSwordSwipes()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Swordsman") / 500.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQFQ",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementNinjaGuiding()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Swordsman") / 1000.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQFg",onReportACPercent,OnSubmitAC);
		}
	}

	//Nunchuck
	public static void AchievementSpeedKills()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Nunchuckman") / 15.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQFw",onReportACPercent,OnSubmitAC);	
		}
	}
	public static void AchievementCloseCombat()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Nunchuckman") / 50.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQGA",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementSwiftPainful()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Nunchuckman") / 100.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQGQ",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementQuickKiller()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Nunchuckman") / 250.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQGg",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementFastHands()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Nunchuckman") / 500.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQGw",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementMach10()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Nunchuckman") / 1000.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQHA",onReportACPercent,OnSubmitAC);
		}
	}

	//Throwing Star
	public static void AchievementConcealed()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Throwingman") / 15.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQHQ",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementThrowEm()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Throwingman") / 50.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQHg",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementSharp()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Throwingman") / 100.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQHw",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementChucking()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Throwingman") / 250.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQIA",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementShuriken()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Throwingman") / 500.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQIQ",onReportACPercent,OnSubmitAC);
		}
	}
	public static void Achievement6Pointed()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Throwingman") / 1000.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQIg",onReportACPercent,OnSubmitAC);
		}
	}

	//Longbow
	public static void AchievementArcher()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Longbowman") / 15.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQIw",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementLongRange()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Longbowman") / 50.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQJA",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementReadyAim()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Longbowman") / 100.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQJQ",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementBowArrow()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Longbowman") / 250.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQJg",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementDistant()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Longbowman") / 500.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQJw",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementRobin()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Longbowman") / 1000.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQKA",onReportACPercent,OnSubmitAC);
		}
	}

	//WoodStaff
	public static void AchievementBlunt()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Woodman") / 15.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQKQ",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementThud()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Woodman") / 50.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQKg",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementSwatEm()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Woodman") / 100.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQKw",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementWooden()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Woodman") / 250.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQLA",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementSmacking()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Woodman") / 500.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQLQ",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementTree()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Woodman") / 1000.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQLg",onReportACPercent,OnSubmitAC);
		}
	}

	//Chain&Sickle
	public static void AchievementChain()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Chainman") / 15.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQLw",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementSickles()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Chainman") / 50.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQMA",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementAttack()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Chainman") / 100.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQMQ",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementClose()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Chainman") / 250.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQMg",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementChainEm()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Chainman") / 500.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQMw",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementGrim()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Chainman") / 1000.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQNA",onReportACPercent,OnSubmitAC);
		}
	}

	//Sai
	public static void AchievementStab()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Saiman") / 15.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQNQ",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementMulti()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Saiman") / 50.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQNg",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementBlunted()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Saiman") / 100.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQNw",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementMetal()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Saiman") / 250.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQOA",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementSaiYou()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Saiman") / 500.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQOQ",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementMartial()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Saiman") / 1000.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQOg",onReportACPercent,OnSubmitAC);
		}
	}

	//HandClaw
	public static void AchievementCombatant()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Clawman") / 15.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQOw",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementFighter()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Clawman") / 50.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQPA",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementSlicing()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Clawman") / 100.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQPQ",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementTwoTalons()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Clawman") / 250.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQPg",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementBreaking()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Clawman") / 500.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQPw",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementClawWarrior()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Clawman") / 1000.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQQA",onReportACPercent,OnSubmitAC);
		}
	}

	//Coins
	public static void AchievementAndSoItBegans()
	{
		if(Social.localUser.authenticated)
		{
			Social.ReportProgress("CgkI7PWMhvoCEAIQQQ",100.0,OnSubmitAC);
		}
	}
	public static void AchievementCoinCollector()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("TotalCoins") / 25.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQQg",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementCoinoisseur()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("TotalCoins") / 50.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQQw",onReportACPercent,OnSubmitAC);									
		}
	}
	public static void AchievementMoneyHungry()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("TotalCoins") / 100.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQRA",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementCoinVault()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("TotalCoins") / 500.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQRQ",onReportACPercent,OnSubmitAC);
		}
	}

	//Diamonds
	public static void AchievementOneCarat()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("TotalDiamonds") / 10.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQCQ",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementFiveCarat()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("TotalDiamonds") / 25.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQCg",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementTenCarat()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("TotalDiamonds") / 50.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQCw",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementTwentyCarat()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("TotalDiamonds") / 100.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQDA",onReportACPercent,OnSubmitAC);
		}
	}

	//Kills
	public static void AchievementCzar()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("TotalKills") / 50.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQRg",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementKing()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("TotalKills") / 100.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQRw",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementDictator()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("TotalKills") / 250.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQSA",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementSulton()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("TotalKills") / 500.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQSQ",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementMonarch()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("TotalKills") / 1000.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQSg",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementSoverign()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("TotalKills") / 5000.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQSw",onReportACPercent,OnSubmitAC);
		}
	}

	//Swordsman
	public static void AchievementSharpening()
	{
		if(Social.localUser.authenticated)
		{
			Social.ReportProgress("CgkI7PWMhvoCEAIQTA",100.0,OnSubmitAC);
		}
	}
	public static void AchievementEdgeOfTheBlade()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Unit1Level") / 5.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQTQ",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementSwordsMaster()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Unit1Level") / 10.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQAQ",onReportACPercent,OnSubmitAC);
		}
	}

	//Nunchuck
	public static void AchievementSpeedItUp()
	{
		if(Social.localUser.authenticated)
		{
			Social.ReportProgress("CgkI7PWMhvoCEAIQTg",100.0,OnSubmitAC);
		}
	}
	public static void AchievementGettingQuicker()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Unit2Level") / 5.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQTw",onReportACPercent,OnSubmitAC);   
		}
	}
	public static void AchievementNunchuckMaster()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Unit2Level") / 10.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQAw",onReportACPercent,OnSubmitAC);   
		}
	}

	//ThrowingStar
	public static void AchievementPointy()
	{
		if(Social.localUser.authenticated)
		{
			Social.ReportProgress("CgkI7PWMhvoCEAIQUA",100.0,OnSubmitAC);
		}
	}
	public static void AchievementPowerfulRage()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Unit3Level") / 5.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQUQ",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementThrowingStarMaster()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Unit3Level") / 10.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQBA",onReportACPercent,OnSubmitAC);
		}
	}

	//Longbow
	public static void AchievementTestingFlight()
	{
		if(Social.localUser.authenticated)
		{
			Social.ReportProgress("CgkI7PWMhvoCEAIQUg",100.0,OnSubmitAC);
		}
	}
	public static void AchievementIntermediateArcher()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Unit4Level") / 5.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQUw",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementLongbowMaster()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Unit4Level") / 10.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQBQ",onReportACPercent,OnSubmitAC);
		}
	}

	//Woodstaff
	public static void AchievementKnockOnWood()
	{
		if(Social.localUser.authenticated)
		{
			Social.ReportProgress("CgkI7PWMhvoCEAIQVA",100.0,OnSubmitAC);
		}
	}
	public static void AchievementJankaTest()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Unit5Level") / 5.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQVQ",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementWoodStaffMaster()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Unit5Level") / 10.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQDQ",onReportACPercent,OnSubmitAC);
		}
	}

	//Chain&Sickle
	public static void AchievementChainGang()
	{
		if(Social.localUser.authenticated)
		{
			Social.ReportProgress("CgkI7PWMhvoCEAIQVg",100.0,OnSubmitAC);
		}
	}
	public static void AchievementSickleWithIt()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Unit6Level") / 5.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQVw",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementChainSickleMaster()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Unit6Level") / 10.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQBg",onReportACPercent,OnSubmitAC);
		}
	}

	//Sai
	public static void AchievementBonSai()
	{
		if(Social.localUser.authenticated)
		{
			Social.ReportProgress("CgkI7PWMhvoCEAIQWA",100.0,OnSubmitAC);
		}
	}
	public static void AchievementSaiAnora()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Unit7Level") / 5.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQWQ",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementSaiMaster()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Unit7Level") / 10.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQBw",onReportACPercent,OnSubmitAC);
		}
	}

	//ClawMan
	public static void AchievementSharpeningMyClaws()
	{
		if(Social.localUser.authenticated)
		{
			Social.ReportProgress("CgkI7PWMhvoCEAIQWg",100.0,OnSubmitAC);
		}
	}
	public static void AchievementDualWield()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Unit8Level") / 5.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQWw",onReportACPercent,OnSubmitAC);
		}
	}
	public static void AchievementHandClawMaster()
	{
		if(Social.localUser.authenticated)
		{
			onReportACPercent = (PlayerPrefs.GetInt("Unit8Level") / 10.0f) * 100.0f;
			Debug.Log("Increment by : " + onReportACPercent);
			Social.ReportProgress("CgkI7PWMhvoCEAIQCA",onReportACPercent,OnSubmitAC);
		}
	}

	//Unlocks
	public static void AchievementRecruiter()
	{
		if(Social.localUser.authenticated)
		{
			if(PlayerPrefs.GetInt("TotalUnlocks") == 2)
			{
				Social.ReportProgress("CgkI7PWMhvoCEAIQXA",100.0,OnSubmitAC);
			}
		}
	}
	public static void AchievementArmyBuilder()
	{
		if(Social.localUser.authenticated)
		{
			if(PlayerPrefs.GetInt("TotalUnlocks") == 4)
			{
				Social.ReportProgress("CgkI7PWMhvoCEAIQXQ",100.0,OnSubmitAC);
			}
		}
	}
	public static void AchievementWarLord()
	{	
		if(Social.localUser.authenticated)
		{
			if(PlayerPrefs.GetInt("TotalUnlocks") == 6)
			{
				Social.ReportProgress("CgkI7PWMhvoCEAIQXg",100.0,OnSubmitAC);
			}
		}
	}
	public static void AchievementFullPotential()
	{
		if(Social.localUser.authenticated)
		{
			if(PlayerPrefs.GetInt("TotalUnlocks") == 8)
			{
				Social.ReportProgress("CgkI7PWMhvoCEAIQXw",100.0,OnSubmitAC);
			}
		}
	}

	//Levels
	public static void AchievementQuestStarter()
	{
		if(Social.localUser.authenticated)
		{
			Social.ReportProgress("CgkI7PWMhvoCEAIQYA",100.0,OnSubmitAC);
		}
	}
	public static void AchievementStickingWithIt()
	{
		if(Social.localUser.authenticated)
		{
			Social.ReportProgress("CgkI7PWMhvoCEAIQYQ",100.0,OnSubmitAC);
		}
	}
	public static void AchievementAdventurer()
	{
		if(Social.localUser.authenticated)
		{
			Social.ReportProgress("CgkI7PWMhvoCEAIQYg",100.0,OnSubmitAC);
		}
	}
	public static void AchievementJourneyMan()
	{
		if(Social.localUser.authenticated)
		{
			Social.ReportProgress("CgkI7PWMhvoCEAIQYw",100.0,OnSubmitAC);
		}
	}
	public static void AchievementRelentless()
	{
		if(Social.localUser.authenticated)
		{
			Social.ReportProgress("CgkI7PWMhvoCEAIQZQ",100.0,OnSubmitAC);
		}
	}

	public static void LoadAchievements()
	{
		if(Social.localUser.authenticated)
		{
			Social.ShowAchievementsUI();
		}
	}

	public static void LoadHighscores()
	{
		if(Social.localUser.authenticated)
		{
			Social.ShowLeaderboardUI();
		}
	}

	public static void AddScoreHighscore(long Score)
	{
		if(Social.localUser.authenticated)
		{
			Social.ReportScore(Score,"CgkI7PWMhvoCEAIQDg",OnSubmitScore);
		}							  
	}

	public static void AddLevelHighscore(long Level)
	{
		if(Social.localUser.authenticated)
		{
			Social.ReportScore(Level,"CgkI7PWMhvoCEAIQaA",OnSubmitScore);
		}							  
	}

	public static void AddKillsHighscore(long Kills)
	{
		if(Social.localUser.authenticated)
		{
			Social.ReportScore(Kills,"CgkI7PWMhvoCEAIQZw",OnSubmitScore);
		}							  
	}

	void OnAuthCB(bool result)
    {
        Debug.Log("GPGUI: Got Login Response: " + result);
    }

   	static void OnLoadAC(IAchievement[] achievements)
    {
        Debug.Log("GPGUI: Loaded Achievements: " + achievements.Length);
    }

	public void OnLoadScore(bool result)
	{
		Debug.Log("GPGUI: Loaded Achievements: " + result);
	}

    public void OnLoadACDesc(IAchievementDescription[] acDesc)
    {
        Debug.Log("GPGUI: Loaded Achievement Description: " + acDesc.Length);
    }

    static void OnSubmitScore(bool result)
    {
        Debug.Log("GPGUI: OnSubmitScore: " + result);
    }

    static void OnSubmitAC(bool result)
    {
        Debug.Log("GPGUI: OnSubmitAchievement " + result);
        if (result == true) {
            NerdGPG.Instance().haveLoadedAc = false;
            Social.LoadAchievements(OnLoadAC);
        }
    }

    public void OnUnlockAC(bool result)
    {
        Debug.Log("GPGUI: OnUnlockAC " + result);
    }

	public void GPGAuthResult(string result)
	{
		// success/failed
		if(result == "success") {
			m_loginState = GPLoginState.loggedin;
		} else 
			m_loginState = GPLoginState.loggedout;
	}
	
//	public void OnGPGCloudLoadResult(string result)
//	{
//		// result is in the format result;keyNum;length
//		// where result is either success/conflict/error
//		// keyNum is the key for which this result is 0-3 range as per GPG
//		// length is the length of data received from GPG Cloud. Important for binary data handling
//		// NOTE: In this code we are only saving/loading STRING data. but it should be fine to use it for any binary data
//		Debug.Log("OnGPGCloudLoadResult "+result);
//		string[] resArr = result.Split(';');
//		if(resArr.Length<3)
//		{
//			Debug.LogError("Length of array after split is less than 3");	
//			return; // weird stuff
//		}
//		int keyNum = System.Convert.ToInt16(resArr[1]);
//		if(resArr[0]=="success") {
//			// lets see what our data holds.
//			byte[] data = NerdGPG.Instance().getKeyLoadedData(keyNum);
//			string str = System.Text.Encoding.Unicode.GetString(data);
//			Debug.Log("Data read for key "+ resArr[1] + " is " + str + " with len "+ resArr[2] + " and converted string length is "+ str.Length);
//			dataToSave = str;
//		}
//	}
	
//	public void OnGPGCloudSaveResult(string result)
//	{
//		// result is in the format result;keyNum
//		// where result is either success/conflict/error
//		// keyNum is the key for which this result is 0-3 range as per GPG
//		
//		Debug.Log("GPG CloudSaveResult "+result);
//		string[] resArr = result.Split(';');
//		if(resArr.Length<3)
//		{
//			Debug.LogError("Length of array after split is less than 3");	
//			return; // weird stuff
//		}
//
//	}
}
