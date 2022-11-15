import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertorValutarComponent } from './convertor-valutar.component';

describe('ConvertorValutarComponent', () => {
  let component: ConvertorValutarComponent;
  let fixture: ComponentFixture<ConvertorValutarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertorValutarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertorValutarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
