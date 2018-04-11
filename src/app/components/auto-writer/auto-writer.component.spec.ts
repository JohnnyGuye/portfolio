import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoWriterComponent } from './auto-writer.component';

describe('AutoWriterComponent', () => {
  let component: AutoWriterComponent;
  let fixture: ComponentFixture<AutoWriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoWriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
