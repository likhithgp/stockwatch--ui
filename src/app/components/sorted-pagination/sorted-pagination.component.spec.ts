import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortedPaginationComponent } from './sorted-pagination.component';

describe('SortedPaginationComponent', () => {
  let component: SortedPaginationComponent;
  let fixture: ComponentFixture<SortedPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortedPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortedPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
