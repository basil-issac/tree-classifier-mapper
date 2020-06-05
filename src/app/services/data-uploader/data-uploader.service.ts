import {Injectable} from '@angular/core';
import {PlantMetadataService} from "../plant-metadata/plant-metadata.service";

import dePaulJson from "../../../assets/dePaulRawTreeDataNewGPS.json";

@Injectable({
  providedIn: 'root'
})

export class DataUploaderService {

  constructor(private plantMetadataService: PlantMetadataService) {
  }

  // This was used to populate the DB with real tree data from dePaul.
  // Do not use this unless you are attempting to upload local data to the DB.
  uploadData() {
    for (const feature of dePaulJson) {
      let treeMetadata = this.plantMetadataService.form.value;
      treeMetadata.condition = feature.attributes.Condition;
      treeMetadata.plantType = feature.attributes.Species;
      treeMetadata.uploaderName = "DePaulTreeData";
      treeMetadata.dateAdded = "2020-05-25";
      treeMetadata.latitude = feature.geometry.latitude;
      treeMetadata.longitude = feature.geometry.longitude;
      // Upload the metadata with the image path to the database
      this.plantMetadataService.createTreeMetadataEntryWithRoot(treeMetadata, 'dePaulTrees')
        .then(res => {
          this.plantMetadataService.form.reset();
        });
    }
  }
}
