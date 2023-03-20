import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSparepartComponent } from './detail-sparepart.component';

describe('DetailSparepartComponent', () => {
  let component: DetailSparepartComponent;
  let fixture: ComponentFixture<DetailSparepartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSparepartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSparepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
