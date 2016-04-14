//using UnityEngine;
//using System;
//using System.Collections;
//using Chartboost;
//
//public class ChartBoost : MonoBehaviour 
//{
//	public static Boolean Inte;
//
//	void OnEnable() 
//	{
//		// Initialize the Chartboost plugin
//		#if UNITY_ANDROID
//		// Replace these with your own Android app ID and signature from the Chartboost web portal
//		CBBinding.init("53b479051873da0d3e79474a", "3d4f0a951aae001532c043d212f7e4b8489808ef");
//		CBBinding.cacheInterstitial(null);
//
//		//Inter();
//		#elif UNITY_IPHONE
//		// Replace these with your own iOS app ID and signature from the Chartboost web portal
//		CBBinding.init("CB_APP_ID_IOS", "CB_APP_SIG_IOS");
//		#endif
//	}
//
//	#if UNITY_ANDROID
//	void OnApplicationPause(bool paused) 
//	{
//		// Manage Chartboost plugin lifecycle
//		CBBinding.pause(paused);
//	}
//	
//	void OnDisable() 
//	{
//		// Shut down the Chartboost plugin
//		CBBinding.destroy();
//	}
//	#endif
//
//	#if UNITY_ANDROID
//	public void Update() 
//	{
//		if (Input.GetKeyUp(KeyCode.Escape)) 
//		{
//			if (CBBinding.onBackPressed())
//				return;
//			else
//				Application.Quit();
//		}
//		if(CBBinding.isImpressionVisible())
//		{
//			Inte = true;
//		}
//		if(!CBBinding.isImpressionVisible())
//		{
//			Inte = false;
//		}
//	}
//	#endif
//
//	static public void Inter()
//	{
//		#if UNITY_ANDROID
//		Debug.Log ("Interstial");
//		CBBinding.cacheInterstitial(null);
//		CBBinding.showInterstitial(null); 
//		#endif
//	}
//}
//
