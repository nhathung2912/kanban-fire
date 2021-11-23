// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "@firebase/app";
import { getAnalytics } from 'firebase/analytics';
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBbsOEmSeAC3COLmD_XNOIXfWXt2BzmGP0",
    authDomain: "kanbanfire-85da2.firebaseapp.com",
    databaseURL: "https://kanbanfire-85da2-default-rtdb.firebaseio.com",
    projectId: "kanbanfire-85da2",
    storageBucket: "kanbanfire-85da2.appspot.com",
    messagingSenderId: "242719282976",
    appId: "1:242719282976:web:085ee4faedab168a486945",
    measurementId: "G-SES39JGQVQ"
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
