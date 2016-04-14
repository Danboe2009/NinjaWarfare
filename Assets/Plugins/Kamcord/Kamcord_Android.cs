#define KAMCORD_ANDROID

#if UNITY_ANDROID && !(UNITY_2_6 || UNITY_3_0 || UNITY_3_1 || UNITY_3_2 || UNITY_3_3 || UNITY_3_4 || UNITY_3_5 || UNITY_4_0 || UNITY_4_1)

using UnityEngine;
using System;
using System.Collections;
using System.Runtime.InteropServices;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using KamcordJSON;

public class KamcordImplementationAndroid : Kamcord.Implementation
{
    private AndroidJavaClass kamcordJavaClass_;

    const string javaClassString = "com.kamcord.android.Kamcord";
    const string endDrawErrorString = "Kamcord: EndDraw called with no kamcordJavaClass().  This error only prints once even if it happens more.";
    const string setCurrentlyBoundFBString = "setCurrentlyBoundFramebufferToBeAppRenderingFramebuffer";

    private AndroidJavaClass kamcordJavaClass()
    {
        if ( kamcordJavaClass_ == null )
            kamcordJavaClass_ = new AndroidJavaClass (javaClassString);

        if ( kamcordJavaClass_ == null )
        {
            Debug.Log("Kamcord: Unable to find Kamcord java class.");
        }

        return kamcordJavaClass_;
    }

    public override string Version()
    {
        return kamcordJavaClass().CallStatic<string>("version");
    }

    //////////////////////////////////////////////////////////////////
    /// Video Recording
    ///

    public override void ShowWatchView ()
    {
        kamcordJavaClass().CallStatic("showWatchView");
    }

    public override void Init (
        string devKey,
        string devSecret,
        string appName)
    {
        if (kamcordJavaClass() == null)
        {
            Debug.Log ("Kamcord: Init called with no kamcordJavaClass().");
            return;
        }

        AndroidJavaClass unityPlayerClass = new AndroidJavaClass("com.unity3d.player.UnityPlayer");
        AndroidJavaObject activityJavaObject = unityPlayerClass.GetStatic<AndroidJavaObject>("currentActivity");
        kamcordJavaClass().CallStatic("initActivity", activityJavaObject);
        kamcordJavaClass().CallStatic("initKeyAndSecret", devKey, devSecret, appName, 0);
    }

    public override void Awake(Kamcord kamcordInstance)
    {
        if(kamcordJavaClass() == null)
        {
            Debug.Log ("Kamcord: Java class not accessible from C#.");
        }
    }

    public override void Start(Kamcord kamcordInstance)
    {
        if ( kamcordJavaClass() == null )
        {
            Debug.Log ("Kamcord: Java class not accessible from C#.");
        }
        else
        {
            Init(
                kamcordInstance.developerKey,
                kamcordInstance.developerSecret,
                kamcordInstance.appName);
        }
    }

    public static int getSDKVersion()
    {
        AndroidJavaClass vJavaClass = new AndroidJavaClass ("android.os.Build$VERSION");
        return vJavaClass.GetStatic<int>("SDK_INT");
    }
}

#endif
