import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantMetadataComponent } from './plant-metadata.component';

describe('PlantMetadataComponent', () => {
  let component: PlantMetadataComponent;
  let fixture: ComponentFixture<PlantMetadataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantMetadataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
