import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForoComponent } from './foro.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ForoComponent', () => {
  let component: ForoComponent;
  let fixture: ComponentFixture<ForoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ForoComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ForoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente Foro', () => {
    expect(component).toBeTruthy();
  });
});
