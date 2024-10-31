import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NavController, ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})

export class SignupPage implements OnInit {

  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private navCtrl: NavController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      run: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{7,8}-[0-9Kk]$')],
        [this.validarRunDisponible.bind(this)] // Agregamos el validador asíncrono
      ],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(18)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.usuarioService.checkRun('55555555-5').subscribe(exists => {
      console.log('El run existe:', exists);
});
  }

  // Validador asíncrono para verificar si el RUN está disponible, llama a la funcion checkRun con el run ingresado
  validarRunDisponible(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.usuarioService.checkRun(control.value).pipe(
      tap(exists => console.log('El run existe:', exists)),
      map(exists => (exists ? { runNoDisponible: true } : null)),
      catchError(() => of(null))
    );
  }

  async registerUser() {
    if (this.registerForm.valid) {
      const newUser = this.registerForm.value;
      try {
        await this.usuarioService.registerUser(newUser);
        this.presentToast('Usuario registrado exitosamente');
        this.navCtrl.navigateRoot('/login');
      } catch (error) {
        this.presentToast('Error al registrar usuario');
      }
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}
