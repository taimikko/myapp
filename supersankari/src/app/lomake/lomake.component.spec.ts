import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LomakeComponent } from './lomake.component';

describe('LomakeComponent', () => {
  let component: LomakeComponent;
  let fixture: ComponentFixture<LomakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LomakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LomakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
