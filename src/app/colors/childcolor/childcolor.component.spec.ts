import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcolorComponent } from './childcolor.component';

describe('ChildcolorComponent', () => {
  let component: ChildcolorComponent;
  let fixture: ComponentFixture<ChildcolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildcolorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
