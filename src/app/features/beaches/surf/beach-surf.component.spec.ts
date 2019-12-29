import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachSurfComponent } from './beach-surf.component';

describe('BeachSurfComponent', () => {
  let component: BeachSurfComponent;
  let fixture: ComponentFixture<BeachSurfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeachSurfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeachSurfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
