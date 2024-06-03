import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBranchDialogComponent } from './edit-branch-dialog.component';

describe('EditBranchDialogComponent', () => {
  let component: EditBranchDialogComponent;
  let fixture: ComponentFixture<EditBranchDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditBranchDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditBranchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
