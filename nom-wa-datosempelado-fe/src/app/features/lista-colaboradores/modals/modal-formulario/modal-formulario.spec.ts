import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormulario } from './modal-formulario';

describe('ModalFormulario', () => {
  let component: ModalFormulario;
  let fixture: ComponentFixture<ModalFormulario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalFormulario],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalFormulario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
