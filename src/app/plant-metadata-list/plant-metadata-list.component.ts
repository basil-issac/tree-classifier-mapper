import { Component, OnInit } from '@angular/core';
import { PlantMetadataService } from "../services/plant-metadata/plant-metadata.service";

@Component({
  selector: 'app-plant-metadata-list',
  templateUrl: './plant-metadata-list.component.html',
  styleUrls: ['./plant-metadata-list.component.css']
})
export class PlantMetadataListComponent implements OnInit {

  constructor(private plantMetadataService: PlantMetadataService) { }
  showData = false;
  plantMetadataList;

  ngOnInit(): void { }

  getPlantMetadataList = () => {
    this.plantMetadataService
      .getTreeMetadata()
      .subscribe(res => (this.plantMetadataList = res));
  };

  toggleShowData() {
    this.showData = !this.showData;
    if (this.showData === true) {
      this.getPlantMetadataList();
    }
  }
}
