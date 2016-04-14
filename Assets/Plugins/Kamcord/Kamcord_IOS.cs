#define KAMCORD_IPHONE

#if UNITY_IPHONE

using UnityEngine;
using System;
using System.Collections;
using System.Runtime.InteropServices;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using KamcordJSON;

class KamcordImplementationIOS : Kamcord.Implementation
{
    public override string Version()
    {
        return Kamcord_Version();
    }

    // Enable notifications from Kamcord.
    // By default, we schedule 4 "Gameplay of the Week" notifications every week for 4 weeks.
    public override void SetNotificationsEnabled (bool notificationsEnabled)
    {
        Kamcord_SetNotificationsEnabled(notificationsEnabled);
    }

    public override void FireTestNotification ()
    {
        Kamcord_FireTestNotification();
    }

    //////////////////////////////////////////////////////////////////
    /// UI
    ///

    public override void ShowWatchView ()
    {
        Kamcord_ShowWatchView();
    }

    //////////////////////////////////////////////////////////////////
    /// Sundry Methods
    ///
    public override void SetShouldPauseGameEngine(bool shouldPause)
    {
        Kamcord_SetShouldPauseGameEngine(shouldPause);
    }

    public override bool ShouldPauseGameEngine ()
    {
        return Kamcord_ShouldPauseGameEngine ();
    }

    public override void Init (
            string devKey,
            string devSecret,
            string appName)
    {
        _KamcordInit(devKey, devSecret, appName);
    }

    public override void Awake(Kamcord kamcordInstance)
    {
        Init(kamcordInstance.developerKey,
                kamcordInstance.developerSecret,
                kamcordInstance.appName);
    }

    public override void SetAgeRestrictionEnabled(bool restricted)
    {
        Kamcord_SetAgeRestrictionEnabled(restricted);
    }

    public override bool IsAgeRestrictionEnabled()
    {
        return Kamcord_IsAgeRestrictionEnabled();
    }

    [DllImport ("__Internal")]
    private static extern string Kamcord_Version();

    [DllImport ("__Internal")]
    private static extern void _KamcordInit(string devKey,
                string devSecret,
                string appName);


    [DllImport ("__Internal")]
    private static extern void _KamcordShowFeedWithMetadataConstraintsJSONAndTitle(string serializedMetadata, string title);

    //////////////////////////////////////////////////////////////////
    /// UI
    ///

    [DllImport ("__Internal")]
    private static extern void Kamcord_ShowWatchView();

    //////////////////////////////////////////////////////////////////
    /// Notifications
    ///
    [DllImport ("__Internal")]
    private static extern void Kamcord_SetNotificationsEnabled(bool notificationsEnabled);

    [DllImport ("__Internal")]
    private static extern void Kamcord_FireTestNotification();

    //////////////////////////////////////////////////////////////////
    /// Sundry Methods
    ///
    [DllImport ("__Internal")]
    private static extern void Kamcord_SetShouldPauseGameEngine(bool shouldPause);

    [DllImport ("__Internal")]
    private static extern bool Kamcord_ShouldPauseGameEngine();

    [DllImport ("__Internal")]
    private static extern void Kamcord_SetAgeRestrictionEnabled(bool restricted);

    [DllImport ("__Internal")]
    private static extern bool Kamcord_IsAgeRestrictionEnabled();

}

#endif

