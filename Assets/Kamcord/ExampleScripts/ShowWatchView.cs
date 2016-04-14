using UnityEngine;
using System.Collections.Generic;

#if UNITY_IPHONE
#if (UNITY_3_5 || UNITY_4_0 || UNITY_4_0_1 || UNITY_4_1 || UNITY_4_2 || UNITY_4_3 || UNITY_4_5 || UNITY_4_6)
using MyNotificationServices = UnityEngine.NotificationServices;
using MyLocalNotification = UnityEngine.LocalNotification;
#else
using MyNotificationServices = UnityEngine.iOS.NotificationServices;
using MyLocalNotification = UnityEngine.iOS.LocalNotification;
#endif
#endif

public class ShowWatchView : MonoBehaviour
{
    public Font buttonFont;

#if UNITY_IPHONE || (UNITY_ANDROID && ((!(UNITY_2_6 || UNITY_3_0 || UNITY_3_1 || UNITY_3_2 || UNITY_3_3 || UNITY_3_4 || UNITY_3_5 || UNITY_4_0 || UNITY_4_1))))
    private Rect showWatchViewButtonRect;

    void Awake()
    {
        RegisterCallbacks();
    }

    void Start()
    {
        InitGUI();
    }

    private void InitGUI()
    {
        int w = 265; // button width
        int h = 100; // button height
        int m = 20;  // margin around buttons

        showWatchViewButtonRect = new Rect(m, m, w, h);
    }

    private void RegisterCallbacks()
    {
        Kamcord.kamcordWatchViewDidAppear += MyKamcordWatchViewDidAppear;
        Kamcord.kamcordWatchViewWillDisappear += MyKamcordWatchViewWillDisappear;
        Kamcord.kamcordWatchViewDidDisappear += MyKamcordWatchViewDidDisappear;
    }

    void OnDestroy()
    {
        UnregisterCallbacks();
    }

    private void UnregisterCallbacks()
    {
        Kamcord.kamcordWatchViewDidAppear -= MyKamcordWatchViewDidAppear;
        Kamcord.kamcordWatchViewWillDisappear -= MyKamcordWatchViewWillDisappear;
        Kamcord.kamcordWatchViewDidDisappear -= MyKamcordWatchViewDidDisappear;
    }

    GUIStyle GetStyle()
    {
        return new GUIStyle(GUI.skin.button);
    }

    void OnGUI()
    {
        GUIStyle style = GetStyle();

        if ((Application.platform == RuntimePlatform.IPhonePlayer ||
             Application.platform == RuntimePlatform.Android))
        {
            if ( GUI.Button(showWatchViewButtonRect, "Show Watch View", style) )
            {
                Kamcord.ShowWatchView();
            }
        }
    }

#if UNITY_IPHONE
    void Update()
    {
        foreach (MyLocalNotification notif in MyNotificationServices.localNotifications)
        {
            if (notif.userInfo.Contains("Kamcord"))
            {
                Kamcord.HandleKamcordNotification(notif);
            }
        }
        MyNotificationServices.ClearLocalNotifications();
    }
#endif

    void MyKamcordWatchViewDidAppear()
    {
        Debug.Log("Hello MyKamcordWatchViewDidAppear");
    }

    void MyKamcordWatchViewWillDisappear()
    {
        Debug.Log("Hello MyKamcordWatchViewWillDisappear");
    }

    void MyKamcordWatchViewDidDisappear()
    {
        Debug.Log("Hello MyKamcordWatchViewDidDisappear");
    }

#endif
}
