import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaColaboradores } from './lista-colaboradores';

describe('ListaColaboradores', () => {
  let component: ListaColaboradores;
  let fixture: ComponentFixture<ListaColaboradores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaColaboradores],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaColaboradores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
