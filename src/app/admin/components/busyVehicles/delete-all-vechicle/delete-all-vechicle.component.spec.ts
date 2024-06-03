import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAllVechicleComponent } from './delete-all-vechicle.component';

describe('DeleteAllVechicleComponent', () => {
  let component: DeleteAllVechicleComponent;
  let fixture: ComponentFixture<DeleteAllVechicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteAllVechicleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteAllVechicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
