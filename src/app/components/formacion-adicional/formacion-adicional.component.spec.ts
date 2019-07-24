import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionAdicionalComponent } from './formacion-adicional.component';

describe('FormacionAdicionalComponent', () => {
  let component: FormacionAdicionalComponent;
  let fixture: ComponentFixture<FormacionAdicionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormacionAdicionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormacionAdicionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
