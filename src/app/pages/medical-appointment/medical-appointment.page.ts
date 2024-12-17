import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


function normalizeTime(time: string): string {
  return time.length === 8 ? time.slice(0, 5) : time;
} 
@Component({
  selector: 'app-medical-appointment',
  templateUrl: './medical-appointment.page.html',
  styleUrls: ['./medical-appointment.page.scss'],
})


export class MedicalAppointmentPage implements OnInit {
  appointmentForm: FormGroup;
  selectedSpecialty: string = ''; // Initialize the selectedSpecialty property
  specialties: any[] = [];
  selectedDoctor: string = '';
  doctors: any[] = [];
  daysOfWeek: string[] = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  //Horas disponibles de 30 min cada una
  horasDisponibles: string[] = ["08:00", '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'];
  horasReservadas: string[] = [];
  calendar: any[][] = []; // Esto asegura que `calendar` es un array de arrays.
  selectedDate?: Date;
  selectedTime: string = '';
  availableTimes: string[] = []; // Array de horas disponibles
  message: string = 'Hora reservada con éxito';



  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private alertController: AlertController, private router: Router) {
    // Inicialización del formulario
    this.appointmentForm = this.fb.group({
      specialty: [''],
      doctor: [''],
      date: [''],
      time: [''],
    });
  }

  ngOnInit() {
    this.loadSpecialties(); // Método para cargar especialidades al iniciar
    this.generateCalendar(); // Genera el calendario al iniciar
  }

  // Método para cargar las especialidades
  loadSpecialties() {
    this.usuarioService.getSpecializations().then((data: any) => {
      this.specialties = data;
      console.log('Especialidades:', this.specialties);
    });
  }

  // Método para cargar los doctores según la especialidad seleccionada desde usuarioService
  loadDoctors() {
    this.usuarioService.getDoctors(this.selectedSpecialty).then((data: any) => {
      this.doctors = data;
      console.log('Doctores:', this.doctors);
    });
  }

  // Genera un calendario semanal
  generateCalendar() {
    const today = new Date();
    const weekDays = 7;
    let calendarWeeks = [];
    let week = [];
  
    for (let i = 0; i < 28; i++) { // Genera un mes aproximado (4 semanas)
      const day = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
      week.push(day);
      if (week.length === weekDays) {
        calendarWeeks.push(week);
        week = [];
      }
    }
  
    this.calendar = calendarWeeks;
  }
  
  selectDate(day: Date) {
    
    this.selectedDate = day;
    // Filtrar horas disponibles para la fecha seleccionada
    this.filtrarHorasDisponibles(day);
  }

  
  isSelected(day: Date) {
    return this.selectedDate === day;
  }
  
  //verificar si la hora seleccionada está disponible
  checkTime(time: string) {
    return this.horasReservadas.includes(time);
  }





  filtrarHorasDisponibles(date: Date) {
    if (!date) return;
    this.usuarioService.getHorasReservadas(this.selectedDoctor, date.toISOString().split('T')[0]).then((reservedHours: string[]) => {
      this.horasReservadas = reservedHours;
      console.log('Horas reservadas:', this.horasReservadas);
      // Filtrar horas disponibles
      this.availableTimes = this.horasDisponibles.filter(hora_inicio => !this.horasReservadas.map(normalizeTime).includes(normalizeTime(hora_inicio)));
      console.log('Horas disponibles:', this.availableTimes);
    }
    );
  }



  // Método para agendar la cita
  bookAppointment() {
    const appointmentData = {
      medico_id: this.selectedDoctor,
      fecha: this.selectedDate?.toISOString().split('T')[0] ?? '',
      hora_inicio: this.selectedTime,
    };
    this.usuarioService.createAppointment(appointmentData).then((response: any) => {
    });
    this.showMessage(); // Muestra el mensaje
    this.router.navigate(['tabs/home']); // Redirige al home
  }


  // Función para mostrar el popup de error
  async showMessage() {
    const alert = await this.alertController.create({
      header: 'Cita agendada',
      subHeader: '¡Éxito!',
      message: 'Tu cita ha sido agendada con éxito',
      buttons: ['OK'] // Botón para cerrar el popup
    });
    await alert.present();
  }
}
