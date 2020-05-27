import { writeFile } from 'fs';
// Configure Angular `environment.ts` file path
const targetPath = './src/environments/environment.ts';
// Load node modules
const colors = require('colors');
require('dotenv').load();
// `environment.ts` file structure
const envConfigFile = 
`export const environment = {
    production: true,
    firebase: {
      apiKey: '${process.env.FIREBASE_API_KEY}',
      authDomain: "tree-classifier-mapper.firebaseapp.com",
      databaseURL: "https://tree-classifier-mapper.firebaseio.com",
      projectId: "tree-classifier-mapper",
      storageBucket: "tree-classifier-mapper.appspot.com",
      messagingSenderId: '${process.env.FIREBASE_MESSAGING_SENDER_ID}',
      appId: '${process.env.FIREBASE_APP_ID}',
      measurementId: '${process.env.FIREBASE_MEASUREMENT_ID}'
    },
    mapbox: {
      accessToken: '${process.env.MAPBOX_ACCESS_TOKEN}'
    }
  };
`;
console.log(colors.magenta('The file `environment.ts` will be written with the following content: \n'));
console.log(colors.grey(envConfigFile));
writeFile(targetPath, envConfigFile, function (err) {
   if (err) {
       throw console.error(err);
   } else {
       console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
   }
});
