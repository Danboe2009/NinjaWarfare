// ---------------------------------------------------------------------------
// This is the interface that KamcordCallbackProcessor implements. These
// are all the possible callbacks that the Kamcord Objective-C framework
// will make back into Unity.
// ---------------------------------------------------------------------------

public interface KamcordCallbackInterface
{
#if UNITY_IPHONE
    // The Kamcord share view appeared and disappeared
    void KamcordViewDidAppear();
    void KamcordViewWillDisappear();
    void KamcordViewDidDisappear();

    // The Kamcord watch view appeared and disappeared
    void KamcordWatchViewDidAppear();
    void KamcordWatchViewWillDisappear();
    void KamcordWatchViewDidDisappear();

    void AgeStatusUpdated(Kamcord.AgeGateStatus status);
    void PushNotifCallToActionButtonPressed();
#endif
}

