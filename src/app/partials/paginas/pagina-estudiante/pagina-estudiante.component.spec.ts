import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEstudianteComponent } from './pagina-estudiante.component';

describe('PaginaEstudianteComponent', () => {
  let component: PaginaEstudianteComponent;
  let fixture: ComponentFixture<PaginaEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
