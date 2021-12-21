// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "@firebase/app";
import { getAnalytics } from 'firebase/analytics';
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAeAgAKICbPSLjNXkxQ3ZGJS7T7Wc32V3I",
    authDomain: "kanban-f050f.firebaseapp.com",
    projectId: "kanban-f050f",
    storageBucket: "kanban-f050f.appspot.com",
    messagingSenderId: "286567795611",
    appId: "1:286567795611:web:424c4d689a426289bf2f3e",
    measurementId: "G-6PWZLZS767"
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
