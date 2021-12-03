import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoescolaModalComponent } from './autoescola-modal.component';

describe('AutoescolaModalComponent', () => {
  let component: AutoescolaModalComponent;
  let fixture: ComponentFixture<AutoescolaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoescolaModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoescolaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
