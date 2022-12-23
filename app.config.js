import 'dotenv/config';

export default {
  "expo": {
    "name": "Test",
    "slug": "Test",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/OFI.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/OFI.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "package": "com.fermin13.Test",
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "owner": "fermin13",
        "projectId": "e614ba82-9613-4458-8300-7ee557121afc"
      }
    },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID

    }
  }
}
