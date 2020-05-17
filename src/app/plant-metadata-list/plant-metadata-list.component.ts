import { Component, OnInit } from '@angular/core';
import { PlantMetadataService } from "../services/plant-metadata.service";

@Component({
  selector: 'app-plant-metadata-list',
  templateUrl: './plant-metadata-list.component.html',
  styleUrls: ['./plant-metadata-list.component.css']
})
export class PlantMetadataListComponent implements OnInit {

  constructor(private plantMetadataService: PlantMetadataService) { }

  plantMetadataList;

  ngOnInit(): void {
    this.getPlantMetadataList();
  }

  getPlantMetadataList = () => {
    this.plantMetadataService
      .getTreeMetadata()
      .subscribe(res => (this.plantMetadataList = res));
  }

}
