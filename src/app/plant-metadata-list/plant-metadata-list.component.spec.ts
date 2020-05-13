import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantMetadataListComponent } from './plant-metadata-list.component';

describe('PlantMetadataListComponent', () => {
  let component: PlantMetadataListComponent;
  let fixture: ComponentFixture<PlantMetadataListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantMetadataListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantMetadataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
