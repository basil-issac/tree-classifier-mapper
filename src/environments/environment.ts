// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
<<<<<<< HEAD
  production: false,

  mapbox: {
    accessToken: 'pk.eyJ1IjoiZ3JlYXRibHVlaGVycm9uIiwiYSI6ImNrOWMxNmgxbjAwY3gzbG40emlzbDh6eWkifQ.ehwxbzBHBp42izV7XNAzLQ'
=======
  production: true,
  firebase: {
    apiKey: "<REPLACE>",
    authDomain: "tree-classifier-mapper.firebaseapp.com",
    databaseURL: "https://tree-classifier-mapper.firebaseio.com",
    projectId: "tree-classifier-mapper",
    storageBucket: "tree-classifier-mapper.appspot.com",
    messagingSenderId: "<REPLACE>",
    appId: "<REPLACE>",
    measurementId: "<REPLACE>"
>>>>>>> 2c6281bd793c59748a675dfb7b42cbadf8d0c144
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
