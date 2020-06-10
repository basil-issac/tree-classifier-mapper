import {Inject, Injectable} from '@angular/core';
import KNN from "ml-knn";
import {PlantMetadataService} from "../plant-metadata/plant-metadata.service";

@Injectable({
  providedIn: 'root'
})
export class ClassifierService {

  constructor(private plantMetadataService: PlantMetadataService) {
  }

  plantMetadataList = [];


  async classifyEntry(entry) {
    await this.getData();
    let dataset = [];
    let predictions = [];

    this.plantMetadataList.forEach(metadata => {
      dataset.push([metadata.latitude, metadata.longitude]);
      predictions.push(metadata.plantType);
    });

    let knn = new KNN(dataset, predictions);

    return knn.predict([[parseFloat(entry.latitude), parseFloat(entry.longitude)]]);
  }

  getData = async () => {
    if (this.plantMetadataList.length === 0) {
      return Promise.resolve(this.plantMetadataService.getPromiseTreeMetadataFromRoot('dePaulTrees').then(results => {
        this.plantMetadataList = results.map(obj => obj.data());
      }));
    }
    return Promise.resolve(null);
  };

}
