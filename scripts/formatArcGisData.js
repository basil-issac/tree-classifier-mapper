


var fs = require('fs');
const axios = require('axios');


let rawdata = fs.readFileSync('../src/assets/dePaulRawTreeData.json');
let jsonData = JSON.parse(rawdata);

console.log("data updater being called");
// let feature = jsonData.features[0];
// console.log(feature);
//
// convertToCoords(feature.geometry).then(result => {
//   console.log(result);
// });
//console.log(getUrl(feature.geometry.x, feature.geometry.y));

const promiseArray = [];
for (const feature of jsonData.features) {
  promiseArray.push(convertToCoords(feature.geometry)
    .then(geometries => {
      feature.geometry.longitude = geometries.x;
      feature.geometry.latitude = geometries.y;
    }));
}

Promise.all(promiseArray).then(
    () => {
      //All your calls have happened features always updated for all of them
      console.log(jsonData.features[0]);
      let data = JSON.stringify(jsonData.features);
      fs.writeFileSync('../src/assets/dePaulRawTreeDataNewGPS.json', data);
    }
);

function convertToCoords(geometry) {
  return axios.get(getUrl(geometry.x, geometry.y))
    .then(response => response.data.geometries[0])
    .catch(error => {
      console.log(error);
    });
  // return fetch(this.getUrl(geometry.x, geometry.y), {
  //   method: 'GET'
  // })
  //   .then(response => response.json())
  //   .then(responseJson => responseJson.geometries[0]);
}

function getUrl(x, y) {
  let myUrl = 'http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer/project?' +
    'inSR=102100&outSR=4326&geometries=%7B%22geometryType%22%3A%22esriGeometryPoint%22%2C%22' +
    'geometries%22%3A%5B%7B%22x%22%3A' + x + '%2C%22y%22%3A'+ y + '%7D%5D%7D&f=pjson';
  return myUrl;
}
