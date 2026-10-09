import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRiesgo } from './modal-riesgo';

describe('ModalRiesgo', () => {
  let component: ModalRiesgo;
  let fixture: ComponentFixture<ModalRiesgo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalRiesgo],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalRiesgo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
