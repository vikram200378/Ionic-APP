/// <reference types="@capacitor/local-notifications" />
/// <reference types="@capacitor/push-notifications" />
/// <reference types="@capacitor/splash-screen" />

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'tapnetworkapp.com',
  appName: 'Tap',
  bundledWebRuntime: true,
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
      launchAutoHide: true,
      backgroundColor: '#000000'
      },
    Badge: {
      persist: true,
      autoClear: false,
    },
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert']
    }
  },
  cordova: {}
};

export default config;
