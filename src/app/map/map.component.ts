import {environment} from '../../environments/environment';
import {Component, OnInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {PlantMetadataService} from "../services/plant-metadata.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  featuresFromPlantDb: any = [];

  constructor(private plantMetadataService: PlantMetadataService) { }

  ngOnInit(): void {
    this.getPlantMetadataFromDb();
    this.initializeMap();
  }

  private initializeMap() {
    /// locate the user and center map there
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(position => {
    //     this.lat = position.coords.latitude;
    //     this.lng = position.coords.longitude;
    //     this.map.flyTo({
    //       center: [this.lng, this.lat]
    //     })
    //   });
    // }

    this.buildMap()
  }

  getPlantMetadataFromDb() {
    let plantMetadataList;

    this.plantMetadataService
      .getTreeMetadata()
      .subscribe(res => {
        plantMetadataList = res;

        // for each database entry
        plantMetadataList.forEach(metadata => {
          let dataEntry = metadata.payload.doc.data();

          // only put valid gps points on the map
          if (this.isRealCoordinate(dataEntry.latitude, dataEntry.longitude)) {

            // create a mapbox feature
            this.featuresFromPlantDb.push({
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [dataEntry.longitude, dataEntry.latitude]
              },
              'properties': {
                'title': dataEntry.plantType,
                'icon': 'park'
              }
            });
          }
        })
      });
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 5,
      center: [-87.623, 41.881], /* Chicago */
      accessToken: environment.mapbox.accessToken
    });

    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.on('load', (event) => {
      // add formatted features from db to map
      this.map.addSource('points', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': this.featuresFromPlantDb
        }
      });

      this.map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': 'points',
        'layout': {
          // get the icon name from the source's "icon" property
          // concatenate the name to get an icon from the style's sprite sheet
          'icon-image': ['concat', ['get', 'icon'], '-15'],
          // get the title name from the source's "title" property
          'text-field': ['get', 'title'],
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-offset': [0, 0.6],
          'text-anchor': 'top'
        }
      });
    });
  }

  // Checks whether or not a coordinate is valid.  Only valid
  // coordinates should be added to the map
  isRealCoordinate(latitude, longitude) {
    if (latitude >= -90 && latitude <= 90) {
      if (longitude >= -180 && longitude <= 180) {
        return true;
      }
    }
    return false;
  }
}
