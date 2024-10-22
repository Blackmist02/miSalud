import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicalAppointmentPage } from './medical-appointment.page';

describe('MedicalAppointmentPage', () => {
  let component: MedicalAppointmentPage;
  let fixture: ComponentFixture<MedicalAppointmentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalAppointmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
