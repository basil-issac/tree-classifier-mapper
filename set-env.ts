import {writeFile} from 'fs';

const targetPath = './src/environments/environment.prod.ts';
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
console.log('The file `environment.ts` will be written with the following content: \n');
console.log(envConfigFile);
writeFile(targetPath, envConfigFile, 'utf8', (err) => {
  if (err) {
    return console.log(err);
  }
});
