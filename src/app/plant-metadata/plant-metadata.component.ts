import { Component, OnInit } from '@angular/core';
import { PlantMetadataService } from "../shared/plant-metadata.service";

@Component({
  selector: 'app-plant-metadata',
  templateUrl: './plant-metadata.component.html',
  styleUrls: ['./plant-metadata.component.css']
})
export class PlantMetadataComponent implements OnInit {

  constructor(public plantMetadataService:PlantMetadataService) {}

  ngOnInit(): void {
  }

  plantType = ["Oak", "Maple", "Ash", "Fur", "Cherry", "Pine"];

  plantMetadata = [];

  addPlantType = plant => this.plantMetadata.push(plant);

  removePlantType = plant => {
    let index = this.plantMetadata.indexOf(plant);
    if (index > -1) {
      this.plantMetadata.splice(index, 1);
    }
  };

  onSubmit(): void {}
}

