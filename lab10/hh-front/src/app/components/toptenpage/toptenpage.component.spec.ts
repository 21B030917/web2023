import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToptenpageComponent } from './toptenpage.component';

describe('ToptenpageComponent', () => {
  let component: ToptenpageComponent;
  let fixture: ComponentFixture<ToptenpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToptenpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToptenpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
