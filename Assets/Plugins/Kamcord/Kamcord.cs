using UnityEngine;
using System;
using System.Collections;
using System.Runtime.InteropServices;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using System.Globalization;
using KamcordJSON;

public class Kamcord : MonoBehaviour
{
#pragma warning disable
    /*
     *
     * Kamcord callbacks.
     * To subscribe to these, in any C# class do:
     *
     *     Kamcord.kamcordWatchViewDidAppear += myKamcordWatchViewDidAppearFunction;
     *
     * where myKamcordWatchViewDidAppearFunction exists in your C# class like so:
     *
     *     void myKamcordViewDidAppearFunction() {
     *         // ...
     *     }
     *
     */

    /*
     * The Kamcord watch view appeared and disappeared
     */
    public delegate void KamcordWatchViewDidAppear ();
    public delegate void KamcordWatchViewWillDisappear ();
    public delegate void KamcordWatchViewDidDisappear ();

    // Corresponding events
    public static event KamcordWatchViewDidAppear kamcordWatchViewDidAppear;
    public static event KamcordWatchViewWillDisappear kamcordWatchViewWillDisappear;
    public static event KamcordWatchViewDidDisappear kamcordWatchViewDidDisappear;

    /*
     * Kamcord age gate status changed
     */
    public delegate void AgeStatusUpdated(AgeGateStatus status);
    // Corresponding events
    public static event AgeStatusUpdated ageStatusUpdated;

    /*
     * When the call to action button on the push notification view was pressed
     */
    public delegate void PushNotifCallToActionButtonPressed ();

    // Corresponding event
    public static event PushNotifCallToActionButtonPressed pushNotifCallToActionButtonPressed;

    /*
     * When this app is an install that's traced back to Kamcord.
     */
    public delegate void AttributedKamcordInstall ();

    // Corresponding event
    public static event AttributedKamcordInstall attributedKamcordInstall;


    // Useful for unsubscribing from everything
    public static void UnsubscribeFromAllCallbacks ()
    {
        kamcordWatchViewDidAppear = null;
        kamcordWatchViewWillDisappear = null;
        kamcordWatchViewDidDisappear = null;
        ageStatusUpdated = null;
        pushNotifCallToActionButtonPressed = null;
        attributedKamcordInstall = null;

        Kamcord.ClearListeners();
    }

    protected static void CallKamcordWatchViewDidAppear()
    {
        if (kamcordWatchViewDidAppear != null)
        {
            kamcordWatchViewDidAppear();
        }
    }

    protected static void CallKamcordWatchViewDidDisappear()
    {
        if (kamcordWatchViewDidDisappear != null)
        {
            kamcordWatchViewDidDisappear();
        }
    }

    protected static void CallKamcordWatchViewWillDisappear()
    {
        if (kamcordWatchViewWillDisappear != null)
        {
            kamcordWatchViewWillDisappear();
        }
    }

    protected static void CallKamcordAgeStatusUpdated(AgeGateStatus status)
    {
        if (ageStatusUpdated != null)
        {
            ageStatusUpdated(status);
        }
    }

    protected static void CallPushNotifCallToActionButtonPressed()
    {
        if (pushNotifCallToActionButtonPressed != null)
        {
            pushNotifCallToActionButtonPressed();
        }
    }


    protected static void CallAttributedKamcordInstall()
    {
        if (attributedKamcordInstall != null)
        {
            attributedKamcordInstall();
        }
    }

    // Possible values of the age gate flow
    public enum AgeGateStatus
    {
        Unknown = 0,
        Restricted,
        Unrestricted
    };

    public enum SortModel
    {
        Trending = 0,
        Popular,
        Likes
    };

    public class KCMetadata
    {
        public enum KCMetadataValueType
        {
            String = 0,
            Double,
            Integer
        };

        public string key;

        public string stringValue;
        public double doubleValue;
        public int integerValue;

        public KCMetadataValueType type;

        public KCMetadata(string key, string value)
        {
            this.key = key;
            this.stringValue = value;
            this.type = KCMetadataValueType.String;
        }

        public KCMetadata(string key, double value)
        {
            this.key = key;
            this.doubleValue = value;
            this.type = KCMetadataValueType.Double;
        }

        public KCMetadata(string key, int value)
        {
            this.key = key;
            this.integerValue = value;
            this.type = KCMetadataValueType.Integer;
        }

        public KCMetadata(string tag)
        {
            this.key = "tags";
            this.stringValue = tag;
            this.type = KCMetadataValueType.String;
        }

        public Dictionary<string, string> ToDictionary()
        {
            Dictionary<string, string> info = new Dictionary<string, string>();

            info["key"] = this.key;
            info["type"] = this.type.ToString();

            if (this.type == KCMetadataValueType.Double)
            {
                info["value"] = this.doubleValue.ToString();
            }
            else if (this.type == KCMetadataValueType.Integer)
            {
                info["value"] = this.integerValue.ToString();
            }
            else
            {
                info["value"] = this.stringValue;
            }

            return info;
        }
    }

    public bool enableLogging = true;
    public string developerKey = "Kamcord developer key";
    public string developerSecret = "Kamcord developer secret";
    public string appName = "Application name";


    // The default empty implementation that's called when this game
    // is run on a platform that Kamcord doesn't support.
    public class Implementation
    {
        public virtual void SetLoggingEnabled(bool value)
        {
        }

        public virtual string Version()
        {
            return "";
        }

        public virtual bool IsViewShowing ()
        {
            return false;
        }

        public virtual void SetNotificationsEnabled (bool notificationsEnabled)
        {
        }

        public virtual void FireTestNotification ()
        {
        }

        public virtual void ShowWatchView ()
        {
        }

        public virtual void SetShouldPauseGameEngine(bool shouldPause)
        {
        }

        public virtual bool ShouldPauseGameEngine ()
        {
            return false;
        }

        public virtual void ShowFeedWithMetadataConstraintsAndTitle(IList<KCMetadata> metadata, string title)
        {
        }

        public virtual void ShowFeedWithMetadataConstraintsAndTitle(IList<KCMetadata> metadata, string title, Kamcord.SortModel sortModel)
        {
        }

        public virtual void PlayBackgroundSound (string fileName, bool loop)
        {
        }

        public virtual void Init(
            string devKey,
            string devSecret,
            string appName)
        {
        }

        public virtual void Awake(Kamcord kamcordInstance)
        {
        }

        public virtual void Start(Kamcord kamcordInstance)
        {
        }

        public virtual void SetAgeRestrictionEnabled(bool restricted)
        {
        }

        public virtual bool IsAgeRestrictionEnabled()
        {
            return false;
        }
    }

    public static bool iOSEnabled_ = true;
    public static bool loggingEnabled_ = true;


    private static Implementation implementation_;

    private static Implementation implementation()
    {
        if (implementation_ == null)
        {
            if (Application.platform == RuntimePlatform.Android ||
                Application.platform == RuntimePlatform.IPhonePlayer)
            {
#if UNITY_ANDROID && !(UNITY_2_6 || UNITY_3_0 || UNITY_3_1 || UNITY_3_2 || UNITY_3_3 || UNITY_3_4 || UNITY_3_5 || UNITY_4_0 || UNITY_4_1)
                if ( KamcordImplementationAndroid.getSDKVersion() >= 16 )
                {
                    implementation_ = new KamcordImplementationAndroid();
                }
#elif UNITY_IPHONE
                implementation_ = new KamcordImplementationIOS();
#endif
            }
        }


        // If the implementation is still null by here, use the empty implementation.
        if (implementation_ == null)
        {
            implementation_ = new Implementation();
        }

        return implementation_;
    }

    /*
     *
     * This is the beginning of the Kamcord public API
     *
     */

    public static void SetLoggingEnabled(bool value)
    {
        implementation().SetLoggingEnabled(value);
    }

    public static string Version()
    {
        return implementation().Version();
    }

    public static void SetNotificationsEnabled(bool notificationsEnabled)
    {
        implementation().SetNotificationsEnabled(notificationsEnabled);
    }

    public static void FireTestNotification()
    {
        implementation().FireTestNotification();
    }

    public static void ShowWatchView ()
    {
        implementation().ShowWatchView();
    }

    public static void ShowFeedWithMetadataConstraintsAndTitle(IList<KCMetadata> metadata, string title)
    {
        implementation().ShowFeedWithMetadataConstraintsAndTitle (metadata, title);
    }

      public static void ShowFeedWithMetadataConstraintsAndTitle(IList<KCMetadata> metadata, string title, Kamcord.SortModel sortModel)
    {
        implementation().ShowFeedWithMetadataConstraintsAndTitle (metadata, title, sortModel);
    }

    public static void Init (
            string devKey,
            string devSecret,
            string appName)
    {
        implementation().Init(
            devKey,
            devSecret,
            appName);
    }

    public static Kamcord instance;

    void Awake()
    {
        // Prevent multiple instances of this Prefab from existing
        if (instance != null)
        {
            Destroy(gameObject);
            return;
        }

        this.gameObject.name = "KamcordPrefab";
        DontDestroyOnLoad(this);
        instance = this;

        loggingEnabled_ = enableLogging;

        implementation().Awake(this);
    }

    void Start()
    {
        implementation().Start(this);
    }

    //////////////////////////////////////////////////////////////////
    /// Subscribe to KamcordCallbackInterface callback
    ///

    // The listseners list
    protected static List<KamcordCallbackInterface> listeners = new List<KamcordCallbackInterface> ();

    // Call this override method to have your object receive all of the
    // KamcordCallbackInterface callbacks.
    public static void AddListener (KamcordCallbackInterface listener)
    {
        if (!listeners.Contains(listener))
        {
            listeners.Add(listener);
        }
    }

    public static void RemoveListener (KamcordCallbackInterface listener)
    {
        listeners.Remove(listener);
    }

    public static void ClearListeners ()
    {
        listeners.Clear();
    }

#if UNITY_IPHONE

    //////////////////////////////////////////////////////////////////
    /// Handling callbacks from Objective-C
    ///

    // The Kamcord watch view appeared
    private void _KamcordWatchViewDidAppear(string empty)
    {
        Kamcord.CallKamcordWatchViewDidAppear();

        foreach (KamcordCallbackInterface listener in listeners)
        {
            listener.KamcordWatchViewDidAppear();
        }
    }

    private void _KamcordWatchViewWillDisappear(string empty)
    {
        Kamcord.CallKamcordWatchViewWillDisappear();

        foreach (KamcordCallbackInterface listener in listeners)
        {
            listener.KamcordWatchViewWillDisappear();
        }
    }

    // The Kamcord watch view disappeared
    private void _KamcordWatchViewDidDisappear(string empty)
    {
        Kamcord.CallKamcordWatchViewDidDisappear();

        foreach (KamcordCallbackInterface listener in listeners)
        {
            listener.KamcordWatchViewDidDisappear();
        }
    }

    private void _KamcordAgeStatusUpdated(string status)
    {
        // Parse the string to our enum
        AgeGateStatus ageStatus = (AgeGateStatus)Convert.ToInt32(status);

        // Pass the integer value as an enum to registered callbacks
        Kamcord.CallKamcordAgeStatusUpdated(ageStatus);
        foreach (KamcordCallbackInterface listener in listeners)
        {
            listener.AgeStatusUpdated(ageStatus);
        }
    }

    private void _KamcordAttributedKamcordInstall(string empty)
    {
        Kamcord.CallAttributedKamcordInstall();
    }

    // When the call to action button on the notification view was pressed
    private void _PushNotifCallToActionButtonPressed()
    {
        Kamcord.CallPushNotifCallToActionButtonPressed();

        foreach (KamcordCallbackInterface listener in listeners)
        {
            listener.PushNotifCallToActionButtonPressed();
        }
    }

    [DllImport ("__Internal")]
    private static extern void Kamcord_ShowPushNotifView();

#if (UNITY_3_5 || UNITY_4_0 || UNITY_4_0_1 || UNITY_4_1 || UNITY_4_2 || UNITY_4_3 || UNITY_4_5 || UNITY_4_6)
    public static void HandleKamcordNotification (UnityEngine.LocalNotification notification)
#else
    public static void HandleKamcordNotification (UnityEngine.iOS.LocalNotification notification)
#endif
    {
        if (Application.platform == RuntimePlatform.IPhonePlayer)
        {
            if (notification.userInfo.Contains("Kamcord"))
            {
                Kamcord_ShowPushNotifView();
            }
        }
    }

#endif

}

