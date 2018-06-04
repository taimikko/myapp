import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuloksetComponent } from './tulokset.component';

describe('TuloksetComponent', () => {
  let component: TuloksetComponent;
  let fixture: ComponentFixture<TuloksetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuloksetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuloksetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
