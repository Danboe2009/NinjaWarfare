#ifndef _KAMCORD_IPHONE_GLESHELPER_H_
#define _KAMCORD_IPHONE_GLESHELPER_H_

#ifdef UNITY_VERSION
#define KAMCORD_UNITY_VERSION UNITY_VERSION
#endif

#if KAMCORD_UNITY_VERSION >= 410
#include "GlesHelper.h"
#elif KAMCORD_UNITY_VERSION >= 350
#include "iPhone_GlesSupport.h"
#endif

#ifdef __cplusplus
extern "C" {
#endif
    void KamcordInitUnity();
    void ForceOrientationCheck();
    void KamcordDisable();
#ifdef __cplusplus
}
#endif

#endif
